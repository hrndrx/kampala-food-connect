import { Star, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const restaurants = [
  {
    id: 1,
    name: "Mama Africa Kitchen",
    cuisine: "African • Local",
    rating: 4.8,
    deliveryTime: "25-35 min",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop",
    featured: true,
  },
  {
    id: 2,
    name: "Café Javas",
    cuisine: "International • Coffee",
    rating: 4.7,
    deliveryTime: "20-30 min",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop",
    featured: true,
  },
  {
    id: 3,
    name: "Prunes Restaurant",
    cuisine: "Fine Dining • Continental",
    rating: 4.9,
    deliveryTime: "30-40 min",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop",
    featured: false,
  },
  {
    id: 4,
    name: "Haandi Kampala",
    cuisine: "Indian • Asian",
    rating: 4.6,
    deliveryTime: "25-35 min",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop",
    featured: false,
  },
  {
    id: 5,
    name: "The Bistro",
    cuisine: "European • Italian",
    rating: 4.7,
    deliveryTime: "30-40 min",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=300&fit=crop",
    featured: true,
  },
  {
    id: 6,
    name: "Rolex Point",
    cuisine: "Street Food • Local",
    rating: 4.5,
    deliveryTime: "15-25 min",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop",
    featured: false,
  },
];

const RestaurantsSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Popular Restaurants
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4">
              Discover <span className="text-gradient-primary">Top Picks</span> in Kampala
            </h2>
          </div>
          <Button variant="outline" asChild>
            <Link to="/restaurants">View All Restaurants</Link>
          </Button>
        </div>

        {/* Restaurant Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {restaurants.map((restaurant) => (
            <Link 
              key={restaurant.id} 
              to={`/restaurant/${restaurant.id}`}
              className="group"
            >
              <div className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={restaurant.image}
                    alt={restaurant.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {restaurant.featured && (
                    <div className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                      Featured
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-display font-bold text-background">{restaurant.name}</h3>
                    <p className="text-background/80 text-sm">{restaurant.cuisine}</p>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Star className="text-tertiary fill-tertiary" size={18} />
                      <span className="font-semibold">{restaurant.rating}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock size={16} />
                      <span className="text-sm">{restaurant.deliveryTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RestaurantsSection;
