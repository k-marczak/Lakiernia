import React from "react";
import { Metadata } from "next";
import HeaderSection7 from "@/components/header/HeaderSection7";
import BannerSection8 from "@/components/banner/BannerSection8";
import AboutSection6 from "@/components/about/AboutSection6";
import ServiceSection6 from "@/components/service/ServiceSection6";
import PricingSection4 from "@/components/pricing/PricingSection4";
import TestimonialSection5 from "@/components/testimonial/TestimonialSection5";
import TeamSection6 from "@/components/team/TeamSection6";
import CompareSection from "@/components/compare/CompareSection";
import ContactSection4 from "@/components/contact/ContactSection4";
import BlogSection6 from "@/components/blog/BlogSection6";
import FooterSection4 from "@/components/footer/FooterSection4";

export const metadata: Metadata = {
  title: "Servio - Car Wash Service",
  description: "Developed by Azizur Rahman",
};
export default function Home() {
  return (
    <main className="overflow-x-hidden car-wash-demo">
      <HeaderSection7 />
      <BannerSection8 />
      <AboutSection6 />
      <ServiceSection6 />
      <PricingSection4 />
      <TestimonialSection5 />
      <TeamSection6 />
      <CompareSection />
      <ContactSection4 />
      <BlogSection6 />
      <FooterSection4
        style="rv-18-footer"
        logo="assets/img/rv-18-logo-light.png"
      />
    </main>
  );
}
