import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu, User } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [cartItems, setCartItems] = useState(0);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-card">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">F</span>
            </div>
            <span className="text-xl font-bold text-primary">FlockByTest</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('restaurants')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Restaurants
            </button>
            <button 
              onClick={() => scrollToSection('delivery')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Delivery
            </button>
            <button 
              onClick={() => scrollToSection('tracking')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Track Order
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart />
              {cartItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems}
                </span>
              )}
            </Button>
            <Button variant="ghost" size="icon">
              <User />
            </Button>
            <Button variant="hero" size="sm">
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;