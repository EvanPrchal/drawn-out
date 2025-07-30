import PromptSelector from "./Components/PromptSelector";
const Hard = () => {
  let hardPrompts = [
    "A Wrinkly Old Person",
    "Saturn Themed Town",
    "Dragon",
    "A Martian Delicacy",
    "Underwater Civilization",
    "Medieval Tavern",
    "Cat made up of Geometric Shapes.",
    "A Flourescent Forest",
    "Crowded Train Station",
    "Ancient Necromancer",
    "Alien Space Station",
    "Samurai",
    "Steampunk Contraption",
    "Jovial Man",
    "Dark Knight",
    "Bird Struck by Lightning",
    "Rainy Cityscape",
    "A Flower Blooming",
    "Two Animals Fighting",
    "Ashen Castle",
    "An Ancient Horror",
    "An Overgrown City",
    "A Person with Weapons for Hands",
    "The Pompeii Eruption",
    "A Clocktower at Midnight",
  ];
  return (
    <div>
      <PromptSelector color="magenta" prompts={hardPrompts} />
    </div>
  );
};
export default Hard;
