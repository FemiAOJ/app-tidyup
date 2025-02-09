
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Book, Users, Award, Code, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Index = () => {
  const courses = [
    {
      title: "Product Management",
      icon: Book,
      description: "Learn to build and manage successful products from ideation to launch."
    },
    {
      title: "Project Management",
      icon: Users,
      description: "Master the skills needed to lead teams and deliver successful projects."
    },
    {
      title: "Scrum",
      icon: Award,
      description: "Become proficient in Agile methodologies and Scrum frameworks."
    },
    {
      title: "Software Development",
      icon: Code,
      description: "Learn modern software development practices and coding principles."
    }
  ];

  const testimonials = [
    {
      text: "The product management course completely transformed my career path.",
      author: "Sarah Johnson",
      role: "Product Manager at Tech Corp"
    },
    {
      text: "NexWavy's project management training was exactly what I needed to advance in my role.",
      author: "Michael Chen",
      role: "Senior Project Manager"
    },
    {
      text: "The Scrum certification program was comprehensive and practical.",
      author: "Emily Rodriguez",
      role: "Agile Coach"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              NexWavy Solutions Ltd
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Empowering professionals with expert training in Product Management, Project Management, Scrum, and Software Development.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" variant="secondary" className="hover-scale" asChild>
                <Link to="/courses">Explore Courses</Link>
              </Button>
              <Button size="lg" variant="outline" className="hover-scale text-white hover:text-blue-600" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">Our Training Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course, index) => (
              <Card key={index} className="hover-scale border-blue-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <course.icon className="w-8 h-8 text-blue-600" />
                    <CardTitle className="text-xl text-blue-700">{course.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{course.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">What Our Students Say</h2>
          <Carousel className="mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <Card className="border-0 shadow-none">
                    <CardContent className="text-center p-6">
                      <Quote className="w-8 h-8 text-blue-400 mx-auto mb-4" />
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

      {/* Features Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 text-blue-600">Why Choose NexWavy?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 hover-scale">
              <h3 className="text-xl font-semibold mb-4 text-blue-700">Expert Instructors</h3>
              <p className="text-gray-600">Learn from industry professionals with years of practical experience.</p>
            </div>
            <div className="p-6 hover-scale">
              <h3 className="text-xl font-semibold mb-4 text-blue-700">Practical Learning</h3>
              <p className="text-gray-600">Hands-on projects and real-world applications of concepts.</p>
            </div>
            <div className="p-6 hover-scale">
              <h3 className="text-xl font-semibold mb-4 text-blue-700">Career Growth</h3>
              <p className="text-gray-600">Acquire skills that are in high demand in today's job market.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto text-center animate-fade-in">
          <h2 className="text-3xl font-bold mb-6">Ready to Advance Your Career?</h2>
          <p className="text-xl mb-8 text-blue-100">Join our training programs and take the next step in your professional journey.</p>
          <Button size="lg" variant="secondary" className="hover-scale" asChild>
            <Link to="/register">Get Started Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
