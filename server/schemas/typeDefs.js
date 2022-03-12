const {gql} = require('apollo-server-express')

const typeDefs =gql`
type User {
    _id:ID!
    username:String!
    email: String!
    bookCount:Int
    savedBooks:[Book]
}

type Book{
    _id:ID!
    authors:[String]
    bookId: String!
    description: String
    image:String
    link:String
    title:String!
}


input savedBook{
    authors:[String]
    bookId: String!
    description: String
    image:String
    link:String
    title:String!
}


type Query{
    me: User
}

type Auth{
    token:ID!
    user:User
}

type Mutation{
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input:savedBook!):User
    removeBook(bookId:ID!):User
}
`
module.exports = typeDefs














