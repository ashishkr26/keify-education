import React from "react";

const Footer = () => {
  return (
    <div className="">
      <footer className="bg-gray-800 text-white flex justify-around">
        <div className="pt-4">
          <ul>
            <li>
              <h6>Get The App</h6>
            </li>
            <li>Google Play Store</li>
            <li></li>
          </ul>
        </div>
        <div className="p-4">
          <ul>
            <li>
              <h6>Exams</h6>
            </li>
            <li>GATE</li>
            <li>CUCET</li>
            <li>IB</li>
            <li>GMAT</li>
          </ul>
        </div>

        <div className="p-4">
          <ul>
            <li className="">
              <h6 >About Keify</h6>
            </li>
            <li>About</li>
            <li>Policy Terms</li>
            <li>Refund</li>
            <li>Conntact Us</li>
          </ul>
        </div>

        <div className="p-4">
          <ul>
            <li>
              <h6>Help & Support</h6>
            </li>
            <li>Helpline Number</li>
            <li className="">✉️ support@keify.com</li>
            <li>Monday To Saturday</li>
          </ul>
        </div>
      </footer>
      <div className="p-4 bg-gray-950 text-center text-white">
        ©️ 2024 Keify
      </div>
    </div>
  );
};

export default Footer;
