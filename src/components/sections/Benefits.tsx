
import { CheckCircle2 } from "lucide-react";

export const Benefits = () => {
  const benefits = [
    "Access to nationwide network of skilled technicians",
    "Real-time tracking and reporting",
    "Streamlined dispatch and management",
    "Verified and background-checked professionals",
    "24/7 platform support",
    "Flexible payment options"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose NexWavy?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of businesses that trust NexWavy for their field service needs
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-4 p-6 rounded-lg border border-gray-100 bg-white shadow-sm">
              <CheckCircle2 className="w-6 h-6 text-[#0EA5E9] flex-shrink-0" />
              <p className="text-gray-700">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
