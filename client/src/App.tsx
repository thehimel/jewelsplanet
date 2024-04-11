import {useTheme} from "next-themes";
import {useEffect} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Home.tsx";
import {useAppSelector} from "./store/hooks.ts";
import NavigationBar from "./units/Navigation/NavigationBar.tsx";

const App = () => {
  const darkMode = useAppSelector((state) => state.base.darkMode);
  const { setTheme } = useTheme();
  useEffect(() => {
    setTheme(darkMode ? 'dark' : 'light');
  }, [darkMode, setTheme]);

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
