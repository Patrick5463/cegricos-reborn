import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-2xl font-bold text-primary transition-colors hover:text-primary-glow"
          >
            CEGRICOS
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("servicii")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Servicii
            </button>
            <button
              onClick={() => scrollToSection("despre")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Despre Noi
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Contact
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-hero shadow-soft hover:shadow-medium transition-all"
            >
              Solicită Ofertă
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 bg-background border-t border-border">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("servicii")}
                className="text-foreground hover:text-primary transition-colors font-medium text-left px-4 py-2"
              >
                Servicii
              </button>
              <button
                onClick={() => scrollToSection("despre")}
                className="text-foreground hover:text-primary transition-colors font-medium text-left px-4 py-2"
              >
                Despre Noi
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-foreground hover:text-primary transition-colors font-medium text-left px-4 py-2"
              >
                Contact
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-hero mx-4"
              >
                Solicită Ofertă
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
