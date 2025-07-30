import { useEffect, useState } from "react";
import PromptSelector from "./Components/PromptSelector";

type mon = {
  species: {
    name: string;
  };
};

const Medium = () => {
  const [mediumPrompts, setMediumPrompts] = useState([
    "Wizard Kitty",
    "Treehouse in an Ancient Tree",
    "Robot Rehydrating",
    "A Bicycle that's been Locked up",
    "Serpent Wrapped around Treasure",
    "A Group of Aliens",
    "Fox in a Scarf",
    "A Steampunker",
    "Peasant",
    "Vintage Photo",
    "Dung Beetle",
    "Kraken",
    "Mushroom Forest",
    "A TV Man",
    "Dog with Butter on its Head",
    "Field of Sunflowers",
    "Koi Pond",
    "Gingerbread House",
    "World Turtle",
    "Beautiful Sunset",
    "Skateboarder Doing a Trick",
    "Shattered Pair of Goggles",
    "The Red String of Fate",
    "Mystic Cave",
    "Siren at Sea",
    "An Eclipse",
  ]);
  useEffect(() => {
    const fetchMon = async () => {
      const dexNum = Math.floor(Math.random() * (151 - 1)) + 1;

      const url = `https://pokeapi.co/api/v2/pokemon/${dexNum}`;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const result: mon = await response.json();
        console.log(result);
        setMediumPrompts([...mediumPrompts, String(result.species.name).charAt(0).toUpperCase() + String(result.species.name).slice(1)]);
      } catch (error: any) {
        console.error(error.message);
      }
    };
    fetchMon();
  }, []);
  return (
    <div>
      <PromptSelector color="orange" prompts={mediumPrompts} />
    </div>
  );
};
export default Medium;
