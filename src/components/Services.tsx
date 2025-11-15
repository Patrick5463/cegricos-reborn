import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Shield,
  FileText,
  Users,
  AlertTriangle,
  ClipboardCheck,
  BookOpen,
} from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Evaluare de Risc",
    description:
      "Identificăm și evaluăm riscurile de accidentare și îmbolnăvire profesională, oferind soluții concrete pentru prevenire.",
  },
  {
    icon: FileText,
    title: "Documentație SSM",
    description:
      "Elaborăm și menținem la zi întreaga documentație necesară conform legislației în vigoare pentru securitatea muncii.",
  },
  {
    icon: Users,
    title: "Instruire Personal",
    description:
      "Organizăm instruiri periodice pentru personal în domeniul securității și sănătății în muncă, adaptate specificului fiecărei companii.",
  },
  {
    icon: AlertTriangle,
    title: "Cercetare Accidente",
    description:
      "Cercetăm incidentele și accidentele de muncă, propunând măsuri preventive pentru evitarea acestora în viitor.",
  },
  {
    icon: ClipboardCheck,
    title: "Audit & Consultanță",
    description:
      "Realizăm audituri complete ale sistemului de SSM și oferim consultanță specializată pentru conformitate.",
  },
  {
    icon: BookOpen,
    title: "Legislație & Conformitate",
    description:
      "Vă ținem la curent cu modificările legislative și asigurăm conformitatea completă a companiei dvs.",
  },
];

const Services = () => {
  return (
    <section id="servicii" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Serviciile Noastre
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluții complete și personalizate pentru securitatea și sănătatea
            angajaților tăi
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-gradient-card border-border shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="text-primary" size={28} />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
