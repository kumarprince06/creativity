import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send, Phone, Mail, MapPin, MessageCircle, Star, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { motion } from "framer-motion";
import { STORE_INFO } from "@/constants";
import { SEO } from "@/components/SEO";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(1, { message: "Please select a subject." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

const quickActions = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    desc: "Chat with us instantly",
    color: "bg-[#25D366]",
    href: "https://wa.me/919831983105",
  },
  {
    icon: Phone,
    title: "Call Us",
    desc: "Speak to our team",
    color: "bg-blue-500",
    href: `tel:${STORE_INFO.phone}`,
  },
  {
    icon: Mail,
    title: "Email",
    desc: "Send us a message",
    color: "bg-purple-500",
    href: `mailto:${STORE_INFO.email}`,
  },
];

export default function ContactPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    alert("Message sent successfully! We'll get back to you soon.");
    form.reset();
  }

  return (
    <div className="flex flex-col w-full">
      <SEO 
        title="Contact Us" 
        description="Get in touch with Creativity in Belur, Howrah. Reach out via WhatsApp, call us, or visit our store. We respond fast to all printing and stationery inquiries." 
        keywords="contact Creativity, Belur print shop, Howrah stationery store contact, WhatsApp print order" 
        url="/contact"
      />
      {/* Hero */}
      <section className="bg-secondary py-20 md:py-28 text-center">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block text-sm font-bold text-primary font-heading mb-3">CONTACT</span>
            <h1 className="font-heading font-black text-3xl md:text-5xl text-white mb-6">
              Get in Touch 📞
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Have a question or need a custom quote? Reach out through any of our channels — we respond fast!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Action Cards */}
      <section className="py-12 bg-white -mt-10 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {quickActions.map((action, index) => (
              <motion.a
                key={index}
                href={action.href}
                target={action.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center space-x-4 p-5 rounded-2xl border bg-white hover:shadow-lg transition-all group"
              >
                <div className={`${action.color} text-white p-3 rounded-xl shrink-0`}>
                  <action.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base text-secondary">{action.title}</h3>
                  <p className="text-muted-foreground text-xs">{action.desc}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Map + Form Row */}
      <section className="py-16 md:py-20 bg-[#F8FAFC]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Left — Map & Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Map */}
              <div className="rounded-2xl overflow-hidden shadow-lg border h-[300px]">
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d350.13976426821193!2d88.34234770936348!3d22.63786405651868!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89d3fc99aa131%3A0x85d7aaca4672f144!2sCreativity!5e0!3m2!1sen!2sin!4v1781353392129!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 text-primary p-3 rounded-xl shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-secondary">Address</h4>
                    <p className="text-muted-foreground text-sm">{STORE_INFO.address}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 text-primary p-3 rounded-xl shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-secondary">Phone</h4>
                    <p className="text-muted-foreground text-sm">{STORE_INFO.phone}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 text-primary p-3 rounded-xl shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-secondary">Email</h4>
                    <p className="text-muted-foreground text-sm">{STORE_INFO.email}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right — Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-lg bg-white">
                <CardContent className="p-8">
                  <h2 className="font-heading font-bold text-2xl text-secondary mb-6">Send us a Message</h2>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-heading font-semibold">Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your name" {...field} className="rounded-xl h-12 bg-muted/50" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="font-heading font-semibold">Phone</FormLabel>
                              <FormControl>
                                <Input placeholder="+91 98765 43210" type="tel" {...field} className="rounded-xl h-12 bg-muted/50" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="font-heading font-semibold">Email</FormLabel>
                              <FormControl>
                                <Input placeholder="you@email.com" type="email" {...field} className="rounded-xl h-12 bg-muted/50" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-heading font-semibold">Subject</FormLabel>
                            <FormControl>
                              <Input placeholder="What is this about?" {...field} className="rounded-xl h-12 bg-muted/50" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-heading font-semibold">Message</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Tell us about your requirements..."
                                className="min-h-[120px] resize-none rounded-xl bg-muted/50"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full rounded-xl bg-primary hover:bg-primary/90 text-white font-bold font-heading h-12"
                      >
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Google Reviews / Social Proof */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-2xl">
          <div className="flex items-center justify-center space-x-1 mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-7 w-7 text-amber-400 fill-amber-400" />
            ))}
          </div>
          <h2 className="font-heading font-black text-3xl text-secondary mb-2">4.9 out of 5</h2>
          <p className="text-muted-foreground mb-6">Based on 200+ Google Reviews</p>
          <Button
            variant="outline"
            className="rounded-full font-bold font-heading border-2"
            asChild
          >
            <a
              href="https://www.google.com/maps/place/Creativity/@22.6378426,88.3422708,21z"
              target="_blank"
              rel="noopener noreferrer"
            >
              Leave a Google Review
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>
      {/* Bottom CTA */}
      <section className="bg-primary py-20 text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-heading font-black text-3xl md:text-4xl text-white mb-8">
            Ready to Start Your Project?
          </h2>
          <Button
            size="lg"
            className="rounded-full h-14 px-10 text-base font-bold font-heading bg-white text-primary hover:bg-white/90 shadow-xl"
            asChild
          >
            <a href="https://wa.me/919831983105" target="_blank" rel="noopener noreferrer">
              Chat with an Expert
              <ExternalLink className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
