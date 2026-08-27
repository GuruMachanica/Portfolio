import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn, textVariant } from "../utils/motion";
import { FaPaperPlane, FaCopy, FaCheck } from "react-icons/fa";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const CONTACT_TO_EMAIL =
  import.meta.env.VITE_CONTACT_TO_EMAIL || "mdhuzaifa00786@gmail.com";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("mdhuzaifa00786@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText("+916391028860");
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      alert("Contact form is not configured yet. Add EmailJS keys in your .env file.");
      return;
    }

    setLoading(true);

    const templateParams = {
      name: form.name,
      email: form.email,
      message: form.message,
      time: new Date().toLocaleString(),
      from_name: form.name,
      from_email: form.email,
      to_name: "Mohammad Huzaifa",
      to_email: CONTACT_TO_EMAIL,
      reply_to: form.email,
    };

    emailjs
      .send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you! I will get back to you as soon as possible.");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="-mt-[4rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Direct Channels &amp; Inquiries</p>
        <h2 className={styles.sectionHeadText}>Contact.</h2>
      </motion.div>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Col: Direct Channels (Pure Black & White) */}
        <motion.div
          variants={slideIn("left", "tween", 0.1, 0.8)}
          className="lg:col-span-5 flex flex-col gap-4">
          
          <div className="brutalist-panel rounded-3xl p-6 sm:p-7 border border-white/10">
            <h3 className="text-white text-[22px] font-bold font-poppins tracking-tight mb-2">
              Let&apos;s Build Together
            </h3>
            <p className="text-zinc-300 text-[14px] leading-relaxed font-poppins mb-6">
              I am open to machine learning roles, AI agent development, and high-throughput backend architecture opportunities.
            </p>

            {/* Email Action */}
            <div
              onClick={copyEmail}
              className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/40 transition-all duration-200 cursor-pointer flex items-center justify-between group mb-3">
              <div>
                <span className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest block">
                  EMAIL ADDRESS
                </span>
                <span className="text-white text-[14px] sm:text-[15px] font-mono font-bold mt-0.5 block break-all">
                  mdhuzaifa00786@gmail.com
                </span>
              </div>
              <button className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-zinc-300 group-hover:text-white transition-colors">
                {copiedEmail ? <FaCheck className="w-3.5 h-3.5 text-white" /> : <FaCopy className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Phone Action */}
            <div
              onClick={copyPhone}
              className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/40 transition-all duration-200 cursor-pointer flex items-center justify-between group mb-3">
              <div>
                <span className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest block">
                  PHONE / WHATSAPP
                </span>
                <span className="text-white text-[14px] sm:text-[15px] font-mono font-bold mt-0.5 block">
                  +91 6391028860
                </span>
              </div>
              <button className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-zinc-300 group-hover:text-white transition-colors">
                {copiedPhone ? <FaCheck className="w-3.5 h-3.5 text-white" /> : <FaCopy className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Location */}
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
              <span className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest block">
                LOCATION
              </span>
              <span className="text-white text-[14px] font-poppins font-medium mt-0.5 block">
                Prayagraj, Uttar Pradesh, India
              </span>
            </div>
          </div>
        </motion.div>

        {/* Right Col: Message Form */}
        <motion.div
          variants={slideIn("right", "tween", 0.2, 0.8)}
          className="lg:col-span-7 brutalist-panel rounded-3xl p-6 sm:p-8 border border-white/10">
          
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 font-poppins">
            
            <div>
              <label className="text-white text-[13px] font-mono font-bold block mb-2">
                YOUR NAME
              </label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="What is your name?"
                className="w-full bg-black border border-white/10 focus:border-white rounded-xl px-4 py-3.5 text-white text-[14px] outline-none transition-colors"
              />
            </div>

            <div>
              <label className="text-white text-[13px] font-mono font-bold block mb-2">
                YOUR EMAIL
              </label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="Where can I reach you?"
                className="w-full bg-black border border-white/10 focus:border-white rounded-xl px-4 py-3.5 text-white text-[14px] outline-none transition-colors"
              />
            </div>

            <div>
              <label className="text-white text-[13px] font-mono font-bold block mb-2">
                YOUR MESSAGE
              </label>
              <textarea
                rows="5"
                name="message"
                required
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project, team, or opportunity..."
                className="w-full bg-black border border-white/10 focus:border-white rounded-xl px-4 py-3.5 text-white text-[14px] outline-none transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-2 flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-white text-black hover:bg-zinc-200 font-mono font-bold text-[14px] transition-all duration-200 shadow-md">
              <FaPaperPlane className="w-3.5 h-3.5" />
              {loading ? "SENDING MESSAGE..." : "SEND MESSAGE"}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
