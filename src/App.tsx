import { Button } from "./components/Button";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import Services from "./components/Services";
import Works from "./components/Works";
import About from "./components/About";
//import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

function App() {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <button
        type="button"
        onClick={handleThemeSwitch}
        className="fixed z-10 right-2 top-2 bg-indigo-500
    text-lg p-1 rounded-md"
      >
        {" "}
        {theme === "dark" ? "🌙" : "☀️"}
      </button>
      <div className="font-inter bg-white dark:bg-slate-900">
        <div className="'max-w-5xl mx-auto w-11/12">
          <HeroSection />
          <About />
          <Services />
          <Works />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
