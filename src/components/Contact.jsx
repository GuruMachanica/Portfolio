import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { send, sendHover } from '../assets';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const CONTACT_TO_EMAIL =
  import.meta.env.VITE_CONTACT_TO_EMAIL || 'mdhuzaifa00786@gmail.com';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    setToastMessage(`Copied ${label} to clipboard!`);
    setTimeout(() => {
      setToastMessage('');
    }, 2800);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      alert(
        'Contact form is not configured yet. Add EmailJS keys in your .env file.'
      );
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
      to_name: 'Mohammad Huzaifa',
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
          alert('Thank you. I will get back to you as soon as possible.');

          setForm({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert('Something went wrong. Please try again.');
        }
      );
  };

  return (
    <div className="sm:-mt-[8rem] -mt-[4rem] flex flex-col gap-10 overflow-hidden relative">
      {/* Copy Toast Notification */}
      {toastMessage && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-24 left-1/2 -translate-x-1/2 z-[999999] px-5 py-2.5 rounded-full bg-jetLight border border-emerald-400/50 shadow-2xl flex items-center gap-2.5 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <p className="text-[13px] font-bold font-beckman text-timberWolf tracking-wide">
            {toastMessage}
          </p>
        </motion.div>
      )}

      <div className="xl:flex-row flex-col flex gap-8">
        {/* Direct Contact Cards Sidebar */}
        <motion.div
          variants={slideIn('left', 'tween', 0.1, 1)}
          className="xl:w-[380px] w-full flex flex-col gap-4">
          <div>
            <p className={styles.sectionSubText}>Direct Channels</p>
            <h3 className={styles.sectionHeadTextLight}>Let's Connect.</h3>
          </div>

          {/* Quick Copy Email Card */}
          <div
            onClick={() => copyToClipboard('mdhuzaifa00786@gmail.com', 'Email')}
            className="p-5 rounded-2xl bg-jet border border-battleGray/20 hover:border-emerald-400/40 transition-all duration-200 cursor-pointer group shadow-md">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold font-beckman uppercase tracking-wider text-taupe">
                EMAIL ADDRESS
              </span>
              <span className="text-[11px] font-bold font-beckman text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity">
                CLICK TO COPY
              </span>
            </div>
            <p className="text-[15px] font-semibold text-timberWolf mt-1.5 break-all font-poppins">
              mdhuzaifa00786@gmail.com
            </p>
          </div>

          {/* Quick Copy Phone Card */}
          <div
            onClick={() => copyToClipboard('+916391028860', 'Phone Number')}
            className="p-5 rounded-2xl bg-jet border border-battleGray/20 hover:border-emerald-400/40 transition-all duration-200 cursor-pointer group shadow-md">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold font-beckman uppercase tracking-wider text-taupe">
                PHONE / WHATSAPP
              </span>
              <span className="text-[11px] font-bold font-beckman text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity">
                CLICK TO COPY
              </span>
            </div>
            <p className="text-[15px] font-semibold text-timberWolf mt-1.5 font-poppins">
              +91 6391028860
            </p>
          </div>

          {/* Location & Availability Card */}
          <div className="p-5 rounded-2xl bg-jet border border-battleGray/20 shadow-md">
            <span className="text-[11px] font-bold font-beckman uppercase tracking-wider text-taupe">
              LOCATION &amp; AVAILABILITY
            </span>
            <p className="text-[15px] font-semibold text-timberWolf mt-1.5 font-poppins flex items-center gap-1.5">
              <svg className="w-4 h-4 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Prayagraj, UP, India
            </p>
            <p className="text-[13px] text-emerald-400 mt-1 font-medium font-poppins flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Open to AI &amp; Backend Engineering Roles
            </p>
          </div>
        </motion.div>

        {/* Message Form */}
        <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          className="flex-1 bg-jet p-8 rounded-2xl">
          <p className={styles.sectionSubText}>Send a message</p>
          <h3 className={styles.sectionHeadTextLight}>Contact Form.</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-6 flex flex-col gap-5 font-poppins">
            <label className="flex flex-col">
              <span className="text-timberWolf font-medium mb-2 text-[14px]">Your Name</span>
              <input
                type="text"
                name="name"
                autoComplete="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="bg-eerieBlack py-3.5 px-5 placeholder:text-taupe text-timberWolf rounded-lg outline-none border-none font-medium text-[14px]"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-timberWolf font-medium mb-2 text-[14px]">Your Email</span>
              <input
                type="email"
                name="email"
                autoComplete="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className="bg-eerieBlack py-3.5 px-5 placeholder:text-taupe text-timberWolf rounded-lg outline-none border-none font-medium text-[14px]"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-timberWolf font-medium mb-2 text-[14px]">
                Your Message
              </span>
              <textarea
                rows="5"
                name="message"
                autoComplete="off"
                value={form.message}
                onChange={handleChange}
                placeholder="What's your message?"
                className="bg-eerieBlack py-3.5 px-5 placeholder:text-taupe text-timberWolf rounded-lg outline-none border-none font-medium text-[14px] resize-none"
              />
            </label>

            <button
              type="submit"
              className="live-demo flex justify-center sm:gap-4 gap-3 sm:text-[18px] text-[15px] text-timberWolf font-bold font-beckman items-center py-4 whitespace-nowrap sm:w-[130px] sm:h-[48px] w-[100px] h-[42px] rounded-[10px] bg-night hover:bg-battleGray hover:text-eerieBlack transition duration-[0.2s] ease-in-out"
              onMouseOver={() => {
                document
                  .querySelector('.contact-btn')
                  ?.setAttribute('src', sendHover);
              }}
              onMouseOut={() => {
                document
                  .querySelector('.contact-btn')
                  ?.setAttribute('src', send);
              }}>
              {loading ? 'Sending' : 'Send'}
              <img
                src={send}
                alt="send"
                className="contact-btn sm:w-[24px] sm:h-[24px] w-[20px] h-[20px] object-contain"
                loading="lazy"
                decoding="async"
              />
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
