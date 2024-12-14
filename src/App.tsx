import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { WhyChoose } from "@/components/WhyChoose";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";
import { useTheme } from "@/hooks/use-theme";

export default function App() {
  useTheme();

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <WhyChoose />
        <Newsletter />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}