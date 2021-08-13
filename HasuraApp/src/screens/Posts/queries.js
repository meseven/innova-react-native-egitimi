import {gql} from '@apollo/client';

export const GET_POSTS = gql`
  subscription getPosts {
    posts(order_by: {created_at: desc}) {
      id
      title
    }
  }
`;
