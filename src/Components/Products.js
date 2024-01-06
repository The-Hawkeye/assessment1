/* eslint-disable react-hooks/exhaustive-deps */

import { useState, useEffect } from "react";
import { productsApi } from "../Data/Data";
import { Grid, Box, Typography, Button } from "@mui/material";
import ProductCard from "./ProductCard.js";
import FilterSection from "./FilterSection";
import Recommendation from "./Recommendation";
import "./Products.css";



const Products = () => {
  const [products, setProducts] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [age, setAge] = useState('');
  // Fetch products from the server.

  const fetchProductsData = async () => {
    try {
      const data = await fetch(productsApi);
      const jsonData = await data.json();
      console.log(jsonData,"data")
      setProducts(jsonData);
      // return jsonData;
    } catch (err) {
      console.log("Error in Fetching Data");
      return err;
    }
  };

  const handleShowFiltersButton = () => {
    setShowFilters((curState) => !curState);
  };

  useEffect(() => {
    fetchProductsData();
  }, []);
  
  useEffect(()=>{
    async function sorting(){
    if(age==="priceLow")
  {
    const filterData = products.sort((a,b)=>{
      // console.log(a,b,"datadata");
      return a.price-b.price
    }) 
    setProducts([...filterData])
    console.log(filterData,"lowToHigh")
  }
    else if(age==="priceHigh")
    {
      // console.log(products,"before change")
    const filterData = products.sort((a,b)=>{
      // console.log(a,b,"datadata");
      return b.price-a.price
    }) 
    setProducts([...filterData])
    console.log(filterData,"HighToLow")
    }
    else if(age==="id"){
      console.log(products,"before change")
    const filterData = products.sort((a,b)=>{
      // console.log(a,b,"datadata");
      return a.id-b.id
    }) 
    setProducts([...filterData])
    console.log(filterData,"SortById")
    }
    else if(age==="rating"){
      // console.log(products,"before change")
    const filterData = products.sort((a,b)=>{
      // console.log(a,b,"datadata");
      return b.rating.rate-a.rating.rate
    }) 
    setProducts([...filterData])
    console.log(filterData,"SortByRating")
    }
  }
  sorting();
  },[age])

  return (
    <>
      <Box sx={{ margin: "96px" ,display:"flex",justifyContent:"space-between"}}>
        <Box sx={{display:"flex",alignItems:"center"}}>
        <Typography sx={{color:"#252020"}}>3425 ITEMS</Typography>
        <Button onClick={handleShowFiltersButton}>
          {showFilters ? "HIDE FILTERS":"SHOW FILTERS"}
        </Button>
        </Box>
        <Box>
            <Recommendation age={age} setAge={setAge}/>
        </Box>
      </Box>
      <div className="products">
        <Grid container spacing={2}>
          {showFilters && (
            <Grid
              item
              md={3}
            >
              <Box>
             
                <FilterSection />
              </Box>
            </Grid>
          )}
          {/* Map through each product and display it */}
          <Grid
            item
            md={showFilters ? "9" : "12"}
            // sx={{ backgroundColor: "blue" }}
          >
            <Grid container spacing={2}>
              {products.length &&
                products.map((product) => {
                  return (
                    <Grid item md={showFilters ? "4" : "3"}>
                      <ProductCard key={product.id} product={product} />
                    </Grid>
                  );
                })}
            </Grid>
          </Grid>
        </Grid>
        {console.log(products, "app")}
      </div>
    </>
  );
};

export default Products;