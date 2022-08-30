import gql from "graphql-tag";

export const GET_ALL_USERS= gql`
query{
  allUsers{
    email
    ,
    username
  }
}
`