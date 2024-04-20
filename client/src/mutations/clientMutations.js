import { gql } from '@apollo/client';

const ADD_CLIENT = gql`
  mutation AddClient($name: String!, $email: String!, $phone: String!) {
    AddClient(name: $name, email: $email, phone: $phone) {
      id
      name
      email
      phone
    }
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
