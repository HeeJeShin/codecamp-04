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

export const CREATE_POINT_TRANSACTION_OF_LOADING = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      _id
      impUid
      amount
      balance
      statusDetail
      createdAt
      updatedAt
    }
  }
`;