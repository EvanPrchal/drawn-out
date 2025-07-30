import { Link } from "react-router-dom";
import Button from "./Components/Button";
const Prompts = () => {
  return (
    <div className="flex flex-col justify-around items-center gap-25 h-full  bg-[url(/external/images/background.png)]  p-[6%]">
      <h1 className="font-header text-body text-drawn-black rounded-full bg-drawn-white p-1 px-20 self-start">Prompt Difficulty</h1>
      <section className="flex flex-col justify-around gap-25">
        <Link to={"easy"}>
          <Button
            text="Easy"
            buttonColor="bg-drawn-cyan"
            hlColor="hover:text-drawn-white"
            borderColor="border-drawn-cyan"
            textColor="text-drawn-black"
          />
        </Link>
        <Link to={"medium"}>
          <Button
            text="Medium"
            buttonColor="bg-drawn-orange"
            hlColor="hover:text-drawn-white"
            borderColor="border-drawn-orange"
            textColor="text-drawn-black"
          />
        </Link>
        <Link to={"hard"}>
          <Button
            text="Hard"
            buttonColor="bg-drawn-magenta"
            hlColor="hover:text-drawn-white"
            borderColor="border-drawn-magenta"
            textColor="text-drawn-black"
          />
        </Link>
      </section>
    </div>
  );
};

export default Prompts;
