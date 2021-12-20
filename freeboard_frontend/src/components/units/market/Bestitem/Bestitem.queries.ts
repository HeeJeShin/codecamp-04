import { gql } from "@apollo/client";


export const FETCH_USED_ITEMS_OF_THEBEST =gql`
    query{
        fetchUseditemsOfTheBest{
            _id
            name
            contents
            images
            price
            buyer{
                email
                name
            }
            seller{
                email
                name
            }
        }
    }
`;