import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Products from '../Components/Products';
import FloationgButtonFunction from '../Components/FlotingButton';
// import { FloatingButton, Item } from "react-floating-button";
// import ButtonImage from "../Assets/ButtonImage.png";


const Home = () => {
    const [sort, setSort] = useState('');
    const [searchKeyWord, setSearchKeyWord] = useState('');
    // console.log(searchKeyWord);

    return(
        <>
        <div>
            < Navbar setSort = {setSort} setSearchKeyWord = {setSearchKeyWord} />
            < Products sort = {sort} searchKeyWord = {searchKeyWord} />
                {/* < FloationgButtonFunction /> */}
            {/* <FloatingButton>
        <Item
            imgSrc={ButtonImage}

            onClick={() => {
            console.log("callback function here");
            }}
        />
        </FloatingButton>; */}
        </div>
        </>
    );
}

export default Home;
