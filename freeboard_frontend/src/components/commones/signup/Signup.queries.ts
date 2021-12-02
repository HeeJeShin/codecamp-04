import {gql} from "@apollo/client"

export const CREATE_USER = gql`
    mutation  createUser($CreateUserInput: CreateUserInput ) {
        CreateUserInput(CreateUserInput: $CreateUserInput){
            email
            password
            name
        }
    }
`;