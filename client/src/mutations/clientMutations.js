import { gql } from '@apollo/client';

const DELETE_CLIENTS = gql`
    mutation deleteClient($id: ID!){
        deleteClient($id: $id){}
    }
`;
