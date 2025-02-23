
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#0EA5E9] via-[#1EAEDB] to-[#0FA0CE] pt-20 pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-white max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Find reliable field service technicians for every project in just minutes
            </h1>
            <p className="text-xl text-[#D3E4FD] mb-8 leading-relaxed">
              NexWavy is the top on-site IT labor marketplace, connecting companies and skilled technicians. 
              Easily find, dispatch, manage, and pay techs at scale—all in one platform.
            </p>
            <div className="flex gap-4">
              <Button size="lg" variant="secondary" className="bg-white text-[#0EA5E9] hover:bg-[#D3E4FD]" asChild>
                <Link to="/learn">Learn how</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10" asChild>
                <Link to="/register">Get started</Link>
              </Button>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="relative w-full aspect-[4/3] bg-white/10 rounded-lg shadow-2xl overflow-hidden">
              <img 
                src="/lovable-uploads/4aaa5f2e-fb88-4248-8be3-e2a1cb66958a.png" 
                alt="Platform Interface" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0EA5E9]/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0EA5E9]/10"></div>
      </div>
    </section>
  );
};
