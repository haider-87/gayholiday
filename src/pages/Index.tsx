import { Plane, MapPin, Heart, Shield } from "lucide-react";
import WaitlistForm from "@/components/WaitlistForm";
import FeatureCard from "@/components/FeatureCard";
import RainbowBar from "@/components/RainbowBar";
import heroImage from "@/assets/hero-beach.jpg";
import logo from "@/assets/logo.jpeg";

const Index = () => {
  const features = [
    {
      icon: Heart,
      title: "LGBTQ+ Friendly",
      description: "Curated destinations verified for their welcoming atmosphere and inclusive policies."
    },
    {
      icon: MapPin,
      title: "Handpicked Destinations",
      description: "From vibrant city breaks to serene beach escapes, discover places where you can truly be yourself."
    },
    {
      icon: Plane,
      title: "Seamless Booking",
      description: "Book flights, hotels, and experiences all in one place with our easy-to-use platform."
    },
    {
      icon: Shield,
      title: "Travel with Confidence",
      description: "Local safety guides and 24/7 support ensure you travel worry-free."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <RainbowBar />
      
      {/* Header */}
      <header className="container py-6">
        <div className="flex items-center justify-between">
          <img 
            src={logo} 
            alt="GayHoliday.co.uk" 
            className="h-12 sm:h-14 w-auto object-contain"
          />
          <span className="px-3 py-1.5 text-xs font-semibold bg-primary/20 text-primary border border-primary/30 rounded-full">
            Coming Soon
          </span>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1">
        <section className="container py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Your Perfect
                  <br />
                  <span className="text-gradient-rainbow">Getaway</span> Awaits
                </h1>
                <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
                  Discover LGBTQ+ friendly destinations around the world. 
                  We're building something special for travellers who want to 
                  explore freely and authentically.
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-sm font-medium text-foreground">
                  Be the first to know when we launch:
                </p>
                <WaitlistForm />
                <p className="text-xs text-muted-foreground">
                  Join 500+ travellers already on the list. No spam, ever.
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="absolute -inset-4 bg-gradient-rainbow opacity-30 blur-3xl rounded-3xl" />
              <div className="relative rounded-3xl overflow-hidden shadow-glow-rainbow border border-primary/20">
                <img 
                  src={heroImage} 
                  alt="Beautiful Mediterranean beach at sunset" 
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container py-16 lg:py-24">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              What's Coming
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              We're crafting an exceptional travel experience tailored for the LGBTQ+ community.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="animate-fade-in-up"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <FeatureCard {...feature} />
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="container py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <img 
              src={logo} 
              alt="GayHoliday.co.uk" 
              className="h-8 w-auto object-contain opacity-80"
            />
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Privacy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms</a>
              <a href="#" className="hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
        </div>
        <RainbowBar />
      </footer>
    </div>
  );
};

export default Index;
