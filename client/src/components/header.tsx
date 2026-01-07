import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language-context";
import { useTheme } from "@/lib/theme-context";
import { Menu, X, Globe, Moon, Sun } from "lucide-react";
import logoImage from "@assets/1661853192216_1767668534815.jpg";

export function Header() {
  const { language, setLanguage, t, isRTL } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { key: "nav.home", href: "#home" },
    { key: "nav.services", href: "#services" },
    { key: "nav.about", href: "#about" },
    { key: "nav.contact", href: "#contact" },
  ];

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          <a
            href="#home"
            className="flex items-center gap-2"
            data-testid="link-logo"
          >
            <img src={logoImage} alt="iThing" className="h-10 w-auto" />
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className={`px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover-elevate ${isRTL ? "font-arabic" : ""}`}
                data-testid={`link-${item.key.split(".")[1]}`}
              >
                {t(item.key)}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              data-testid="button-theme-toggle"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              data-testid="button-language-toggle"
            >
              <Globe className="h-4 w-4" />
            </Button>

            <Button
              className={`hidden md:flex ${isRTL ? "font-arabic" : ""}`}
              data-testid="button-get-started"
            >
              {t("nav.getStarted")}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors ${isRTL ? "font-arabic" : ""}`}
                  data-testid={`link-mobile-${item.key.split(".")[1]}`}
                >
                  {t(item.key)}
                </a>
              ))}
              <Button className={`mt-2 ${isRTL ? "font-arabic" : ""}`} data-testid="button-mobile-get-started">
                {t("nav.getStarted")}
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
