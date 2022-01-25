import { gql } from "@apollo/client";

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

export const FETCH_USEDITEM_ISOLD = gql`
  query fetchUseditemsISold($page: Int) {
    fetchUseditemsISold(page: $page) {
      _id
      name
      price
      createdAt
      buyer {
        name
      }
    }
  }
`;
