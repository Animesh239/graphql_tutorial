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