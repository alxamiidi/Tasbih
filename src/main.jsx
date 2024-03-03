import React from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css"
import Header from './components/Header'
import Footer from './components/Footer'
import Tasbih from './components/Tasbih'


const root = document.getElementById("root")

createRoot(root).render(
  <div>

    <Header />
    <Tasbih />
    <Footer />

  </div>
);

{/* <div className=' grid grid-cols-[400px_400px] ml-72'>
      <Menu name= "Australian Meat" img= "https://img.freepik.com/free-photo/baked-chicken-wings-with-teriyaki-sauce_2829-19754.jpg?t=st=1708949910~exp=1708953510~hmac=c89439e113307380c9225f2e82a05f9cd46cebaf20a08aa34a50110886c0106c&w=826" desc= "Paid Delivery" price= "23" />
      <Menu name= "American Pizza" img= "https://img.freepik.com/free-photo/meatballs-with-vegetables-tomato-sauce_1220-7420.jpg?t=st=1709025313~exp=1709028913~hmac=f8cdac3e8d136fb492c944425ee86e23dfebdc749f34e49f7cce88db3b01b84d&w=826" desc= "Free Delivery" price= "12" />
      <Menu name= "Kenyan Meal" img= "https://img.freepik.com/free-photo/clay-plate-full-appetizers-including-goldy-chicken-nuggets-with-chrispy-crust-delicious-canapes-with-herring-cherry-tomatoes-served-with-garlic-sauce-decorated-with-salad-leaves-cheese_132075-13068.jpg?t=st=1709025395~exp=1709028995~hmac=9c01f27a785a6147bee5d5f5d3f47f1bad29f271c5d0a736c34efa5f8c8f2f9c&w=826" desc= "Free Delivery" price= "1.9" />
      <Menu name= "Chinese Food" img= "https://img.freepik.com/free-photo/high-angle-tasty-pakistani-dish_23-2148825123.jpg?t=st=1709025451~exp=1709029051~hmac=c3fd5df121096652988d41a2be06ffd3f3c5e7529540d657ab2729e0b94051c0&w=996" desc= "Free Delivery" price= "9.3" />
      <Menu name= "Mexican Food" img= "https://img.freepik.com/free-photo/baked-chicken-wings-asian-style_2829-10159.jpg?t=st=1709025590~exp=1709029190~hmac=258c9910a831b528eb969ac2bb2a4d79e66b28c95e72f18c39e6e9c99f313c85&w=826" desc= "Paid Delivery" price= "4.26" />
      <Menu name= "British Food" img= "https://img.freepik.com/free-photo/sausages-fried-with-spices-herbs_1150-48057.jpg?t=st=1709025644~exp=1709029244~hmac=e94c1b68ca08d7192532989a5033327b6d435418ed20ebdca00d07009c5fc265&w=826" desc= "No Delivery" price= "15" />
    </div> */}