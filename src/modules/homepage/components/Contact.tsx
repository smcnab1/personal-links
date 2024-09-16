"use client";

import { useState } from "react";
import { FaRegEnvelopeOpen as EmailIcon } from "react-icons/fa";
import { PiConfettiDuotone as ContactIcon } from "react-icons/pi";

import SectionHeader from "@/common/components/SectionHeader";

const Contact = () => {
  const bgImage = "url('/images/bg-gradient-2.svg')";

  const [copiedEmail, setCopiedEmail] = useState("");

  const handleEmailClick = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);

    setTimeout(() => {
      setCopiedEmail("");
    }, 1000);
  };

  return (
    <section className="space-y-5">
      <SectionHeader icon={<ContactIcon size={24} />} title="Get in touch" />
      <div
        className="bg-[#94d7c5] text-neutral-900 border p-8 rounded-xl space-y-5 bg-no-repeat bg-right"
        style={{ backgroundImage: bgImage }}
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <EmailIcon size={24} className="text-neutral-800" />
        <div className="space-y-3">
          <div className="font-medium text-lg md:text-xl">Drop me an Email</div>
          <div
            className="hover:underline text-neutral-800 text-lg md:text-lg cursor-pointer"
            onClick={() => handleEmailClick("hello@sammcnab.co.uk")}
            data-umami-event="Click : Email"
          >
            {copiedEmail ? "Copied!" : "hello@sammcnab.co.uk"}
          </div>
        </div>
        <p className="text-sm md:text-base text-neutral-700 leading-relaxed">
          Be it a question about higher education, paramedicine or general knowledge, I've got you covered.
        </p>
      </div>
    </section>
  );
};

export default Contact;
