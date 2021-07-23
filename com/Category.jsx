import Image from 'next/image'
import Calc from "../assesits/calc.png"
import Flay from "../assesits/flay.png"
import Mic from "../assesits/mic.png"
import Sit from "../assesits/set.png"
const Category = () => {
    return (
        <div className="container Category">
            <h2 className="titlee">CATEGORY</h2>
            <h1 className="subtitle">We Offer Best Services</h1>
            <div className="row">



            <div className="col-lg-3 col-md-6 col-sm-12 ">
                <div className="serve">
                    <div className="img">
                    <Image  src={Calc} alt="img" />
                    </div>
                   <h2>Calculated Weather </h2>
                   <p>Built Wicket longer admire do barton vanity itself do in it.</p>
                </div>
             </div> 

             <div className="col-lg-3 col-md-6 col-sm-12 ">
                <div className="serve">
                    <div className="img">
                    <Image  src={Flay} alt="img" />
                    </div>
                   <h2>Best Flights </h2>
                   <p>Engrossed listening. Park gate sell they west hard for the.</p>
                </div>
             </div>

             <div className="col-lg-3 col-md-6 col-sm-12 ">
                <div className="serve">
                    <div className="img">
                    <Image  src={Mic} alt="img" />
                    </div>
                   <h2>Local Events </h2>
                   <p>Barton vanity itself do in it. Preferd to men it engrossed listening.</p>
                </div>
             </div>


             <div className="col-lg-3 col-md-6 col-sm-12 ">
                <div className="serve">
                    <div className="img">
                    <Image  src={Sit} alt="img" />
                    </div>
                   <h2>Customization </h2>
                   <p>We deliver outsourced
aviation services for
military customers</p>
                </div>
             </div>


            </div>
            <div className="circle"></div>
            <div className="circle-2"></div>
        </div>
    )
}

export default Category
