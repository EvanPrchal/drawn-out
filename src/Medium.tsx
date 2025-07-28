import PromptSelector from "./Components/PromptSelector";
const Medium = () => {
  let mediumPrompts = [
    "Balloon",
    "Steaming Coffee Cup",
    "An old TV",
    "Pencil",
    "Light bulb",
    "Strawberry",
    "Fish",
    "Potted Plant",
    "Cloud",
    "A Cat",
    "Donut with sprinkles",
    "Tree",
    "Mountain",
    "Heart",
    "Leaf with veins",
    "Snowflake",
    "Butterfly",
    "Bunny",
    "A Wave",
    "The Sun",
    "Watermelon slice",
    "Carrot",
    "Hamburger",
    "Stack of suitcases",
  ];
  return (
    <div>
      <PromptSelector color="orange" prompts={mediumPrompts} />
    </div>
  );
};
export default Medium;
