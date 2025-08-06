import { Link } from "react-router-dom";
type SidebarButtonProps = {
  link?: string;
  svg?: string;
  title: string;
};
const closeNav = () => {
  document.getElementById("mySidenav")!.style.width = "0%";
};

let signedIn = false;

const SidebarButton: React.FC<SidebarButtonProps> = ({ link, svg, title }) => {
  if (link === "profile")
    if (signedIn === false) {
      link = "login";
    }
  return (
    <section
      onClick={closeNav}
      className={`flex grow-0 text-drawn-white justify-center items-center w-full border-drawn-white text-body font-sidebar hover:bg-drawn-cyan hover:text-drawn-black group`}
    >
      {link ? (
        <Link to={link} className="w-full  flex">
          <div className="flex p-4 w-full items-center">
            <img src={`/light-${svg}`} className="w-20 group-hover:hidden" />
            <img src={`/dark-${svg}`} className="w-20 hidden group-hover:block" />
            <p className="pl-[10%] justify-center">{title}</p>
          </div>
        </Link>
      ) : (
        <div className="flex p-4 w-full items-center">
          <img src={`/light-${svg}`} className="w-[20%] group-hover:hidden" />
          <img src={`/dark-${svg}`} className="w-[20%] hidden group-hover:block" />
          <p className="pl-[10%] flex justify-center">{title}</p>
        </div>
      )}
    </section>
  );
};

export default SidebarButton;
