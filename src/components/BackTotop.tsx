import React, { useState, useEffect } from "react";
import { BsArrowUpCircleFill } from "react-icons/bs";

const BackToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowButton(scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!showButton) {
    return null;
  }

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      style={{
        position: "fixed",
        bottom: 20,
        right: 10,
        zIndex: 1,
        // backgroundColor: "#212529",
        color: "#",
        padding: "10px 15px",
        cursor: "pointer",
      }}
    >
      <BsArrowUpCircleFill size={35} color="#fbbf24"/>
    </button>
  );
};

export default BackToTopButton;