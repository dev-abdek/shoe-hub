/* eslint-disable react/prop-types */

const Square = ({ colorValue = "Empty color value", isDarkText }) => {
  return (
    <section
      className="square"
      style={{
        backgroundColor: colorValue,
        color: isDarkText ? "#000" : "#FFF",
      }}
    >
      <p>{colorValue ? colorValue : "Empty value"}</p>
    </section>
  );
};

export default Square;
