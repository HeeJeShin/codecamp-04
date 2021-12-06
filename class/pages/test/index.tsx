import { useRouter } from "next/router";


const FETCH_BOARDS = gql`
    query fetchBoards{
        _id
        writer
        title
    }
`;

export default function BasketPage(){
    const router = useRouter()
    const{data} = useQuert(FETCH_BOARDS)

    const

    return(
        <>
        </>
    )

}