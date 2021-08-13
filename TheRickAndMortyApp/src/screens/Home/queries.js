import {gql} from '@apollo/client';

export const CHARACTERS_QUERY = gql`
  {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;
