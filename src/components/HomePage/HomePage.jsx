import { useEffect, useState } from "react"
import "./HomePage.css"

const HomePage = () => {

    const slideList = [
        "https://burst.shopifycdn.com/photos/blank-colored-t-shirts.jpg?width=925&format=pjpg&exif=1&iptc=1",
        "https://burst.shopifycdn.com/photos/watches-in-black-white.jpg?width=925&format=pjpg&exif=1&iptc=1",
        "https://burst.shopifycdn.com/photos/modern-time-pieces.jpg?width=925&format=pjpg&exif=1&iptc=1",
        "https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1513116476489-7635e79feb27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1093&q=80",
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1099&q=80",
    ]

    let [i, setI] = useState(0);

    let [slideSource, setslideSource] = useState(<img className="slideImage" src={slideList[0]} alt="bannerimage" />);


    useEffect(() => {

        // setInterval(() => {
        //     if (i < slideList.length - 1) {
        //         setI((prev) => { return prev + 1 });
        //     } else {
        //         setslideSource(<img className="slideImage" src={slideList[0]} alt="bannerimage" />);
        //         setI(0);
        //     }
        // }, 1000)
    }, [])

    return (
        <div id="home">
            <h1> Welcome </h1>
            <div id="banner">
                <img className="slideImage" src={slideList[i]} alt="bannerimage" />

            </div>
        </div>
    )
}

export default HomePage;
