import PropTypes from "prop-types";

function Header({ text, bgColor, textColor }) {
  const _styles = { backgroundColor: bgColor, color: textColor };

  return (
    <header style={_styles}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: "Feedback UI",
  bgColor: "rgb(0,0,0,0.4)",
  textColor: "#ff6a95",
};

Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
 };

export default Header;
