import React from "react";
import './Home.css';
import HomeImage from './HomeImage.jpg';
import Product from './Product'

function Home() {
    return(
        <div className="home">
            <div className="home__container">
                <img className='home__image' src={HomeImage} alt="image1"/>
                <div className='home__row'>
                    <Product id= "1212345" title="Zero to One" price={300} image="https://m.media-amazon.com/images/I/71uAI28kJuL._AC_UF1000,1000_QL80_.jpg" rating={4}/>
                    <Product id= "1212675" title="Atomic Habits" price={475} image="https://m.media-amazon.com/images/I/81Ls+SBCLiL._AC_UF1000,1000_QL80_.jpg" rating={5}/>
                </div>
                <div className='home__row'>
                    <Product id= "1692345" title="All-New Echo Dot (5th Gen, 2023 release) " price={4449} image="https://5.imimg.com/data5/SELLER/Default/2023/8/331639607/LI/HV/BB/11509582/all-new-echo-dot-5th-gen-2023-release-500x500.jpg" rating={4}/>
                    <Product id= "1213045" title="Tribit [Upgraded Version StormBox Pro Bluetooth Speaker 40W 5.3 Channel Wireless Portable Speaker" price={8199} image="https://m.media-amazon.com/images/I/71ul4Qbcv6L.jpg" rating={4}/>
                    <Product id= "1542345" title="All new Echo Show 5 (2nd Gen, 2021 release) - Smart speaker with 5.5" price={4499} image="https://5.imimg.com/data5/SELLER/Default/2022/11/AF/CT/FI/10880309/echo-show-5-2nd-gen-2021-release-smart-speaker-with-5-5-screen-crisp-sound-and-alexa-black--500x500.jpg" rating={4}/>
                </div>
                <div className='home__row'>
                    <Product id= "1692115" title="Samsung 34-inches 86.42cm LED Odyssey G5 Ultra WQHD, 165 Hz, 1ms, 1000R Curved Gaming Monitor, HDR10, AMD FreeSync Premium -LC34G55TWWWXXL, Black, 3440 X 1440 (WQHD) Pixels " price={45900} image="https://m.media-amazon.com/images/I/71IYBPoc8pL.jpg" rating={5}/>
                </div>
            </div>
        </div>

    );

}
export default Home;