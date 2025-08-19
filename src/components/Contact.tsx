import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-background via-accent/5 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions or feedback? We'd love to hear from you. Reach out to us anytime!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Contact Information</h3>
              <div className="space-y-6">
                <Card className="shadow-card hover:shadow-glow transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center">
                        <MapPin className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Address</h4>
                        <p className="text-muted-foreground">123 Food Street, Delivery City, DC 12345</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-card hover:shadow-glow transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center">
                        <Phone className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Phone</h4>
                        <p className="text-muted-foreground">+1 (555) 123-4567</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-card hover:shadow-glow transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center">
                        <Mail className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Email</h4>
                        <p className="text-muted-foreground">support@flockbytest.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-card hover:shadow-glow transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center">
                        <Clock className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Support Hours</h4>
                        <p className="text-muted-foreground">Mon-Sun: 8:00 AM - 11:00 PM</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Quick Actions</h4>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="outline" className="flex-1">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Live Chat
                </Button>
                <Button variant="outline" className="flex-1">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="shadow-glow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Send className="h-5 w-5 text-primary" />
                <span>Send us a Message</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring bg-background transition-all"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring bg-background transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring bg-background transition-all"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring bg-background transition-all resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;