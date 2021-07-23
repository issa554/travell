import RomeImg from "../assesits/roma.png"
import Img from "next/image"
const TopSelling = () => {
    return (
        <div className="container TopSelling">
            
            <h2 className="titlee">Top Selling</h2>
            <h1 className="subtitle">Top Destinations</h1>
            <div className="row">


                <div className="item col-lg-4 col-md-12">  
            
                    <div className="text container"> 
                   <div className="row ">

                               <div  className="col-6 ml-1">
                                  <p>     
                                       Rome, Italty
                                      </p>
                                   </div>   
                                   <div  className="col-6 ">
                                  <p>     
                                  $5,42k</p>
                                   </div>  
                                   <div  className="col-12 ">
                                  <p>     
                                  <i class="bi bi-cursor-fill text-dark">   </i>
                                   10 Days Trip
                                  </p>
                                   </div>  
                   </div>
                   </div>
                </div>


                <div className="item item-2 col-lg-4 col-md-12">        
                   <div className="text container"> 
                   <div className="row ">

                               <div  className="col-6 ml-1">
                                  <p>     
                                  London, UK
                                      </p>
                                   </div>   
                                   <div  className="col-6 ">
                                  <p>     
                                  $4.2k</p>
                                   </div>  
                                   <div  className="col-12 ">
                                  <p>     
                                  <i class="bi bi-cursor-fill text-dark">   </i>
                                   12 Days Trip
                                  </p>
                                   </div>  
                   </div>
                   </div>
                </div>


                
                <div className="item item-3 col-lg-4 col-md-12">        
                   <div className="text container"> 
                   <div className="row ">

                               <div  className="col-6 ml-1">
                                  <p>     
                                  Full Europe
                                      </p>
                                   </div>   
                                   <div  className="col-6 ">
                                  <p>     
                                  $15K</p>
                                   </div>  
                                   <div  className="col-12 ">
                                  <p>     
                                  <i class="bi bi-cursor-fill text-dark">   </i>
                                   28 Days Trip
                                  </p>
                                   </div>  
                   </div>
                   </div>
                </div>

            </div>
        </div>
    )
}

export default TopSelling
