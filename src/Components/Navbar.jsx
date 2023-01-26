import React, { useState } from 'react';
import styled from 'styled-components';
// import { mobile } from "../responsive";


const Container = styled.div`
    height: 60px;
    background-color: black;
    color: white;
    
`
// ${mobile({ height: "50px" })}

const Wrapper = styled.div`
    padding: 0px 20px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
`
// ${mobile({ padding: "10px 0px" })}

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px; 
`

const Input = styled.input`
    border: none;
    
`
// ${mobile({ width: "50px" })}

const Logo = styled.h1`
    font-weight: bold;
    
`
// ${mobile({ fontSize: "24px" })}


const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    
`
// ${mobile({ flex: 2, justifyContent: "center" })}

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    
`
// ${mobile({ fontSize: "12px", marginLeft: "10px" })}

const Filter = styled.div`
    margin: 20px;
    
`;

// ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    
`;

// ${mobile({ marginRight: "0px" })}

const Select = styled.select`
    padding: 5px;
    margin-right: 40px;
    
`;

// ${mobile({ margin: "10px 0px" })}

const Option = styled.option`

`;

const Navbar = ({setSort, setSearchKeyWord}) => {
    
  return (
    <Container>
        <Wrapper>
            <Left>
            <Logo>
                D-LABS
            </Logo>
                
            </Left>
            <Right>
                <MenuItem>
                <Filter><FilterText>Filter Products:</FilterText>
                <Select onChange={(e)=>setSort(e.target.value)}>
                    <Option disabled selected>Select Category</Option>
                    <Option value='electronics'>Electronics</Option>
                    <Option value='jewelery'>Jewelery</Option>
                    <Option value= "men's clothing">Men Clothing</Option>
                    <Option value="women's clothing">Women Clothing</Option>
                </Select>
                </Filter>
                </MenuItem>
                <SearchContainer>
                    <Input placeholder='Search...' onChange={(e)=>setSearchKeyWord(e.target.value)} />
                    {/* <Search style={{color:'gray', fontSize:16}} /> */}
                </SearchContainer>
            </Right>
        </Wrapper>
    </Container>
    
  )
}

export default Navbar