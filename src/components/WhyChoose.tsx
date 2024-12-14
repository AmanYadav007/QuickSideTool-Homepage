import { Check } from "lucide-react";

const reasons = [
  {
    title: "Clean Interface",
    description: "A minimal sidebar design that stays out of your way but remains easily accessible.",
  },
  {
    title: "Time-Saving",
    description: "Eliminate the need for multiple apps and websites with our all-in-one solution.",
  },
  {
    title: "User-Friendly",
    description: "Intuitive design that makes complex tasks simple for everyone.",
  },
  {
    title: "Privacy-Focused",
    description: "All processing is done locally in your browser, ensuring your data stays private.",
  },
];

export function WhyChoose() {
  return (
    <section id="why-choose" className="py-12 md:py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Why Choose Quick Side Tool
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Experience productivity like never before with our Chrome extension.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {reasons.map((reason) => (
            <div key={reason.title} className="flex gap-4 p-6 rounded-lg border-2">
              <div className="flex-shrink-0">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check className="h-5 w-5 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">{reason.title}</h3>
                <p className="text-muted-foreground">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}