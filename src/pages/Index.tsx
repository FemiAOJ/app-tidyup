
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Book, Users, Award, Code } from "lucide-react";
import { Link } from "react-router-dom";

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

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
              NexWavy Solutions Ltd
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Empowering professionals with expert training in Product Management, Project Management, Scrum, and Software Development.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/courses">Explore Courses</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Training Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <course.icon className="w-8 h-8 text-primary" />
                    <CardTitle className="text-xl">{course.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{course.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Why Choose NexWavy?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">Expert Instructors</h3>
              <p className="text-muted-foreground">Learn from industry professionals with years of practical experience.</p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">Practical Learning</h3>
              <p className="text-muted-foreground">Hands-on projects and real-world applications of concepts.</p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">Career Growth</h3>
              <p className="text-muted-foreground">Acquire skills that are in high demand in today's job market.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Advance Your Career?</h2>
          <p className="text-xl mb-8 opacity-90">Join our training programs and take the next step in your professional journey.</p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/register">Get Started Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
