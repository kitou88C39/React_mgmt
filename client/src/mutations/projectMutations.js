import { gql } from '@apollo/client';

const ADD_PROJECT = `
  mutation AddProject($name: String!, $description: String!, $clientId: ID!) {
`;

export default function projectMutations() {
  return <div>projectMutations</div>;
}
