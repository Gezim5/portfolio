import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { motion, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaPaperPlane, FaCheckCircle, FaTimesCircle, FaRocket, FaSpinner } from 'react-icons/fa';
import useSound from 'use-sound';
import confetti from 'canvas-confetti';

const SERVICE_ID = 'service_kktscaj';
const TEMPLATE_ID = 'template_dz6jipk';
const USER_ID = 'SabTxNdv9ORPNRuF8';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);
  const [isSending, setIsSending] = useState(false);
  const [showRocket, setShowRocket] = useState(false);

  const [playSendSound] = useSound('/sounds/swoosh.mp3', { volume: 0.5 });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setShowRocket(true);
    playSendSound();

    emailjs.send(SERVICE_ID, TEMPLATE_ID, form, USER_ID)
      .then(() => {
        setStatus('SUCCESS');
        setIsSending(false);
        setForm({ name: '', email: '', message: '' });
        launchConfetti();
        setTimeout(() => setShowRocket(false), 2000);
      })
      .catch(() => {
        setStatus('ERROR');
        setIsSending(false);
        setShowRocket(false);
      });
  };

  const closeModal = () => setStatus(null);

  const launchConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 },
    });
  };

  return (
    <motion.div
      className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Sparkles */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] bg-[size:20px_20px] opacity-10 pointer-events-none"></div>

      {/* Contact Card */}
      <motion.div
        className="w-full max-w-2xl p-10 rounded-2xl backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 text-transparent bg-clip-text mb-2">
            <TypeAnimation
              sequence={[
                "Let's Connect 💬",
                2000,
                "Have a project? 💡",
                2000,
                "Say Hello 👋",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </h2>
          <p className="text-gray-200">Send me a message — I'm open to ideas!</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {['name', 'email', 'message'].map((field, i) => (
            <motion.div
              key={field}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
            >
              {field !== 'message' ? (
                <input
                  type={field === 'email' ? 'email' : 'text'}
                  name={field}
                  value={form[field]}
                  onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
                />
              ) : (
                <textarea
                  name="message"
                  rows="5"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Your Message"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                />
              )}
            </motion.div>
          ))}

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            disabled={isSending}
            className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-cyan-500 hover:to-purple-500 text-white font-semibold py-3 rounded-lg shadow-lg transition-all duration-300 disabled:opacity-60"
          >
            {isSending ? (
              <>
                <FaSpinner className="animate-spin" /> Sending...
              </>
            ) : (
              <>
                Send Message <FaPaperPlane />
              </>
            )}
          </motion.button>
        </form>
      </motion.div>

      {/* Rocket Animation */}
      <AnimatePresence>
        {showRocket && (
          <motion.div
            className="absolute bottom-10 text-white text-5xl"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: -300, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
          >
            <FaRocket className="text-cyan-400 drop-shadow" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal Feedback */}
      <AnimatePresence>
        {status && (
          <motion.div
            className="absolute top-10 md:top-16 bg-white dark:bg-gray-900 text-black dark:text-white shadow-lg rounded-lg px-6 py-4 text-center border"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="flex items-center gap-3 justify-center text-lg font-semibold">
              {status === 'SUCCESS' ? (
                <>
                  <FaCheckCircle className="text-green-500" />
                  Your message was sent! 🎉
                </>
              ) : (
                <>
                  <FaTimesCircle className="text-red-500" />
                  Oops! Something went wrong.
                </>
              )}
            </div>
            <button
              onClick={closeModal}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Close
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Contact;
