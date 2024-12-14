import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { QuickSideToolLogo } from "@/components/ui/icons";
import { CHROME_STORE_URL } from "@/lib/constants";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <QuickSideToolLogo className="h-6 w-6" />
          <span className="font-semibold">Quick Side Tool</span>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-6">
            <a href="#features" className="text-sm font-medium hover:text-primary">Features</a>
            <a href="#why-choose" className="text-sm font-medium hover:text-primary">Why Choose</a>
            <a href="#install" className="text-sm font-medium hover:text-primary">Install</a>
          </nav>
          <ThemeToggle />
          <Button variant="default" asChild>
            <a href={CHROME_STORE_URL} target="_blank" rel="noopener noreferrer">
              Get Extension
            </a>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <nav className="flex flex-col gap-4">
              <a href="#features" className="text-sm font-medium hover:text-primary">Features</a>
              <a href="#why-choose" className="text-sm font-medium hover:text-primary">Why Choose</a>
              <a href="#install" className="text-sm font-medium hover:text-primary">Install</a>
              <div className="flex items-center gap-4">
                <ThemeToggle />
                <Button variant="default" asChild className="flex-1">
                  <a href={CHROME_STORE_URL} target="_blank" rel="noopener noreferrer">
                    Get Extension
                  </a>
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}