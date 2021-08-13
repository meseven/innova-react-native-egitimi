import {gql} from '@apollo/client';

export const GET_POST = gql`
  query getPostById($id: Int!) {
    posts_by_pk(id: $id) {
      id
      title
      description
      comments_aggregate {
        aggregate {
          count
        }
      }
    }
  }
`;

export const GET_POST_COMMENTS = gql`
  query getCommentsByPostId($id: Int!) {
    comments(where: {post_id: {_eq: $id}}) {
      id
      text
    }
  }
`;
