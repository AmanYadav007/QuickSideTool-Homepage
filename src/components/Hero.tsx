import { Button } from "@/components/ui/button";
import { FileText, Image, QrCode } from "lucide-react";

export function Hero() {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20 w-full">
      <div className="container flex flex-col items-center text-center">
        <div className="flex gap-4 mb-8">
          <FileText className="h-12 w-12 text-primary" />
          <Image className="h-12 w-12 text-primary" />
          <QrCode className="h-12 w-12 text-primary" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl">
          Your All-in-One Browser
          <span className="text-primary"> Sidebar Assistant</span>
        </h1>
        <p className="mt-6 max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Streamline your workflow with Quick Side Tool. Manage PDFs, optimize images, generate QR codes, and more—all without leaving your current tab.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button size="lg" asChild>
            <a href="https://chromewebstore.google.com/detail/quick-side-tool/ednlokciemgblchidkhbhhndphgjkoip" target="_blank" rel="noopener noreferrer">
              Install Extension
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#features">Learn More</a>
          </Button>
        </div>
      </div>
    </section>
  );
}