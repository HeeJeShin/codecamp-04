import {gql} from "@apollo/client"


export const FETCH_USER_LOGGED_IN = gql`
    query fetchUserLoggendIn {
        fetchUserLoggendIn {
            _id
            email
            userPoint {
                amount
            }
        }
    }
`

export const FETCH_USED_ITEMS_BOUGHT = gql`
    query fetchUseditemsIBought{
        fetchUseditemsIBought{
            _id
            name
            price
        }
    }
`