import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, MapPin, Star } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-food.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Decorative Elements */}
      <div className="absolute top-40 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-tertiary/10 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm animate-fade-in">
              <Clock size={16} />
              <span>Kampala's #1 Food Delivery</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight animate-fade-in-up">
              Delicious Food,
              <br />
              <span className="text-gradient-primary">Always On Time</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Connect with the best restaurants in Kampala. Order your favorite meals 
              and track them in real-time until they reach your doorstep.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <Button variant="hero" size="xl" asChild>
                <Link to="/signup">
                  Order Now <ArrowRight size={20} />
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/restaurants">Browse Restaurants</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 pt-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <div className="text-center lg:text-left">
                <p className="text-3xl font-display font-bold text-foreground">200+</p>
                <p className="text-sm text-muted-foreground">Restaurants</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-3xl font-display font-bold text-foreground">50K+</p>
                <p className="text-sm text-muted-foreground">Happy Customers</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-3xl font-display font-bold text-foreground">30 min</p>
                <p className="text-sm text-muted-foreground">Avg. Delivery</p>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative animate-scale-in" style={{ animationDelay: "0.2s" }}>
            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Delicious food spread" 
                className="w-full h-auto object-cover"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </div>

            {/* Floating Cards */}
            <div className="absolute -top-4 -left-4 md:-left-8 bg-card rounded-2xl p-4 shadow-card animate-float">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center">
                  <Clock className="text-success" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-card-foreground">Fast Delivery</p>
                  <p className="text-sm text-muted-foreground">Under 30 mins</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 md:-right-8 bg-card rounded-2xl p-4 shadow-card animate-float" style={{ animationDelay: "0.5s" }}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-tertiary/20 flex items-center justify-center">
                  <Star className="text-tertiary" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-card-foreground">Top Rated</p>
                  <p className="text-sm text-muted-foreground">4.9/5 Rating</p>
                </div>
              </div>
            </div>

            <div className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 bg-primary rounded-2xl p-4 shadow-glow animate-float" style={{ animationDelay: "1s" }}>
              <div className="flex items-center gap-3">
                <MapPin className="text-primary-foreground" size={24} />
                <span className="font-semibold text-primary-foreground">Live Tracking</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
