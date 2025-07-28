import SidebarButton from "./Components/SidebarButton";

const Sidebar = () => {
  //mt-41%
  return (
    <>
      <div
        id="mySidenav"
        className="h-full w-0 fixed top-0 left-0 bg-drawn-cyan overflow-x-hidden flex flex-col justify-center border-1 border-drawn-white z-1 ease-in-out duration-500"
      >
        <div className="flex flex-col justify-between bg-drawn-black">
          <div className="border-t-1 border-drawn-white">
            <SidebarButton link="/" svg="home.svg" title="Home" />
          </div>
          <SidebarButton link="profile" svg="profile.svg" title="Profile" />
          <SidebarButton link="prompts" svg="prompt.svg" title="Prompts" />
          <SidebarButton link="sketch" svg="sketch.svg" title="Sketch" />
          <SidebarButton link="gallery" svg="gallery.svg" title="Gallery" />
          <SidebarButton link="saved" svg="saved.svg" title="Saved" />
          <SidebarButton link="settings" svg="settings.svg" title="Settings" />
          <SidebarButton svg="close.svg" title="Close" />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
