const Navbar = () => {
  function openNav() {
    document.getElementById("mySidenav")!.style.width = "20%";
  }
  return (
    <nav className="bg-drawn-black flex sticky top-0 p-[1.5%] max-w-screen justify-between">
      <img src="/options.svg" id="mySidenav" onClick={openNav} className="max-w-[2.25vw] z-10 hover:cursor-pointer" />
      <input
        type="search"
        placeholder=""
        className="bg-drawn-white bg-[url(/search.svg)] bg-size-[20px] bg-no-repeat bg-[center_left_2.5%] rounded-full max-w-[20%] w-full mx-[2.5%] p-[.25%] px-[1.75%] text-left"
      />
    </nav>
  );
};

export default Navbar;
