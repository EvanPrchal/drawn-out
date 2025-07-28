import { Link } from "react-router-dom";
import Button from "./Components/Button";
const Prompts = () => {
  return (
    <div className="flex flex-col justify-around items-center gap-25 h-full  bg-[url(/external/images/background.png)] p-[3%]">
      <h1 className="font-header text-header text-drawn-white">Prompt Difficulty</h1>
      <Link to={"easy"}>
        <Button
          text="Easy"
          buttonColor="bg-drawn-cyan"
          hlColor="hover:text-drawn-black"
          borderColor="border-drawn-cyan"
          textColor="text-drawn-white"
        />
      </Link>
      <Link to={"medium"}>
        <Button
          text="Medium"
          buttonColor="bg-drawn-orange"
          hlColor="hover:text-drawn-black"
          borderColor="border-drawn-orange"
          textColor="text-drawn-white"
        />
      </Link>
      <Link to={"hard"}>
        <Button
          text="Hard"
          buttonColor="bg-drawn-magenta"
          hlColor="hover:text-drawn-black"
          borderColor="border-drawn-magenta"
          textColor="text-drawn-white"
        />
      </Link>
    </div>
  );
};

export default Prompts;
