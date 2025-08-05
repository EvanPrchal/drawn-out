import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  function openNav() {
    document.getElementById("mySidenav")!.style.width = "20%";
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    navigate(`/${search}`);
    // or you can send data to backend
  };

  const handleKeypress = (e: any) => {
    //it triggers by pressing the enter key
    if (e.keyCode === 13) {
      handleSubmit(e);
    }
  };

  return (
    <nav className="bg-drawn-black flex sticky top-0 p-[1.5%] max-w-screen justify-between">
      <img src="/options.svg" id="mySidenav" onClick={openNav} className="max-w-[2.25vw] z-10 hover:cursor-pointer" />
      <input
        onKeyDown={handleKeypress}
        onChange={(e) => setSearch(e.target.value)}
        type="search"
        placeholder=""
        className="bg-drawn-white bg-[url(/search.svg)] bg-size-[20px] bg-no-repeat bg-[center_left_2.5%] rounded-full max-w-[20%] w-full mx-[2.5%] p-[.25%] px-[1.75%] text-left"
      />
    </nav>
  );
};

export default Navbar;
