import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import DesignSection from "./components/DesignSection";
import AutomationSection from "./components/AutomationSection";
import MyWorkSection from "./components/MyWorkSection";
import ContactSection from "./components/ContactSection";

export default function App() {
  return (
    <div className="w-full">
      <NavBar />
      {/* pt accounts for fixed navbar height */}
      <div className="pt-[60px]">
        <Hero />
        <DesignSection />
        <AutomationSection />
        <MyWorkSection />
        <ContactSection />
      </div>
    </div>
  );
}
