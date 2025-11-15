import { Shield } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield size={32} />
              <span className="text-2xl font-bold">CEGRICOS</span>
            </div>
            <p className="text-background/80">
              Soluții profesionale pentru securitate și sănătate în muncă.
              Partenerul tău de încredere pentru un mediu de lucru sigur.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Link-uri Rapide</h3>
            <ul className="space-y-2 text-background/80">
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("servicii");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="hover:text-background transition-colors"
                >
                  Servicii
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("despre");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="hover:text-background transition-colors"
                >
                  Despre Noi
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("contact");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="hover:text-background transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-background/80">
              <li>
                <a
                  href="mailto:contact@cegricos.ro"
                  className="hover:text-background transition-colors"
                >
                  contact@cegricos.ro
                </a>
              </li>
              <li>
                <a
                  href="tel:+40721228623"
                  className="hover:text-background transition-colors"
                >
                  +40 721 228 623
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-background/60">
          <p>© {currentYear} CEGRICOS. Toate drepturile rezervate.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
