import { useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
const Login: React.FC = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    alert(`Username is: ${user}\nPass is: ${password}`);
  };
  return (
    <div className="bg-drawn-white flex flex-col justify-center items-center p-[5%] h-full">
      <h1 className="text-header font-header text-drawn-magenta">Welcome to DrawnOut!</h1>
      <h2 className="text-[40px] font-header text-drawn-magenta mb-[2%]">Please Log in to continue</h2>
      <form onSubmit={handleSubmit} className="flex flex-col text-[40px] gap-7">
        <input
          type="text"
          onChange={(e) => setUser(e.target.value)}
          placeholder="USERNAME"
          className="border-2 border-[#e1e1e1] rounded-full p-[3.5%] px-[7.5%] w-2xl"
        />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="PASSWORD"
          className="border-2 border-[#e1e1e1] rounded-full p-[3.5%] px-[7.5%] mb-[7.5%]"
        />
        <div className="flex self-center mb-[10%]">
          <Button
            text="LOGIN"
            textColor="text-drawn-white"
            buttonColor="bg-drawn-magenta"
            borderColor="border-drawn-magenta"
            hlColor="hover:bg-drawn-cyan "
          />
        </div>
      </form>
      <Link to="/signup" className="underline text-[#b8b9b8] font-body text-[30px] text-center">
        Not signed up?
      </Link>
    </div>
  );
};

export default Login;
