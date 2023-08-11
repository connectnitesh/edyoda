import "./App.css";
import logo from "./images/LOGO.png";
import srch from "./images/srch.svg";
import down from "./images/down.svg";
import live from "./images/Icon.png";
import icon1 from "./images/Icon1.png";
import icon3 from "./images/Icon3.png";
import icon2 from "./images/Icon2.png";
import icon4 from "./images/Icon4.png";
import rgp from "./images/razorpay.png";
import gclk from './images/Vector.png';
import { useState } from "react";

function App() {

  const [price,setPrice] = useState(179);
  
  const [bckg1,setBckg1] = useState('#fff');
  const [bckg2,setBckg2] = useState('#fff');
  const [bckg3,setBckg3] = useState('#fff');

  function handlePrice1(){
    setPrice(179);
    setBckg1('#d7eddd');
    setBckg2('#fff');
    setBckg3('#fff');
  }
  
  function handlePrice2(){
    setPrice(149);
    setBckg2('#d7eddd');
    setBckg1('#fff');
    setBckg3('#fff');
  }
  
  function handlePrice3(){
    setPrice(99);
    setBckg3('#d7eddd');
    setBckg2('#fff');
    setBckg1('#fff');
  }


  return (
    <>
      <nav className="navbar">
        <div className="nav-left">
          <img src={logo} alt="" srcset="" />
          <ul>
            <li>
              <a href="">
                Courses <img src={down} alt="" srcset="" />
              </a>
            </li>
            <li>
              <a href="">
                Programs <img src={down} alt="" srcset="" />
              </a>
            </li>
          </ul>
        </div>
        <div className="nav-right">
          <ul>
            <li>
              <a href="">
                <img src={srch} alt="" srcset="" />
              </a>
            </li>
            <li>
              <a href="">Log in</a>
            </li>
            <li>
              <a href="" className="join-now">
                Join Now
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="contents">
        <div className="box1">
          <h3>
            Access curated courses worth </h3>
          <h2>₹<span className="span-s">18500</span>{" "}at just <span>₹99</span> per year!
          </h2>
          <div className="items">
            <img src={icon1} width={50} alt="" srcset="" />
            <p>
              <span>100+</span> Job relevant courses
            </p>
          </div>
          <div className="items">
            <img src={icon3} width={50} alt="" srcset="" />
            <p>
              <span>20,000+</span> Hours of content
            </p>
          </div>
          <div className="items">
            <img src={live} width={50} alt="" srcset="" />
            <p>Exclusive webinar access</p>
          </div>
          <div className="items">
            <img src={icon2} width={50} alt="" srcset="" />
            <p>
              Scholarship worth <span>94,500</span>
            </p>
          </div>
          <div className="items">
            <img src={icon4} width={50} alt="" srcset="" />
            <p>
              <span>Ad Free</span> learning experience
            </p>
          </div>
        </div>
        <form className="box2">
          <div className="btn-box">
            <div className="btn1">
              <p className="circle">1</p>
              <p>Sign Up</p>
            </div>
            <div className="btn2">
              <p className="circle">2</p>
              <p>Subscribe</p>
            </div>
          </div>
          <h4>Select your subscription plan</h4>
          <div className="pay-s dis dis-b">
            <div>
              <input type="radio" className="radio-custom" name="payment" id="" disabled="true" />
              <label htmlFor="" className="radio-custom-label">12 Months Subscription</label>
            </div>
            <div>
              <p>
                Total <span>₹99</span>
              </p>
              <p>₹8 <span className="dis"> /mo</span></p>
            </div>
          </div>
          <div className="pay-s rec" style={{background: bckg1}}>
            <div>
              <input type="radio" className="radio-custom" name="payment" id="" defaultChecked="true" onClick={handlePrice1}/>
              <label htmlFor=""  className="radio-custom-label">12 Months Subscription</label>
            </div>
            <div>
              <p>
                Total <span>₹179</span>
              </p>
              <p>₹15 <span className="dis"> /mo</span></p>
            </div>
          </div>
          <div className="pay-s" style={{background: bckg2}}>
            <div>
              <input type="radio"  className="radio-custom" name="payment" id="" onClick={handlePrice2}/>
              <label htmlFor=""  className="radio-custom-label"> 6 Months Subscription</label>
            </div>
            <div>
              <p>
                Total <span>₹149</span>
              </p>
              <p>₹25 <span className="dis"> /mo</span></p>
            </div>
          </div>
          <div className="pay-s" style={{background: bckg3}}>
            <div>
              <input type="radio" className="radio-custom" name="payment" id="" onClick={handlePrice3}/>
              <label htmlFor=""  className="radio-custom-label">3 Months Subscription</label>
            </div>
            <div>
              <p>
                Total <span>₹99</span>
              </p>
              <p>₹33 <span className="dis"> /mo</span></p>
            </div>
          </div>
          <hr className="line"/>
          <div className="pay-t">
            <div>
              <p>Subscription Fee</p>
            </div>
            <div>
              <p>
                ₹18,500
              </p>
            </div>
          </div>
          <div className="pay-s">
            <div className="pay-u">
              <h5>Limited time offer</h5>
              <div style={{display:'flex'}}><img src={gclk} color='#000' width={19} alt="" srcset="" /><p>Offer valid till 25th March 2023 </p></div>
            </div>
            <div>
              <p>- ₹{18500 - price}</p>
            </div>
          </div>
          <div className="pay-t">
            <div>
              <h4>Total <span >(Incl. of 18% GST)</span></h4>
            </div>
            <div>
              <h2>
              {price}
              </h2>
            </div>
          </div>
          <div className="btn-box">
            <div className="btn-c">Cancel</div>
            <div className="btn-g">Proceed to pay</div>
          </div>
          <img className="rgp-logo" src={rgp} alt="" />
        </form>
      </div>
    </>
  );
}

export default App;
