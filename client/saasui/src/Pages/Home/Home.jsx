import human from "../../assets/Images/human-left-pointing-banner-removebg-preview.png";
import greenck from "../../assets/Images/greenck.png";
import chart from "../../assets/Images/vertical-bar-chart-ui.jpg";

import "./Home.css";

function Home() {
  return (
    <>
      <section className="hero">
        <div className="flex items-center justify-start gap-[40px]">
          <div className="hero-content flex-col justify-start max-w-xl">
            <span className="tag">SAAS PRODUCT MANAGEMENT TOOL</span>
            <h1>
              The <span className="highlight">Easiest</span> Way To Manage Your
              Projects.
            </h1>
            <p>
              Increase your team's productivity and communication with our
              simple yet powerful project management tool.
            </p>
            <div className="cta-buttons">
              <a href="#" className="cta-primary">
                Get Started
              </a>
              <a href="#" className="cta-secondary">
                See Demo
              </a>
            </div>
            <div className="stats">
              <div className="stat-item">
                <img src={human} className="w-[20px]" alt="Check" />

                <span>No credit card required</span>
              </div>
              <div className="stat-item">
                <img src={greenck} className="w-[20px]" alt="Check" />
                <span>Free plan with unlimited projects</span>
              </div>
            </div>
          </div>

          <div className="hero-image">
            <div className="w-[100px] flex justify-center items-center">
              <img src={human} alt="" className="max-w-[700px]" />
            </div>
            <div className="hero-chart">
              <h3>Total Projects</h3>
              <h2>24</h2>
              <div>
                <div className="items-center justify-center">
                  <img className="max-w-4/5" src={chart} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
