import { grafetch } from "./fetching"

// TODO: move to router.js

/**
{ 
    "data": { 
        "__type": { 
            "name": "NodeType", 
            "enumValues": [ 
                { 
                    "name": "H_AUTHOR", 
                    "description": "", 
                    "isDeprecated": false, 
                    "deprecationReason": null 
                }, 
                { 
                    "name": "H_TEAM", 
                    "description": "", 
                    "isDeprecated": false, 
                    "deprecationReason": null 
                }, 
                { 
                    "name": "A_ARTICLE", 
                    "description": "", 
                    "isDeprecated": false, 
                    "deprecationReason": null 
                }, 
                { 
                    "name": "A_PAGE", 
                    "description": "", 
                    "isDeprecated": false, 
                    "deprecationReason": null 
                }, 
                { 
                    "name": "A_APPLICATION", 
                    "description": "", 
                    "isDeprecated": false, 
                    "deprecationReason": null 
                }, 
                { 
                    "name": "A_GEM", 
                    "description": "", 
                    "isDeprecated": false, 
                    "deprecationReason": null 
                }, 
                { 
                    "name": "S_ACS", 
                    "description": "", 
                    "isDeprecated": false, 
                    "deprecationReason": null 
                }, 
                { 
                    "name": "S_DECENNIAL", 
                    "description": "", 
                    "isDeprecated": false, 
                    "deprecationReason": null 
                }, 
                { 
                    "name": "S_CBP", 
                    "description": "", 
                    "isDeprecated": false, 
                    "deprecationReason": null 
                }, 
                { 
                    "name": "V_1990", 
                    "description": "", 
                    "isDeprecated": false, 
                    "deprecationReason": null 
                }, 
                { 
                    "name": "V_2000", 
                    "description": "", 
                    "isDeprecated": false, 
                    "deprecationReason": null 
                }, 
                { 
                    "name": "V_2010", 
                    "description": "", 
                    "isDeprecated": false, 
                    "deprecationReason": null 
                }, 
                { 
                    "name": "V_2020", 
                    "description": "", 
                    "isDeprecated": false, 
                    "deprecationReason": null 
                }, 
                { 
                    "name": "C_SERIES", 
                    "description": "", 
                    "isDeprecated": false, 
                    "deprecationReason": null 
                }, 
                { 
                    "name": "C_LIST", 
                    "description": "", 
                    "isDeprecated": false, 
                    "deprecationReason": null 
                } 
            ] 
        } 
    } 
} 
 */
grafetch({
    gql : /* GraphQL */ `
    query {
        __type(name: "NodeType") {
          name
          enumValues(includeDeprecated: true) {
            name
            description
            isDeprecated
            deprecationReason
          }
        }
      }
    # ⚠ amplify mock server doesn't like being called with variables object 🤦
    #query ($name: String!) {
    #    __type(name: $name) {
    #      name
    #      enumValues(includeDeprecated: true) {
    #        name
    #        description
    #        isDeprecated
    #        deprecationReason
    #      }
    #    }
    #  }
      `
    // ⚠ amplify mock server doesn't like being called with variables object 🤦
    //arg : { name: "NodeType" }
}).then(j => console.log(JSON.stringify(j, null, 4))) //?
