import { Shield, TrendingUp, Users, BarChart3, DollarSign, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const features = [
  {
    icon: DollarSign,
    title: "Commission Management",
    description: "Set and adjust commission rates for restaurants and riders. Transparent earnings breakdown.",
  },
  {
    icon: BarChart3,
    title: "Revenue Analytics",
    description: "Track daily, weekly, and monthly revenue. Visualize growth trends and performance metrics.",
  },
  {
    icon: Users,
    title: "User Management",
    description: "Manage all users from one dashboard. Approve restaurants, verify riders, handle customer issues.",
  },
  {
    icon: TrendingUp,
    title: "Performance Metrics",
    description: "Monitor delivery times, customer satisfaction, and restaurant performance scores.",
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Role-based access control. Secure payment processing and data protection compliance.",
  },
  {
    icon: Settings,
    title: "Platform Settings",
    description: "Configure delivery zones, pricing rules, promotional offers, and platform-wide settings.",
  },
];

const AdminSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/30 to-transparent" />
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary font-medium text-sm mb-6">
            <Shield size={16} />
            <span>Admin Portal</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Powerful <span className="text-gradient-primary">Admin Dashboard</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Complete control over your food delivery platform. Manage commissions, 
            track revenue, and monitor performance from one central dashboard.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-display font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="secondary" size="lg" asChild>
            <Link to="/admin">Access Admin Portal</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AdminSection;
