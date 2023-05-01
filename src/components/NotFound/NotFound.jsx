

const NotFound = () => {
    return (
        <div style={{ height: "550px", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
            <h1> <i style={{ fontSize: "90px" }} className="fa-solid fa-triangle-exclamation"></i> </h1>
            <h1 style={{ fontSize: "70px" }}> <span style={{ color: "red" }}>404</span> Page Not Found </h1>
        </div>
    )
}

export default NotFound;
