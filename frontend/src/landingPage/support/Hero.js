import React from "react";

//container fulid to strech pura area cover karega as we want full side to blue color//
function Hero() {
  return (
    <section className="container-fluid" id="supporthero">
      <div className="p-2 mt-5 mb-5" id="supportWrapper">
        <h3>Support Portal</h3>
        <a href="#" className="fs-4">Track Tickets</a>
      </div>
      <div className="row p-5 m-5 m">
        <div className="col-6  p-3 ">
            <h1 className="fs-3">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <div className="input-wrapper">
            <input placeholder="Eg. how do I activate F&O , why is my order getting rejected." />
        
          <br />
          </div>
          
          <br/>
          <a href="">Track account opening</a><br/>
          <a href="">Track segment activation</a><br/>
          <a href="">Intraday margins</a><br/>
          <a href="">Kite user manual</a>
        </div>
        <div className="col-2"></div>
        <div className="col-4 p-3  " style={{color:"white"}}>
             <h1 className="fs-3">Featured</h1>
          <ol>
            <li>
              <a href="">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a href="">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
