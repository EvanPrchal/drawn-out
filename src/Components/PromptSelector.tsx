import Easy from "../Easy";
import Button from "./Button";
type PromptSelectorProps = {
  color: string;
  prompts: string[];
};

const PromptSelector: React.FC<PromptSelectorProps> = ({ color, prompts }) => {
  const randomNumber: any = (max: number, min: number, except: number) => {
    let num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num === except ? randomNumber(max, min, except) : num;
  };

  let difficulty = "Hard";
  if (color === "cyan") {
    difficulty = "Easy";
  } else if (color === "orange") {
    difficulty = "Medium";
  } else {
    difficulty = "Hard";
  }

  const randomIndex1 = randomNumber(0, prompts.length, -1);
  const randomIndex2 = randomNumber(0, prompts.length, randomIndex1);
  const randomIndex3 = randomNumber(0, prompts.length, randomIndex2);

  let prompt1 = prompts[randomIndex1];
  let prompt2 = prompts[randomIndex2];
  let prompt3 = prompts[randomIndex3];
  return (
    <div className={`bg-[url(/external/images/background.png)] bg-drawn-${color} flex flex-col items-center justify-around gap-25 h-full p-[4%] `}>
      <h1 className="font-header text-subheader text-drawn-white">{difficulty} Prompts</h1>
      <Button text={prompt1} buttonColor="bg-drawn-white" hlColor="" borderColor="border-drawn-white" textColor={`text-drawn-${color}`} />
      <Button text={prompt2} buttonColor="bg-drawn-white" hlColor="" borderColor="border-drawn-white" textColor={`text-drawn-${color}`} />
      <Button text={prompt3} buttonColor="bg-drawn-white" hlColor="" borderColor="border-drawn-white" textColor={`text-drawn-${color}`} />
    </div>
  );
};

export default PromptSelector;
