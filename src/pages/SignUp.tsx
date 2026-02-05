import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UtensilsCrossed, Users, Bike, ArrowLeft, Eye, EyeOff } from "lucide-react";
import logo from "@/assets/logo.png";

const userTypes = [
  { id: "customer", label: "Customer", icon: Users, description: "Order delicious food" },
  { id: "restaurant", label: "Restaurant", icon: UtensilsCrossed, description: "Partner with us" },
  { id: "rider", label: "Rider", icon: Bike, description: "Deliver & earn" },
];

const SignUp = () => {
  const [searchParams] = useSearchParams();
  const initialType = searchParams.get("type") || "customer";
  
  const [selectedType, setSelectedType] = useState(initialType);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic here
    console.log("Sign up:", { ...formData, userType: selectedType });
  };

  return (
    <div className="min-h-screen bg-gradient-hero flex">
      {/* Left Side - Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Back Link */}
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </Link>

          {/* Logo */}
          <Link to="/" className="inline-block mb-8">
            <img src={logo} alt="FoodHour" className="h-16 w-auto" />
          </Link>

          {/* Header */}
          <h1 className="text-3xl font-display font-bold mb-2">Create Your Account</h1>
          <p className="text-muted-foreground mb-8">Join FoodHour and start your journey</p>

          {/* User Type Selection */}
          <div className="grid grid-cols-3 gap-3 mb-8">
            {userTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setSelectedType(type.id)}
                className={`p-4 rounded-xl border-2 transition-all text-center ${
                  selectedType === type.id
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/30"
                }`}
              >
                <type.icon 
                  className={`mx-auto mb-2 ${selectedType === type.id ? "text-primary" : "text-muted-foreground"}`} 
                  size={24} 
                />
                <p className={`text-sm font-medium ${selectedType === type.id ? "text-primary" : "text-foreground"}`}>
                  {type.label}
                </p>
              </button>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="fullName"
                placeholder="John Doe"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+256 700 123 456"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a strong password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <Button type="submit" variant="hero" size="lg" className="w-full">
              Create Account
            </Button>
          </form>

          {/* Login Link */}
          <p className="text-center mt-6 text-muted-foreground">
            Already have an account?{" "}
            <Link to="/login" className="text-primary font-medium hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side - Decorative */}
      <div className="hidden lg:flex flex-1 bg-foreground items-center justify-center p-12 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-64 h-64 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-tertiary rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 text-center text-background max-w-md">
          <h2 className="text-4xl font-display font-bold mb-6">
            {selectedType === "customer" && "Order delicious food from your favorite restaurants"}
            {selectedType === "restaurant" && "Grow your business with FoodHour"}
            {selectedType === "rider" && "Earn money on your own schedule"}
          </h2>
          <p className="text-background/70 text-lg">
            {selectedType === "customer" && "Browse hundreds of restaurants and get your meals delivered fast."}
            {selectedType === "restaurant" && "Reach thousands of customers and increase your sales by up to 300%."}
            {selectedType === "rider" && "Join our fleet of riders and earn competitive pay with flexible hours."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
