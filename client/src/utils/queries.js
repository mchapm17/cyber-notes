import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
  query users {
    users {
      _id
      username
      email
    }
  }
`;

export const QUERY_USER = gql`
  query user($id: ID!) {
    user(id: $id) {
      _id
      username
      email
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
    }
  }
`;

export const QUERY_NOTE = gql`
  query note($id: ID!) {
    note (id: $id) {
      _id
    }
  }
`;

export const QUERY_NOTES = gql`
  query notes {
    notes {
      _id
      name
      noteData
      userId {
        username
      }
    }
  }
`;
