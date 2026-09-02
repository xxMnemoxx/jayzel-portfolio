"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "";
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "";
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "";

type Status = "idle" | "sending" | "success" | "error";

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const sendMessage = async () => {
    if (!formRef.current) return;

    if (EMAILJS_PUBLIC_KEY === "MMV8YnCrM31bg7sHX") {
      setStatus("error");
      setErrorMsg("Form isn't connected yet — add your EmailJS keys.");
      return;
    }

    setStatus("sending");
    setErrorMsg("");

    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, {
        publicKey: EMAILJS_PUBLIC_KEY,
      });
      setStatus("success");
      formRef.current.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
      setErrorMsg("Something went wrong sending that. Try again in a moment.");
    }
  };

  return (
    <section id="contact" className="py-20 md:py-24">
      <div className="mb-8 space-y-4">
        <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-amber-200/90">Send a message</p>
        <div className="flex items-center gap-4">
          <h2 className="game-heading text-3xl text-amber-50 md:text-4xl">Let&apos;s <span className="text-gold italic">Connect</span></h2>
          <span className="game-ornament" />
        </div>
      </div>

      <form
        ref={formRef}
        onSubmit={(e) => {
          e.preventDefault();
          void sendMessage();
        }}
        className="game-panel rounded-[0.4rem] p-6 md:p-10"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-3">
            <label className="ml-1 text-[10px] font-bold uppercase tracking-[0.2em] text-stone-300">Full Name</label>
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              className="w-full rounded-lg border border-white/10 bg-slate-950/70 px-5 py-4 text-sm text-amber-50 placeholder:text-stone-500 outline-none transition-all focus:border-amber-300/70"
            />
          </div>

          <div className="space-y-3">
            <label className="ml-1 text-[10px] font-bold uppercase tracking-[0.2em] text-stone-300">Email Address</label>
            <input
              type="email"
              name="reply_to"
              placeholder="email@example.com"
              required
              className="w-full rounded-lg border border-white/10 bg-slate-950/70 px-5 py-4 text-sm text-amber-50 placeholder:text-stone-500 outline-none transition-all focus:border-amber-300/70"
            />
          </div>
        </div>

        <div className="mt-6 space-y-3">
          <label className="ml-1 text-[10px] font-bold uppercase tracking-[0.2em] text-stone-300">Message Content</label>
          <textarea
            name="message"
            rows={5}
            placeholder="Tell me about your project..."
            required
            className="w-full resize-none rounded-lg border border-white/10 bg-slate-950/70 px-5 py-4 text-sm text-amber-50 placeholder:text-stone-500 outline-none transition-all focus:border-amber-300/70"
          />
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="pixel-font mt-8 rounded-lg border border-amber-300/60 bg-linear-to-r from-amber-300 to-yellow-500 px-8 py-4 text-[8px] text-slate-950 shadow-[0_0_25px_rgba(246,199,106,0.25)] transition-transform hover:scale-[1.02] disabled:opacity-60 disabled:hover:scale-100"
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>

        {status === "success" && (
          <p className="mt-4 text-xs text-amber-200/90">Message sent — thanks, I&apos;ll get back to you soon.</p>
        )}
        {status === "error" && (
          <p className="mt-4 text-xs text-red-400">{errorMsg}</p>
        )}
      </form>
    </section>
  );
};

export default ContactForm;