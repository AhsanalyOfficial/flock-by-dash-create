import Header from "@/components/Header";
import Hero from "@/components/Hero";
import DeliveryService from "@/components/DeliveryService";
import OrderTracking from "@/components/OrderTracking";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <DeliveryService />
        <OrderTracking />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary-foreground rounded-lg flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">F</span>
                </div>
                <span className="text-xl font-bold">FlockByTest</span>
              </div>
              <p className="text-primary-foreground/80">
                The fastest food delivery service in your area. Fresh, fast, and reliable.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><a href="#hero" className="hover:text-primary-foreground transition-colors">Home</a></li>
                <li><a href="#delivery" className="hover:text-primary-foreground transition-colors">Delivery</a></li>
                <li><a href="#tracking" className="hover:text-primary-foreground transition-colors">Track Order</a></li>
                <li><a href="#contact" className="hover:text-primary-foreground transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Safety</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-primary-foreground/80">
                <p>+1 (555) 123-4567</p>
                <p>support@flockbytest.com</p>
                <p>123 Food Street<br />Delivery City, DC 12345</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
            <p>&copy; 2024 FlockByTest. All rights reserved. Built for Computing Team Assessment.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;