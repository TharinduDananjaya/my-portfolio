import { Card } from "@/components/ui/card";
import profileImage from "@/assets/profile.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          About <span className="text-gradient">Me</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-3xl animate-glow"></div>
              <img 
                src={profileImage} 
                alt="Tharindu Herath" 
                className="relative rounded-2xl shadow-2xl max-w-sm w-full border-2 border-primary/30"
              />
            </div>
          </div>
          
          <div className="space-y-6 animate-slide-in">
            <Card className="card-elevated p-8 border border-primary/20">
              <h3 className="text-2xl font-bold mb-4 text-primary">Profile</h3>
              <p className="text-muted-foreground leading-relaxed">
                I am a passionate and adaptable individual with hands-on experience in full-stack 
                development and team collaboration. I excel in dynamic environments, leveraging 
                problem-solving skills and creativity to deliver efficient solutions.
              </p>
            </Card>
            
            <Card className="card-elevated p-8 border border-primary/20">
              <h3 className="text-2xl font-bold mb-4 text-primary">Education</h3>
              <div className="space-y-2">
                <p className="font-semibold">BSc. (Hons) in Information Technology</p>
                <p className="text-muted-foreground">University of Moratuwa</p>
                <p className="text-sm text-muted-foreground">2021 – 2025 | Moratuwa, Sri Lanka</p>
              </div>
            </Card>
            
            <Card className="card-elevated p-8 border border-primary/20">
              <h3 className="text-2xl font-bold mb-4 text-primary">Personal Interests</h3>
              <div className="flex flex-wrap gap-2">
                {["Outdoor Adventures", "Playing Instruments", "Reading Novels"].map((interest) => (
                  <span 
                    key={interest}
                    className="px-4 py-2 bg-muted rounded-full text-sm border border-primary/20"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
