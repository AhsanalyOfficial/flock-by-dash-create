import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import { CheckCircle, Circle, Truck, Clock, MapPin, Phone, User, Package } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface OrderStep {
  id: string;
  title: string;
  description: string;
  time: string;
  completed: boolean;
  active: boolean;
}

const OrderTracking = () => {
  const [orderId, setOrderId] = useState("");
  const [isTracking, setIsTracking] = useState(false);
  const [orderSteps, setOrderSteps] = useState<OrderStep[]>([]);
  const [driverInfo, setDriverInfo] = useState({
    name: "Mike Johnson",
    phone: "+1 (555) 987-6543",
    rating: 4.9,
    eta: "15 minutes"
  });
  
  const { toast } = useToast();

  const simulateOrderTracking = () => {
    const steps: OrderStep[] = [
      {
        id: "placed",
        title: "Order Placed",
        description: "Your order has been confirmed",
        time: "2:30 PM",
        completed: true,
        active: false
      },
      {
        id: "preparing",
        title: "Preparing",
        description: "Restaurant is preparing your food",
        time: "2:35 PM",
        completed: true,
        active: false
      },
      {
        id: "ready",
        title: "Ready for Pickup",
        description: "Food is ready and waiting for driver",
        time: "2:50 PM",
        completed: true,
        active: false
      },
      {
        id: "pickup",
        title: "Picked Up",
        description: "Driver has collected your order",
        time: "2:55 PM",
        completed: true,
        active: false
      },
      {
        id: "onway",
        title: "On the Way",
        description: "Driver is heading to your location",
        time: "Now",
        completed: false,
        active: true
      },
      {
        id: "delivered",
        title: "Delivered",
        description: "Enjoy your meal!",
        time: "ETA 3:15 PM",
        completed: false,
        active: false
      }
    ];
    
    setOrderSteps(steps);
    setIsTracking(true);
    toast({
      title: "Order Found!",
      description: "Your order is currently on the way. ETA: 15 minutes.",
    });
  };

  const handleTrackOrder = () => {
    if (!orderId.trim()) {
      toast({
        title: "Invalid Order ID",
        description: "Please enter a valid order ID to track your order.",
        variant: "destructive"
      });
      return;
    }
    simulateOrderTracking();
  };

  const generateRandomOrderId = () => {
    const randomId = `FB${Math.random().toString(36).substr(2, 8).toUpperCase()}`;
    setOrderId(randomId);
  };

  return (
    <section id="tracking" className="py-20 bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-hero text-primary-foreground">
            Order Tracking
          </Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">Track Your Order</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay updated with real-time tracking of your food delivery. Know exactly when your meal will arrive!
          </p>
        </div>

        {!isTracking ? (
          /* Order ID Input */
          <Card className="max-w-md mx-auto shadow-glow">
            <CardHeader>
              <CardTitle className="text-center">Enter Order Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label htmlFor="orderId" className="block text-sm font-medium text-foreground mb-2">
                  Order ID
                </label>
                <input
                  type="text"
                  id="orderId"
                  value={orderId}
                  onChange={(e) => setOrderId(e.target.value)}
                  placeholder="Enter your order ID (e.g., FB1A2B3C4D)"
                  className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring bg-background"
                />
              </div>
              
              <div className="space-y-3">
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="w-full"
                  onClick={handleTrackOrder}
                >
                  <Package className="mr-2 h-4 w-4" />
                  Track My Order
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={generateRandomOrderId}
                >
                  Generate Demo Order ID
                </Button>
              </div>
              
              <div className="text-center text-sm text-muted-foreground">
                Order ID can be found in your confirmation email or SMS
              </div>
            </CardContent>
          </Card>
        ) : (
          /* Order Tracking Display */
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Order Header */}
            <Card className="shadow-glow">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">Order #{orderId}</h3>
                    <p className="text-muted-foreground">2 items • Total: $24.99</p>
                  </div>
                  <Badge className="bg-gradient-hero text-primary-foreground">
                    On the Way
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Order Progress */}
              <div className="lg:col-span-2">
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Clock className="h-5 w-5 text-primary" />
                      <span>Order Progress</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {orderSteps.map((step, index) => (
                        <div key={step.id} className="flex items-start space-x-4">
                          <div className="relative">
                            {step.completed ? (
                              <CheckCircle className="h-6 w-6 text-success" />
                            ) : step.active ? (
                              <div className="h-6 w-6 border-2 border-primary rounded-full bg-primary animate-pulse-glow"></div>
                            ) : (
                              <Circle className="h-6 w-6 text-muted-foreground" />
                            )}
                            {index < orderSteps.length - 1 && (
                              <div className={`absolute left-3 top-6 w-0.5 h-8 ${
                                step.completed ? 'bg-success' : 'bg-muted'
                              }`}></div>
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-start">
                              <div>
                                <h4 className={`font-medium ${
                                  step.active ? 'text-primary' : step.completed ? 'text-foreground' : 'text-muted-foreground'
                                }`}>
                                  {step.title}
                                </h4>
                                <p className="text-sm text-muted-foreground">{step.description}</p>
                              </div>
                              <span className="text-sm text-muted-foreground">{step.time}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Driver & Delivery Info */}
              <div className="space-y-6">
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <User className="h-5 w-5 text-primary" />
                      <span>Your Driver</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center">
                        <User className="h-6 w-6 text-accent-foreground" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">{driverInfo.name}</h4>
                        <div className="flex items-center space-x-1">
                          <span className="text-sm text-muted-foreground">⭐ {driverInfo.rating}</span>
                        </div>
                      </div>
                    </div>
                    
                    <Button variant="outline" size="sm" className="w-full">
                      <Phone className="mr-2 h-4 w-4" />
                      Call Driver
                    </Button>
                  </CardContent>
                </Card>

                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      <span>Delivery Info</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <h4 className="font-medium text-foreground">Estimated Arrival</h4>
                      <p className="text-2xl font-bold text-primary">{driverInfo.eta}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-foreground">Delivery Address</h4>
                      <p className="text-sm text-muted-foreground">
                        123 Main Street, Apt 4B<br />
                        New York, NY 10001
                      </p>
                    </div>

                    <Button variant="outline" size="sm" className="w-full">
                      <MapPin className="mr-2 h-4 w-4" />
                      View on Map
                    </Button>
                  </CardContent>
                </Card>

                <Button 
                  variant="hero" 
                  className="w-full"
                  onClick={() => {
                    setIsTracking(false);
                    setOrderId("");
                  }}
                >
                  <Truck className="mr-2 h-4 w-4" />
                  Track Another Order
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default OrderTracking;