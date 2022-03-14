const MyNavbar = ({ customColor }) => {
  return (
    <div className="navbar" style={{ backgroundColor: customColor || "red" }}>
      <div>
        <a href="www.google.com" target="_blank" rel="noopener noreferrer">
          Google
        </a>
      </div>
      <div>
        <a href="www.amazon.com" target="_blank" rel="noopener noreferrer">
          Amazon
        </a>
      </div>
      <div>
        <a href="www.netflix.com" target="_blank" rel="noopener noreferrer">
          Netflix
        </a>
      </div>
      <div>
        <a href="www.spotify.com" target="_blank" rel="noopener noreferrer">
          Spotify
        </a>
      </div>
    </div>
  );
};

export default MyNavbar;
