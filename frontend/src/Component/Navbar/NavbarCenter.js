import React, { useState } from "react";
import { useSelector } from "react-redux";
import "../../style/Navbar.css";
import NavbarItem from "./NavbarItem";
import Modal from "../../Component/Modal";
import RateUsComponent from "../../Component/Rateus"; // Import the RateUsComponent
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBookmark, faCode, faInfoCircle, faQuestionCircle, faStar, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function NavbarCenter() {
  const totalBookmarks = useSelector((state) => state.SourceReducer.totalBookmarks) || 0;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRateUsClick = () => {
    setIsModalOpen(true);
  };

  return (
    <nav className="navbar-center">
      <ul className="navbar-content mb-2">
        <li className="nav-item">
          <NavbarItem description={<><FontAwesomeIcon icon={faHome} /> Home</>} to="/" />
        </li>
        <li className="nav-item">
          <NavbarItem description={<><FontAwesomeIcon icon={faBookmark} /> Bookmark ({totalBookmarks})</>} to="/bookmark" />
        </li>
        
        <li className="nav-item">
          <NavbarItem description={<><FontAwesomeIcon icon={faCode} /> Open Source</>} to="/open-source" />
        </li>
        <li className="nav-item">
          <NavbarItem description={<><FontAwesomeIcon icon={faInfoCircle} /> About Us</>} to="/about" />
        </li>
        <li className="nav-item">
          <NavbarItem description={<><FontAwesomeIcon icon={faQuestionCircle} /> FAQ's</>} to="/faq" />
        </li>
        <li className="nav-item" onClick={handleRateUsClick}>
          <NavbarItem description={<><FontAwesomeIcon icon={faStar} /> Rate Us</>} to="#" />
        </li>
        <li className="nav-item">
          <NavbarItem description={<><FontAwesomeIcon icon={faEnvelope} /> Contact</>} to="https://www.linkedin.com/in/himanshunarware/" />
        </li>
      </ul>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <RateUsComponent />
      </Modal>
    </nav>
  );
}

export default NavbarCenter;
