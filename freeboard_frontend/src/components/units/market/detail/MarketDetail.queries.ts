import { gql } from "@apollo/client";

export const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
    }
  }
`;

export const CREATE_POINT_TRANSACTIONS_OF_BUYING_ANND_SELLING = gql`
  query createPointTransactionOfBuyingAndSelling(useritemId: ID!){
    createPointTransactionOfBuyingAndSelling(useritemId: $useritemId){
      _id
    }
  }
`;