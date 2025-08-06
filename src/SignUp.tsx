import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "./Components/Button";
import { Link } from "react-router-dom";
const SignUp: React.FC = () => {
  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert(`Account Created! Username is: ${user}`);
    navigate(`/login`);
  };
  return (
    <div className="bg-drawn-white flex flex-col justify-center items-center p-[5%] h-full">
      <h1 className="text-header font-header text-drawn-magenta">Welcome to DrawnOut!</h1>
      <h2 className="text-[40px] font-header text-drawn-magenta mb-[2%]">Please create an account to continue</h2>
      <form onSubmit={handleSubmit} className="flex flex-col text-[40px] gap-7">
        <input
          id="email"
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="EMAIL"
          className="border-2 border-[#e1e1e1] rounded-full p-[3.5%] px-[7.5%] w-2xl"
          required
        />
        <input
          id="username"
          type="text"
          onChange={(e) => setUser(e.target.value)}
          placeholder="USERNAME"
          className="border-2 border-[#e1e1e1] rounded-full p-[3.5%] px-[7.5%] w-2xl"
          required
        />
        <input
          id="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="PASSWORD"
          className="border-2 border-[#e1e1e1] rounded-full p-[3.5%] px-[7.5%] mb-[7.5%]"
          required
        />
        <div className="flex self-center mb-[10%]">
          <Button
            text="SIGN UP"
            textColor="text-drawn-white"
            buttonColor="bg-drawn-magenta"
            borderColor="border-drawn-magenta"
            hlColor="hover:text-drawn-magenta hover:bg-drawn-white"
          />
        </div>
      </form>
      <Link to="/login" className="underline text-[#b8b9b8] font-body text-[30px] text-center">
        Already have an account?
      </Link>
    </div>
  );
};

export default SignUp;
