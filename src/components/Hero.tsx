
import { TypeWriter } from "./TypeWriter";
import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail, View, Youtube } from "lucide-react";
import { cn } from "@/lib/utils";

export function Hero() {
  const socialLinks = [
    { 
      name: "YouTube", 
      icon: Youtube, 
      url: "https://youtube.com/@unicode_2241" 
    },
    { 
      name: "LinkedIn", 
      icon: Linkedin, 
      url: "https://www.linkedin.com/in/rahman2241/" 
    },
    { 
      name: "GitHub", 
      icon: Github, 
      url: "https://github.com/rahmankhan2241" 
    },
    { 
      name: "Email", 
      icon: Mail, 
      url: "mailto:shanerahman2241@gmail.com" 
    },
  ];

  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex flex-col justify-center py-20">
      {/* Background decorations */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="flex flex-col space-y-8 text-center lg:text-left order-2 lg:order-1">
          <div>
            <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
              Shane Rahman
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl mt-4 text-muted-foreground">
              <TypeWriter texts={["Data Analyst", "YouTuber", "Data Scientist", "Content Creator"]} />
            </h2>
          </div>
          
          <p className="text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0">
            Transforming complex data into actionable insights. Passionate about solving problems
            and sharing knowledge through data analysis and YouTube content.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button className="gap-2 group" onClick={() => window.open("https://drive.google.com/file/d/1UGTe_XZ6KQDyyp3Hw7x_jHO7NyjTTDJy/view?usp=sharing")}>
              <View className="w-4 h-4 transition-transform group-hover:-translate-y-1" />
              View Resume
            </Button>
            
            <div className="flex items-center justify-center sm:justify-start gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "flex items-center justify-center w-10 h-10 rounded-full",
                    "border border-border transition-all duration-300",
                    "hover:bg-primary hover:text-primary-foreground",
                    "hover:scale-110"
                  )}
                  aria-label={link.name}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
            {/* Profile image container with animation */}
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-primary p-2 animate-[pulse-slow_4s_ease-in-out_infinite]">
              <img 
                src="https://res.cloudinary.com/dkptwn7nn/image/upload/v1747028198/portfolio_image_1_i6l1gb.jpg" 
                alt="Shane Rahman" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary/20 rounded-full blur-md"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary/20 rounded-full blur-md"></div>
            <div className="absolute top-1/2 -right-8 w-6 h-6 bg-primary rounded-full"></div>
            <div className="absolute bottom-1/4 -left-8 w-4 h-4 bg-primary rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
