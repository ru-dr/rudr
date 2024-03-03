import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-[#1c1c1c] p-5 rounded-full">
      <div className="flex items-center h-full justify-between">
        <p className="px-2 text-xl font-semibold">Rudra.</p>
        <div className="sm:text-lg font-medium text-base flex">
          <Link
            href="/about"
            className="px-3 text-white hover:opacity-50 transition-all duration-500 sm:block hidden"
          >
            About.
          </Link>
          <Link
            href="/projects"
            className="px-3 text-white hover:opacity-50 transition-all duration-500 sm:block hidden"
          >
            Projects.
          </Link>
          <Link
            href="/contact"
            className="px-3 text-white hover:opacity-50 transition-all duration-500"
          >
            Contact.
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
