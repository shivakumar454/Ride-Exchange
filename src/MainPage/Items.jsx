import Image from "./Image";
import './Items.css';
import Prices from "./Prices";
import byk1 from "../assets/byk1.avif";
import shoe2 from "../assets/byk2.jpg";
import shoe3 from "../assets/byk3.jpeg";
import shoe4 from "../assets/byk4.avif";
import shoe5 from "../assets/byk5.jpeg";
import shoe6 from "../assets/byk6.webp";
import shoe7 from "../assets/byk7.jpg";
import { useState } from "react";


export default function Items({ title, ind, addToBag }) {
    let discount = ["$21,999.00", "$22,999.00", "$21,999.00", "$21,999.00", "$21,999.00", "$22,999.00", "$21,999.00"];
    let original = ["$10,999.50", "$11,999.50", "$8,999.05", "$9,999.05", "$10,999.50", "$11,999.50", "$8,999.05"];
    let images = [byk1, shoe2, shoe3, shoe4, shoe5, shoe6, shoe7];
    let [likes, setLikes] = useState(false);

    let isLiked = () => {
        setLikes(!likes);
    }

    let clickToAdd = () => {
        const item = {
            image: images[ind],
            title: title,
            discount: discount[ind],
            original: original[ind]
        };
        addToBag(item);
    }

    return (
        <>
            <div className="container">

                <p className={likes ? "fa-solid fa-heart red" : "fa-regular fa-heart "} onClick={isLiked} id="likeButton" >
                </p>
                <Image imag={images[ind]} />
                <div className="description">
                    <div>
                        <div style={{ fontFamily: "arial", fontSize: "20px" }}>{title}</div>
                        <Prices discounts={discount[ind]} originals={original[ind]} />
                    </div>
                    <div className="add" onClick={clickToAdd}>Add to Cart</div>
                </div>
            </div>
        </>
    );
};