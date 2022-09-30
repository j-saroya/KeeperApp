import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year} Jagdeep Kaur Saroya</p>
    </footer>
  );
}

export default Footer;
