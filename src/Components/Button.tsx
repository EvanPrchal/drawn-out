type ButtonProps = {
  text: string;
  buttonColor: string;
  textColor: string;
  borderColor: string;
  hlColor: string;
};

const Button: React.FC<ButtonProps> = ({ text, buttonColor, textColor, borderColor, hlColor }) => {
  if (hlColor === "text-drawn-cyan") {
    hlColor = "hover:bg-drawn-cyan hover:border-drawn-cyan hover:text-drawn-white";
  } else if (hlColor === "text-drawn-orange") {
    hlColor = "hover:bg-drawn-orange hover:border-drawn-orange hover:text-drawn-white";
  } else if (hlColor === "text-drawn-magenta") {
    hlColor = "hover:bg-drawn-magenta hover:border-drawn-magenta hover:text-drawn-white";
  } else {
    hlColor = hlColor;
  }
  return (
    <button
      className={`${textColor} ${buttonColor} ${borderColor} ${hlColor}  hover:cursor-pointer rounded-full p-1 px-20 border-7 max-w-2xs text-nowrap flex justify-center text-[40px] w-full`}
    >
      {text}
    </button>
  );
};

export default Button;
