import { ArrowRight, MapPin, Briefcase, Home, TrendingUp, Building2, Star, Users, Crown, Award } from "lucide-react";
import { motion } from "motion/react";

export function Destinations() {
  const destinations = [
    {
      country: "Netherlands",
      flag: "🇳🇱",
      description: "Amsterdam's thriving fintech ecosystem and Europe's tech startup capital. Premium opportunities for senior developers, product leaders, and C-level executives in renewable energy and digital innovation.",
      highlights: ["Fintech Innovation Hub", "Tax-Friendly for Expats", "English Business Culture", "Work-Life Balance"],
      jobMarket: "Tech & Fintech Boom",
      avgSalary: "€65,000 - €120,000",
      gradient: "from-orange-500 to-blue-500",
      executiveRoles: "250+",
      companies: ["Adyen", "Booking.com", "Philips"],
      specialties: ["Senior Developers", "Product VPs", "Fintech Leaders"]
    },
    {
      country: "United Kingdom", 
      flag: "🇬🇧",
      description: "London's global financial district and emerging digital health sector. Exceptional opportunities for banking executives, management consultants, and healthcare technology leaders.",
      highlights: ["Global Financial Capital", "Healthcare Innovation", "Consulting Excellence", "International Gateway"],
      jobMarket: "Finance & Consulting",
      avgSalary: "£55,000 - £110,000",
      gradient: "from-blue-600 to-red-500",
      executiveRoles: "180+",
      companies: ["Goldman Sachs", "McKinsey", "Babylon Health"],
      specialties: ["Investment Directors", "Senior Consultants", "HealthTech CEOs"]
    },
    {
      country: "Germany",
      flag: "🇩🇪", 
      description: "Berlin and Munich's AI/ML revolution and automotive industry 4.0. Strategic roles for engineering directors, AI specialists, and manufacturing executives in Europe's largest economy.",
      highlights: ["AI & Engineering Hub", "Automotive Innovation", "Manufacturing 4.0", "Economic Stability"],
      jobMarket: "Engineering & AI",
      avgSalary: "€60,000 - €115,000",
      gradient: "from-red-500 to-yellow-500",
      executiveRoles: "160+",
      companies: ["SAP", "BMW", "Siemens"],
      specialties: ["AI Directors", "Automotive VPs", "Engineering Leaders"]
    }
  ];

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Premium Background */}
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {/* European Business Background */}
        <motion.div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1564613655919-3b475e66f0ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxldXJvcGVhbiUyMGNpdHklMjBza3lsaW5lJTIwYnVzaW5lc3MlMjBkaXN0cmljdHxlbnwxfHx8fDE3NTkyNDA5Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`
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
          className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-indigo-500/20 to-purple-600/20 rounded-full blur-3xl"
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
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-full blur-3xl"
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
            <MapPin className="w-5 h-5 text-indigo-400" />
            <span className="text-white/90 text-lg">Premium European Markets</span>
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
              Elite
            </motion.span>
            <motion.span 
              className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent relative"
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Career Markets
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
            Strategic opportunities across Europe's most dynamic business hubs, exclusively curated for C-level executives and senior professionals.
          </motion.p>
        </motion.div>
        
        {/* Premium Destinations Grid */}
        <div className="grid lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {destinations.map((dest, index) => (
            <motion.div 
              key={index} 
              className="group relative"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -15 }}
            >
              {/* Glassmorphism Card */}
              <div className="absolute inset-0 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-700 shadow-2xl"></div>
              
              <div className="relative p-10 space-y-8">
                {/* Header with Flag and Stats */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <motion.span 
                        className="text-6xl"
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                      >
                        {dest.flag}
                      </motion.span>
                      <div>
                        <h3 className="text-3xl text-white">{dest.country}</h3>
                        <div className="flex items-center gap-2">
                          <Crown className="w-4 h-4 text-yellow-400" />
                          <span className="text-white/60 text-sm">Premium Market</span>
                        </div>
                      </div>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 45 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowRight className="w-8 h-8 text-white/40 group-hover:text-white transition-colors duration-300" />
                    </motion.div>
                  </div>
                  
                  {/* Executive Opportunities Stats */}
                  <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <motion.div 
                          className="text-3xl text-white mb-1"
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                        >
                          {dest.executiveRoles}
                        </motion.div>
                        <div className="text-white/60 text-sm">Executive Roles</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl text-white mb-1">{dest.avgSalary.split(' - ')[1]}</div>
                        <div className="text-white/60 text-sm">Max Salary</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-white/70 leading-relaxed text-lg">
                  {dest.description}
                </p>
                
                {/* Top Companies */}
                <div className="space-y-4">
                  <h4 className="text-white/90 text-sm uppercase tracking-wider flex items-center gap-2">
                    <Building2 className="w-4 h-4" />
                    Partner Companies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {dest.companies.map((company, cIndex) => (
                      <motion.div 
                        key={cIndex}
                        className="bg-white/10 backdrop-blur-xl rounded-xl px-4 py-2 border border-white/20 text-white/80 text-sm"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 + cIndex * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {company}
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                {/* Key Specialties */}
                <div className="space-y-4">
                  <h4 className="text-white/90 text-sm uppercase tracking-wider flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    Executive Specialties
                  </h4>
                  <div className="space-y-3">
                    {dest.specialties.map((specialty, sIndex) => (
                      <motion.div 
                        key={sIndex} 
                        className="flex items-center gap-3"
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.7 + sIndex * 0.1 }}
                      >
                        <div className={`w-3 h-3 bg-gradient-to-r ${dest.gradient} rounded-full`}></div>
                        <span className="text-white/80">{specialty}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                {/* Market Info */}
                <div className="pt-6 border-t border-white/10 space-y-4">
                  <div className="flex items-center gap-4">
                    <Briefcase className="w-5 h-5 text-indigo-400" />
                    <div>
                      <div className="text-sm text-white/60">Market Focus</div>
                      <div className="text-white">{dest.jobMarket}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <TrendingUp className="w-5 h-5 text-emerald-400" />
                    <div>
                      <div className="text-sm text-white/60">Executive Salary Range</div>
                      <div className="text-white">{dest.avgSalary}</div>
                    </div>
                  </div>
                </div>
                
                {/* CTA Button */}
                <motion.div 
                  className={`bg-gradient-to-r ${dest.gradient} text-white p-6 rounded-2xl text-center group-hover:shadow-2xl transition-all duration-300 cursor-pointer`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center justify-center gap-3">
                    <Users className="w-5 h-5" />
                    <span className="text-lg">Explore Executive Opportunities</span>
                  </div>
                </motion.div>
                
                {/* Dynamic Progress Line */}
                <motion.div 
                  className={`h-1 w-0 bg-gradient-to-r ${dest.gradient} group-hover:w-full transition-all duration-1000 rounded-full`}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: 1.5 + index * 0.3 }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-24"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-12 shadow-2xl max-w-4xl mx-auto">
            <motion.div 
              className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Award className="w-4 h-4 text-white" />
            </motion.div>
            
            <h3 className="text-3xl text-white mb-6">Ready to Access Premium European Markets?</h3>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Join Europe's most exclusive executive recruitment network across our top-tier markets.
            </p>
            
            <motion.div
              className="inline-flex items-center gap-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white px-12 py-6 rounded-3xl shadow-2xl hover:shadow-indigo-500/30 transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MapPin className="w-6 h-6" />
              <span className="text-xl">Schedule Market Analysis</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-6 h-6" />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}