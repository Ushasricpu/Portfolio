import { Toaster } from "sonner";
import { Nav } from "./components/nav";
import { Hero } from "./components/hero";
import { Impact } from "./components/impact";
import { Architecture } from "./components/architecture";
import { CaseStudies } from "./components/case-studies";
import { Journey } from "./components/journey";
import { Research } from "./components/research";
import { Leadership } from "./components/leadership";
import { Ecosystem } from "./components/ecosystem";
import { Contact } from "./components/contact-new";

export default function App() {
  return (
    <div className="min-h-screen bg-[#09090b] text-foreground">
      <Nav />
      <main>
        <Hero />
        <Impact />

        <CaseStudies />
        <Journey />
        <Research />
        <Leadership />
        <Ecosystem />
        <Contact />
      </main>
      <Toaster
        theme="dark"
        toastOptions={{
          style: {
            background: "#0f0f14",
            border: "1px solid rgba(255,255,255,0.07)",
            color: "#fafafa",
          },
        }}
      />
    </div>
  );
}
