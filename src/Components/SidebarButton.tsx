import { Link } from "react-router-dom";
type SidebarButtonProps = {
  link?: string;
  svg?: string;
  title: string;
};
const closeNav = () => {
  document.getElementById("mySidenav")!.style.width = "0%";
};
const SidebarButton: React.FC<SidebarButtonProps> = ({ link, svg, title }) => {
  return (
    <section
      onClick={closeNav}
      className={`flex text-drawn-white  border-drawn-white text-body font-sidebar hover:bg-drawn-cyan hover:text-drawn-black group`}
    >
      {link ? (
        <Link to={link}>
          <div className="flex p-4 w-full">
            <img src={`/light-${svg}`} className="w-20 group-hover:hidden" />
            <img src={`/dark-${svg}`} className="w-20 hidden group-hover:block" />
            <p className="pl-[10%]">{title}</p>
          </div>
        </Link>
      ) : (
        <div className="flex p-4 w-full">
          <img src={`/light-${svg}`} className="w-20 group-hover:hidden" />
          <img src={`/dark-${svg}`} className="w-20 hidden group-hover:block" />
          <p className="pl-[10%]">{title}</p>
        </div>
      )}
    </section>
  );
};

export default SidebarButton;
