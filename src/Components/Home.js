import React from 'react';
import {Button, Input, InputGroup, InputGroupAddon} from 'reactstrap';


  function Text(){
       const msg = document.getElementById("message");
       msg.innerHTML = "Congrats you are in service area! "
        msg.style.fontSize = "30px"
  }

const Home = (props) => {

    return (
         <div className="container">
             <div className="row text-center offset-2">
                 <div className="col-sm-10">
                     <h3 className="py-2 fw-bold bg-dark text-light shad">Get your Craving Food in one Click</h3>
                 </div>
                 <div className="col-sm-10 fw-bold mt-4">
                     <p>Order Food from your choice of Restaurant. <br /> We will deliver to you with best price and As soon As possible.</p>
                 </div>
             </div>
             <div className="row offset-1">
                 <div className="col-sm-10 ">
                     <InputGroup >
                        <Input  className="text-center" placeholder="Type your Zip-code here!" />
                        <InputGroupAddon addonType="append">
                           <Button  onClick={Text} >Submit</Button>
                        </InputGroupAddon>
                     </InputGroup>
                   <p className="text-center fw-bold text-dark pt-2" id="message">Type your zipcode above to, Check Your in Service Area or Not:</p>
                 </div>
                 <div className="col-sm-12 map text-center pic"></div>
             </div>
             <div className="row">
                <div className="col-sm-12 text-center pt-4 pb-4">
                   <img  src='./assets/images/raptors-championship-parade.jpeg' />
               </div>
            </div>
         </div>
    );
  };
export default Home;