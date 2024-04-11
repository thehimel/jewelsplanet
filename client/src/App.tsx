import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Home.tsx";
import NavigationBar from "./units/NavigationBar.tsx";

const App = () => {
  return (
    <BrowserRouter>
      <main>
        <NavigationBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
