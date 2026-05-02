import Hero from "./components/Hero";
import StatsBanner from "./components/StatsBanner";
import Gallery from "./components/Gallery";
import Faculty from "./components/Faculty";
import RegistrationForm from "./components/RegistrationForm";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <StatsBanner />
      <Gallery />
      <Faculty />
      <RegistrationForm />
      <ContactSection />
    </main>
  );
}
