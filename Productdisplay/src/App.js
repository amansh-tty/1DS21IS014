import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ProductGrid from "./components/GridLayout";

const App = () => {

  const [products, setProducts] = useState([
    {
        "productName": "Laptop 1",
        "price": 2236,
        "rating": 4.86,
        "discount": 63,
        "availability": "out-of-stock"
    },
    {
        "productName": "Laptop 10",
        "price": 7145,
        "rating": 4.72,
        "discount": 15,
        "availability": "out-of-stock"
    },
    {
        "productName": "Laptop 8",
        "price": 511,
        "rating": 4.64,
        "discount": 87,
        "availability": "yes"
    },
    {
        "productName": "Laptop 3",
        "price": 9102,
        "rating": 4.6,
        "discount": 98,
        "availability": "out-of-stock"
    },
    {
        "productName": "Laptop 10",
        "price": 4101,
        "rating": 4.52,
        "discount": 37,
        "availability": "out-of-stock"
    },
    {
        "productName": "Laptop 14",
        "price": 9254,
        "rating": 4.23,
        "discount": 56,
        "availability": "yes"
    },
    {
        "productName": "Laptop 11",
        "price": 5683,
        "rating": 3.63,
        "discount": 56,
        "availability": "out-of-stock"
    },
    {
        "productName": "Laptop 13",
        "price": 8686,
        "rating": 3.6,
        "discount": 24,
        "availability": "yes"
    },
    {
        "productName": "Laptop 13",
        "price": 1244,
        "rating": 3.17,
        "discount": 45,
        "availability": "yes"
    },
    {
        "productName": "Laptop 1",
        "price": 8521,
        "rating": 2.32,
        "discount": 91,
        "availability": "out-of-stock"
    }
]);

  useEffect(() => {

const TOKEN = process.env.TOKEN;

    
    const myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      `Bearer ${TOKEN}`
    );
    myHeaders.append("Access-Control-Allow-Origin", "*");
    myHeaders.append("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "https://cors-anywhere.herokuapp.com/http://20.244.56.144/test/companies/AMZ/categories/Laptop/products?top=10&minPrice=1&maxPrice=10000",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div>
      <p>working test</p>
      <div>
      <h1>Products</h1>
      <ProductGrid products={products} />
  </div>
    </div>
  );
};

export default App;
