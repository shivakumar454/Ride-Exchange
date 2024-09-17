
import './Hero.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Items from './Items';
import { useState } from 'react';
import Prices from './Prices';
export default function Hero() {

    let [likes, setLikes] = useState(false);
    let [products, setProducts] = useState([
        { title: "Yamaha unveils 2024 MT-09", discount: 21999.00, original: 10999.50, image: "byk1.avif" },
        { title: "Harley 210", discount: 22999.00, original: 11999.50, image: "byk2,jpg" },
        { title: "Harley-Davidson X440", discount: 21999.00, original: 8999.05, image: "byk3.jpeg" },
        { title: "Bajaj Pulsar N250", discount: 21999.00, original: 9999.05, image: "byk4.avif" },
        { title: " Kawasaki Ninja 7 Hybrid ", discount: 21999.00, original: 10999.50, image: "byk5.jpeg" },
        { title: "BMW Motorrad Bike", discount: 22999.00, original: 11999.50, image: "byk6.webp" },
        { title: "Honda Bikes SP160", discount: 21999.00, original: 8999.05, image: "byk7.jpg" },
    ]);

    let [searched , setSearched] = useState("");

    let searching = (event) =>
    {
       setSearched(event.target.value);
    
    }
     const searchData = searched.toLowerCase();
     const filterData = products.filter((data) =>
    {
        const nameIncludes = data.title.toLowerCase().includes(searchData);
        return nameIncludes;
    });
    console.log(filterData);
    var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        pauseOnHover: true,
    };

    let [bagItems, setBatItems] = useState([]);
    const addToBag = (item) => {
        setBatItems([...bagItems, item]);
    };
    let isLiked = () => {
        setLikes(!likes);
    };

    let highToLow = () =>
    {
               const sortedItems = [...products].sort((n1 , n2) => n1.original - n2.original);
               setProducts(sortedItems);
    }

    let lowToHigh = () =>
    {
        const sortedProducts = [...products].sort((n1,n2) => n2.original - n1.original);
        setProducts(sortedProducts);
    }
    return (
        <>
            <div className='navbar'>.
                <div className='innerNav'>
                    <div className='Brand'>Ride Exchange</div>
                    <div className='options'>
                    <div className='opt'>Home</div>
                    <div className='opt'>Manuals</div>
                    <div className='opt'>Sports</div>
                    <div className='opt'>Riding</div>
                    <div className='opt'>Models</div>
                </div>
                </div>
               
            </div>
            <div className='HeroPage'>
                <Slider {...settings}>
                    <div className='curosorPics pic1'></div>
                    <div className='curosorPics pic2'></div>
                    <div className='curosorPics pic3 '></div>
                    <div className='curosorPics pic4'></div>
                    <div className='curosorPics pic5'></div>
                </Slider>
            </div>
            <div className='HeroPage2'>
                <div className='sideBar'>
                    <input type="text" placeholder='Search Here' className='input' onChange={searching} value={searched}/>
                    <button onClick={highToLow}>High to Low</button>
                    <button onClick={lowToHigh}>Low to High</button>
                </div>
                <div className='products'>
                    {filterData.map((product, index) => (
                        <Items
                            key={index}
                            title={product.title}
                            ind={index}
                            addToBag={addToBag}
                            discount= {product.discount}
                            original={product.original}
                            image={product.image}
                        />
                    ))}
                </div>
            </div>
            <div className='myBag'>
                <div> <h2>My Cart</h2></div>
                <div className='addedBag'>
                    <ul style={{ listStyleType: "none" }}>
                        {bagItems.map((item, index) => (
                            <li key={index} className="container">
                                <p className={likes ? "fa-solid fa-heart red" : "fa-regular fa-heart "} onClick={isLiked} id="likeButton" >
                                </p>
                                <img src={item.image} alt={item.title} style={{ width: "350px", height: "330px" }} />
                                <div className="description">
                                    <div>
                                        <div style={{ fontFamily: "arial", fontSize: "20px" }}>{item.title}</div>
                                        <Prices discounts={item.discount} originals={item.original} />
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};