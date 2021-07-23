import imgOne from "../assesits/1.png"
import imgTwo from "../assesits/2.png"
import imgThree from "../assesits/3.png"

import {Carousel  } from "react-bootstrap"
import Img from "next/image"

const Testimonials = () => {
    return (
      <>
       <h2 className="titlee">Testimonials </h2>
            <h2 className="subtitle">What people say
about Us. </h2>
        <Carousel nextLabel="" nextIcon={<i class="bi bi-arrow-right"></i>} fade prevLabel="" prevIcon={<i class="bi bi-arrow-left"></i>} >
      
     
        <Carousel.Item className="cr-item">
            <div className="img-box">

          <Img
            src={imgThree}
            alt="Second slide"
            />
            </div>
      
          <Carousel.Caption>
            <h1>Second slide label</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="cr-item">
            <div className="img-box">

          <Img
            src={imgTwo}
            alt="Second slide"
            />
            </div>
      
          <Carousel.Caption>
            <h1>Second slide label</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="cr-item">
            <div className="img-box">

          <Img
            src={imgOne}
            alt="Second slide"
            />
            </div>
      
          <Carousel.Caption>
            <h1>Second slide label</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </>

    )
}

export default Testimonials
