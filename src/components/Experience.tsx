import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Axcertro (PVT) Ltd",
    role: "Full Stack Developer - Intern",
    period: "04/2024 – 10/2024",
    location: "Sri Lanka",
    projects: [
      {
        name: "Link Skill",
        description: "Developed key features such as Proposals, All Job Posts, and freelancer-side functionalities, including settings pages, billing and payment systems, and email updates with OTP verification."
      },
      {
        name: "Wedagedara Products",
        description: "Developed home page, product filtering, and shipping fee management system. Integrated OnePay for payment processing and deployed on Clever Cloud."
      },
      {
        name: "Hang-10",
        description: "Contributed to notification email services and Laravel broadcasting for real-time updates. Enhanced admin-side location management."
      },
      {
        name: "MF Mart",
        description: "Enhanced online grocery platform with shipping fee management, Excel export/import, Cash on Delivery, and rider dashboard."
      },
      {
        name: "Learnhub",
        description: "Built and deployed a complete Learning Management System with student registration, course enrollment, and teacher management features."
      }
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Professional <span className="text-gradient">Experience</span>
        </h2>
        
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <Card key={idx} className="card-elevated p-8 border border-primary/20 animate-fade-in">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-primary">{exp.company}</h3>
                  <p className="text-xl font-semibold mt-1">{exp.role}</p>
                  <div className="flex flex-wrap gap-2 mt-2 text-sm text-muted-foreground">
                    <span>{exp.period}</span>
                    <span>•</span>
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <h4 className="text-lg font-semibold">Key Projects:</h4>
                {exp.projects.map((project, projIdx) => (
                  <div key={projIdx} className="pl-6 border-l-2 border-primary/30 space-y-2">
                    <Badge variant="outline" className="border-primary/50 text-primary">
                      {project.name}
                    </Badge>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
