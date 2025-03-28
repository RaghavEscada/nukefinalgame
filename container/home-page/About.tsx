"use client";
import Image from "next/image";
import {Heading } from "@/components";
import { TimelineDemo } from "@/data/data";
import { Zap, Instagram, Linkedin, MessageCircle, Rocket } from "lucide-react";

const socialLinks = [
  { id: 1, title: "Instagram", href: "https://instagram.com", icon: <Instagram size={20} /> },
  { id: 2, title: "LinkedIn", href: "https://linkedin.com", icon: <Linkedin size={20} /> },
  { id: 3, title: "WhatsApp", href: "https://wa.me/yourphonenumber", icon: <MessageCircle size={20} /> },
];

export default function About() {
  return (
    <section className="w-full bg-[#0A0A0A] text-white py-16 px-6 sm:px-4 rounded-t-[40px] z-20 relative rounded-xl overflow-hidden">
      {/* Header Section */}
      <div className="text-center max-w-5xl mx-auto">
        <h2 className="text-[3.5rem] font-black font-NeueMontreal leading-tight tracking-tight">
          <span className="text-[#FF4D4D]">Disruptive</span> Digital Strategies  
          That <span className="text-[#4ECDC4]">Transform</span> Brands Into  
          <br />
          <span className="text-white">Cultural Powerhouses.</span>
        </h2>
        <p className="text-gray-300 text-lg font-light mt-6 max-w-3xl mx-auto">
          Your audience is scrolling. Are they stopping for you?  
          Social media isn't just about posting, it's about standing out.  
          We craft content that turns scrollers into followers and followers into loyal customers.
        </p>
      </div>

      {/* Strategy Section */}
      <div className="w-full border-y border-[#ffffff1a] my-16 py-10 bg-[#141414]">
        <div className="flex flex-wrap gap-12 justify-between items-start px-6 sm:flex-col">
          {/* Left Section */}
          <div className="w-[45%] sm:w-full">
            <h3 className="text-[2.5rem] font-bold text-[#FF4D4D] font-NeueMontreal">
              Nuke's Methodology
            </h3>
            <img 
              src="/aboutdown.gif" 
              alt="Nuke's Methodology" 
              className="mt-6 w-full rounded-xl shadow-xl"
            />
            <p className="text-gray-300 text-lg mt-4 leading-relaxed">
              Our methodology is a strategic blend of data-driven insights and creative innovation. 
              We don't just create content; we craft experiences that resonate with your target audience, 
              turning every interaction into an opportunity for brand growth and meaningful engagement.
            </p>
          </div>

          {/* Right Section */}
          <div className="w-[50%] sm:w-full flex flex-col gap-8">
            {/* Strategy Point 1 */}
            <div className="flex items-start gap-4">
              <Rocket className="text-[#4ECDC4]" size={40} strokeWidth={2.5} />
              <div>
                <h4 className="text-xl font-bold">Aesthetically Magnetic</h4>
                <p className="text-gray-300 text-lg leading-relaxed">
                We craft lead-generation strategies that attract like a supercharged magnet.
With viral-worthy content and performance-driven marketing,
we transform fleeting attention into unstoppable business growth.


                </p>
              </div>
            </div>

            {/* Strategy Point 2 */}
            <div className="flex items-start gap-4">
              <Zap className="text-[#FF4D4D]" size={40} strokeWidth={2.5} />
              <div>
                <h4 className="text-xl font-bold">Creative Domination</h4>
                <p className="text-gray-300 text-lg leading-relaxed">
                Where strategy meets bold design.
We turn complex ideas into visually striking narratives,
commanding attention and dominating digital landscapes.


                </p>
              </div>
            </div>

            {/* Image Section */}
            <div className="w-full flex justify-center">
              <Image 
                src="/macbook.gif" 
                alt="Nuke Methodology Illustration" 
                width={600} 
                height={400} 
                className="w-full h-auto object-cover rounded-xl shadow-2xl"
              />
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h1 className="text-[1.5rem] font-bold text-white font-NeueMontreal mb-4">
                Connect With Nuke:
              </h1>
              <div className="flex space-x-6">
                {socialLinks.map((item) => (
                  <a 
                    key={item.id} 
                    href={item.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 text-lg text-gray-400 hover:text-[#4ECDC4] transition-all duration-300"
                  >
                    {item.icon}
                    <span>{item.title}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="w-full flex flex-col gap-12 bg-white rounded-xl py-12 px-6 sm:px-4">
        <Heading title="~Detonating marketing strategies that annihilate the competition" />
        <div className="w-full bg-white rounded-xl overflow-hidden shadow-2xl border border-[#ffffff1a]">
          <TimelineDemo />
        </div>
      </div>
    </section>
  );
}