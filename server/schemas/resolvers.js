const { AuthenticationError } = require('apollo-server-express');
const { User, Note } = require('../models');
const {signToken } = require('../utils/auth')
const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (_, args) => {
      return User.findOne({ _id: args.id });
    },
    me: async (_, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    note: async (_, id) => {
      return Note.findOne({ _id: args.id});
    },
    notes: async () => {
      return note.find();
    },
  },

  Mutation: {
    addUser: async (_, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    login: async (_, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addNote: async (_, {name, noteData}) => {
      const note = await Note.create(name);

      if (!note) {
        throw new AuthenticationError('Input Required')
      }

      const token = signToken(note);
    },
    updateNote: async (_, {id}) => {
      return await Note.findOneAndUpdate(
        {_id: id },
        { new: true }
        );
    },
    deleteNote: async (_, {id}) => {
      const note = await Note.findOne({id});
    },
    }
};

module.exports = resolvers;
