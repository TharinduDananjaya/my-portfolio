import { Card } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["C", "Java", "PHP", "JavaScript", "TypeScript", "Python"]
  },
  {
    title: "Frontend",
    skills: ["HTML 5", "React", "Redux Toolkit", "Angular", "Tailwind CSS", "Bootstrap", "InertiaJS", "Vite"]
  },
  {
    title: "Backend",
    skills: ["Laravel", "Node.js", "Springboot"]
  },
  {
    title: "Databases",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Firebase Cloud"]
  },
  {
    title: "Tools & Others",
    skills: ["Git", "Playwright", "Cucumber", "JUnit", "Clever Cloud"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Technical <span className="text-gradient">Skills</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <Card 
              key={idx} 
              className="card-elevated p-6 border border-primary/20 hover:border-primary/50 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <h3 className="text-xl font-bold mb-4 text-primary">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1.5 bg-muted rounded-lg text-sm font-medium border border-primary/10 hover:border-primary/30 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
