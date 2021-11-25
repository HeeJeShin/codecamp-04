import axios from "axios";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-right: 300px;
`;

const Title = styled.div`
    width: 100%;
    padding-top: 90px;
    padding-bottom: 100px;
    font-size: 90px;

    
`;

const img = styled.img`
    border-radius: 50%;

`;

export default function MyDogPage(){
    const[dogUrl, setDogUrl] = useState("");

    useEffect(() =>{
        async function myDOG(){
             const result: any = await axios.get("https://dog.ceo/api/breeds/image/random")
             setDogUrl(result.data.message);
        }
        myDOG();
    },[] )

    return(
        <Wrapper>
        <Title> 남의집 댕댕이</Title>
        <img src={dogUrl} />
        </Wrapper>
    );
}


