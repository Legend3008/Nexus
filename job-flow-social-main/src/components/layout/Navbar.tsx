import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Bell, Briefcase, Home, Menu, MessageSquare, Search, User, X } from "lucide-react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 md:gap-4">
          <Link to="/" className="flex items-center gap-2">
            <Briefcase className="h-6 w-6 text-jobBlue-600" />
            <span className="hidden font-bold text-xl text-jobBlue-800 md:inline-block">Nexus</span>
          </Link>
          
          <div className="hidden md:flex md:items-center md:gap-6">
            <nav className="flex items-center gap-5">
              <Link 
                to="/" 
                className={`flex items-center gap-2 text-sm font-medium ${isActive('/') ? 'text-jobBlue-600' : 'text-foreground'} transition-colors hover:text-jobBlue-600`}
              >
                <Home className="h-4 w-4" />
                Home
              </Link>
              <Link 
                to="/jobs" 
                className={`flex items-center gap-2 text-sm font-medium ${isActive('/jobs') ? 'text-jobBlue-600' : 'text-foreground'} transition-colors hover:text-jobBlue-600`}
              >
                <Briefcase className="h-4 w-4" />
                Jobs
              </Link>
              <Link 
                to="/network" 
                className={`flex items-center gap-2 text-sm font-medium ${isActive('/network') ? 'text-jobBlue-600' : 'text-foreground'} transition-colors hover:text-jobBlue-600`}
              >
                <User className="h-4 w-4" />
                Network
              </Link>
              <Link 
                to="/messages" 
                className={`flex items-center gap-2 text-sm font-medium ${isActive('/messages') ? 'text-jobBlue-600' : 'text-foreground'} transition-colors hover:text-jobBlue-600`}
              >
                <MessageSquare className="h-4 w-4" />
                Messages
              </Link>
            </nav>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search jobs..."
              className="h-9 w-[200px] rounded-md border border-input bg-background pl-8 pr-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 lg:w-[300px]"
            />
          </div>
          
          <Button variant="ghost" size="icon" aria-label="Notifications">
            <Bell className="h-5 w-5" />
          </Button>

          <div className="flex items-center gap-4">
            <Link to="/login">
              <Button variant="outline" size="sm">Log In</Button>
            </Link>
            <Link to="/signup">
              <Button size="sm">Sign Up</Button>
            </Link>
          </div>
        </div>

        <button 
          className="flex items-center justify-center rounded-md p-2 text-muted-foreground md:hidden" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          <span className="sr-only">Toggle menu</span>
        </button>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 top-16 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:hidden">
          <nav className="container grid gap-6 p-6">
            <Link 
              to="/" 
              className={`flex items-center gap-2 text-lg font-medium ${isActive('/') ? 'text-jobBlue-600' : 'text-foreground'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              <Home className="h-5 w-5" />
              Home
            </Link>
            <Link 
              to="/jobs" 
              className={`flex items-center gap-2 text-lg font-medium ${isActive('/jobs') ? 'text-jobBlue-600' : 'text-foreground'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              <Briefcase className="h-5 w-5" />
              Jobs
            </Link>
            <Link 
              to="/network" 
              className={`flex items-center gap-2 text-lg font-medium ${isActive('/network') ? 'text-jobBlue-600' : 'text-foreground'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              <User className="h-5 w-5" />
              Network
            </Link>
            <Link 
              to="/messages" 
              className={`flex items-center gap-2 text-lg font-medium ${isActive('/messages') ? 'text-jobBlue-600' : 'text-foreground'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              <MessageSquare className="h-5 w-5" />
              Messages
            </Link>
            
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search jobs..."
                className="h-10 w-full rounded-md border border-input bg-background pl-8 pr-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />
            </div>
            
            <div className="flex flex-col gap-4 mt-4">
              <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                <Button variant="outline" className="w-full">Log In</Button>
              </Link>
              <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full">Sign Up</Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
