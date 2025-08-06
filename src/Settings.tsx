import Button from "./Components/Button";

const Settings = () => {
  return (
    <div className="flex flex-col justify-around items-center gap-25 h-full  bg-[url(/external/images/background.png)] bg-drawn-bg p-[8%]">
      <h1 className="font-header text-body text-drawn-white rounded-full bg-drawn-black p-1 px-20 self-start ">Settings</h1>
      <section className="flex flex-col justify-around gap-25">
        <Button text="Change Keybinds" buttonColor="bg-drawn-black" hlColor="" borderColor="border-drawn-black" textColor="text-drawn-white" />
        <Button text="Deactivate Account" buttonColor="bg-drawn-black" hlColor="" borderColor="border-drawn-black" textColor="text-drawn-white" />
        <Button text="Delete Account" buttonColor="bg-drawn-black" hlColor="" borderColor="border-drawn-black" textColor="text-drawn-white" />
      </section>
    </div>
  );
};

export default Settings;
