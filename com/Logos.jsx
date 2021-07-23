import Img from "next/image"
import imgOne from "../assesits/image27.png"
import imgTwo from "../assesits/image 28.png"
import imgThree from "../assesits/image 29.png"
import imgFour from "../assesits/image 30.png"
import imgFive from "../assesits/image 31.png"

const Logos = () => {
    return (
        <div className="logos">
            <div className="logo">
                
            <Img src={imgOne} alt="1" />
            </div>
            <div className="logo">

            <Img src={imgTwo} alt="2" />
            </div>
            <div className="logo">

            <Img src={imgThree} alt="3" />
            </div>
            <div className="logo">
            <Img src={imgFour} alt="4" />

            </div>
            <div className="logo">
            <Img src={imgFive} alt="5" />

            </div>
            
        </div>
    )
}

export default Logos
