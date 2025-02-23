
import { Building2, Users, Clock, BarChart3 } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: Building2,
      title: "Enterprise-Ready",
      description: "Scale your field service operations with our enterprise-grade platform"
    },
    {
      icon: Users,
      title: "Verified Technicians",
      description: "Access pre-screened, skilled professionals for every job"
    },
    {
      icon: Clock,
      title: "Fast Deployment",
      description: "Find and dispatch technicians within minutes, not days"
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description: "Track performance and optimize operations with detailed insights"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Platform Features</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to manage your field service operations efficiently
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#0EA5E9] text-white mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
