import React from 'react';
import NavBar from '../Components/NavBar';
import Welcome from '../Components/Welcome';
import Searchbar from '../Components/Searchbar';
import Product from '../Components/Product';
import Scroll from '../Components/Scroll';
import Footer from '../Components/Footer';




const Aceuilpage = () => {
    return (
        <div className="App">
               <NavBar/>
               <Welcome/>
               <Searchbar/>
               <Product/>
               <Scroll/>
               <Footer/>
            
        </div>
    );
}

export default Aceuilpage ;
