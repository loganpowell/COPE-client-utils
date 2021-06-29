import GQL from "nanographql";
import fetch from "node-fetch";
import dotenv from "dotenv";
dotenv.config();
export const grafetch = ({ gql = `query {}`, arg, api = "http://localhost:20002/graphql", key = "da2-fakeApiId123456" }) => {
    let query = GQL(gql);
    return fetch(api, {
        method: "POST",
        headers: {
            "x-api-key": key,
            "Content-Type": "application/json"
        },
        body: arg ? query(arg) : query()
    })
        .then(r => r.json())
        .catch(console.error);
};
