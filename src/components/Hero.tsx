import { Button } from "@/components/ui/button";
import { Shield, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Workplace Safety"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/30" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <div className="flex items-center gap-2 mb-6">
            <Shield className="text-secondary" size={32} />
            <span className="text-secondary font-semibold text-lg">
              Securitate și Sănătate în Muncă
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Protejăm Compania Ta
            <span className="text-primary block">Cu Soluții Profesionale</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
            Oferim servicii complete de securitate și sănătate în muncă,
            adaptate nevoilor companiei tale. Echipa noastră de specialiști
            certificați asigură conformitatea și siguranța angajaților tăi.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-gradient-hero shadow-medium hover:shadow-soft transition-all text-lg h-14 group"
            >
              Solicită Consultanță Gratuită
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                const element = document.getElementById("servicii");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg h-14"
            >
              Descoperă Serviciile
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-8 max-w-xl">
            <div className="text-center animate-slide-in-left">
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Ani Experiență</div>
            </div>
            <div className="text-center animate-slide-in-left" style={{ animationDelay: "0.1s" }}>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Clienți Mulțumiți</div>
            </div>
            <div className="text-center animate-slide-in-left" style={{ animationDelay: "0.2s" }}>
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Conformitate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
