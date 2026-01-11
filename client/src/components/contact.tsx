import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLanguage } from "@/lib/language-context";
import { MapPin, Phone, Mail, Send, Loader2, MessageCircle, User } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const { t, isRTL } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const services = [
    { value: "ai", label: t("services.ai.title") },
    { value: "analytics", label: t("services.analytics.title") },
    { value: "cloud", label: t("services.cloud.title") },
    { value: "software", label: t("services.software.title") },
    { value: "consulting", label: t("services.consulting.title") },
    { value: "integration", label: t("services.integration.title") },
  ];

  const mutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: isRTL ? "تم الإرسال بنجاح" : "Message Sent",
        description: isRTL
          ? "شكراً لتواصلك معنا. سنرد عليك قريباً."
          : "Thank you for reaching out. We'll get back to you soon.",
      });
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    },
    onError: () => {
      toast({
        title: isRTL ? "خطأ" : "Error",
        description: isRTL
          ? "حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى."
          : "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  return (
    <section id="contact" className="py-28 lg:py-36 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/30 via-accent/50 to-accent/30" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 ${isRTL ? "flex-row-reverse" : ""}`}>
            <MessageCircle className="w-4 h-4 text-primary" />
            <span className={`text-sm font-semibold text-primary ${isRTL ? "font-arabic" : ""}`}>
              {isRTL ? "تواصل معنا" : "Get In Touch"}
            </span>
          </div>
          <h2
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 ${isRTL ? "font-arabic" : ""}`}
            data-testid="text-contact-title"
          >
            {t("contact.title")}
          </h2>
          <p
            className={`text-xl text-muted-foreground max-w-2xl mx-auto ${isRTL ? "font-arabic" : ""}`}
            data-testid="text-contact-subtitle"
          >
            {t("contact.subtitle")}
          </p>
        </div>

        <div className={`grid grid-cols-1 lg:grid-cols-5 gap-10 ${isRTL ? "lg:flex-row-reverse" : ""}`}>
          <Card className="lg:col-span-3 border-0 bg-background shadow-2xl">
            <CardContent className="p-8 lg:p-12">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label
                      htmlFor="name"
                      className={`text-sm font-semibold ${isRTL ? "font-arabic" : ""}`}
                    >
                      {t("contact.form.name")}
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                      className={`h-14 text-base border-2 focus:border-primary transition-colors ${isRTL ? "text-right font-arabic" : ""}`}
                      data-testid="input-name"
                    />
                  </div>
                  <div className="space-y-3">
                    <Label
                      htmlFor="email"
                      className={`text-sm font-semibold ${isRTL ? "font-arabic" : ""}`}
                    >
                      {t("contact.form.email")}
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                      className={`h-14 text-base border-2 focus:border-primary transition-colors ${isRTL ? "text-right" : ""}`}
                      dir="ltr"
                      data-testid="input-email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label
                      htmlFor="phone"
                      className={`text-sm font-semibold ${isRTL ? "font-arabic" : ""}`}
                    >
                      {t("contact.form.phone")}
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className={`h-14 text-base border-2 focus:border-primary transition-colors ${isRTL ? "text-right" : ""}`}
                      dir="ltr"
                      data-testid="input-phone"
                    />
                  </div>
                  <div className="space-y-3">
                    <Label
                      htmlFor="service"
                      className={`text-sm font-semibold ${isRTL ? "font-arabic" : ""}`}
                    >
                      {t("contact.form.service")}
                    </Label>
                    <Select
                      value={formData.service}
                      onValueChange={(value) =>
                        setFormData({ ...formData, service: value })
                      }
                    >
                      <SelectTrigger
                        className={`h-14 text-base border-2 focus:border-primary transition-colors ${isRTL ? "text-right font-arabic" : ""}`}
                        data-testid="select-service"
                      >
                        <SelectValue
                          placeholder={t("contact.form.selectService")}
                        />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem
                            key={service.value}
                            value={service.value}
                            className={isRTL ? "font-arabic" : ""}
                          >
                            {service.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-3">
                  <Label
                    htmlFor="message"
                    className={`text-sm font-semibold ${isRTL ? "font-arabic" : ""}`}
                  >
                    {t("contact.form.message")}
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    rows={6}
                    className={`text-base border-2 focus:border-primary transition-colors resize-none ${isRTL ? "text-right font-arabic" : ""}`}
                    data-testid="input-message"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className={`w-full h-14 text-lg font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all ${isRTL ? "font-arabic" : ""}`}
                  disabled={mutation.isPending}
                  data-testid="button-submit-contact"
                >
                  {mutation.isPending ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  ) : (
                    <>
                      <Send className={`h-5 w-5 ${isRTL ? "ml-3" : "mr-3"}`} />
                      {t("contact.form.submit")}
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="lg:col-span-2 space-y-6">
            <Card className="group border-0 bg-background shadow-xl overflow-hidden hover-lift hover-shine" data-testid="card-general-manager">
              <div className="h-2 bg-gradient-to-r from-primary to-red-600" />
              <CardContent className="p-8">
                <div className={`flex items-center gap-4 mb-6 ${isRTL ? "flex-row-reverse" : ""}`}>
                  <div className="p-4 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/20">
                    <User className="h-8 w-8 text-primary" />
                  </div>
                  <div className={isRTL ? "text-right" : ""}>
                    <h3 className={`text-2xl font-bold ${isRTL ? "font-arabic" : ""}`}>
                      {isRTL ? "iThing Solutions" : "iThing Solutions"}
                    </h3>
                    <p className={`text-primary font-semibold ${isRTL ? "font-arabic" : ""}`}>
                      {isRTL ? "تواصل معنا" : "Contact Us"}
                    </p>
                  </div>
                </div>
                <div className={`flex items-center gap-4 ${isRTL ? "flex-row-reverse" : ""}`}>
                  <div className="p-3 rounded-xl bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <a href="mailto:info@ithingsolutions.com" className="text-muted-foreground hover:text-primary transition-colors" dir="ltr">
                    info@ithingsolutions.com
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="group border-0 bg-background shadow-xl overflow-hidden hover-lift hover-shine" data-testid="card-office-amman">
              <div className="h-2 bg-gradient-to-r from-primary via-primary/80 to-primary/50" />
              <CardContent className="p-8">
                <h3
                  className={`text-2xl font-bold mb-6 ${isRTL ? "font-arabic text-right" : ""}`}
                >
                  {t("contact.office.amman")}
                </h3>
                <div className="space-y-5">
                  <div className={`flex items-start gap-4 ${isRTL ? "flex-row-reverse text-right" : ""}`}>
                    <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <MapPin className="h-5 w-5 text-primary icon-bounce" />
                    </div>
                    <span className={`text-muted-foreground pt-2 ${isRTL ? "font-arabic" : ""}`}>
                      {t("contact.office.amman.address")}
                    </span>
                  </div>
                  <div className={`flex items-center gap-4 ${isRTL ? "flex-row-reverse" : ""}`}>
                    <div className="p-3 rounded-xl bg-primary/10">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-muted-foreground" dir="ltr">
                      +962 6 XXX XXXX
                    </span>
                  </div>
                </div>
                <div className="mt-6 rounded-xl overflow-hidden border border-border/50">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108703.09807445508!2d35.87332895!3d31.9539494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151b5fb85d7981af%3A0x631c30c0f8dc65e8!2sAmman%2C%20Jordan!5e0!3m2!1sen!2s!4v1704067200000!5m2!1sen!2s"
                    width="100%"
                    height="150"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Amman Office Location"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="group border-0 bg-background shadow-xl overflow-hidden hover-lift hover-shine" data-testid="card-office-dubai">
              <div className="h-2 bg-gradient-to-r from-primary/50 via-primary/80 to-primary" />
              <CardContent className="p-8">
                <h3
                  className={`text-2xl font-bold mb-6 ${isRTL ? "font-arabic text-right" : ""}`}
                >
                  {t("contact.office.dubai")}
                </h3>
                <div className="space-y-5">
                  <div className={`flex items-start gap-4 ${isRTL ? "flex-row-reverse text-right" : ""}`}>
                    <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <MapPin className="h-5 w-5 text-primary icon-bounce" />
                    </div>
                    <span className={`text-muted-foreground pt-2 ${isRTL ? "font-arabic" : ""}`}>
                      {t("contact.office.dubai.address")}
                    </span>
                  </div>
                  <div className={`flex items-center gap-4 ${isRTL ? "flex-row-reverse" : ""}`}>
                    <div className="p-3 rounded-xl bg-primary/10">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-muted-foreground" dir="ltr">
                      +971 501970754
                    </span>
                  </div>
                </div>
                <div className="mt-6 rounded-xl overflow-hidden border border-border/50">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.6828tried505!2d54.89781915!3d25.07628055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1704067200000!5m2!1sen!2s"
                    width="100%"
                    height="150"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Dubai Office Location"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
