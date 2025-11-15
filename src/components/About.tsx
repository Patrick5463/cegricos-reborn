import { CheckCircle } from "lucide-react";

const benefits = [
  "Echipă de specialiști certificați în SSM",
  "Experiență de peste 15 ani în domeniu",
  "Răspuns rapid la solicitări",
  "Servicii personalizate pentru fiecare client",
  "Consultanță gratuită inițială",
  "Suport complet în implementare",
];

const About = () => {
  return (
    <section id="despre" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Despre Noi
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Cu o experiență de peste 15 ani în domeniul securității și
              sănătății în muncă, <strong>CEGRICOS</strong> s-a impus ca un
              partener de încredere pentru sute de companii din România.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Echipa noastră de specialiști certificați oferă servicii
              profesionale, adaptate nevoilor fiecărui client. Ne concentrăm pe
              prevenție și conformitate, asigurând un mediu de lucru sigur
              pentru toți angajații.
            </p>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 animate-slide-in-left"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle className="text-secondary flex-shrink-0 mt-1" size={24} />
                  <span className="text-foreground font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-slide-in-right">
            <div className="bg-gradient-hero rounded-2xl p-8 text-primary-foreground shadow-medium">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Misiunea Noastră</h3>
                  <p className="text-primary-foreground/90">
                    Să oferim cele mai profesionale servicii de securitate și
                    sănătate în muncă, contribuind la crearea unui mediu de
                    lucru sigur și productiv.
                  </p>
                </div>

                <div className="border-t border-primary-foreground/20 pt-6">
                  <h3 className="text-2xl font-bold mb-2">Valorile Noastre</h3>
                  <ul className="space-y-2 text-primary-foreground/90">
                    <li>• Profesionalism și integritate</li>
                    <li>• Orientare către client</li>
                    <li>• Inovație și îmbunătățire continuă</li>
                    <li>• Siguranță și conformitate totală</li>
                  </ul>
                </div>

                <div className="border-t border-primary-foreground/20 pt-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-4xl font-bold">500+</div>
                      <div className="text-sm text-primary-foreground/80">
                        Clienți Activi
                      </div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold">15+</div>
                      <div className="text-sm text-primary-foreground/80">
                        Ani Experiență
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
