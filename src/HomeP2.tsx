type HomeP2Props = {
  logoColor: string;
};

const HomeP2: React.FC<HomeP2Props> = ({ logoColor }) => {
  let bgColor = "bg-drawn-magenta";
  if (logoColor === "text-drawn-cyan") {
    bgColor = "bg-drawn-cyan";
  } else if (logoColor === "text-drawn-orange") {
    bgColor = "bg-drawn-orange";
  } else {
    bgColor = "bg-drawn-magenta";
  }

  return (
    <div className={`flex justify-center items-center bg-[url(/external/images/background.png)] ${bgColor} bg-cover`}>
      <div className="flex flex-col items-center bg-drawn-black text-drawn-white w-[80%] p-[7.5%]">
        <div className="flex flex-col items-center justify-center w-full">
          <img
            src="/external/images/fillerimg.png"
            alt="WOW LOOK COOL ART WOOOOOW!!!1"
            className="text-header font-header text-[#211730] text-center w-full"
          ></img>
          <section className="text-left flex flex-col justify-center w-full">
            <h2 className="text-header font-header text-drawn-white text-left">What is DRAWNOUT?</h2>
            <p className="text-body font-body text-drawn-white text-left">
              DrawnOut is a minimalist, community based art application inspired by the likes of Flipnote Hatena, Newgrounds, Skribbl.io, and MsPaint.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default HomeP2;
