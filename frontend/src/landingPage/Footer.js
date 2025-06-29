import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5">
          <div className="col">
            <img src="media/images/logo.svg" style={{ width: "60%" }} className="pb-4" />
            <p className="fs-4">
              &copy; 2010 - 2024, Not Zerodha Broking Ltd. All rights reserved.
            </p>
          </div>
          <div className="col">
            <p className="fs-4">Company</p>
            <a href="" className="fs-6 ">About</a>
            <br />
            <a href=""className="fs-6">Products</a>
            <br />
            <a href=""className="fs-6">Pricing</a>
            <br />
            <a href=""className="fs-6">Referral programme</a>
            <br />
            <a href=""className="fs-6">Careers</a>
            <br />
            <a href=""className="fs-6">Zerodha.tech</a>
            <br />
            <a href=""className="fs-6">Press & media</a>
            <br />
            <a href=""className="fs-6">Zerodha cares (CSR)</a>
            <br />
          </div>
          <div className="col">
            <p className="fs-4">Support</p>
            <a href=""className="fs-6" >Contact</a>
            <br />
            <a href=""className="fs-6">Support portal</a>
            <br />
            <a href=""className="fs-6">Z-Connect blog</a>
            <br />
            <a href=""className="fs-6">List of charges</a>
            <br />
            <a href=""className="fs-6">Downloads & resources</a>
            <br />
          </div>
          <div className="col">
            <p className="fs-4">Account</p>
            <a href=""className="fs-6">Open an account</a>
            <br />
            <a href=""className="fs-6">Fund transfer</a>
            <br />
            <a href=""className="fs-6">60 day challenge</a>
            <br />
          </div>
        </div>
        <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration no.:
            INZ000031633 CDSL: Depository services through Zerodha Securities
            Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading
            through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration
            no.: INZ000038238 Registered Address: Zerodha Broking Ltd.,
            #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
            J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any
            complaints pertaining to securities broking please write to
            complaints@zerodha.com, for DP related to dp@zerodha.com. Please
            ensure you carefully read the Risk Disclosure Document as prescribed
            by SEBI | ICF
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

         
        </div>
      </div>
    </footer>
  );
}

export default Footer;