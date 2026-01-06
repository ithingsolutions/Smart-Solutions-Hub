import { useLanguage } from "@/lib/language-context";
import { SiLinkedin, SiX } from "react-icons/si";
import logoImage from "@assets/1661853192216_1767668534815.jpg";

export function Footer() {
  const { t, isRTL } = useLanguage();
  const currentYear = new Date().getFullYear();

  const services = [
    t("services.ai.title"),
    t("services.analytics.title"),
    t("services.cloud.title"),
    t("services.software.title"),
    t("services.consulting.title"),
  ];

  const quickLinks = [
    { label: t("nav.home"), href: "#home" },
    { label: t("nav.services"), href: "#services" },
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.contact"), href: "#contact" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 ${isRTL ? "text-right" : ""}`}>
          <div className="sm:col-span-2 lg:col-span-1">
            <div className={`flex items-center gap-2 mb-4 ${isRTL ? "flex-row-reverse justify-end" : ""}`}>
              <img src={logoImage} alt="iThing" className="h-10 w-auto" />
            </div>
            <p className={`text-muted-foreground text-sm leading-relaxed mb-4 ${isRTL ? "font-arabic" : ""}`}>
              {t("footer.description")}
            </p>
            <div className={`flex items-center gap-3 ${isRTL ? "justify-end" : ""}`}>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md bg-muted hover-elevate transition-colors"
                data-testid="link-linkedin"
              >
                <SiLinkedin className="h-4 w-4" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md bg-muted hover-elevate transition-colors"
                data-testid="link-twitter"
              >
                <SiX className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className={`font-semibold mb-4 ${isRTL ? "font-arabic" : ""}`}>
              {t("footer.services")}
            </h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className={`text-sm text-muted-foreground hover:text-foreground transition-colors ${isRTL ? "font-arabic" : ""}`}
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={`font-semibold mb-4 ${isRTL ? "font-arabic" : ""}`}>
              {t("footer.quickLinks")}
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className={`text-sm text-muted-foreground hover:text-foreground transition-colors ${isRTL ? "font-arabic" : ""}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={`font-semibold mb-4 ${isRTL ? "font-arabic" : ""}`}>
              {t("footer.contact")}
            </h4>
            <ul className="space-y-2">
              <li className={`text-sm text-muted-foreground ${isRTL ? "font-arabic" : ""}`}>
                {t("contact.office.amman.address")}
              </li>
              <li className={`text-sm text-muted-foreground ${isRTL ? "font-arabic" : ""}`}>
                {t("contact.office.dubai.address")}
              </li>
              <li className="text-sm text-muted-foreground" dir="ltr">
                info@ithing.com
              </li>
            </ul>
          </div>
        </div>

        <div className={`mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 ${isRTL ? "sm:flex-row-reverse" : ""}`}>
          <p className={`text-sm text-muted-foreground ${isRTL ? "font-arabic" : ""}`}>
            &copy; {currentYear} {t("footer.company")}. {t("footer.copyright")}
          </p>
          <div className={`flex items-center gap-4 ${isRTL ? "flex-row-reverse" : ""}`}>
            <a
              href="#"
              className={`text-sm text-muted-foreground hover:text-foreground transition-colors ${isRTL ? "font-arabic" : ""}`}
            >
              {t("footer.privacy")}
            </a>
            <a
              href="#"
              className={`text-sm text-muted-foreground hover:text-foreground transition-colors ${isRTL ? "font-arabic" : ""}`}
            >
              {t("footer.terms")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
