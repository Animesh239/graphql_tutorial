const { gql } = require("apollo-server");

const typeDefs = gql`
    type User {
        id: ID!
        name: String!
        username: String!
        age: Int!
        nationality: Nationality!
        friends: [User!]
        favouriteMovies: [Movie!]
    }

    type Movie{
    id: ID!
    name: String!
    YearOfPublication: Int!
    InTheaters: Boolean!
    }

    type Query{
        users: [User!]!
        user( id: ID! ) : User!
        movies: [Movie!]!
        movie( name: String! ): Movie!
    }

    input CreateUserInput{
        name: String!
        username: String!
        age: Int!
        nationality: Nationality = INDIA
    }

    input UpdateUserNameInput{
        id: ID!
        username: String!
    }

    type Mutation{
        createUser(input: CreateUserInput!): User
        updateUserName(input: UpdateUserNameInput!): User
        deleteUser(id: ID!): User
    }

    enum Nationality{
        India
        USA
        China
        Canada
        Australia
        Chile
    }
`

module.exports = typeDefs ;