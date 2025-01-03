'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    venue: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="contact-section py-16 bg-rose-50/50 dark:bg-zinc-900/50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="font-serif text-3xl font-medium text-center mb-8 text-rose-700 dark:text-rose-300">
          Get in Touch With Us
        </h2>
        <p className="text-center mb-12 text-zinc-600 dark:text-zinc-300">
          We're excited to hear about your special day
        </p>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-group">
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-zinc-700 dark:text-zinc-200">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-rose-100 dark:border-zinc-700 bg-white/80 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-200 focus:ring-2 focus:ring-rose-200 dark:focus:ring-rose-700 focus:border-rose-300 dark:focus:border-rose-600 transition-colors"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-zinc-700 dark:text-zinc-200">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-rose-100 dark:border-zinc-700 bg-white/80 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-200 focus:ring-2 focus:ring-rose-200 dark:focus:ring-rose-700 focus:border-rose-300 dark:focus:border-rose-600 transition-colors"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone" className="block text-sm font-medium mb-2 text-zinc-700 dark:text-zinc-200">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-rose-100 dark:border-zinc-700 bg-white/80 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-200 focus:ring-2 focus:ring-rose-200 dark:focus:ring-rose-700 focus:border-rose-300 dark:focus:border-rose-600 transition-colors"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="date" className="block text-sm font-medium mb-2 text-zinc-700 dark:text-zinc-200">
                Event Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-rose-100 dark:border-zinc-700 bg-white/80 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-200 focus:ring-2 focus:ring-rose-200 dark:focus:ring-rose-700 focus:border-rose-300 dark:focus:border-rose-600 transition-colors"
              />
            </div>
            <div className="form-group">
              <label htmlFor="venue" className="block text-sm font-medium mb-2 text-zinc-700 dark:text-zinc-200">
                Venue
              </label>
              <input
                type="text"
                id="venue"
                name="venue"
                value={formData.venue}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-rose-100 dark:border-zinc-700 bg-white/80 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-200 focus:ring-2 focus:ring-rose-200 dark:focus:ring-rose-700 focus:border-rose-300 dark:focus:border-rose-600 transition-colors"
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject" className="block text-sm font-medium mb-2 text-zinc-700 dark:text-zinc-200">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-rose-100 dark:border-zinc-700 bg-white/80 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-200 focus:ring-2 focus:ring-rose-200 dark:focus:ring-rose-700 focus:border-rose-300 dark:focus:border-rose-600 transition-colors"
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="message" className="block text-sm font-medium mb-2 text-zinc-700 dark:text-zinc-200">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-rose-100 dark:border-zinc-700 bg-white/80 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-200 focus:ring-2 focus:ring-rose-200 dark:focus:ring-rose-700 focus:border-rose-300 dark:focus:border-rose-600 transition-colors resize-none"
              required
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="px-8 py-3 bg-rose-600 hover:bg-rose-700 dark:bg-rose-500 dark:hover:bg-rose-600 text-white rounded-lg inline-flex items-center space-x-2 transition-colors focus:ring-2 focus:ring-rose-200 dark:focus:ring-rose-700"
            >
              <span>Send Message</span>
              <Send className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;