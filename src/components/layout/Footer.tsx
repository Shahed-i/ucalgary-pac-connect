import { Link } from "react-router-dom";
import { Instagram, Mail, ExternalLink, Heart } from "lucide-react";

const footerLinks = {
  navigation: [
    { name: "Home", path: "/" },
    { name: "Events", path: "/events" },
    { name: "Resources", path: "/resources" },
    { name: "Statements", path: "/statements" },
  ],
  connect: [
    { name: "Join Us", path: "/join" },
    { name: "Contact", path: "/contact" },
    { name: "Donate", path: "/donate" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* Decorative top border */}
      <div className="h-1 bg-gradient-to-r from-primary via-accent to-primary" />

      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-display font-bold text-xl">
                PAC
              </div>
              <div>
                <span className="font-display text-xl font-semibold block">
                  Palestine Advocacy Club
                </span>
                <span className="text-sm text-background/60">
                  University of Calgary
                </span>
              </div>
            </Link>
            <p className="text-background/70 max-w-md leading-relaxed">
              Dedicated to raising awareness, educating our community, and advocating 
              for Palestinian human rights and justice through peaceful means.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:pac@ucalgary.ca"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://linktr.ee"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Linktree"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Navigate</h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-background/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Connect</h4>
            <ul className="space-y-3">
              {footerLinks.connect.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-background/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-background/50">
              © {new Date().getFullYear()} Palestine Advocacy Club. All rights reserved.
            </p>
            <p className="text-sm text-background/50 flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-accent" /> for justice and peace
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
