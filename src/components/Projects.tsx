import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Intelligent System for Identifying Venomous Snakes",
    period: "2024 – 2025",
    description: "A final year research project focused on developing an AI-powered system to identify venomous snake species and deliver real-time safety guidelines through an NLP-based chatbot.",
    tags: ["AI/ML", "NLP", "Computer Vision", "Research"]
  },
  {
    title: "BookRental Platform",
    period: "05/2025 – 06/2025",
    description: "Developed a fullstack book rental application with Laravel 11 (MySQL) backend and React + Redux Toolkit + TypeScript frontend. Implemented RESTful APIs, role-based access control, and a clean UI.",
    tags: ["Laravel", "React", "Redux", "TypeScript", "MySQL"]
  },
  {
    title: "ZoneED - School Management System",
    period: "2024",
    description: "A web application designed to streamline school management and enhance coordination between zonal offices and schools. Supports six user types with features like teacher schedules, leave management, attendance, and more.",
    tags: ["Angular", "Springboot", "MongoDB", "Firebase"]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <Card 
              key={idx}
              className="card-elevated p-6 border border-primary/20 hover:border-primary/50 transition-all duration-300 group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                
                <p className="text-sm text-muted-foreground font-medium">{project.period}</p>
                
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
