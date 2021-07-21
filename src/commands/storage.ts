import { Storage } from "@aws-amplify/storage"
import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api"
import { Auth } from "@aws-amplify/auth"
import { URL2obj } from "@-0/utils"
import { v4 as uuid } from "uuid"
import { getIn } from "@thi.ng/paths"
import * as mutations from "../graphql/mutations"
import * as queries from "../graphql/queries"
import * as api from "../graphql/API"
import { $global$ } from "./amplifyConfig"
import { CRUD, MIMETypes } from "../utils"

/*
import React, { useEffect, useState } from 'react';
import { Storage, API, graphqlOperation } from 'aws-amplify'
import { v4 as uuid } from 'uuid'
import { withAuthenticator } from '@aws-amplify/ui-react'

import { createProduct as CreateProduct } from './graphql/mutations'
import { listProducts as ListProducts } from './graphql/queries'
import config from './aws-exports'

const {
  aws_user_files_s3_bucket_region: region,
  aws_user_files_s3_bucket: bucket
} = config

function App() {
  const [file, updateFile] = useState(null)
  const [productName, updateProductName] = useState('')
  const [products, updateProducts] = useState([])
  useEffect(() => {
    listProducts()
  }, [])

  // Query the API and save them to the state
  async function listProducts() {
    const products = await API.graphql(graphqlOperation(ListProducts))
    updateProducts(products.data.listProducts.items)
  }

  function handleChange(event) {
    const { target: { value, files } } = event
    const fileForUpload = files[0]
    updateProductName(fileForUpload.name.split(".")[0])
    updateFile(fileForUpload || value)
  }

  // upload the image to S3 and then save it in the GraphQL API
  async function createProduct() {
    if (file) {
      const extension = file.name.split(".")[1]
      const { type: mimeType } = file
      const key = `images/${uuid()}${productName}.${extension}`      
      const url = `https://${bucket}.s3.${region}.amazonaws.com/public/${key}`
      const inputData = { name: productName , image: url }

      try {
        await Storage.put(key, file, {
          contentType: mimeType
        })
        await API.graphql(graphqlOperation(CreateProduct, { input: inputData }))
      } catch (err) {
        console.log('error: ', err)
      }
    }
  }

  return (
    <div style={styles.container}>
      <input
        type="file"
        onChange={handleChange}
        style={{margin: '10px 0px'}}
      />
      <input
        placeholder='Product Name'
        value={productName}
        onChange={e => updateProductName(e.target.value)}
      />
      <button
        style={styles.button}
        onClick={createProduct}>Create Product</button>

      {
        products.map((p, i) => (
          <img
            style={styles.image}
            key={i}
            src={p.image}
          />
        ))
      }
    </div>
  );
}
*/

enum Level {
    private = "private",
    public = "public",
    protected = "protected",
}

type MimeType = string

interface HTMLFileInput {
    type: MimeType
    name: string
}

type CreateFileAssetInput = {
    fileForUpload: HTMLFileInput
    name: string
    id?: string
    node_id: string
    createdAt?: string
    type: api.AssetType
    index?: number
    owner?: string
    editors?: string[]
}

// https://w3c.github.io/FileAPI/#filelist-section
// https://www.sufle.io/blog/aws-amplify-storage-part-3
export const storeObject = async (
    {
        fileForUpload,
        name,
        id,
        node_id,
        createdAt,
        type,
        index,
        owner,
        editors,
    }: CreateFileAssetInput,
    isAssetPr = true,
    level: Level = Level.protected,
) => {
    const {
        // @ts-ignore
        aws_user_files_s3_bucket: bucket,
        // @ts-ignore
        aws_user_files_s3_bucket_region: region,
    } = $global$.deref().config

    //console.log({ bucket, region })
    const { type: mimeType, name: file_name } = fileForUpload
    const file_parts = file_name.split(".")
    const cut = file_parts.length - 1
    const extension = file_parts[cut]
    const UID = uuid()
    const key = `${extension}/${UID}--${file_name}`
    console.log({ key, fileForUpload, level, mimeType, file_name })
    const { id: user_id, ...rest } = await Auth.currentUserInfo()
    console.log({ user_id, ...rest })
    return await Storage.put(key, fileForUpload, {
        level,
        contentType: mimeType,
        // others: https://github.com/aws-amplify/amplify-js/blob/a047ce73/packages/storage/src/Storage.ts#L185
        //progressCallback
    })
        .then(async s3Response => {
            console.log({ s3Response })
            const { data } = await CRUD({
                query: (isAssetPr && mutations.createAssetPr) || mutations.createAsset,
                variables: {
                    input: {
                        name,
                        // public is different: `https://${bucket}.s3.${region}.amazonaws.com/public/${key}`
                        content: `https://${bucket}.s3.${region}.amazonaws.com/protected/${user_id}/${key}`,
                        id,
                        node_id,
                        createdAt,
                        type,
                        index,
                        owner,
                        editors,
                    },
                },
            })
            console.log({ data })
            return (isAssetPr && data.createAssetPr) || data.createAsset
        })
        .catch(error => {
            console.error("Error storing file:", { fileForUpload }, { error })
        })
}

/*
const submission = e => console.log(e)

const button = document.getElementById("button-id")
const inputs = button.parentNode.getElementsByTagName("input")
const fileInput = Array.from(inputs).filter(c => c.type.toLowerCase() === "file")[0]

let file
fileInput.onchange = e => {
    file = e.target.files[0]
    console.log("file changed", file)
}

button.addEventListener("click", e => {
    e.preventDefault()
    submission({ e, inputs, file })
})

// => 
name: "bot.jpg"
lastModified: 1624290092242
lastModifiedDate: Mon Jun 21 2021 11:41:32 GMT-0400 (Eastern Daylight Time)
webkitRelativePath: ""
size: 281676
type: "image/jpeg"
arrayBuffer: ƒ arrayBuffer() {}
slice: ƒ slice() {}
stream: ƒ stream() {}
text: ƒ text() {}
<constructor>: "File"
*/
