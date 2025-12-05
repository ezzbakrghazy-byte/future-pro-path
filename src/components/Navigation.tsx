import { useState } from "react";
import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import { Menu, X, LogOut, User } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

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
              to="/video-analysis"
              className="text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-foreground font-semibold"
            >
              Video Analysis
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
            
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon">
                    <User className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>
                    {user.email}
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => navigate("/profile")}>
                    <User className="mr-2 h-4 w-4" />
                    Account Settings
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate("/player-profile")}>
                    <User className="mr-2 h-4 w-4" />
                    Player Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => signOut()}>
                    <LogOut className="mr-2 h-4 w-4" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Button variant="default" onClick={() => navigate("/sign-in")}>
                  Sign In
                </Button>
                <Button variant="outline" onClick={() => navigate("/sign-up")}>
                  Get Started
                </Button>
              </>
            )}
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
                to="/video-analysis"
                className="text-muted-foreground hover:text-foreground transition-colors px-4 py-2"
                activeClassName="text-foreground font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                Video Analysis
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
                {user ? (
                  <>
                    <p className="text-sm text-muted-foreground">{user.email}</p>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => {
                        navigate("/profile");
                        setIsMenuOpen(false);
                      }}
                    >
                      <User className="mr-2 h-4 w-4" />
                      Account Settings
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => {
                        navigate("/player-profile");
                        setIsMenuOpen(false);
                      }}
                    >
                      <User className="mr-2 h-4 w-4" />
                      Player Profile
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => {
                        signOut();
                        setIsMenuOpen(false);
                      }}
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      Sign Out
                    </Button>
                  </>
                ) : (
                  <>
                    <Button 
                      variant="default" 
                      className="w-full"
                      onClick={() => {
                        navigate("/sign-in");
                        setIsMenuOpen(false);
                      }}
                    >
                      Sign In
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => {
                        navigate("/sign-up");
                        setIsMenuOpen(false);
                      }}
                    >
                      Get Started
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
