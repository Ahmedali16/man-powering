import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Mail, Phone, MapPin, Clock, Building2, Crown, Calendar, ArrowRight, Sparkles, Users, Star } from "lucide-react";
import { motion } from "motion/react";

export function Contact() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Premium Background */}
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {/* Professional Background */}
        <motion.div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1758876202789-7f1388c96e01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxwcm9mZXNzaW9uYWwlMjBvZmZpY2UlMjB3b3Jrc3BhY2UlMjByZWNydWl0bWVudHxlbnwxfHx8fDE3NTkyNDA5MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`
          }}
        >
          <div className="absolute inset-0 bg-slate-900/85 backdrop-blur-[2px]"></div>
        </motion.div>

        {/* Professional Gradient Overlays */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-indigo-900/80 to-purple-900/90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        ></motion.div>
        <motion.div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.3),transparent_50%),radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.3),transparent_50%),radial-gradient(circle_at_40%_40%,rgba(99,102,241,0.2),transparent_50%)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3, delay: 0.7 }}
        ></motion.div>

        {/* Animated Elements */}
        <motion.div 
          className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-indigo-500/20 to-purple-600/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        ></motion.div>

        {/* Geometric Pattern */}
        <motion.div 
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        ></motion.div>
      </motion.div>

      <div className="relative z-10 container mx-auto px-6 py-32">
        {/* Premium Header */}
        <motion.div 
          className="text-center mb-24"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-8 py-4 mb-12 shadow-2xl"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div 
              className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            ></motion.div>
            <Building2 className="w-5 h-5 text-indigo-400" />
            <span className="text-white/90 text-lg">Executive Consultation Gateway</span>
          </motion.div>
          
          <motion.h2 
            className="text-6xl lg:text-8xl mb-12 leading-[0.85] tracking-tight"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <motion.span 
              className="block text-white"
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Start Your
            </motion.span>
            <motion.span 
              className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent relative"
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Executive Journey
              <motion.div 
                className="absolute -inset-2 bg-gradient-to-r from-indigo-400/30 via-purple-400/30 to-pink-400/30 blur-2xl rounded-lg -z-10"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
              ></motion.div>
            </motion.span>
          </motion.h2>
          
          <motion.p 
            className="text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            Connect with our executive recruitment specialists for a confidential consultation about premium opportunities across Europe's most prestigious markets.
          </motion.p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Premium Contact Form */}
          <motion.div 
            className="relative"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-12 shadow-2xl">
              <motion.div 
                className="absolute -top-4 left-8 w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Crown className="w-4 h-4 text-white" />
              </motion.div>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl text-white mb-4">Executive Consultation Request</h3>
                  <p className="text-white/70">Secure and confidential application for C-level and senior executive opportunities.</p>
                </div>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div 
                      className="space-y-3"
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                    >
                      <label className="text-white/90">First Name *</label>
                      <Input 
                        placeholder="Enter your first name" 
                        className="bg-white/10 backdrop-blur-xl border-white/20 text-white placeholder:text-white/50 rounded-2xl py-4 focus:border-indigo-400 focus:ring-indigo-400" 
                      />
                    </motion.div>
                    <motion.div 
                      className="space-y-3"
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                    >
                      <label className="text-white/90">Last Name *</label>
                      <Input 
                        placeholder="Enter your last name" 
                        className="bg-white/10 backdrop-blur-xl border-white/20 text-white placeholder:text-white/50 rounded-2xl py-4 focus:border-indigo-400 focus:ring-indigo-400" 
                      />
                    </motion.div>
                  </div>
                  
                  <motion.div 
                    className="space-y-3"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    <label className="text-white/90">Executive Email *</label>
                    <Input 
                      type="email" 
                      placeholder="your.email@company.com" 
                      className="bg-white/10 backdrop-blur-xl border-white/20 text-white placeholder:text-white/50 rounded-2xl py-4 focus:border-indigo-400 focus:ring-indigo-400" 
                    />
                  </motion.div>
                  
                  <motion.div 
                    className="space-y-3"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    <label className="text-white/90">Direct Phone</label>
                    <Input 
                      type="tel" 
                      placeholder="+1 (555) 123-4567" 
                      className="bg-white/10 backdrop-blur-xl border-white/20 text-white placeholder:text-white/50 rounded-2xl py-4 focus:border-indigo-400 focus:ring-indigo-400" 
                    />
                  </motion.div>
                  
                  <motion.div 
                    className="space-y-3"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                  >
                    <label className="text-white/90">Target Market *</label>
                    <select className="w-full p-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-white focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400">
                      <option value="" className="bg-slate-800">Select target market</option>
                      <option value="netherlands" className="bg-slate-800">Netherlands - Amsterdam/Utrecht</option>
                      <option value="uk" className="bg-slate-800">United Kingdom - London/Manchester</option>
                      <option value="germany" className="bg-slate-800">Germany - Berlin/Munich/Frankfurt</option>
                      <option value="multiple" className="bg-slate-800">Multiple European Markets</option>
                    </select>
                  </motion.div>
                  
                  <motion.div 
                    className="space-y-3"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                  >
                    <label className="text-white/90">Current Role & Objectives</label>
                    <Textarea 
                      placeholder="Share your current executive position, target role level (C-level, VP, Director), industry focus, and strategic objectives for your European career transition..."
                      className="min-h-[120px] bg-white/10 backdrop-blur-xl border-white/20 text-white placeholder:text-white/50 rounded-2xl focus:border-indigo-400 focus:ring-indigo-400"
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 1.1 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 text-white py-6 rounded-2xl shadow-2xl hover:shadow-indigo-500/30 transition-all duration-300 border-0 group text-xl">
                      <Calendar className="w-6 h-6 mr-3" />
                      Schedule Executive Consultation
                      <motion.div
                        className="ml-3"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight className="w-6 h-6" />
                      </motion.div>
                    </Button>
                  </motion.div>
                </form>
              </div>
            </div>
          </motion.div>
          
          {/* Premium Contact Information */}
          <motion.div 
            className="space-y-10"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-10 shadow-2xl">
              <motion.div 
                className="absolute -top-4 right-8 w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-xl"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-4 h-4 text-white" />
              </motion.div>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl text-white mb-4">Executive Contact Centre</h3>
                  <p className="text-white/70 leading-relaxed">
                    Our senior partners are available for confidential discussions about your career advancement opportunities across Europe's premier executive markets.
                  </p>
                </div>
                
                <div className="space-y-6">
                  {[
                    {
                      icon: Mail,
                      title: "Executive Email",
                      details: ["executives@europeancareers.com", "c-level@europeancareers.com"],
                      gradient: "from-indigo-500 to-purple-600"
                    },
                    {
                      icon: Phone,
                      title: "Direct Line",
                      details: ["+44 20 7123 4567 (London)", "+31 20 123 4567 (Amsterdam)"],
                      gradient: "from-emerald-500 to-teal-600"
                    },
                    {
                      icon: MapPin,
                      title: "European Headquarters",
                      details: ["Canary Wharf Business District", "London, UK E14 5JP"],
                      gradient: "from-purple-500 to-pink-600"
                    },
                    {
                      icon: Clock,
                      title: "Executive Hours",
                      details: ["Monday - Friday: 8:00 AM - 7:00 PM GMT", "Weekend consultations by appointment"],
                      gradient: "from-orange-500 to-red-500"
                    }
                  ].map((contact, index) => {
                    const Icon = contact.icon;
                    return (
                      <motion.div 
                        key={index}
                        className="flex items-start gap-6 group"
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                        whileHover={{ x: 10 }}
                      >
                        <motion.div 
                          className={`w-16 h-16 bg-gradient-to-br ${contact.gradient} rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}
                          whileHover={{ rotateY: 180 }}
                          transition={{ duration: 0.6 }}
                        >
                          <Icon className="w-8 h-8 text-white" />
                        </motion.div>
                        <div className="flex-1">
                          <h4 className="text-xl text-white mb-2">{contact.title}</h4>
                          {contact.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-white/70">{detail}</p>
                          ))}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
            
            {/* Premium Services Links */}
            <motion.div 
              className="relative bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-10 shadow-2xl"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Star className="w-6 h-6 text-yellow-400" />
                  <h4 className="text-xl text-white">Executive Resources</h4>
                </div>
                <div className="space-y-4">
                  {[
                    "Executive Assessment & Profiling",
                    "C-Level Market Intelligence Report",
                    "Premium Salary Benchmarking",
                    "Board-Level Reference Checks"
                  ].map((link, index) => (
                    <motion.a 
                      key={index}
                      href="#" 
                      className="flex items-center justify-between group text-white/80 hover:text-white transition-colors p-4 rounded-2xl hover:bg-white/5"
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                      whileHover={{ x: 10 }}
                    >
                      <span>{link}</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}