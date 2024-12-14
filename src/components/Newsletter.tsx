import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";

export function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thanks for subscribing!");
    setEmail("");
  };

  return (
    <section className="py-12 md:py-20 bg-muted/50">
      <div className="container max-w-[64rem] text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Stay Updated
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Subscribe to our newsletter for the latest updates and features.
        </p>
        <form onSubmit={handleSubmit} className="mt-6 flex gap-2 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button type="submit">Subscribe</Button>
        </form>
      </div>
    </section>
  );
}