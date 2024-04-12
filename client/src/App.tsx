import {useTheme} from "next-themes";
import {useEffect} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Home.tsx";
import {useAppSelector} from "./store/hooks.ts";
import Footer from "@/components/Navigation/Footer.tsx";
import NavigationBar from "@/components/Navigation/NavigationBar.tsx";

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
        <Footer/>
      </main>
    </BrowserRouter>
  );
};

export default App;
