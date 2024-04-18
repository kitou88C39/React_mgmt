import { gql, useQuery } from '@apollo/client';

const GET_CLIENTS = gql`
query getClients {
    
}
`;

export default function Clients() {
  return <div>Clients</div>;
}
