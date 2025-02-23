
import { Link } from "react-router-dom";
import { NavLinks } from "./NavLinks";
import { NavActions } from "./NavActions";

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
            <NavLinks />
          </div>
          <NavActions />
        </div>
      </div>
    </nav>
  );
};
