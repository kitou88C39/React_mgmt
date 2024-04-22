import { gql } from '@apollo/client';

const ADD_PROJECT = `
  mutation AddProject($name: String!, $description: String!,$status: ProjectStatus!, $clientId: ID!) {
    addProject(name: $name, description: $description, status: $status, clientId: $clientId){
      id
      name
      description
      status
      client{
      id
      name
      email
      phone
      }
  }
`;
