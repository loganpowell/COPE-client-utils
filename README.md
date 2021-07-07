## COPE Client Utils

JavaScript utilities for using the COPE CMS

## Getting Started

### Installation
```
npm i cope-client-utils
```

### Configuration
```js
import { configureWith } from "cope-client-utils"
import aws_exports from "./aws-exports"

configureWith(aws_exports)
```

## Using the Utilities

Most of the utilities are for sending CRUD operations to the graphql API

### Nodes

```ts
import { node, API } from "cope-client-utils"

const node = async ({ id, status, type, createdAt, owner, updatedAt }: API.CreateNodeInput) => {
    const new_node = await node.create({ id, status, type, createdAt, owner, updatedAt })
    return new_node
}
```
