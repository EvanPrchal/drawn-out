import { Navbar } from "react-bootstrap";
import { useLocation } from "react-router-dom";
const Profile = () => {
  const location = useLocation();
  let username: string = location.state.user;
  if (username === undefined) {
    username = "Username";
  }
  console.log(username);
  return (
    <div>
      <Navbar />
      <div className="bg-drawn-magenta pt-[10%]">
        <div className="text-[000] bg-drawn-white flex flex-col">
          <img src="/external/images/avatar.jpg" className="w-[12.5%] h-[12.5%] rounded-full self-center" />

          <h1 className="text-header font-header flex self-center">{username}</h1>
          <section className="justify-around text-subheader font-header flex">
            <h2 className="bg-[#D9D9D9]">Posts</h2>
            <h2 className="bg-[#D9D9D9]">Drafts</h2>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Profile;
