import HomeP1 from "./HomeP1";
import HomeP2 from "./HomeP2";
import Sidebar from "./Sidebar";
function App() {
  let logoColor: string | number = Math.floor(Math.random() * 3 + 1);
  if (logoColor === 1) {
    logoColor = "text-drawn-cyan";
  } else if (logoColor === 2) {
    logoColor = "text-drawn-orange";
  } else {
    logoColor = "text-drawn-magenta";
  }
  logoColor = "text-drawn-magenta";
  return (
    <div className="overflow-x-hidden bg-drawn-bg">
      <HomeP1 logoColor={logoColor} />
      <HomeP2 logoColor={logoColor} />
    </div>
  );
}

export default App;
