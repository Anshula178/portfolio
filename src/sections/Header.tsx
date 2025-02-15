import Link from "next/link";

export const Header = () => {
 
  const links = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="flex justify-center items-center fixed top-3 w-full mb-10 z-20">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        {links.map((link, index) => (
          <Link 
            key={index} 
            href={link.href} 
            className={`nav-item ${link.name === "Contact" ? "bg-white text-gray-900" : ""}`}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};
