import { Navbar } from "react-bootstrap";

const Profile = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-drawn-magenta pt-[10%]">
        <div className="text-[000] bg-drawn-white flex flex-col">
          <img src="/external/images/biteof87.jpg" className="max-w-[15%] max-h-[15%] rounded-full self-center" />

          <h1 className="text-header font-header flex self-center">Username</h1>
          <section className="justify-around text-subheader font-header flex bg-[#D9D9D9]">
            <h2>Posts</h2>
            <h2>Drafts</h2>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Profile;
