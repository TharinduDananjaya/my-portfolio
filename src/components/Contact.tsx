import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Get In <span className="text-gradient">Touch</span>
        </h2>
        
        <Card className="card-elevated p-8 md:p-12 border border-primary/20 text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Let's Work Together</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I'm always interested in hearing about new projects and opportunities.
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
          </div>
          
          <div className="flex flex-col items-center gap-4 pt-4">
            <Button size="lg" className="gap-2 shadow-lg hover:shadow-primary/50 transition-all">
              <Mail className="w-5 h-5" />
              <a href="mailto:htharinduherath@gmail.com">Send Me an Email</a>
            </Button>
            
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>Kandy, Sri Lanka</span>
            </div>
          </div>
          
          <div className="flex gap-6 justify-center pt-8 border-t border-primary/20">
            <a 
              href="https://github.com/TharinduDananjaya" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-5 h-5" />
              <span className="text-sm">GitHub</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/tharindudhananjayaherath/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span className="text-sm">LinkedIn</span>
            </a>
          </div>
        </Card>
        
        <div className="text-center mt-12 text-muted-foreground text-sm">
          <p>© 2025 Tharindu Herath. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
