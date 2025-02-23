
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  return (
    <nav className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img
                src="/lovable-uploads/1fa2e533-d6e3-4452-852f-9a42e31cb19f.png"
                alt="Nexwavy Logo"
                className="h-8"
              />
            </Link>
            <div className="hidden md:flex md:ml-10">
              <Link to="/find-techs" className="text-[#403E43] hover:text-[#0EA5E9] px-3 py-2 text-sm font-medium">Find techs</Link>
              <Link to="/find-work" className="text-[#403E43] hover:text-[#0EA5E9] px-3 py-2 text-sm font-medium">Find work</Link>
              <Link to="/service-coverage" className="text-[#403E43] hover:text-[#0EA5E9] px-3 py-2 text-sm font-medium">Service coverage</Link>
              <Link to="/resources" className="text-[#403E43] hover:text-[#0EA5E9] px-3 py-2 text-sm font-medium">Resources</Link>
              <Link to="/about" className="text-[#403E43] hover:text-[#0EA5E9] px-3 py-2 text-sm font-medium">About</Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/help" className="text-[#403E43] hover:text-[#0EA5E9] text-sm font-medium">Help center</Link>
            <Link to="/login" className="text-[#403E43] hover:text-[#0EA5E9] text-sm font-medium">Login</Link>
            <Button size="sm" className="bg-[#0EA5E9] hover:bg-[#0EA5E9]/90" asChild>
              <Link to="/register">Get started</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
