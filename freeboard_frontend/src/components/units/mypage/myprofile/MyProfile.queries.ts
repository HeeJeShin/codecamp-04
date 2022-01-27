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
        updatedAts
      }
    }
  }
`;
export const RESORT_USER_PASSWORD = gql`
  mutation resetUserPassword($password: String!) {
    resetUserPassword(password: $password)
  }
`;

export const UPDATE_USER_INPUT = gql`
  mutation updateUser($updateUserInput: UpdateUserInput!) {
    updateUser(updateUserInput: $updateUserInput) {
      _id
    }
  }
`;
