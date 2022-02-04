import { gql } from "@apollo/client";
import { GraphQLClient } from "graphql-request";
import { Dispatch, SetStateAction } from "react";

const RESTORE_ACCESS_TOKEN = gql`
  mutation restoreAccessToken {
    restoreAccessToken {
      accessToken
    }
  }
`;

export async function getAccessToken(
  setMyAccessToken: Dispatch<SetStateAction<string>>
) {
  const graphQlClient = new GraphQLClient(
    "https://backend04.codebootcamp.co.kr/graphql",
    { credentials: "include" }
  );

  try {
    const result = await graphQlClient.request(RESTORE_ACCESS_TOKEN);
    const newAccessToken = result.restoreAccessToken.accessToken;
    setMyAccessToken(newAccessToken);

    return newAccessToken;
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
  }
}
