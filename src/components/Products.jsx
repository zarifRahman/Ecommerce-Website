import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = ({category, filters, sort}) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // api call if there is category
  useEffect(() => {
    const getProducts = async () => {
      try {
        // condition because Home component is also using Products component
        const res =  await axios.get(category ? `http://localhost:5000/api/products?${category}` : `http://localhost:5000/api/products`);
        // console.log({res});
        setProducts(res.data);
      }catch (err) {

      };
    }
    // call the function
    getProducts();
  },[category]);

  // if 
  useEffect(() => {
    console.log({products});
    category && setFilteredProducts(
      products.filter(product => Object.entries(filters).every(([key, value]) => 
        product[key].includes(value))
      )
    )
  },[products,category, filters]);
  console.log({filteredProducts});

  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;