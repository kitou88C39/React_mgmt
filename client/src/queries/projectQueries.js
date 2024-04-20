import { gql } from '@apollo/client';

const GET_PROJECTS = gql`
  query getProjects {
    projectss {
      id
      name
      status
    }
  }
`;

export { GET_PROJECTS };
