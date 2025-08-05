import { Link } from "react-router-dom";
import Button from "./Button";
type PromptSelectorProps = {
  color: string;
  prompts: string[];
};

const PromptSelector: React.FC<PromptSelectorProps> = ({ color, prompts }) => {
  const randomNumber: any = (max: number, min: number, except1: number, except2: number) => {
    let num = Math.floor(Math.random() * (max - min)) + min;
    return num === except1 || num === except2 ? randomNumber(max, min, except1, except2) : num;
  };
  const randomIndex1 = randomNumber(0, prompts.length, -1, -2);
  const randomIndex2 = randomNumber(0, prompts.length, randomIndex1, -1);
  const randomIndex3 = randomNumber(0, prompts.length, randomIndex2, randomIndex1);

  let prompt1 = prompts[randomIndex1];
  let prompt2 = prompts[randomIndex2];
  let prompt3 = prompts[randomIndex3];

  let difficulty = "Hard";
  if (color === "cyan") {
    difficulty = "Easy";
  } else if (color === "orange") {
    difficulty = "Medium";
  } else {
    difficulty = "Hard";
  }

  return (
    <div className={`bg-[url(/external/images/background.png)] bg-drawn-${color} flex flex-col items-center justify-around gap-25 h-full p-[6%] `}>
      <h1 className={`font-header text-body text-drawn-${color} rounded-full bg-drawn-white p-1 px-20 self-start`}>{difficulty} Prompts</h1>
      <section className="flex flex-col justify-around gap-25">
        <Link to={"/Sketch"} state={{ prompt: { prompt1 } }}>
          <Button
            text={prompt1}
            buttonColor="bg-drawn-white"
            hlColor="hover:text-drawn-black"
            borderColor="border-drawn-white"
            textColor={`text-drawn-${color}`}
          />
        </Link>
        <Link to={"/Sketch"} state={{ prompt: { prompt2 } }}>
          <Button
            text={prompt2}
            buttonColor="bg-drawn-white"
            hlColor="hover:text-drawn-black"
            borderColor="border-drawn-white"
            textColor={`text-drawn-${color}`}
          />
        </Link>
        <Link to={"/Sketch"} state={{ prompt: { prompt3 } }}>
          <Button
            text={prompt3}
            buttonColor="bg-drawn-white"
            hlColor="hover:text-drawn-black"
            borderColor="border-drawn-white"
            textColor={`text-drawn-${color}`}
          />
        </Link>
      </section>
    </div>
  );
};

export default PromptSelector;
