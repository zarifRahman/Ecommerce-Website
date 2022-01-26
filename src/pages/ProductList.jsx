import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';

const Container = styled.div`
`;
const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`
const Option = styled.option`
  
`

const ProductList = () => {
  // grab woman from url
  const location = useLocation();
  console.log(location.pathname.split('/')[2]);
  const category =  location.pathname.split('/')[2];

  // filter
  const [filters,setFilters] = useState({});
  const handleFilter = (e) => {
    setFilters({
      // with using ...filter operator both size and color object will update
      ...filters,
      [e.target.name] : e.target.value
    })
  }
  console.log({filters});
  const [sort,setSort] = useState('Newest');


  return (
  <Container>
    <Navbar />
    <Announcement />
    <Title>Dresses</Title>
    <FilterContainer>
      {/* Product filter */}
      <Filter>
        <FilterText>Filter Product</FilterText>
        <Select name="color" onChange={handleFilter}>
          <Option disabled select>
            Color
          </Option>
          <Option>White</Option>
          <Option>Black</Option>
          <Option>Red</Option>
          <Option>Blue</Option>
          <Option>Yellow</Option>
          <Option>Green</Option>
        </Select>
        <Select name="size" onChange={handleFilter}>
          <Option disabled select>
            Size
          </Option>
          <Option>XS</Option>
          <Option>S</Option>
          <Option>M</Option>
          <Option>L</Option>
          <Option>XL</Option>
        </Select>
      </Filter>
      {/* Sorting filter */}
      <Filter>
        <FilterText>Sort Product</FilterText>
        <Select>
          <Option onChange={(e)=> e.target.value}>
            Newest
          </Option>
          <Option value={"Price (asc)"}>Price (asc)</Option>
          <Option value={"Price (desc)"}>Price (desc)</Option>
        </Select>
      </Filter>
    </FilterContainer>
    <Products cat={category} filters={filters} sort={sort}/>
    <Newsletter />
    <Footer />
  </Container>);
};

export default ProductList;
