import { useState } from "react";

const Button = () => {
  const [buttonText, setButtonText] = useState<string>("Click me");

  const handleClick = (): void => {
    setButtonText("You clicked!");
  };

  return <button onClick={handleClick}>{buttonText}</button>;
}

export default Button;

