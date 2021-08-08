import React from 'react';
import Package from "./Package";
import Guide from "./Guide";
import packagesData from "../shared/packagesData";
import guideData from "../shared/guideData";

const Info = (props) => {
    const packageComponent = packagesData.map(item => <Package key={item.id} package={item} />)
    const guideComponent = guideData.map(item => <Guide key={item.id} guide={item} /> )

    return(
        <div className="container">
              <div className="row text-center offset-2">
                 <div className="col-sm-10">
                     <h4 className="bg-dark text-light pb-1 mb-5 fw-bold py-2 ">Instructions:</h4>
                 </div>
             </div>
              <div className="row mt-4">
                 {guideComponent}
             </div>
             <br />
             <br />
             <div className="row text-center offset-2">
                 <div className="col-sm-10">
                     <h4 className="bg-dark text-light pb-1 mb-5 fw-bold py-2">Membership Packages Includes:</h4>
                 </div>
             </div>
             <div className="row">
               {packageComponent}
             </div>
        </div>
    )
}
export default Info;