import PromptSelector from "./Components/PromptSelector";
const Easy = () => {
  let easyPrompts = [
    "Balloon",
    "Steaming Coffee Cup",
    "Old TV",
    "Pencil",
    "Light bulb",
    "Strawberry",
    "Fish",
    "Potted Plant",
    "Cloud",
    "Cat",
    "Donut with Sprinkles",
    "Tree",
    "Mountain",
    "Heart",
    "Leaf with Veins",
    "Snowflake",
    "Butterfly",
    "Bunny",
    "A Wave",
    "The Sun",
    "Watermelon Slice",
    "Carrot",
    "Hamburger",
    "Businessman",
  ];
  return (
    <div>
      <PromptSelector color="cyan" prompts={easyPrompts} />
    </div>
  );
};
export default Easy;
