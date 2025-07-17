const Navbar = () => {
  return (
    <nav className="bg-drawn-black flex sticky top-0 p-[1%] -mx-[25%] justify-around">
      <img src="/options.svg" className="max-w-[2.25vw]" />
      <input
        type="search"
        placeholder=""
        className="bg-drawn-white bg-[url(/search.svg)] bg-size-[20px] bg-no-repeat bg-[center_left_2.5%] rounded-full max-w-[20%] w-full mx-[2.5%] p-[.25%] px-[1.75%] text-left"
      />
    </nav>
  );
};

export default Navbar;
