
import { Link } from "react-router-dom";

export const NavLinks = () => {
  const links = [
    { to: "/find-techs", label: "Find techs" },
    { to: "/find-work", label: "Find work" },
    { to: "/service-coverage", label: "Service coverage" },
    { to: "/resources", label: "Resources" },
    { to: "/about", label: "About" },
  ];

  return (
    <div className="hidden md:flex md:ml-10">
      {links.map((link) => (
        <Link
          key={link.to}
          to={link.to}
          className="text-[#403E43] hover:text-[#0EA5E9] px-3 py-2 text-sm font-medium"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};
