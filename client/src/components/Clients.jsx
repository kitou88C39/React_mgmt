import { gql, useQuery } from '@apollo/client';

const GET_CLIENTS = gql`
  query getClients {
    clients {
      id
      name
      email
      phone
    }
  }
`;

export default function Clients() {
  const { loading } = useQuery(GET_CLIENTS);
  return <div>Clients</div>;
}
