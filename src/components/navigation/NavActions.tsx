
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const NavActions = () => {
  return (
    <div className="flex items-center gap-4">
      <Link to="/help" className="text-[#403E43] hover:text-[#0EA5E9] text-sm font-medium">
        Help center
      </Link>
      <Link to="/login" className="text-[#403E43] hover:text-[#0EA5E9] text-sm font-medium">
        Login
      </Link>
      <Button size="sm" className="bg-[#0EA5E9] hover:bg-[#0EA5E9]/90" asChild>
        <Link to="/register">Get started</Link>
      </Button>
    </div>
  );
};
