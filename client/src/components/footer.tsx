import { useLanguage } from "@/lib/language-context";
import { SiLinkedin, SiX } from "react-icons/si";
import { ArrowUpRight } from "lucide-react";
const logoImage = "/attached_assets/1661853192216_1767668534815.jpg";

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
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-foreground via-foreground to-foreground/95" />

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24 text-background">
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 ${isRTL ? "text-right" : ""}`}
        >
          <div className="sm:col-span-2 lg:col-span-1">
            <div
              className={`flex items-center gap-2 mb-8 ${isRTL ? "flex-row-reverse justify-end" : ""}`}
            >
              <img
                src={logoImage}
                alt="iThing"
                className="h-14 w-auto bg-white rounded-lg p-1.5"
              />
            </div>
            <p
              className={`text-background/60 text-sm leading-relaxed mb-8 ${isRTL ? "font-arabic" : ""}`}
            >
              {t("footer.description")}
            </p>
            <div
              className={`flex items-center gap-4 ${isRTL ? "justify-end" : ""}`}
            >
              <a
                href="https://www.linkedin.com/company/ithing-smart-business-solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-background/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                data-testid="link-linkedin"
              >
                <SiLinkedin className="h-5 w-5" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-background/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                data-testid="link-twitter"
              >
                <SiX className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4
              className={`font-bold mb-8 text-lg ${isRTL ? "font-arabic" : ""}`}
            >
              {t("footer.services")}
            </h4>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className={`group flex items-center gap-2 text-sm text-background/60 hover:text-background transition-colors ${isRTL ? "font-arabic flex-row-reverse justify-end" : ""}`}
                  >
                    {service}
                    <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className={`font-bold mb-8 text-lg ${isRTL ? "font-arabic" : ""}`}
            >
              {t("footer.quickLinks")}
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className={`group flex items-center gap-2 text-sm text-background/60 hover:text-background transition-colors ${isRTL ? "font-arabic flex-row-reverse justify-end" : ""}`}
                  >
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className={`font-bold mb-8 text-lg ${isRTL ? "font-arabic" : ""}`}
            >
              {t("footer.contact")}
            </h4>
            <ul className="space-y-4">
              <li
                className={`text-sm text-background/60 ${isRTL ? "font-arabic" : ""}`}
              >
                {t("contact.office.amman.address")}
              </li>
              <li
                className={`text-sm text-background/60 ${isRTL ? "font-arabic" : ""}`}
              >
                {t("contact.office.dubai.address")}
              </li>
              <li className="text-sm text-background/60" dir="ltr">
                info@ithingsolutions.com
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-background/10">
          <div
            className={`flex flex-col sm:flex-row items-center justify-between gap-6 ${isRTL ? "sm:flex-row-reverse" : ""}`}
          >
            <p
              className={`text-sm text-background/50 ${isRTL ? "font-arabic" : ""}`}
            >
              &copy; {currentYear} {t("footer.company")}.{" "}
              {t("footer.copyright")}
            </p>
            <div
              className={`flex items-center gap-8 ${isRTL ? "flex-row-reverse" : ""}`}
            >
              <a
                href="#"
                className={`text-sm text-background/50 hover:text-background transition-colors ${isRTL ? "font-arabic" : ""}`}
              >
                {t("footer.privacy")}
              </a>
              <a
                href="#"
                className={`text-sm text-background/50 hover:text-background transition-colors ${isRTL ? "font-arabic" : ""}`}
              >
                {t("footer.terms")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
