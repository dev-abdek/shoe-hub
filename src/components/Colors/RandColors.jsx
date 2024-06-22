import { useState } from "react";
import Square from "./Square";
import Input from "./Input";

const RandColors = () => {
  const [colorValue, setColorValue] = useState("");
  const [isDarkText, setIsDarkText] = useState(true);

  return (
    <div className="randColors">
      <Square colorValue={colorValue} isDarkText={isDarkText} />
      <Input
        colorValue={colorValue}
        setColorValue={setColorValue}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
      />
    </div>
  );
};

export default RandColors;
