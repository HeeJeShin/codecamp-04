

const LoginSuccessUI = (props) => {

    return(
        <>
            <div>SUCCESS!! LOGIN!!!</div>
            <div>{props.data?.fetchUserLoggedIn.name} WELCOME!!</div>
        </>
    )
}
export default LoginSuccessUI