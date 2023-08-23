import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { TextField } from '@mui/material';


export default function products() {
    const [products,setProducts] = useState([]);
    const [filter,setFilter] = useState('');
    const [filterProduct ,setFilterProduct] = useState([])
  
    useEffect(()=>{

        async function fetchData() {
            try {
              const response = await axios.get('https://fakestoreapi.com/products');
              setProducts(response.data);
              console.log(data)
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          }

          fetchData();
        }, []);
      
        useEffect(()=>{
            if(filter===''){
                setFilterProduct(products);
            }else {
                const filtered = products.filter(product =>
                    product.title.toLowerCase().includes(filter.toLowerCase())
                );
                setFilterProduct(filtered);
            }
        },[filter,products])

        const filterChange = event => {
            setFilter(event.target.value);
          };
    

  return (
    <div>
        <header className='p-2'>
                <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
                    <div class="container-fluid">
                        <h2>Shopper</h2>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item ms-4 p-2">
                            Home
                            </li>
                            <li class="nav-item ms-4 p-2">
                            About
                            </li>
                            <li class="nav-item ms-4 p-2">
                            Contact
                            </li>
                            
                        </ul>
                        </div>
                    </div>
                </nav>
                <div>
                <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img src={require('../images/1600w-J5VkNReQ8WA.webp')} class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item">
                        <img src={require('../images/template-banner-online-store-with-shopping-cart-with-purchases-boxes-delivery-from-supermarket-vector-illustration_548887-104.avif')} class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item">
                        <img src={require('../images/b7f5ce68ff3166b351a6e3c6ee934020.jpg')} class="d-block w-100" alt="..."/>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                    </div>
                </div>
        </header>
        <section>
            <div className='p-4' align='end'> 
                <TextField type='text' placeholder='search products here' variant='standard'  value={filter} onChange={filterChange} fullwidth/>
            </div>
            {/* <div className='p-4 d-flex'>
                <div className='btn btn-outline-dark m-2' onClick={()=>setFilter(products)}>All</div>
                <div className='btn btn-outline-dark m-2'  onClick={()=>setFilter("men's clothing")}>Men's Fashion</div>
                <div className='btn btn-outline-dark m-2'  onClick={()=>setFilter("women's clothing")}>Women's Fashion</div>
                <div className='btn btn-outline-dark m-2'  onClick={()=>setFilter("eletronics")}>Elctronics</div>
                <div className='btn btn-outline-dark m-2'  onClick={()=>setFilter('jewellary')}>Jewellary</div>
            </div> */}
            <div className='container-fluid p-2  d-flex flex-wrap'>
                {
                    filterProduct.map((product) =>
                        <div key={product.id} className='card m-2' style={{width:295,height:'auto'}}> 
                            <div className='card-head pt-2' align='center'>
                                <img src={product.image} height={250} width={200} />
                            </div>
                            <div className='card-body' align='center'>
                                <p>{product.title}</p>
                                <p>{product.price}</p>
                            </div>
                            
                        </div>
                    )
                }
            </div>
        </section>
        <footer className='p-5 text-white bg-dark'>
            footer
        </footer>
    </div>
  )
}
