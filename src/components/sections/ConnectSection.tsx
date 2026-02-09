import { Utensils, Users, Bike, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ConnectSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/30 to-transparent" />

      <div className="container mx-auto relative z-10 text-center max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
          Three Birds. <span className="text-gradient-primary">One Stone.</span>
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          FoodHour seamlessly connects restaurants, customers, and delivery riders
          on one powerful platform. It has never been this easy — come try it out.
        </p>

        <div className="grid sm:grid-cols-3 gap-8 mb-12">
          {[
            { icon: Utensils, label: "Restaurants", desc: "Reach more hungry customers" },
            { icon: Users, label: "Customers", desc: "Order from the best spots" },
            { icon: Bike, label: "Riders", desc: "Earn on your own schedule" },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                <item.icon className="text-primary" size={28} />
              </div>
              <h3 className="font-display font-bold text-lg">{item.label}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>

        <Button variant="hero" size="lg" asChild>
          <Link to="/signup">
            Get Started <ArrowRight size={18} />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default ConnectSection;
