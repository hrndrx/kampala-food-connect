import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-tertiary/10 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        <div className="bg-foreground rounded-3xl p-12 md:p-16 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-tertiary rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-background mb-6">
              Ready to Order Your <span className="text-primary">First Meal?</span>
            </h2>
            <p className="text-background/70 text-lg mb-10 max-w-xl mx-auto">
              Join thousands of happy customers who trust FoodHour for fast, reliable food delivery in Kampala.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl">
                Order Now <ArrowRight size={20} />
              </Button>
              <Button variant="outline" size="xl" className="border-background/20 text-background hover:bg-background hover:text-foreground">
                <Download size={20} /> Download App
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-8 mt-12 text-background/60">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full" />
                <span className="text-sm">Free Delivery on First Order</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full" />
                <span className="text-sm">Secure Payments</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full" />
                <span className="text-sm">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
