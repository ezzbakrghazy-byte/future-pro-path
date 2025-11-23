import { useState } from "react";
import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="flex items-center gap-3">
            <img src={logo} alt="في ضهرك" className="h-10 w-10" />
            <span className="text-xl font-bold text-foreground">في ضهرك</span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink
              to="/players"
              className="text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-foreground font-semibold"
            >
              Players
            </NavLink>
            <NavLink
              to="/clubs"
              className="text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-foreground font-semibold"
            >
              Clubs
            </NavLink>
            <NavLink
              to="/about"
              className="text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-foreground font-semibold"
            >
              About
            </NavLink>
            <Button variant="default">Sign In</Button>
            <Button variant="outline">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <NavLink
                to="/players"
                className="text-muted-foreground hover:text-foreground transition-colors px-4 py-2"
                activeClassName="text-foreground font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                Players
              </NavLink>
              <NavLink
                to="/clubs"
                className="text-muted-foreground hover:text-foreground transition-colors px-4 py-2"
                activeClassName="text-foreground font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                Clubs
              </NavLink>
              <NavLink
                to="/about"
                className="text-muted-foreground hover:text-foreground transition-colors px-4 py-2"
                activeClassName="text-foreground font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </NavLink>
              <div className="flex flex-col gap-2 px-4 pt-2">
                <Button variant="default" className="w-full">
                  Sign In
                </Button>
                <Button variant="outline" className="w-full">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
