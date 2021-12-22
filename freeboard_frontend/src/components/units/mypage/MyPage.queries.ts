import { gql } from "@apollo/client";

export const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
      picture
      _id
      userPoint {
        amount
        createdAt
        updatedAt
      }
    }
  }
`;

export const FETCH_USED_ITEMS_BOUGHT = gql`
  query fetchUseditemsIBought($page: Int, $search: String) {
    fetchUseditemsIBought(page: $page, search: $search) {
      _id
      name
      price
      contents
      createdAt
    }
  }
`;

export const CREATE_POINT_TRANSACTION_OF_LOADING = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      _id
      impUid
      amount
      balance
      status
      statusDetail
      useditem{
       name
       price
       remarks
       contents
      }
    }
  }
`;
