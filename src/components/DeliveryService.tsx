import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Truck, Clock, Shield, DollarSign, MapPin, Star, Plus } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const DeliveryService = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const { toast } = useToast();

  const deliveryPlans = [
    {
      id: "standard",
      name: "Standard Delivery",
      time: "45-60 min",
      price: "$2.99",
      description: "Perfect for regular orders",
      features: ["Real-time tracking", "SMS updates", "Contact-free delivery"],
      popular: false
    },
    {
      id: "express",
      name: "Express Delivery",
      time: "25-35 min",
      price: "$4.99",
      description: "When you're in a hurry",
      features: ["Priority handling", "Real-time tracking", "SMS & email updates", "Dedicated support"],
      popular: true
    },
    {
      id: "premium",
      name: "Premium Delivery",
      time: "15-25 min",
      price: "$7.99",
      description: "Ultra-fast premium service",
      features: ["Lightning fast", "White-glove service", "Real-time tracking", "Premium packaging", "Priority support"],
      popular: false
    }
  ];

  const handleSelectPlan = (planId: string) => {
    setSelectedPlan(planId);
    const plan = deliveryPlans.find(p => p.id === planId);
    toast({
      title: "Delivery Plan Selected!",
      description: `You've selected ${plan?.name} (${plan?.time}) for ${plan?.price}`,
    });
  };

  const deliveryFeatures = [
    {
      icon: <Truck className="h-8 w-8 text-primary" />,
      title: "Fleet Management",
      description: "Our professional drivers use optimized routes for fastest delivery"
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Safe & Secure",
      description: "Temperature-controlled bags and contactless delivery options"
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "On-Time Guarantee",
      description: "Late delivery? Get your next order free - that's our promise"
    },
    {
      icon: <DollarSign className="h-8 w-8 text-primary" />,
      title: "Transparent Pricing",
      description: "No hidden fees, no surge pricing - just honest, upfront costs"
    }
  ];

  return (
    <section id="delivery" className="py-20 bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-accent text-accent-foreground">
            Delivery Service
          </Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">Fast & Reliable Delivery</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from our flexible delivery options designed to fit your schedule and budget. 
            From standard to premium, we've got you covered.
          </p>
        </div>

        {/* Delivery Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
          {deliveryPlans.map((plan) => (
            <Card 
              key={plan.id} 
              className={`relative transition-all duration-300 hover:shadow-glow ${
                plan.popular ? 'ring-2 ring-primary shadow-glow' : 'shadow-card'
              } ${selectedPlan === plan.id ? 'ring-2 ring-success' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-hero text-primary-foreground">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl font-bold text-foreground">{plan.name}</CardTitle>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">{plan.price}</div>
                  <div className="text-lg text-muted-foreground">{plan.time}</div>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  variant={selectedPlan === plan.id ? "success" : plan.popular ? "hero" : "outline"}
                  className="w-full"
                  onClick={() => handleSelectPlan(plan.id)}
                >
                  {selectedPlan === plan.id ? "Selected" : "Select Plan"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Delivery Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {deliveryFeatures.map((feature, index) => (
            <Card key={index} className="text-center shadow-card hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Delivery Area */}
        <Card className="shadow-glow">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-center justify-center">
              <MapPin className="h-5 w-5 text-primary" />
              <span>Delivery Coverage Area</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">We Deliver To</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium text-foreground">City Center</h4>
                    <div className="flex items-center space-x-2">
                      <Star className="h-4 w-4 text-warning fill-current" />
                      <span className="text-sm text-muted-foreground">15-20 min</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium text-foreground">Downtown</h4>
                    <div className="flex items-center space-x-2">
                      <Star className="h-4 w-4 text-warning fill-current" />
                      <span className="text-sm text-muted-foreground">20-25 min</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium text-foreground">Suburbs</h4>
                    <div className="flex items-center space-x-2">
                      <Star className="h-4 w-4 text-warning fill-current" />
                      <span className="text-sm text-muted-foreground">30-45 min</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium text-foreground">University</h4>
                    <div className="flex items-center space-x-2">
                      <Star className="h-4 w-4 text-warning fill-current" />
                      <span className="text-sm text-muted-foreground">25-35 min</span>
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  <Plus className="mr-2 h-4 w-4" />
                  Check If We Deliver To You
                </Button>
              </div>
              
              <div className="bg-gradient-to-br from-primary/10 to-primary-glow/10 rounded-lg p-8 text-center">
                <div className="text-6xl font-bold text-primary mb-2">25+</div>
                <div className="text-lg font-medium text-foreground mb-2">Neighborhoods</div>
                <div className="text-sm text-muted-foreground">Across the metropolitan area</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default DeliveryService;