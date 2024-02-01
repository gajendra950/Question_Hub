// import React from "react";
import {Hero, Footer} from "../components"
import About from "./About"
const Homepage =()=>{
    return (
        <>
        <Hero/>
        <div  className="text-black p-8"><About/></div>
        <div className="mt-auto"> <Footer/></div>
       
        </>
    )
}

export default Homepage