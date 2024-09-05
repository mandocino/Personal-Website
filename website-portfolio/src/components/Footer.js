function Footer({ isDarkMode }) {
  return (
    <div className="text-center">
      <p className={`${isDarkMode ? 'text-White' : 'text-Black'}`}>Created By Armando Mancino. © 2024 All rights reserved.</p>
    </div>
  );
}

export default Footer;