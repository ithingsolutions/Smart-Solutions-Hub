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
import { MapPin, Phone, Mail, Send, Loader2 } from "lucide-react";
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
    <section id="contact" className="py-24 lg:py-32 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            {isRTL ? "تواصل معنا" : "Contact Us"}
          </span>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 ${isRTL ? "font-arabic" : ""}`}
            data-testid="text-contact-title"
          >
            {t("contact.title")}
          </h2>
          <p
            className={`text-lg text-muted-foreground max-w-2xl mx-auto ${isRTL ? "font-arabic" : ""}`}
            data-testid="text-contact-subtitle"
          >
            {t("contact.subtitle")}
          </p>
        </div>

        <div className={`grid grid-cols-1 lg:grid-cols-5 gap-10 ${isRTL ? "lg:flex-row-reverse" : ""}`}>
          <Card className="lg:col-span-3 border-border bg-background">
            <CardContent className="p-8 lg:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label
                      htmlFor="name"
                      className={`font-medium ${isRTL ? "font-arabic" : ""}`}
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
                      className={`h-12 ${isRTL ? "text-right font-arabic" : ""}`}
                      data-testid="input-name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className={`font-medium ${isRTL ? "font-arabic" : ""}`}
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
                      className={`h-12 ${isRTL ? "text-right" : ""}`}
                      dir="ltr"
                      data-testid="input-email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label
                      htmlFor="phone"
                      className={`font-medium ${isRTL ? "font-arabic" : ""}`}
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
                      className={`h-12 ${isRTL ? "text-right" : ""}`}
                      dir="ltr"
                      data-testid="input-phone"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="service"
                      className={`font-medium ${isRTL ? "font-arabic" : ""}`}
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
                        className={`h-12 ${isRTL ? "text-right font-arabic" : ""}`}
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

                <div className="space-y-2">
                  <Label
                    htmlFor="message"
                    className={`font-medium ${isRTL ? "font-arabic" : ""}`}
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
                    rows={5}
                    className={`resize-none ${isRTL ? "text-right font-arabic" : ""}`}
                    data-testid="input-message"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className={`w-full h-12 text-base font-semibold ${isRTL ? "font-arabic" : ""}`}
                  disabled={mutation.isPending}
                  data-testid="button-submit-contact"
                >
                  {mutation.isPending ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  ) : (
                    <>
                      <Send className={`h-5 w-5 ${isRTL ? "ml-2" : "mr-2"}`} />
                      {t("contact.form.submit")}
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="lg:col-span-2 space-y-6">
            <Card className="border-border bg-background" data-testid="card-office-amman">
              <CardContent className="p-8">
                <h3
                  className={`text-xl font-bold mb-6 ${isRTL ? "font-arabic" : ""}`}
                >
                  {t("contact.office.amman")}
                </h3>
                <div className="space-y-4">
                  <div className={`flex items-start gap-4 ${isRTL ? "flex-row-reverse text-right" : ""}`}>
                    <div className="p-2 rounded-lg bg-primary/10">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <span className={`text-muted-foreground ${isRTL ? "font-arabic" : ""}`}>
                      {t("contact.office.amman.address")}
                    </span>
                  </div>
                  <div className={`flex items-center gap-4 ${isRTL ? "flex-row-reverse" : ""}`}>
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-muted-foreground" dir="ltr">
                      +962 6 XXX XXXX
                    </span>
                  </div>
                  <div className={`flex items-center gap-4 ${isRTL ? "flex-row-reverse" : ""}`}>
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-muted-foreground" dir="ltr">
                      amman@ithing.com
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-background" data-testid="card-office-dubai">
              <CardContent className="p-8">
                <h3
                  className={`text-xl font-bold mb-6 ${isRTL ? "font-arabic" : ""}`}
                >
                  {t("contact.office.dubai")}
                </h3>
                <div className="space-y-4">
                  <div className={`flex items-start gap-4 ${isRTL ? "flex-row-reverse text-right" : ""}`}>
                    <div className="p-2 rounded-lg bg-primary/10">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <span className={`text-muted-foreground ${isRTL ? "font-arabic" : ""}`}>
                      {t("contact.office.dubai.address")}
                    </span>
                  </div>
                  <div className={`flex items-center gap-4 ${isRTL ? "flex-row-reverse" : ""}`}>
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-muted-foreground" dir="ltr">
                      +971 4 XXX XXXX
                    </span>
                  </div>
                  <div className={`flex items-center gap-4 ${isRTL ? "flex-row-reverse" : ""}`}>
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-muted-foreground" dir="ltr">
                      dubai@ithing.com
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
