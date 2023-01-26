import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Product from './Product';


const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap:wrap;
  justify-content: space-between;
`;

const Products = ({ sort, searchKeyWord }) => {

    const filterValue = sort;
    const filterarr = [];
    const [apiData, setApiData] = useState([]);
    const [searchFilterData, setSearchFilterData] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            const res = await axios.get('https://fakestoreapi.com/products');
            setApiData(res.data);
        }
        getProducts();
    }, [])

    for (let filterItem of apiData) {
        if (filterValue === filterItem.category) {
            filterarr.push(filterItem)
        }
    }
useEffect(()=>{
    if (searchKeyWord === "") {
        console.log('this is working');
        // const searchdata = apiData.filter((item) => item.title.toLowerCase().includes(searchKeyWord.toLowerCase()))
        // setSearchFilterData(searchdata);
    }else{
        const searchdata = apiData.filter((item) => item.title.toLowerCase().includes(searchKeyWord.toLowerCase()))
        setSearchFilterData(searchdata);
    }
},[searchKeyWord])
    
    // else {
    //     const searchdata = apiData.filter((item) => item.title.toLowerCase().includes(searchKeyWord.toLowerCase()))
    //     setApiData(searchdata);
    // }
    console.log(filterarr);
    console.log(searchFilterData);

    return (
        <Container>
            {
                filterValue ? <>
                    {filterarr.map((item) => (
                        <Product item={item} key={item.id} />
                    ))} </> : searchKeyWord ? <>
                    {searchFilterData.map((item) => (
                        <Product item={item} key={item.id} />
                    ))} </> : <>
                    {apiData.map((item) => (
                        <Product item={item} key={item.id} />
                    ))} </>
            }
        </Container>
    );
};

export default Products;