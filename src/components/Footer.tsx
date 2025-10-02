import { Globe, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Building2, Crown, Star, ArrowUp, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Premium Background */}
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {/* Dark Professional Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        <motion.div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.3),transparent_50%),radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.3),transparent_50%),radial-gradient(circle_at_40%_40%,rgba(99,102,241,0.2),transparent_50%)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3, delay: 0.5 }}
        ></motion.div>

        {/* Animated Elements */}
        <motion.div 
          className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-indigo-500/10 to-purple-600/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-pink-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
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

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Premium Company Info */}
          <motion.div 
            className="space-y-8"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <motion.div 
                  className="w-14 h-14 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-2xl"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Building2 className="w-7 h-7 text-white" />
                </motion.div>
                <div>
                  <span className="text-2xl text-white tracking-tight">EuropeanCareers</span>
                  <div className="flex items-center gap-2 mt-1">
                    <Crown className="w-4 h-4 text-yellow-400" />
                    <span className="text-yellow-400 text-xs">PREMIUM RECRUITMENT</span>
                  </div>
                </div>
              </div>
              <p className="text-white/70 leading-relaxed text-lg">
                Europe's premier executive recruitment network. Connecting C-level talent with Fortune 500 companies and unicorn startups across Amsterdam, London, and Munich.
              </p>
            </div>
            
            {/* Premium Social Links */}
            <div className="space-y-4">
              <h4 className="text-white/90 text-sm uppercase tracking-wider flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-400" />
                Connect with Our Network
              </h4>
              <div className="flex gap-4">
                {[
                  { icon: Linkedin, gradient: "from-blue-600 to-blue-700", label: "LinkedIn" },
                  { icon: Twitter, gradient: "from-blue-400 to-blue-500", label: "Twitter" },
                  { icon: Facebook, gradient: "from-blue-600 to-indigo-600", label: "Facebook" },
                  { icon: Instagram, gradient: "from-purple-500 to-pink-500", label: "Instagram" }
                ].map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a 
                      key={index}
                      href="#" 
                      className={`w-12 h-12 bg-gradient-to-br ${social.gradient} rounded-2xl flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 group`}
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>
          
          {/* Executive Services */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-xl text-white mb-8 flex items-center gap-3">
              <div className="w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full"></div>
              Executive Services
            </h3>
            <ul className="space-y-4">
              {[
                "C-Level Executive Search",
                "Board Member Placement",
                "VP & Director Roles",
                "Strategic Consulting",
                "Leadership Assessment"
              ].map((service, index) => (
                <motion.li 
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  <a href="#" className="text-white/70 hover:text-white transition-colors duration-300 hover:translate-x-2 block py-1">
                    {service}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          {/* Premium Markets */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-xl text-white mb-8 flex items-center gap-3">
              <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
              Premium Markets
            </h3>
            <ul className="space-y-4">
              {[
                "🇳🇱 Netherlands - Amsterdam",
                "🇬🇧 United Kingdom - London", 
                "🇩🇪 Germany - Munich",
                "🇨🇭 Switzerland - Zurich",
                "🇫🇷 France - Paris"
              ].map((market, index) => (
                <motion.li 
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                >
                  <a href="#" className="text-white/70 hover:text-white transition-colors duration-300 hover:translate-x-2 block py-1">
                    {market}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          {/* Executive Contact */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-xl text-white mb-8 flex items-center gap-3">
              <div className="w-2 h-2 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full"></div>
              Executive Contact
            </h3>
            <div className="space-y-6">
              {[
                {
                  icon: Mail,
                  details: ["executives@europeancareers.com", "c-level@europeancareers.com"],
                  gradient: "from-indigo-500 to-purple-600"
                },
                {
                  icon: Phone,
                  details: ["+44 20 7123 4567 (London)", "+31 20 123 4567 (Amsterdam)"],
                  gradient: "from-emerald-500 to-teal-600"
                },
                {
                  icon: MapPin,
                  details: ["Canary Wharf Business District", "London, UK E14 5JP"],
                  gradient: "from-purple-500 to-pink-600"
                }
              ].map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <motion.div 
                    key={index}
                    className="flex items-start gap-4 group"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div 
                      className={`w-10 h-10 bg-gradient-to-br ${contact.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotateY: 180 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </motion.div>
                    <div>
                      {contact.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-white/70 group-hover:text-white transition-colors duration-300">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
        
        {/* Premium Bottom Section */}
        <motion.div 
          className="border-t border-white/10 mt-16 pt-12"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <motion.div 
                className="flex items-center gap-3"
                whileHover={{ scale: 1.05 }}
              >
                <Sparkles className="w-5 h-5 text-yellow-400" />
                <p className="text-white/70">
                  © 2024 EuropeanCareers. Premium Executive Recruitment Network.
                </p>
              </motion.div>
              
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <span className="text-white/60 text-sm">Trusted by 500+ Fortune Companies</span>
              </div>
            </div>
            
            <div className="flex items-center gap-8">
              <div className="flex gap-6 text-sm">
                {["Privacy Policy", "Terms of Service", "Executive Agreement"].map((link, index) => (
                  <motion.a 
                    key={index}
                    href="#" 
                    className="text-white/60 hover:text-white transition-colors duration-300"
                    whileHover={{ y: -2 }}
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  >
                    {link}
                  </motion.a>
                ))}
              </div>
              
              <motion.button
                className="flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-6 py-3 text-white/80 hover:text-white hover:bg-white/20 transition-all duration-300 group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <span className="text-sm">Back to Top</span>
                <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}