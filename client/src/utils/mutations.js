import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_THOUGHT = gql`
  mutation addThought($thoughtText: String!) {
    addThought(thoughtText: $thoughtText) {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($thoughtId: ID!, $commentText: String!) {
    addComment(thoughtId: $thoughtId, commentText: $commentText) {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;


export const ADD_NOTE = gql`
  mutation addNote($name: String!, $noteData: String!) {
    addNote(name: $name, noteData: $noteData) {
      note {
        _id
        name
        noteData
      }
    }
  }
`;

export const UPDATE_NOTE = gql`
  mutation updateNote($name: String!, $noteData: String!) {
    updateNote(name: $name, noteData: $noteData) {
      note {
        _id
        name
        noteData
      }
    }
  }
`;

export const DELETE_NOTE = gql`
  mutation deleteNote($name: String!, $noteData: String!) {
    deleteNote(name: $name, noteData: $noteData) {
      note {
        _id
        name
        noteData
      }
    }
  }
`;