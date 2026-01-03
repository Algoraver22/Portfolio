import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiCheck,
  FiX,
  FiExternalLink,
} from 'react-icons/fi';
import { SiGeeksforgeeks, SiLeetcode } from 'react-icons/si';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [showPopup, setShowPopup] = useState(false);

  /* -------------------- Handlers -------------------- */

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = 'service_w6slo2m';
    const templateID = 'template_ptc5jy7';
    const publicKey = '5lrMeetdOIGLTpmNp';

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        setShowPopup(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setShowPopup(false), 3000);
      })
      .catch((error) => {
        console.error('Email failed:', error);
        alert('Failed to send message. Please try again.');
      });
  };

  /* -------------------- Data -------------------- */

  const contactInfo = [
    {
      icon: FiMail,
      label: 'Email',
      value: 'ak9656255@gmail.com',
      href: 'mailto:ak9656255@gmail.com',
      color: '#EA4335',
      bgColor: 'bg-red-100 dark:bg-red-900',
    },
    {
      icon: FiPhone,
      label: 'Phone',
      value: '+91 6387782118',
      href: 'tel:+916387782118',
      color: '#34A853',
      bgColor: 'bg-green-100 dark:bg-green-900',
    },
    {
      icon: FiMapPin,
      label: 'Location',
      value: 'Ghaziabad, India',
      href: '#',
      color: '#4285F4',
      bgColor: 'bg-blue-100 dark:bg-blue-900',
    },
  ];

  const socialLinks = [
    {
      icon: FiLinkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/anurag-chaturvedi-b62a7024b/',
      color: '#0077B5',
      shadowColor: 'rgba(0,119,181,0.4)',
    },
    {
      icon: FiGithub,
      label: 'GitHub',
      href: 'https://github.com/Algoraver22',
      color: '#333',
      shadowColor: 'rgba(51,51,51,0.4)',
    },
    {
      icon: FiInstagram,
      label: 'Instagram',
      href: 'https://www.instagram.com/anurag_shikhar_49/',
      color: '#E4405F',
      shadowColor: 'rgba(228,64,95,0.45)',
    },
    {
      icon: SiGeeksforgeeks,
      label: 'GeeksforGeeks',
      href: 'https://www.geeksforgeeks.org/user/anurag5649/',
      color: '#0F9D58',
      shadowColor: 'rgba(15,157,88,0.4)',
    },
    {
      icon: SiLeetcode,
      label: 'LeetCode',
      href: 'https://leetcode.com/u/ANURAG-SHIKHAR_20_22/',
      color: '#FFA116',
      shadowColor: 'rgba(255,161,22,0.4)',
    },
    {
      icon: FiExternalLink,
      label: 'Codolio',
      href: 'https://codolio.com/profile/Anurag_49_56_20@24',
      color: '#6366F1',
      shadowColor: 'rgba(99,102,241,0.4)',
    },
  ];

  /* -------------------- JSX -------------------- */

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-8" />
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            I'm always open to discussing new opportunities or interesting projects.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* LEFT COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold mb-8">Let's Connect</h3>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-center space-x-4">
                  <div className={`p-3 ${info.bgColor} rounded-lg`}>
                    <info.icon size={24} style={{ color: info.color }} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{info.label}</p>
                    {info.href !== '#' ? (
                      <a href={info.href} className="font-medium hover:text-primary-600">
                        {info.value}
                      </a>
                    ) : (
                      <p className="font-medium">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -5 }}
                  className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg"
                  style={{ color: social.color }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* RIGHT COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="p-8 rounded-2xl shadow-lg bg-white dark:bg-gray-800 space-y-5">
              <h3 className="text-2xl font-semibold">Send Message</h3>

              <input name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required className="input" />
              <input name="email" type="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required className="input" />
              <input name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required className="input" />
              <textarea name="message" rows={5} placeholder="Your Message" value={formData.message} onChange={handleChange} required className="input resize-none" />

              <button type="submit" className="w-full py-3 bg-purple-600 text-white rounded-xl flex justify-center items-center">
                <FiSend className="mr-2" /> Send Message
              </button>
            </form>
          </motion.div>
        </div>

        {/* SUCCESS POPUP */}
        <AnimatePresence>
          {showPopup && (
            <motion.div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
              <motion.div className="bg-white p-8 rounded-xl text-center">
                <FiCheck size={40} className="text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                <button onClick={() => setShowPopup(false)} className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg">
                  Close
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Contact;
