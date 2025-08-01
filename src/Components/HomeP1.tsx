import { Link } from "react-router-dom";
import Button from "./Button";
import Logo from "./Logo";
type HomeP1Props = {
  logoColor: string;
};
const HomeP1: React.FC<HomeP1Props> = ({ logoColor }) => {
  return (
    <div className="bg-drawn-bg h-screen">
      <div className="m-[7%]">
        <div className="flex justify-around items-center gap-15">
          <section className="flex flex-col items-start font-header text-drawn-white">
            <h2 className="text-header -mb-10 text-nowrap">Welcome to</h2>
            <Logo logoColor={logoColor} size="text-logotype" />
            <section className="flex flex-col justify-between gap-20">
              <p className="font-body text-body italic">The drawing website for thinking outside of the box</p>
              <div className="flex font-body justify-start text-[40px]">
                <section className="flex items-center gap-5">
                  <Link to={"login"}>
                    <Button
                      text="LOGIN"
                      buttonColor="bg-drawn-white"
                      textColor="text-drawn-bg"
                      borderColor="border-drawn-white"
                      hlColor={logoColor}
                    />
                  </Link>
                  <Link to={"signup"}>
                    <Button
                      text="SIGN UP"
                      buttonColor="bg-drawn-bg"
                      textColor="text-drawn-white"
                      borderColor="border-drawn-white"
                      hlColor={logoColor}
                    />
                  </Link>
                </section>
              </div>
            </section>
          </section>
          <img
            src="/external/images/fillerimg.png"
            alt="WOW LOOK COOL ART WOOOOOW!!!1"
            className="text-header font-header text-[#211730] text-center lg:max-w-[50%]"
          ></img>
        </div>
        <p className="text-body font-body italic text-drawn-white flex justify-end">Artist Credit</p>
      </div>
    </div>
  );
};

export default HomeP1;
