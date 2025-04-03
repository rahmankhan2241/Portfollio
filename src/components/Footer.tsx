
import { Github, Linkedin, Mail, Youtube } from "lucide-react";
import { cn } from "@/lib/utils";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { 
      name: "YouTube", 
      icon: Youtube, 
      url: "https://youtube.com" 
    },
    { 
      name: "LinkedIn", 
      icon: Linkedin, 
      url: "https://linkedin.com" 
    },
    { 
      name: "GitHub", 
      icon: Github, 
      url: "https://github.com" 
    },
    { 
      name: "Email", 
      icon: Mail, 
      url: "mailto:shanerahman2241@gmail.com" 
    },
  ];

  return (
    <footer className="border-t border-border py-12">
      <div className="container">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center gap-4 mb-8">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "flex items-center justify-center w-10 h-10 rounded-full",
                  "border border-border transition-colors duration-300",
                  "hover:bg-primary hover:text-primary-foreground"
                )}
                aria-label={link.name}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            © {currentYear} Shane Rahman. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
