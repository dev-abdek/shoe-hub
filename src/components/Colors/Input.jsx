/* eslint-disable react/prop-types */

const Input = ({ colorValue, setColorValue, isDarkText, setIsDarkText }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="colorForm">
      <div className="formInput">
        <input
          type="text"
          autoFocus
          required
          placeholder="Add color name"
          value={colorValue}
          onChange={(e) => {
            setColorValue(e.target.value);
          }}
        />
      </div>

      <div className="formBtn">
        <button type="text" onClick={() => setIsDarkText(!isDarkText)}>
          Toggle Text Color
        </button>
      </div>
    </form>
  );
};

export default Input;
