import React from 'react';
import Images from "./imgDatabase";
import Cards from "./carouselCards";
import {Carousel} from "react-responsive-carousel";
import "./style.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"

class AtchaarGallery extends React.Component{
    constructor(props){
        super();
    }
    render(){
        return(
            <div className="ReelPages">
                <Carousel>
                    <Cards name={require("./Media/RandomImages/index2.jpg")}/>
                    <Cards name={Images.img2}/>
                    <Cards name={Images.img3}/>
                </Carousel>
            </div>
        )
    }
}
export default AtchaarGallery;