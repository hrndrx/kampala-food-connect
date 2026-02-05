import { MapPin, Clock, Phone, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

const TrackingSection = () => {
  return (
    <section className="py-24 bg-foreground text-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Real-Time Tracking
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">
              Track Your Order <br />
              <span className="text-primary">Every Step of the Way</span>
            </h2>
            <p className="text-background/70 text-lg leading-relaxed">
              From the moment your order is confirmed to when it arrives at your door, 
              watch your food's journey in real-time. Know exactly when to expect your delivery.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: MapPin, label: "Live GPS Tracking" },
                { icon: Clock, label: "Accurate ETA" },
                { icon: Phone, label: "Contact Rider" },
                { icon: Navigation, label: "Turn-by-Turn Updates" },
              ].map((feature) => (
                <div key={feature.label} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <feature.icon className="text-primary" size={24} />
                  </div>
                  <span className="font-medium">{feature.label}</span>
                </div>
              ))}
            </div>

            <Button variant="hero" size="lg">
              Track an Order
            </Button>
          </div>

          {/* Map Mockup */}
          <div className="relative">
            <div className="relative bg-card rounded-3xl p-6 shadow-2xl overflow-hidden">
              {/* Fake Map Background */}
              <div className="aspect-square rounded-2xl bg-muted relative overflow-hidden">
                {/* Grid lines to simulate map */}
                <div className="absolute inset-0 opacity-20">
                  <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-muted-foreground" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                  </svg>
                </div>

                {/* Simulated roads */}
                <div className="absolute top-1/4 left-0 right-0 h-2 bg-muted-foreground/20 rounded-full" />
                <div className="absolute top-1/2 left-0 right-0 h-3 bg-muted-foreground/30 rounded-full" />
                <div className="absolute bottom-1/4 left-0 right-0 h-2 bg-muted-foreground/20 rounded-full" />
                <div className="absolute left-1/4 top-0 bottom-0 w-2 bg-muted-foreground/20 rounded-full" />
                <div className="absolute left-1/2 top-0 bottom-0 w-3 bg-muted-foreground/30 rounded-full" />
                <div className="absolute right-1/4 top-0 bottom-0 w-2 bg-muted-foreground/20 rounded-full" />

                {/* Route Path */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path 
                    d="M 20 80 Q 30 60 50 50 T 80 20" 
                    fill="none" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth="0.8" 
                    strokeDasharray="2,2"
                    className="animate-pulse"
                  />
                </svg>

                {/* Restaurant Marker */}
                <div className="absolute top-[18%] right-[18%] transform -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-secondary-foreground text-xs">🍽️</span>
                    </div>
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-secondary rotate-45" />
                  </div>
                </div>

                {/* Rider Marker (animated) */}
                <div className="absolute top-[48%] left-[48%] transform -translate-x-1/2 -translate-y-1/2 animate-float">
                  <div className="relative">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/30">
                      <span className="text-xl">🏍️</span>
                    </div>
                    <div className="absolute -inset-2 bg-primary/20 rounded-full animate-ping" />
                  </div>
                </div>

                {/* Destination Marker */}
                <div className="absolute bottom-[18%] left-[18%] transform -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-success-foreground text-xs">🏠</span>
                    </div>
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-success rotate-45" />
                  </div>
                </div>
              </div>

              {/* Order Info Overlay */}
              <div className="absolute bottom-10 left-10 right-10 bg-card/95 backdrop-blur rounded-2xl p-5 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Your rider</p>
                    <p className="font-display font-bold text-card-foreground">John Mugisha</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Arriving in</p>
                    <p className="font-display font-bold text-primary text-xl">8 min</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-tertiary/20 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackingSection;
