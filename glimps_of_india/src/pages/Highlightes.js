import React from 'react'
import "../style/highlitespagestyle.css";
import logo1 from "../images/republicofindia.png";
import logo2 from "../images/image2.png";
import logo3 from "../images/image3.png";
import logo4 from "../images/image4.png";
import logo5 from "../images/image5.png";
import logo6 from "../images/image6.png";

const Highlightes = () => {
  
  return (
    <div className="highlites-page">
      <div className="h-container">
        <div className="heading">
          <h1 style  = {{marginBottom : "35px"}}>Highlightes about India</h1>
        </div>
        
        <div className="grid-container">
          <div className="grid-item">
            <div className="App">
              <div class="container">
                <div class="side">
                  <img alt="facebook" className="Logo" src={logo1} />
                </div>
                <div class="side side-content-center">
                  <div>
                    <p>Name</p>
                    <p className="dcr-content">Republic of India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-item">
            <div className="App">
              <div class="container">
                <div class="side">
                  <img alt="logo" className="Logo" src={logo2} />
                </div>
                <div class="side side-content-center">
                  <div>
                    <p>Capital</p>
                    <p className="dcr-content">Delhi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-item">
            <div className="App">
              <div class="container">
                <div class="side">
                  <img alt="facebook" className="Logo" src={logo3} />
                </div>
                <div class="side side-content-center">
                  <div>
                    <p>Language</p>
                    <p className="dcr-content">
                      Hindi, English and regional language
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-item">
            <div className="App">
              <div class="container">
                <div class="side">
                  <img alt="facebook" className="Logo" src={logo4} />
                </div>
                <div class="side side-content-center">
                  <div>
                    <p>Religion</p>
                    <p className="dcr-content">
                      Hindism, Islam, Buddhism, others
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-item">
            <div className="App">
              <div class="container">
                <div class="side">
                  <img alt="facebook" className="Logo" src={logo5} />
                </div>
                <div class="side side-content-center">
                  <div>
                    <p>Population</p>
                    <p className="dcr-content">136.64 Crores (2019)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-item">
            <div className="App">
              <div class="container">
                <div class="side">
                  <img alt="facebook" className="Logo" src={logo6} />
                </div>
                <div class="side side-content-center">
                  <div>
                    <p>Currency</p>
                    <p className="dcr-content">Indian Rupee (INR)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Highlightes