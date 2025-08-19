import { Button } from "@/components/ui/button";
import { Search, MapPin, Clock } from "lucide-react";
import heroFood from "@/assets/hero-food.jpg";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroFood} 
          alt="Delicious food delivery" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-3xl">
          <div className="animate-fadeIn">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              Craving Something
              <span className="bg-gradient-hero bg-clip-text text-transparent"> Delicious?</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Get your favorite meals delivered fresh and fast from the best restaurants in your area. 
              Order now and satisfy your hunger in minutes!
            </p>
          </div>

          {/* Search Bar */}
          <div className="bg-card p-6 rounded-2xl shadow-card mb-8 animate-fadeIn">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <input 
                  type="text" 
                  placeholder="Search for restaurants or dishes..."
                  className="w-full pl-10 pr-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring bg-background"
                />
              </div>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <input 
                  type="text" 
                  placeholder="Enter delivery address"
                  className="w-full md:w-64 pl-10 pr-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring bg-background"
                />
              </div>
              <Button variant="hero" size="lg" className="px-8">
                Find Food
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeIn">
            <div className="flex items-center space-x-3 bg-card/50 p-4 rounded-lg backdrop-blur-sm">
              <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center">
                <Clock className="h-6 w-6 text-accent-foreground" />
              </div>
              <div>
                <div className="font-semibold text-foreground">30 min</div>
                <div className="text-sm text-muted-foreground">Average delivery</div>
              </div>
            </div>
            <div className="flex items-center space-x-3 bg-card/50 p-4 rounded-lg backdrop-blur-sm">
              <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center">
                <span className="text-lg font-bold text-accent-foreground">500+</span>
              </div>
              <div>
                <div className="font-semibold text-foreground">Restaurants</div>
                <div className="text-sm text-muted-foreground">In your area</div>
              </div>
            </div>
            <div className="flex items-center space-x-3 bg-card/50 p-4 rounded-lg backdrop-blur-sm">
              <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center">
                <span className="text-lg font-bold text-accent-foreground">4.9</span>
              </div>
              <div>
                <div className="font-semibold text-foreground">Rating</div>
                <div className="text-sm text-muted-foreground">Customer satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;