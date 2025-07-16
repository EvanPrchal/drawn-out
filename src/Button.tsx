type ButtonProps = {
  text: string;
  buttonColor: string;
  textColor: string;
};

const Button: React.FC<ButtonProps> = ({ text, buttonColor, textColor }) => {
  return (
    <button className={`${textColor} ${buttonColor} rounded-full p-1 px-20 border-7 border-drawn-white max-w-2xs text-nowrap flex justify-center`}>
      {text}
    </button>
  );
};

export default Button;
