function Footer({ isDarkMode }) {
  return (
    <div className="text-center">
      <p className={`${isDarkMode ? 'text-White' : 'text-Black'}`}>
        Created By Armando Mancino. © 2024{' '}
        <span className="d-block d-sm-inline">All rights reserved.</span>
      </p>
    </div>
  );
}

export default Footer;
