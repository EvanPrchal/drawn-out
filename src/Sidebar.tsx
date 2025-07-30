import SidebarButton from "./Components/SidebarButton";

const Sidebar = () => {
  //mt-41%
  return (
    <>
      <div
        id="mySidenav"
        className="h-full w-0 fixed top-0 left-0 bg-drawn-bg overflow-x-hidden flex flex-col justify-center border-1 border-drawn-white z-1 ease-in-out duration-500"
      >
        <div className="flex flex-col justify-between bg-drawn-black">
          <hr className="text-drawn-white"></hr>
          <SidebarButton link="/" svg="home.svg" title="Home" />
          <hr className="text-drawn-white"></hr>
          <SidebarButton link="profile" svg="profile.svg" title="Profile" />
          <hr className="text-drawn-white"></hr>
          <SidebarButton link="prompts" svg="prompt.svg" title="Prompts" />
          <hr className="text-drawn-white"></hr>
          <SidebarButton link="sketch" svg="sketch.svg" title="Sketch" />
          <hr className="text-drawn-white"></hr>
          <SidebarButton link="gallery" svg="gallery.svg" title="Gallery" />
          <hr className="text-drawn-white"></hr>
          <SidebarButton link="saved" svg="saved.svg" title="Saved" />
          <hr className="text-drawn-white"></hr>
          <SidebarButton link="settings" svg="settings.svg" title="Settings" />
          <hr className="text-drawn-white"></hr>
          <SidebarButton link="#/close" svg="close.svg" title="Close" />
          <hr className="text-drawn-white"></hr>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
