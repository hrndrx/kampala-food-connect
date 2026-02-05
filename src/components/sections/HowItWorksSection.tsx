import { Search, ShoppingBag, Bike, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Browse & Choose",
    description: "Explore restaurants near you and discover menus with photos, reviews, and ratings.",
  },
  {
    icon: ShoppingBag,
    step: "02",
    title: "Place Your Order",
    description: "Add items to your cart, customize your order, and checkout securely.",
  },
  {
    icon: Bike,
    step: "03",
    title: "Track in Real-Time",
    description: "Watch your order being prepared and track your rider on the map.",
  },
  {
    icon: CheckCircle,
    step: "04",
    title: "Enjoy Your Meal",
    description: "Receive your fresh, hot meal at your doorstep. Rate and review your experience.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/50 to-transparent" />
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Simple Process
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            How <span className="text-gradient-primary">FoodHour</span> Works
          </h2>
          <p className="text-lg text-muted-foreground">
            From craving to delivery in just a few simple steps. 
            We make ordering food as easy as possible.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.step} className="relative group">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent" />
              )}

              {/* Step Card */}
              <div className="relative bg-card rounded-3xl p-8 shadow-card group-hover:shadow-lg transition-all duration-300 text-center">
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-primary text-primary-foreground font-display font-bold text-sm px-4 py-1 rounded-full">
                  {step.step}
                </div>

                {/* Icon */}
                <div className="w-20 h-20 mx-auto rounded-2xl bg-accent flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-300">
                  <step.icon className="text-primary" size={36} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-display font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
