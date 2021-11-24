// console.log("Hello world!!!")
import { createConnection } from "typeorm";
import { ApolloServer, gql } from "apollo-server";
import Board from "./Board.mysql";

const myTypeDefs = gql`
  input createBoardInput {
    writer: String
    title: String!
    age: Int
  }

  type AAA {
    number: Int
    writer: String
    title: String
    age: Int
  }

  type Query {
    fetchBoards: [AAA]
  }

  type Mutation {
    # createBoard(writer: String, title: String, age: Int): String
    createBoard(createBoardInput: createBoardInput!): String
    deleteBoard(number: Int!): String
  }
`;

const myResolvers = {
  Query: {
    fetchBoards: async () => {
      //데이터 베이스에서 게시물 꺼내오기 식이 필요하다 이부분에
      const result = await Board.find({where: {deletedAt: null }});
      console.log(result)

      return result;
    },
  },

  Mutation: {
    // loginCheck: (parent: any, args: any) => {

    // },
    deleteBoard: async (_:any, args: any) =>{
      await Board.update({number: args.number},{deletedAt: new Date()});
      return "게시물이 정상적으로 삭제되었습니다."
    },

    createBoard: async (_: any, args: any) => {
      
      
      
      // await Board.insert({
      //   title: args.title,
      //   writer: args.writer,
      //   age: args.age,
      // });
      await Board.insert({
        ...args.createBoardInput
        // title: args.createBoardInput.title,
        // writer: args.createBoardInput.writer,
        // age: args.createBoardInput.age,
      });

      return "게시물 등록에 성공하였습니다.";
    },
  },
};

const server = new ApolloServer({
  typeDefs: myTypeDefs,
  resolvers: myResolvers,
});

createConnection({
  type: "mysql",
  database: "mysql",
  username: "root",
  password: "codecamp",
  host: "34.64.207.239",
  port: 3316,
  // @ts-ignore
  entities: [__dirname + `/*.mysql.ts`],
  logging: true,
  synchronize: true,
})
  .then(() => {
    //연결 성공시 실행하기!!
    console.log("연결 완료!!");

    server.listen({ port: 4000 });
  })
  .catch((error) => {
    //연결 실패시 실행하기!!
    console.log(error);
  });
