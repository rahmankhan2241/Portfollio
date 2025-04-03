import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { name: "About Me", path: "#about" },
  { name: "Skills", path: "#skills" },
  { name: "Work Experience", path: "#experience" },
  { name: "Projects", path: "#projects" }, // Removed dropdown
  { name: "Certificates", path: "#certificates" },
  { name: "Contact", path: "#contact" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-xl font-bold">
            Shane Rahman
          </Link>
        </div>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          className="flex md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>

        {/* Desktop menu */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.path}
              className="text-base transition-colors hover:text-primary"
            >
              {item.name}
            </a>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in md:hidden bg-background">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  className="font-medium transition-colors hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
