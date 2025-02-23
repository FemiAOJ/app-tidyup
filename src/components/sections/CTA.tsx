
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#0EA5E9] via-[#1EAEDB] to-[#0FA0CE] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Field Service Operations?</h2>
        <p className="text-xl mb-8 text-[#D3E4FD] max-w-2xl mx-auto">
          Join thousands of businesses that trust NexWavy to manage their field service workforce
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg" variant="secondary" className="bg-white text-[#0EA5E9] hover:bg-[#D3E4FD]" asChild>
            <Link to="/register">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10" asChild>
            <Link to="/contact">Contact Sales</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
