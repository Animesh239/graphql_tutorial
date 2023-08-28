const { UserList } = require("../dummyData");
const { MovieList } = require("../dummyData");
const _ = require("lodash");

const resolvers = {
  Query: {
    // GET INFO ABT ALL USERS
    users: () => {
      return UserList;
    },
    // GET INFO ABT USER WITH A ID
    user: (parent, args) => {
      const id = args.id;
      const user = _.find(UserList, { id: Number(id) });
      return user;
    },
    // GET INFO ABT ALL MOVIES
    movies: () => {
      return MovieList;
    },
    // GET MOVIE INFO WITH A NAME
    movie: (parent, args) => {
      const name = args.name;
      const movie = _.find(MovieList, { name: name });
      return movie;
    },
  },
  User: {
    favouriteMovies: () => {
      return _.filter(MovieList, (movie) => movie.YearOfPublication >= 2023);
    },
  },

  Mutation: {
    createUser: (parent, args) => {
      const user = args.input;
      // console.log(user)
      const lastId = UserList[UserList.length - 1].id;
      user.id = lastId + 1;
      UserList.push(user);
      return user;
    },
    updateUserName: (parent, args) => {
      const { id, username } = args.input;
      let updatedUser;
      UserList.forEach((user) => {
        if (user.id == id) {
          user.username = username;
          updatedUser = user;
        }
      });
      return updatedUser;
    },
    deleteUser: (parent, args) => {
        let newUserList;
        const id = args.id;
      
        if (!UserList.some((user) => user.id === id)) {
          return null;
        }
      
        newUserList = UserList.filter((user) => user.id !== id);
        return newUserList;
      }
  },
};

module.exports = resolvers;
