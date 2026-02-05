import { Button } from "@/components/ui/button";
import { UtensilsCrossed, Users, Bike, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const userTypes = [
  {
    icon: Users,
    title: "Hungry Customer",
    description: "Browse restaurants, order your favorite meals, and track your delivery in real-time. Enjoy delicious food delivered to your doorstep.",
    benefits: ["Explore 200+ restaurants", "Real-time order tracking", "Secure payments", "Rate & review"],
    cta: "Start Ordering",
    href: "/signup?type=customer",
    gradient: "from-primary to-secondary",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurant Owner",
    description: "Partner with FoodHour to expand your reach. Get access to thousands of customers and grow your business effortlessly.",
    benefits: ["Reach more customers", "Manage orders easily", "Analytics dashboard", "Marketing support"],
    cta: "Partner With Us",
    href: "/signup?type=restaurant",
    gradient: "from-secondary to-primary",
    iconBg: "bg-secondary/10",
    iconColor: "text-secondary",
  },
  {
    icon: Bike,
    title: "Delivery Rider",
    description: "Earn money on your own schedule. Join our fleet of riders and deliver happiness across Kampala.",
    benefits: ["Flexible hours", "Competitive pay", "Weekly payouts", "Rider support"],
    cta: "Become a Rider",
    href: "/signup?type=rider",
    gradient: "from-tertiary to-primary",
    iconBg: "bg-tertiary/10",
    iconColor: "text-tertiary",
  },
];

const UserTypesSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Join FoodHour
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            One Platform, <span className="text-gradient-primary">Three Ways</span> to Succeed
          </h2>
          <p className="text-lg text-muted-foreground">
            Whether you're craving food, running a restaurant, or looking to earn as a rider — 
            FoodHour has got you covered.
          </p>
        </div>

        {/* User Type Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {userTypes.map((type, index) => (
            <div
              key={type.title}
              className="group relative bg-card rounded-3xl p-8 shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl ${type.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <type.icon className={type.iconColor} size={32} />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-display font-bold mb-4">{type.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{type.description}</p>

              {/* Benefits */}
              <ul className="space-y-3 mb-8">
                {type.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3 text-sm">
                    <div className="w-5 h-5 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-success" />
                    </div>
                    <span className="text-foreground/80">{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button variant="default" className="w-full group/btn" asChild>
                <Link to={type.href}>
                  {type.cta}
                  <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </Button>

              {/* Decorative gradient line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${type.gradient} rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserTypesSection;
