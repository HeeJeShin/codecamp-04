import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import { Global } from "@emotion/react";
import { AppProps } from "next/dist/shared/lib/router/router";
import "antd/dist/antd.css";
import Layout from "../src/components/commones/layout";
import { globalStyles } from "../src/commons/styles/globalStyles/globalstyles";
import { createUploadLink } from "apollo-upload-client";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createContext, Dispatch, SetStateAction, useState } from "react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgWWBVG7gbEg5vw19SLUOGk4uq4R_hkZQ",
  authDomain: "codecamp04-bd38b.firebaseapp.com",
  projectId: "codecamp04-bd38b",
  storageBucket: "codecamp04-bd38b.appspot.com",
  messagingSenderId: "484299985900",
  appId: "1:484299985900:web:14e664e10127b4cdf826c9",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
interface IGlobalContext {
  accessToken?: string;
  setAccessToken?: Dispatch<SetStateAction<string>>;
}

export const GlobalContext = createContext<IGlobalContext>({});
function MyApp({ Component, pageProps }: AppProps) {
  const [myAcessToken, setMyAccessToken] = useState("");
  const [myuserInfo, setMyUserInfo] = useState({});
  const myvalue = {
    accessToken: myAcessToken,
    setAccessToken: setMyAccessToken,
    userInfo: myuserInfo,
    setUserInfo: setMyUserInfo,
  };

  console.log(myAcessToken);
  const uploadLink = createUploadLink({
    uri: "http://backend04.codebootcamp.co.kr/graphql",
    headers: { authorization: `Bearer ${myAcessToken}` },
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
  });

  return (
    <GlobalContext.Provider value={myvalue}>
      <ApolloProvider client={client}>
        <Global styles={globalStyles} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </GlobalContext.Provider>
  );
}

export default MyApp;
