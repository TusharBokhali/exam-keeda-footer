import logo from "./logo.svg";
import "./App.css";
import X from "./x.svg";
import insta from "./insta.svg";
import face from "./face.svg";
import link from "./link.svg";

function App() {
  return (
  
    <footer>
      <div className="width-1200">
        <div className="footer-1">
          <img
            src="https://examkeeda.com/_next/image/?url=%2Fimages%2Fexam-keeda-white.svg&w=256&q=75"
            alt=""
          />
          <h6>
            Exam Keeda is an online practice platform that has been operating
            since 2024 until now.
          </h6>
          <div className="social-media">
        <div className="hover"> <img src={insta} alt="" /></div>
        <div className="hover"><img src={X} alt="" /></div>
        <div className="hover"><img src={link} alt="" /></div>
        <div className="hover"><img src={face} alt="" /></div>
          </div>
        </div>

        <div className="footer-1-flex">
        <div className="mains-footer-1">

          <h2>Menu</h2>
          <div className="details-menu">
            <div>Home</div>
            <div>Tutorials</div>
            <div>Typing Practice</div>
            <div>Blog</div>
            <div>Contact Us</div>
          </div>
        </div>
        <div className="mains-footer-1">

          <h2>About</h2>
          <div className="details-menu">
            <div>Contact Us</div>
            <div>Privacy & Policy</div>
            <div>Term & Service</div>
          </div>
        </div>
        </div>
      </div>
      <div className="last-date-details">
        <div className="container">
            <h4>© 2024 All Rights Reserved by Exam Keeda</h4>
        </div>
      </div>
    </footer>
  );
}

export default App;
