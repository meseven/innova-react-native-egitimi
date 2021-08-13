import {gql} from '@apollo/client';

export const GET_POST = gql`
  subscription getPostById($id: Int!) {
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
  subscription getCommentsByPostId($id: Int!) {
    comments(where: {post_id: {_eq: $id}}) {
      id
      text
      user {
        fullname
      }
    }
  }
`;

export const INSERT_COMMENT = gql`
  mutation insertComment($input: comments_insert_input!) {
    insert_comments_one(object: $input) {
      id
      text
    }
  }
`;
