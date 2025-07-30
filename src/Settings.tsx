import Button from "./Components/Button";
import Dropdown from "react-bootstrap/Dropdown";
import Logo from "./Components/Logo";

const Settings = () => {
  return (
    <div className="flex flex-col justify-around items-center gap-25 h-full  bg-[url(/external/images/background.png)] bg-drawn-bg p-[6%]">
      <h1 className="font-header text-body text-drawn-white rounded-full bg-drawn-black p-1 px-20 self-start ">Settings</h1>
      <section className="flex flex-col justify-around gap-60">
        <Dropdown className="  hover:cursor-pointer rounded-full p-1 px-20 bg-drawn-black border-7 border-drawn-black text-drawn-white text-nowrap flex flex-col justify-center items-center text-[40px] w-full`">
          <Dropdown.Toggle variant="success" id="dropdown-basic" className="">
            Theme Color
          </Dropdown.Toggle>

          <Dropdown.Menu className="flex flex-col justify-center">
            <Dropdown.Item href="#/cyan">
              <Logo logoColor="text-drawn-magenta" size="text-body" />
            </Dropdown.Item>
            <Dropdown.Item href="#/magenta">
              <Logo logoColor="text-drawn-cyan" size="text-body" />
            </Dropdown.Item>
            <Dropdown.Item href="#/orange">
              <Logo logoColor="text-drawn-orange" size="text-body" />
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Button text="Home Image" buttonColor="bg-drawn-black" hlColor="" borderColor="border-drawn-black" textColor="text-drawn-white" />
      </section>
    </div>
  );
};

export default Settings;
