import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NavChild {
  name: string;
  path: string;
}

interface NavLink {
  name: string;
  path: string;
  children?: NavChild[];
}

const navLinks: NavLink[] = [
  { name: "Home", path: "/" },
  {
    name: "Events",
    path: "/events",
    children: [
      { name: "All Campuses", path: "/events" },
      { name: "PAC at UCalgary", path: "/events/ucalgary" },
      { name: "PAC at MRU", path: "/events/mru" },
    ],
  },
  {
    name: "Resources",
    path: "/resources",
    children: [
      { name: "Timeline", path: "/resources#timeline" },
      { name: "Books", path: "/resources#books" },
    ],
  },
  { name: "Statements", path: "/statements" },
  { name: "Join Us", path: "/join" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [expandedMobileItem, setExpandedMobileItem] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setExpandedMobileItem(null);
  }, [location.pathname]);

  // Check if current path matches link or its children
  const isActiveLink = (link: NavLink) => {
    if (location.pathname === link.path) return true;
    if (link.children) {
      return link.children.some(child => location.pathname === child.path);
    }
    return false;
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b transition-all duration-300",
        isScrolled 
          ? "bg-background/80 border-emerald-700/30 shadow-lg shadow-emerald-700/10" 
          : "bg-gradient-to-b from-background/90 to-background/70 border-emerald-700/20"
      )}
    >
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-700 to-emerald-700/60 flex items-center justify-center shadow-lg group-hover:shadow-emerald-700/50 transition-all group-hover:scale-110">
              <img 
                src="/images/logo.png" 
                alt="PAC Logo" 
                className="w-10 h-11 rounded-full object-cover"
              />
            </div>
            <div className="hidden sm:block">
              <span className="font-display text-lg font-semibold bg-gradient-to-r from-foreground to-emerald-700 bg-clip-text text-transparent group-hover:to-emerald-600 transition-all">
                Palestine Advocacy Club
              </span>
              <span className="block text-xs text-emerald-700/60 group-hover:text-emerald-700 transition-colors">
                Calgary Campuses
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.children && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={link.path}
                  className={cn(
                    "flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                    isActiveLink(link)
                      ? "text-white bg-emerald-700 shadow-lg shadow-emerald-700/30"
                      : "text-foreground/90 hover:text-white hover:bg-emerald-700/80 hover:shadow-lg hover:shadow-emerald-700/30"
                  )}
                >
                  {link.name}
                  {link.children && (
                    <ChevronDown className={cn(
                      "w-4 h-4 transition-transform duration-200",
                      activeDropdown === link.name && "rotate-180"
                    )} />
                  )}
                </Link>

                {/* Desktop Dropdown */}
                {link.children && activeDropdown === link.name && (
                  <div className="absolute top-full left-0 pt-2 animate-fade-in z-50">
                    <div className="bg-gradient-to-br from-card to-card/80 backdrop-blur-md rounded-xl shadow-xl border border-emerald-700/30 overflow-hidden min-w-[200px]">
                      {link.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.path}
                          className={cn(
                            "block px-4 py-3 text-sm font-medium transition-colors",
                            location.pathname === child.path
                              ? "text-white bg-emerald-700/80"
                              : "text-foreground/80 hover:text-white hover:bg-emerald-700/60"
                          )}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Button asChild size="sm" className="bg-gradient-to-r from-emerald-700 to-emerald-700/80 text-white hover:shadow-lg hover:shadow-emerald-700/50 transition-all">
              <Link to="/donate">Donate</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle (Hamburger) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-emerald-700 hover:bg-emerald-700/10 rounded-lg transition-all"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300 bg-gradient-to-b from-background/50 to-emerald-900/5",
            isMobileMenuOpen ? "max-h-[600px] pb-4" : "max-h-0"
          )}
        >
          <div className="space-y-1 pt-4 border-t border-emerald-700/20">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.children ? (
                  <>
                    <button
                      onClick={() => setExpandedMobileItem(
                        expandedMobileItem === link.name ? null : link.name
                      )}
                      className={cn(
                        "w-full flex items-center justify-between px-4 py-3 text-base font-medium rounded-lg transition-colors",
                        isActiveLink(link)
                          ? "text-white bg-emerald-700"
                          : "text-foreground/80 hover:text-white hover:bg-emerald-700/70"
                      )}
                    >
                      {link.name}
                      <ChevronDown className={cn(
                        "w-4 h-4 transition-transform duration-200",
                        expandedMobileItem === link.name && "rotate-180"
                      )} />
                    </button>
                    <div className={cn(
                      "overflow-hidden transition-all duration-300",
                      expandedMobileItem === link.name ? "max-h-48" : "max-h-0"
                    )}>
                      <div className="pl-6 py-2 space-y-1">
                        {link.children.map((child) => (
                          <Link
                            key={child.name}
                            to={child.path}
                            className={cn(
                              "block px-4 py-2 text-sm rounded-lg transition-colors",
                              location.pathname === child.path
                                ? "text-white bg-emerald-700/60"
                                : "text-muted-foreground hover:text-white hover:bg-emerald-700/50"
                            )}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    to={link.path}
                    className={cn(
                      "block px-4 py-3 text-base font-medium rounded-lg transition-colors",
                      location.pathname === link.path
                        ? "text-white bg-emerald-700"
                        : "text-foreground/80 hover:text-white hover:bg-emerald-700/70"
                    )}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4 px-4">
              <Button asChild className="w-full bg-gradient-to-r from-emerald-700 to-emerald-700/80 text-white hover:shadow-lg hover:shadow-emerald-700/50 transition-all">
                <Link to="/donate">Donate</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
