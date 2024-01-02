import "./App.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "./Header";
import Hero from "./Hero";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header />
      <div className="h-full w-full p-auto flex flex-col items-center mx-auto">
        <Hero />
      </div>
    </ThemeProvider>
  );
}

export default App;
