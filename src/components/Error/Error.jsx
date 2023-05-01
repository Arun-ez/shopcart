

const Error = () => {
    return (
        <div style={{ height: "550px", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
            <h1> <i style={{ fontSize: "90px" }} className="fa-solid fa-circle-exclamation"> </i> </h1>
            <h1 style={{ fontSize: "50px" }}> There is a problem with the server [404] </h1>
            <p> Try Again Later </p>
        </div>
    )
}

export default Error;
