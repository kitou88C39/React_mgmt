import { gql } from '@apollo/client';

const ADD_CLIENT = gql`
  mutation AddClient($name: String!, $email: String!, $company: String!){
}
`;

const DELETE_CLIENTS = gql`
    mutation deleteClient($id: ID!){
        deleteClient($id: $id){
            id
       name
       email
       phone
        }
    }
`;

export { DELETE_CLIENTS };
