import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Image, QrCode, Smile } from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "PDF Management",
    description: "Handle PDF files efficiently right from your browser. Split, merge, and compress PDFs with ease.",
  },
  {
    icon: Image,
    title: "Image Optimization",
    description: "Compress and resize images instantly without leaving your current tab or using external tools.",
  },
  {
    icon: QrCode,
    title: "QR Code Generation",
    description: "Create QR codes on the fly for any link or text. Perfect for sharing content quickly.",
  },
  {
    icon: Smile,
    title: "Stress Relief",
    description: "Take quick breaks with built-in relaxation tools to maintain productivity throughout your day.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-12 md:py-20 bg-muted/50 w-full">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Powerful Features at Your Fingertips
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need to boost your productivity, right in your browser.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card key={feature.title} className="border-2 transition-colors hover:border-primary">
              <CardHeader>
                <feature.icon className="h-12 w-12 text-primary mb-4" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}