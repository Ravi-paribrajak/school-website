import Hero from "./components/Hero";
import NoticeBoard from "./components/NoticeBoard";
import StatsBanner from "./components/StatsBanner";
import TabbedShowcase from "./components/TabbedShowcase";
import Programs from "./components/Programs";
import Faculty from "./components/Faculty";
import Testimonials from "./components/Testimonials";
import RegistrationForm from "./components/RegistrationForm";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <NoticeBoard />
      <StatsBanner />
      <TabbedShowcase />
      <Programs />
      <Faculty />
      <Testimonials />
      <RegistrationForm />
      <ContactSection />
    </main>
  );
}
