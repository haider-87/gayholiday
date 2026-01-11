import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Mail, Check } from "lucide-react";

const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsLoading(true);
    
    // Simulate submission
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
      toast.success("You're on the list! We'll be in touch soon.");
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className="flex items-center gap-3 p-4 rounded-xl bg-success/10 border border-success/20">
        <div className="w-10 h-10 rounded-full bg-success/20 flex items-center justify-center">
          <Check className="w-5 h-5 text-success" />
        </div>
        <div>
          <p className="font-semibold text-foreground">You're on the list!</p>
          <p className="text-sm text-muted-foreground">We'll notify you when we launch.</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
      <div className="relative flex-1">
        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="pl-10 h-12 bg-card/80 backdrop-blur-sm border-border focus:border-primary focus:ring-primary/20 text-foreground placeholder:text-muted-foreground"
        />
      </div>
      <Button 
        type="submit" 
        disabled={isLoading}
        className="h-12 px-8 bg-gradient-rainbow hover:opacity-90 transition-opacity text-foreground font-semibold shadow-glow-rainbow"
      >
        {isLoading ? "Joining..." : "Join Waitlist"}
      </Button>
    </form>
  );
};

export default WaitlistForm;
