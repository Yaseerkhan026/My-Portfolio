
"use client";

import React from "react";
import { Mail, Phone, Linkedin, MapPin } from "lucide-react";

interface ContactProps {
  email: string;
  phone: string;
  linkedin: string;
  location: string;
}

export function Contact({ email, phone, linkedin, location }: ContactProps) {
  const contactItems = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: email,
      href: `mailto:${email}`,
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: phone,
      href: `tel:${phone}`,
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "View Profile",
      href: linkedin.startsWith('http') ? linkedin : `https://${linkedin}`,
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: location,
      href: "#",
    },
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Contact Me</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Feel free to reach out for collaborations or just a friendly hello!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactItems.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              target={item.label === 'LinkedIn' ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="flex flex-col items-center p-8 bg-white rounded-3xl border border-border hover:border-accent hover:shadow-xl transition-all group"
            >
              <div className="p-4 bg-accent/5 rounded-2xl text-accent group-hover:bg-accent group-hover:text-white transition-all mb-4">
                {item.icon}
              </div>
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-1">{item.label}</span>
              <span className="text-sm font-headline font-bold text-foreground">{item.value}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
