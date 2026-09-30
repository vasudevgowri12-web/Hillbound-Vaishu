import React, { useState } from 'react'
import { Mail, Send, CheckCircle2, MessageSquare, Sparkles, User, HelpCircle } from 'lucide-react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Feedback',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-20 lg:py-28 relative overflow-hidden bg-slate-950">
      
      {/* Background Ambient Lighting */}
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-[#00A3FF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Info */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-bold text-[#00A3FF] uppercase tracking-widest">
                <Mail className="w-3.5 h-3.5 text-[#00A3FF]" />
                GET IN TOUCH
              </div>
              <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight uppercase">
                CONNECT WITH <br />
                <span className="gradient-text-[#00A3FF]">DEVLOOP STUDIOS</span>
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Have feedback on <strong className="text-white">Hillbound Vaishu</strong>, project inquiries, press requests, or ideas for future releases? We’d love to hear from you.
            </p>

            {/* Quick Contact Cards */}
            <div className="space-y-3 pt-2">
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#00A3FF]/10 border border-[#00A3FF]/30 flex items-center justify-center text-[#00A3FF]">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-xs text-white uppercase tracking-wider">GAME FEEDBACK & SUPPORT</h4>
                  <p className="text-xs text-slate-400">Share suggestions or report game issues directly.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#FF9900]/10 border border-[#FF9900]/30 flex items-center justify-center text-[#FF9900]">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-xs text-white uppercase tracking-wider">MEDIA & INQUIRIES</h4>
                  <p className="text-xs text-slate-400">Press kits, review copies, and studio news.</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-2xl relative">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading font-black text-2xl text-white uppercase">
                    MESSAGE RECEIVED!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                    Thank you for reaching out to <strong className="text-white">DEVLOOP STUDIOS</strong>. We have received your message and will review it promptly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false)
                      setFormData({ name: '', email: '', subject: 'Feedback', message: '' })
                    }}
                    className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200 tracking-wider transition-all"
                  >
                    SEND ANOTHER MESSAGE
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00A3FF] transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00A3FF] transition-all"
                      />
                    </div>

                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                      Topic / Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-sm text-white focus:outline-none focus:border-[#00A3FF] transition-all"
                    >
                      <option value="Feedback">Game Feedback (Hillbound Vaishu)</option>
                      <option value="Bug">Bug Report</option>
                      <option value="Press">Press & Media Inquiry</option>
                      <option value="General">General Questions</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                      Message
                    </label>
                    <textarea
                      required
                      rows="4"
                      placeholder="Write your message here..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00A3FF] transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl font-heading font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#0066FF] to-[#00A3FF] hover:from-[#0052CC] hover:to-[#008AE6] shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>SEND MESSAGE TO DEVLOOP</span>
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
