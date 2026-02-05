import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <img src={logo} alt="FoodHour" className="h-14 w-auto brightness-0 invert" />
            <p className="text-background/70 text-sm leading-relaxed">
              Connecting Kampala to the best restaurants with lightning-fast delivery. 
              Always on time, every time.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "Restaurants", "How It Works", "Track Order", "About Us"].map((item) => (
                <li key={item}>
                  <Link 
                    to="#" 
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Partner With Us */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Partner With Us</h4>
            <ul className="space-y-3">
              {[
                "Register Your Restaurant",
                "Become a Rider",
                "Business Partnership",
                "Advertise With Us",
              ].map((item) => (
                <li key={item}>
                  <Link 
                    to="#" 
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-background/70 text-sm">
                  Plot 45, Kampala Road<br />Kampala, Uganda
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary flex-shrink-0" />
                <span className="text-background/70 text-sm">+256 700 123 456</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary flex-shrink-0" />
                <span className="text-background/70 text-sm">hello@foodhour.ug</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/50 text-sm">
              © {currentYear} FoodHour. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="#" className="text-background/50 hover:text-background text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="text-background/50 hover:text-background text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
