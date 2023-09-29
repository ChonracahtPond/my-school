import React, { useState } from 'react';

const Register: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <div className="dropdown-container">
      <button
        className="dropdown-toggle"
        onMouseEnter={toggleDropdown}
        onMouseLeave={toggleDropdown}
      >
        Dropdown Toggle
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          {/* เนื้อหาของ Dropdown Menu */}
          <ul>
            <li>เมนูที่ 1</li>
            <li>เมนูที่ 2</li>
            <li>เมนูที่ 3</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Register;
