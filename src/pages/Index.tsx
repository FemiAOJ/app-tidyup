
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, Database, BarChart, Shield, Star, Calendar, ArrowRight, CheckCircle2, Building2 } from "lucide-react";
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
      description: "Connect with verified technicians, plumbers, and mechanics in your area for reliable service delivery."
    },
    {
      title: "Material Database",
      icon: Database,
      description: "Access comprehensive, real-time pricing and specifications for facility materials across multiple vendors."
    },
    {
      title: "Asset Management",
      icon: BarChart,
      description: "Smart inventory tracking and asset lifecycle management tailored for growing businesses."
    }
  ];

  const features = [
    {
      title: "Verified Professionals",
      icon: Shield,
      description: "Every service provider undergoes thorough background checks and skill verification."
    },
    {
      title: "User Reviews & Ratings",
      icon: Star,
      description: "Make informed decisions based on genuine experiences and detailed feedback from other clients."
    },
    {
      title: "Smart Booking System",
      icon: Calendar,
      description: "Effortless scheduling with real-time availability and instant confirmation."
    }
  ];

  const testimonials = [
    {
      text: "NexWavy transformed how we handle maintenance. Found expert technicians within minutes!",
      author: "James Wilson",
      role: "Operations Manager",
      company: "TechCorp Industries"
    },
    {
      text: "The material database has revolutionized our procurement process. Saved us 30% on costs.",
      author: "Sarah Chen",
      role: "Facility Manager",
      company: "InnoSpace Solutions"
    },
    {
      text: "Their asset management system is incredible. Perfect for growing businesses like ours.",
      author: "Michael Rodriguez",
      role: "Operations Director",
      company: "MetroTech Services"
    }
  ];

  const benefits = [
    "24/7 Emergency Support",
    "Competitive Pricing",
    "Qualified Professionals",
    "Secure Payments",
    "Real-time Tracking",
    "Quality Guarantee"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"30\" height=\"30\" viewBox=\"0 0 30 30\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z\" fill=\"rgba(255,255,255,0.07)\"%3E%3C/path%3E%3C/svg%3E')] opacity-10"/>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center animate-fade-in space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text">
              NexWavy Technical Solutions
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Your One-Stop Platform for Professional Technical Services. 
              Connect with Verified Experts, Access Real-Time Material Prices, and Manage Assets Efficiently.
            </p>
            <div className="flex gap-6 justify-center">
              <Button size="lg" variant="secondary" className="hover:scale-105 transition-transform duration-300 text-lg px-8" asChild>
                <Link to="/services">Explore Services <ArrowRight className="ml-2" /></Link>
              </Button>
              <Button size="lg" variant="outline" className="hover:scale-105 transition-transform duration-300 text-lg px-8 text-white border-white hover:bg-white/10" asChild>
                <Link to="/register">Join as Provider</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Strip */}
      <section className="bg-blue-50 py-4 border-y border-blue-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 text-blue-700">
                <CheckCircle2 className="w-5 h-5" />
                <span className="font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-600">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Comprehensive solutions tailored to meet your technical service needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:scale-105 transition-all duration-300 border-blue-100 hover:border-blue-300 hover:shadow-xl bg-white/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-blue-50 group-hover:bg-blue-100 transition-colors">
                      <service.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl text-blue-700">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-600">Why Choose Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Experience the difference with our premium features and guarantees</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-16 h-16 mx-auto bg-blue-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="absolute -inset-2 bg-blue-100/50 rounded-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-blue-700">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-600">What Our Users Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Real experiences from businesses and individuals who trust NexWavy</p>
          </div>
          <Carousel className="mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <Card className="border-2 border-blue-100 hover:border-blue-200 transition-colors bg-white/50 backdrop-blur-sm">
                    <CardContent className="text-center p-8 space-y-4">
                      <div className="mb-6">
                        <Building2 className="w-12 h-12 mx-auto text-blue-600 opacity-50" />
                      </div>
                      <p className="text-lg text-gray-700 italic leading-relaxed">"{testimonial.text}"</p>
                      <div>
                        <p className="font-semibold text-blue-600 text-lg">{testimonial.author}</p>
                        <p className="text-gray-500">{testimonial.role}</p>
                        <p className="text-sm text-gray-400">{testimonial.company}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"30\" height=\"30\" viewBox=\"0 0 30 30\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z\" fill=\"rgba(255,255,255,0.07)\"%3E%3C/path%3E%3C/svg%3E')] opacity-10"/>
        <div className="max-w-7xl mx-auto text-center relative">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Technical Services?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">Join our platform and experience the future of technical service delivery.</p>
          <div className="flex gap-6 justify-center">
            <Button size="lg" variant="secondary" className="hover:scale-105 transition-transform duration-300 text-lg px-8" asChild>
              <Link to="/register">Get Started Now <ArrowRight className="ml-2" /></Link>
            </Button>
            <Button size="lg" variant="outline" className="hover:scale-105 transition-transform duration-300 text-lg px-8 text-white border-white hover:bg-white/10" asChild>
              <Link to="/contact">Talk to Sales</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
