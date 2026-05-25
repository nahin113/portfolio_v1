'use client';

import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, message }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong.');
      }

      // Success state is handled, reset form fields
      setEmail('');
      setMessage('');
      
      // Keep "submitted" state for 5 seconds to show nice feedback
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (err) {
      console.error('Submission failed:', err);
      setError(err.message || 'Failed to send message. Please try again.');
      setSubmitted(false);
    }
  };

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.origin);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // const handleShare = async () => {
  //   if (typeof window !== 'undefined') {
  //     if (navigator.share) {
  //       try {
  //         await navigator.share({
  //           title: 'Nahin Ahmed Portfolio',
  //           url: window.location.origin,
  //         });
  //       } catch (err) {
  //         console.log('Share canceled or failed', err);
  //       }
  //     } else {
  //       handleCopyLink();
  //     }
  //   }
  // };

  return (
    <footer id="footer" className="relative w-full bg-white py-24 px-6 border-t border-slate-100 overflow-hidden flex flex-col items-center">
      {/* Background glow element */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[400px] bg-[radial-gradient(circle_at_bottom,rgba(217,38,95,0.015)_0%,rgba(255,255,255,0)_70%)] pointer-events-none"></div>

      <div className="max-w-xl w-full mx-auto relative z-10 flex flex-col items-center text-center">
        {/* Header */}
        <div>
          <h2 className="font-extrabold text-4xl text-slate-950 tracking-tight">
            Get In Touch
          </h2>
          <p className="text-slate-500 font-medium text-sm md:text-base mt-3 leading-relaxed">
            Please contact me directly at{' '}
            <a 
              href="mailto:nahinahmed113@gmail.com" 
              className="underline decoration-slate-400 hover:text-slate-950 transition-colors font-semibold"
            >
              nahinahmed113@gmail.com
            </a>{' '}
            or through this form.
          </p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="w-full mt-12 flex flex-col gap-6 text-left">
          {/* Email input */}
          <div>
            <label htmlFor="email" className="block font-bold text-slate-800 text-[14px] leading-tight">
              Email <span className="text-slate-400 font-normal">(optional)</span>
            </label>
            <p className="text-slate-400 text-xs font-normal mt-1">
              Provide your email if you&apos;d like me to reply directly to you. Leave empty if you prefer not to share it.
            </p>
            <input
              type="email"
              id="email"
              placeholder="your.email@example.com (optional)"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-2 px-4 py-3 rounded-lg border border-slate-200/80 bg-white placeholder-slate-400 text-slate-900 focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-400 transition-all text-sm shadow-sm"
            />
          </div>

          {/* Message input */}
          <div>
            <label htmlFor="message" className="block font-bold text-slate-800 text-[14px] leading-tight">
              Message
            </label>
            <textarea
              id="message"
              required
              placeholder="Hello! What's up?"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full mt-2 px-4 py-3 rounded-lg border border-slate-200/80 bg-white placeholder-slate-400 text-slate-900 focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-400 transition-all text-sm shadow-sm min-h-[160px] resize-y"
            />
          </div>

          {/* GDPR text */}
          <p className="text-[11px] md:text-[12px] text-slate-400 leading-relaxed mt-2">
            By submitting this form, you agree that your data (email and message) will be processed to respond to your inquiry. You may contact me at any time at{' '}
            <a href="mailto:nahinahmed113@gmail.com" className="underline hover:text-slate-700 transition-colors">
              nahinahmed113@gmail.com
            </a>.
          </p>

          {/* Success / Error Alerts */}
          {submitted && !email && !message && (
            <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/50 text-emerald-800 text-xs font-bold leading-relaxed text-center shadow-sm">
              ✨ Your message has been sent successfully! I will get back to you as soon as possible.
            </div>
          )}

          {error && (
            <div className="p-4 rounded-xl border border-rose-200 bg-rose-50/50 text-[#D9265F] text-xs font-bold leading-relaxed text-center shadow-sm">
              ⚠️ {error}
            </div>
          )}

          {/* Submit Button */}
          <div className="flex justify-center mt-4">
            <button
              type="submit"
              disabled={submitted && !email && !message}
              className="group bg-slate-950 hover:bg-slate-800 text-white font-semibold px-6 py-3 rounded-full text-sm flex items-center gap-2 transition-all shadow-sm active:scale-95 cursor-pointer disabled:opacity-80"
            >
              {submitted && !email && !message ? (
                <>
                  Sent!
                  <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </>
              ) : submitted ? (
                <>
                  Sending...
                  <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                </>
              ) : (
                <>
                  Submit
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </>
              )}
            </button>
          </div>
        </form>

        {/* Share & Socials Row */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-20 w-full max-w-lg">
          {/* Share */}
          {/* <button 
            onClick={handleShare}
            className="group inline-flex items-center gap-2 border border-slate-200 bg-white px-4 py-2 rounded-full text-[13px] font-bold text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all shadow-sm active:scale-95 cursor-pointer"
          >
            <svg className="w-4 h-4 text-slate-400 group-hover:text-slate-600 transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
            </svg>
            Share
          </button> */}

          {/* LinkedIn */}
          <a 
            href="https://www.linkedin.com/in/nahin-ahmed-bd/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 border border-slate-200 bg-white px-4 py-2 rounded-full text-[13px] font-bold text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all shadow-sm active:scale-95"
          >
            <svg className="w-4 h-4 text-slate-400 group-hover:text-slate-600 transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            LinkedIn
          </a>

          {/* GitHub */}
          <a 
            href="https://github.com/nahin113" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 border border-slate-200 bg-white px-4 py-2 rounded-full text-[13px] font-bold text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all shadow-sm active:scale-95"
          >
            <svg className="w-4 h-4 text-slate-400 group-hover:text-slate-600 transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
            </svg>
            GitHub
          </a>

          {/* Copy Link */}
          <button 
            onClick={handleCopyLink}
            className="group inline-flex items-center gap-2 border border-slate-200 bg-white px-4 py-2 rounded-full text-[13px] font-bold text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all shadow-sm active:scale-95 cursor-pointer"
          >
            {copied ? (
              <>
                <svg className="w-4 h-4 text-emerald-500 transition-colors" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span className="text-emerald-600">Copied!</span>
              </>
            ) : (
              <>
                <svg className="w-4 h-4 text-slate-400 group-hover:text-slate-600 transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Copy Link
              </>
            )}
          </button>
        </div>

        {/* Copyright */}
        <p className="text-slate-400 font-medium text-sm mt-12 text-center tracking-wide">
          &copy; 2026 Nahin Ahmed. All rights reserved.
        </p>

        {/* Sub Links */}
        <div className="flex items-center gap-3 text-slate-400 text-sm font-semibold mt-4">
          <a href="#" className="hover:text-slate-800 transition-colors">Privacy Policy</a>
          <span className="text-slate-200 select-none">•</span>
          <a href="#" className="hover:text-slate-800 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}