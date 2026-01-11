import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Mail, Check } from "lucide-react";

const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const date = new Date();
  const inputValue: {[key:string]:string} = {
      'Email': email,
      'Created At': date.toLocaleString(),
    }
  
  const APP_ID = 'AKfycbyMw2aqxEK9CM3Lmg2mU4uKvCSzH2ixvCt77DXnX7mmlc19Xlt8yEaRw3Q36JxyPWd9RQ'
  const baseURL = `https://script.google.com/macros/s/${APP_ID}/exec`
  const formData = new FormData()
    Object.keys(inputValue).forEach((key) => {
      formData.append(key, inputValue[key])
    })
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsLoading(true);
    
    try {
       const res = await fetch(baseURL, {
        method: 'POST',
        body: formData,
       })
      if(res.ok){
        console.log('Request was successful:', res);
      }else{
        console.log('Request Failed:', res);        
      }
    }catch(e){
      console.error('Error during fetch:', e);
    }

    // Simulate submission
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
      toast.success("You're on the list! We'll be in touch soon.");
    }, 500);
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
