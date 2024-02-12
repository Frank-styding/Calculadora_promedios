import useWindowDimensions from "./hooks/useWindowDimensions";
import Home from "./views/phone/Home/Home";
import HomeWeb from "./views/web/homeWeb";

function App() {
  const dimensions = useWindowDimensions();
  const isPhone = Math.min(dimensions.width, dimensions.height) < 400;
  return <>{isPhone ? <Home /> : <HomeWeb />}</>;
}

export default App;
