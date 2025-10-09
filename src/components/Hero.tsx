import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-card opacity-50"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Hi, I'm{" "}
              <span className="text-gradient">Tharindu Herath</span>
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground font-medium">
              Software Engineer
            </p>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Passionate about building innovative web applications with modern technologies.
            Specializing in React, Laravel, Node.js, and cloud solutions.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center items-center pt-4">
            <Button size="lg" className="gap-2 shadow-lg hover:shadow-primary/50 transition-all">
              <a href="#contact" className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Get In Touch
              </a>
            </Button>
            
            <Button
  size="lg"
  variant="outline"
  className="gap-2 border-primary/50 hover:border-primary"
  asChild
>
  <a
    href="https://drive.google.com/uc?export=download&id=1aqoVVShfeWHPIGXhtorAYhF2YlxI9ds5"
    download
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2"
  >
    <Download className="w-5 h-5" />
    Download CV
  </a>
</Button>



          </div>
          
          <div className="flex gap-6 justify-center pt-8">
            <a 
              href="https://github.com/TharinduDananjaya" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/tharindudhananjayaherath/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
           <a 
  href="mailto:htharinduherath@gmail.com"
  className="text-muted-foreground hover:text-primary transition-colors"
>
  <Mail className="w-6 h-6" />
</a>

          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
