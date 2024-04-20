import { gql } from '@apollo/client';

const GET_PROJECTS = gql`
  query getProjects {
    projectss {
      id
      name
      email
      phone
    }
  }
`;

export { GET_PROJECTS };
