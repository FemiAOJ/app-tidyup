
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, Database, BarChart, Shield, Star, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Index = () => {
  const services = [
    {
      title: "Technical Services",
      icon: Wrench,
      description: "Connect with verified technicians, plumbers, and mechanics in your area."
    },
    {
      title: "Material Database",
      icon: Database,
      description: "Access up-to-date prices and information for facility materials."
    },
    {
      title: "Asset Management",
      icon: BarChart,
      description: "Comprehensive asset inventory management for MSME businesses."
    }
  ];

  const features = [
    {
      title: "Verified Professionals",
      icon: Shield,
      description: "All service providers are thoroughly vetted and verified."
    },
    {
      title: "User Reviews",
      icon: Star,
      description: "Make informed decisions based on genuine user experiences."
    },
    {
      title: "Easy Booking",
      icon: Calendar,
      description: "Book services quickly and efficiently through our platform."
    }
  ];

  const testimonials = [
    {
      text: "Found a reliable technician within minutes. Excellent service!",
      author: "James Wilson",
      role: "Business Owner"
    },
    {
      text: "The material database saves us time and money on procurement.",
      author: "Sarah Chen",
      role: "Facility Manager"
    },
    {
      text: "Asset management feature has streamlined our inventory tracking.",
      author: "Michael Rodriguez",
      role: "Operations Director"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              NexWavy Technical Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Connecting you with trusted technical professionals. Find verified technicians, access material prices, and manage assets efficiently.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" variant="secondary" className="hover-scale" asChild>
                <Link to="/services">Find Services</Link>
              </Button>
              <Button size="lg" variant="outline" className="hover-scale text-white hover:text-blue-600" asChild>
                <Link to="/register">Join as Provider</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover-scale border-blue-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <service.icon className="w-8 h-8 text-blue-600" />
                    <CardTitle className="text-xl text-blue-700">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 hover-scale">
                <feature.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-blue-700">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">What Our Users Say</h2>
          <Carousel className="mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <Card className="border-0 shadow-none">
                    <CardContent className="text-center p-6">
                      <p className="text-lg text-gray-700 mb-4">{testimonial.text}</p>
                      <p className="font-semibold text-blue-600">{testimonial.author}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-blue-100">Join our platform and experience hassle-free technical services.</p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" variant="secondary" className="hover-scale" asChild>
              <Link to="/register">Register Now</Link>
            </Button>
            <Button size="lg" variant="outline" className="hover-scale text-white hover:text-blue-600" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
