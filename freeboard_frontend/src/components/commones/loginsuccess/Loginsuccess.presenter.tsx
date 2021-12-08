

const LoginSuccessUI = (props) => {

    return(
        <>
            <div>SUCCESS!! LOGIN!!!</div>
            <div>{props.data?.fetchUserLoggedIn.name} WELCOME!!</div>
            <button onChange={props.onClickWriter}>market글쓰기로 이동하시겠습니까?</button>
        </>
    )
}
export default LoginSuccessUI