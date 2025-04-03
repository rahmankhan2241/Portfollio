
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isValidEmail(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    
    if (!message.trim()) {
      toast.error("Please enter a message.");
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // In a real application, this would be an API call
      // For demo purposes, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast.success("Message sent successfully!");
      setEmail("");
      setMessage("");
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container max-w-5xl">
        <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Let's Talk</h3>
            <p className="text-muted-foreground">
              Want to connect with me ??
              Send me a message and I'll get back to you as soon as possible.
            </p>
            <div className="pt-6">
              <div className="rounded-lg border border-border p-6 bg-card">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <a 
                      href="mailto:shanerahman2241@gmail.com" 
                      className="text-primary hover:underline"
                    >
                      shanerahman2241@gmail.com
                    </a>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Based in</h4>
                    <p className="text-muted-foreground">Bengaluru , Karnataka , India </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="rounded-lg border border-border p-6 bg-card">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="What would you like to discuss?"
                  rows={6}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
              
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
