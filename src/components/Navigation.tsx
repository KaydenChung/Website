import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Lightbulb, User, Briefcase, Images, FileText, Mail, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname, location.hash]);

  const navItems = [
    { name: 'About', href: '/#about', icon: User },
    { name: 'Experience', href: '/#experience', icon: Briefcase },
    { name: 'Projects', href: '/#projects', icon: FileText },
    { name: 'Gallery', href: '/gallery', icon: Images },
    { name: 'Resume', href: '/KaydenChungResume.pdf', icon: FileText },
    { name: 'Contact', href: '/#contact', icon: Mail },
  ];

  const handleLinkClick = (href: string) => {
    if (href.startsWith('/#') && location.pathname === '/') {
      const id = href.substring(2); // remove '/#'
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-card/95 backdrop-blur-md shadow-card' : 'bg-transparent'
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <span
            onClick={() => {
              if (location.pathname === '/') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              } else {
                navigate('/');
              }
              setIsOpen(false);
            }}
            className="flex items-center space-x-2 group cursor-pointer"
          >
            <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
              <Lightbulb className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold gradient-text">Kayden Chung</span>
          </span>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(({ name, href, icon: Icon }) => {
              const isPdf = href.endsWith('.pdf');
              return isPdf ? (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 text-muted-foreground hover:text-primary transition-colors underline-animate"
                >
                  <Icon className="w-4 h-4" />
                  <span>{name}</span>
                </a>
              ) : (
                <Link
                  key={name}
                  to={href}
                  className="flex items-center space-x-1 text-muted-foreground hover:text-primary transition-colors underline-animate"
                  onClick={() => handleLinkClick(href)}
                >
                  <Icon className="w-4 h-4" />
                  <span>{name}</span>
                </Link>
              );
            })}

            <Button variant="ghost" size="sm" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>

          </div>

          <div className="md:hidden flex items-center space-x-2">
            <Button variant="ghost" size="sm" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
            <Button variant="ghost" size="sm" onClick={() => setIsOpen((open) => !open)}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-card border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map(({ name, href, icon: Icon }) => {
                const isPdf = href.endsWith('.pdf');
                return isPdf ? (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-3 py-2 text-muted-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{name}</span>
                  </a>
                ) : (
                  <Link
                    key={name}
                    to={href}
                    className="flex items-center space-x-2 px-3 py-2 text-muted-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
                    onClick={() => {
                      handleLinkClick(href);
                      if (!href.startsWith('/#') && location.pathname !== href) {
                        navigate(href);
                      }
                    }}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
