import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5">
          <img src="media/images/zerodhaFundhouse.png" style={{width:"70%"}} />
          <p className="text-small text-muted pt-4">Our assest management venture that is creating simple and transparent index funds to help you save for your goals.</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/sensibullLogo.svg"style={{width:"70%"}} />
          <p className="text-small text-muted pt-4">Strategy Builder, Draft Portfolios, Free Option Chain, Open Interest, Free Market Analysis, FII DII Data, Positions Analysis, and much more</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/tijori.svg"style={{width:"60%"}} />
          <p className="text-small text-muted pt-4">Investment research playform that offers detailed insights on stocks sectors, supply chains and more.</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/smallcaseLogo.png" style={{width:"70%"}}/>
          <p className="text-small text-muted pt-4">Thematic investing platform that helps you invest in diversified basket of stocks on EFTs.</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/streakLogo.png"style={{width:"70%"}} />
          <p className="text-small text-muted pt-4">Streak is the world's fastest Systematic Trading Platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/dittoLogo.png" style={{width:"60%"}}/>
          <p className="text-small text-muted pt-4">Personalized advice on life and health insurance.No spam and no mis-selling needs</p>
        </div>
        
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Sign Up Now
        </button>
      </div>
    </div>
  );
}

export default Universe;
