import React from "react";
import subscribe from "../assets/subscribe2.png";
import facebook from "../assets/facebook.png";
import linkedin from "../assets/linkedin.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";
import youtube from "../assets/youtube.png";
import quora from "../assets/quora.png";
import location from "../assets/location.png";
import clock from "../assets/clock-footer.png";
import bus from "../assets/bus.png";
import playButton from "../assets/play-icon.png";

const SubscribeFooter = () => {
  return (
    <>
      {/* Subscribe Section */}
      <section className="subscribe-section">
        <div className="subscribe-left">
          <div>
            <h2 className="subscribe-title">Subscribe</h2>
            <p className="subscribe-text">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna
            </p>
          </div>
          <form className="subscribe-form">
            <div
              style={{
                width: "100%",
                display: "flex",
                flexWrap: "wrap",
                gap: "2rem",
              }}
            >
              <input
                type="email"
                placeholder="Enter your Email Address"
                className="subscribe-input"
              />
              <button className="know-more-btn">
                Subscribe Now{" "}
                <img
                  src={playButton}
                  alt="play-button"
                  width="15"
                  height="15"
                />
              </button>
            </div>
          </form>
        </div>

        <div className="subscribe-right">
          <img
            src={subscribe}
            alt="Email Subscribe Illustration"
            className="subscribe-image"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-grid">
          {/* Contact us */}
          <div className="footer-col text-xs">
            <h3 className="footer-heading">Contact us</h3>
            <p>Address: amet, consetetur sadipscing elitr, sed diam</p>
            <p>Email id: eirmod tempor invidunt ut labore et dolore</p>
            <p>Phone no: 123456789</p>
          </div>

          {/* Follow us */}
          <div className="footer-col text-center md:text-left">
            <h3 className="social-heading">Follow us</h3>
            <div className="footer-icons">
              {[facebook, linkedin, instagram, twitter, youtube, quora].map(
                (icon) => (
                  <a
                    key={icon}
                    href="#"
                    aria-label={icon}
                    className="footer-icon"
                  >
                    <img src={icon} alt="Social Icon" width="20" height="20" />
                  </a>
                )
              )}
            </div>
          </div>

          {/* Head Office */}
          <div className="footer-col text-xs">
            <h3 className="footer-heading">Head Office</h3>
            <p className="footer-info">
              <img
                src={location}
                alt="Social Icon"
                className="social-icon"
                width="15"
                height="16"
              />
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut
            </p>
            <p className="footer-info">
              <img
                src={clock}
                alt="Social Icon"
                className="social-icon"
                width="15"
                height="16"
              />
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr
            </p>
            <p className="footer-info">
              <img
                src={clock}
                alt="Social Icon"
                className="social-icon"
                width="15"
                height="16"
              />
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr
            </p>
            <p className="footer-info">
              <img
                src={bus}
                alt="Social Icon"
                className="social-icon"
                width="15"
                height="16"
              />
              Lorem ipsum asd asdsaweeq Lorem Ipsum
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          © 2021 All Rights Reserved. Privacy Policy
        </div>
      </footer>
    </>
  );
};

export default SubscribeFooter;
