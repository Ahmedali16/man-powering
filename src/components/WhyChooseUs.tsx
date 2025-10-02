import { Shield, Users, Globe, Headphones, CheckCircle, Award, Star, Crown, Sparkles, Target, Building2, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export function WhyChooseUs() {
  const benefits = [
    {
      icon: Shield,
      title: "Fortune 500 Trusted",
      description: "Exclusive partnerships with Europe's most prestigious corporations and unicorn startups. Our recruitment network spans enterprise leaders and emerging market innovators.",
      gradient: "from-indigo-500 to-purple-600",
      stat: "500+",
      statLabel: "Global Partners"
    },
    {
      icon: CheckCircle,
      title: "Executive-Grade Transparency", 
      description: "Zero hidden costs with full disclosure methodology. Every stage of our premium recruitment process is clearly defined with guaranteed performance metrics.",
      gradient: "from-purple-500 to-pink-600",
      stat: "100%",
      statLabel: "Transparency"
    },
    {
      icon: Globe,
      title: "Strategic European Network",
      description: "Sophisticated market intelligence across 15+ European business hubs. Deep relationships with C-level decision makers and board-level executive search partners.",
      gradient: "from-pink-500 to-orange-500",
      stat: "15+",
      statLabel: "EU Markets"
    },
    {
      icon: Headphones,
      title: "White-Glove Concierge",
      description: "Dedicated senior consultants providing personalized guidance throughout your entire career transition. Premium support extending 12 months post-placement.",
      gradient: "from-orange-500 to-red-500",
      stat: "12mo",
      statLabel: "Support Period"
    },
    {
      icon: Users,
      title: "98% Executive Success",
      description: "Industry-leading placement rate for senior professionals and C-level executives. Our sophisticated matching algorithm ensures optimal role-candidate alignment.",
      gradient: "from-emerald-500 to-teal-600",
      stat: "98%",
      statLabel: "Success Rate"
    },
    {
      icon: Award,
      title: "Global Industry Leader",
      description: "Award-winning recruitment excellence recognized by International Executive Search Association. Consistently ranked among Europe's top-tier manpower solutions providers.",
      gradient: "from-blue-500 to-indigo-600",
      stat: "#1",
      statLabel: "Industry Ranking"
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
        {/* Professional Background */}
        <motion.div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1758518729685-f88df7890776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHRlYW0lMjBtZWV0aW5nJTIwb2ZmaWNlfGVufDF8fHx8MTc1OTE2MDM4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`
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
            <Crown className="w-5 h-5 text-indigo-400" />
            <span className="text-white/90 text-lg">Why Executive Leaders Choose Us</span>
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
              Premium
            </motion.span>
            <motion.span 
              className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent relative"
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Excellence
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
            Experience the sophistication of Europe's most exclusive executive recruitment platform, engineered for C-level professionals and senior leadership talent.
          </motion.p>
        </motion.div>
        
        {/* Premium Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto mb-24">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div 
                key={index} 
                className="group relative"
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                whileHover={{ y: -10 }}
              >
                {/* Glassmorphism Card */}
                <div className="absolute inset-0 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-700 shadow-2xl"></div>
                
                <div className="relative p-10 text-center space-y-8">
                  {/* Icon and Stats */}
                  <div className="space-y-6">
                    <motion.div 
                      className={`w-24 h-24 bg-gradient-to-br ${benefit.gradient} rounded-3xl flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotateY: 180 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-12 h-12 text-white" />
                    </motion.div>
                    
                    {/* Stats Badge */}
                    <motion.div 
                      className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-6 py-3 shadow-xl"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.5 + index * 0.1, type: "spring" }}
                    >
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span className="text-2xl text-white">{benefit.stat}</span>
                      <span className="text-white/60 text-sm">{benefit.statLabel}</span>
                    </motion.div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-2xl text-white">{benefit.title}</h3>
                    <p className="text-white/70 leading-relaxed text-lg">{benefit.description}</p>
                  </div>
                  
                  {/* Dynamic Progress Line */}
                  <motion.div 
                    className={`h-1 w-0 bg-gradient-to-r ${benefit.gradient} group-hover:w-full transition-all duration-1000 rounded-full mx-auto`}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, delay: 1 + index * 0.2 }}
                  ></motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        {/* Premium Call to Action */}
        <motion.div 
          className="text-center"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-16 shadow-2xl max-w-5xl mx-auto">
            <motion.div 
              className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4 text-white" />
            </motion.div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-4xl text-white mb-6">Ready to Join Europe's Executive Elite?</h3>
                <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
                  Experience the pinnacle of executive recruitment services. Join 2000+ C-level professionals who have transformed their careers through our premium European network.
                </p>
              </div>
              
              {/* CTA Stats */}
              <div className="grid md:grid-cols-3 gap-8 py-8">
                {[
                  { number: "2000+", label: "Executive Placements" },
                  { number: "500+", label: "Fortune 500 Partners" },
                  { number: "98%", label: "Success Rate" }
                ].map((stat, index) => (
                  <motion.div 
                    key={index}
                    className="text-center"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1, type: "spring" }}
                  >
                    <motion.div 
                      className="text-4xl text-white mb-2"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-white/60">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white px-12 py-6 rounded-3xl shadow-2xl hover:shadow-indigo-500/30 transition-all duration-300 cursor-pointer group inline-flex items-center gap-4">
                    <Target className="w-6 h-6" />
                    <span className="text-xl">Schedule Executive Consultation</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-6 h-6" />
                    </motion.div>
                  </div>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="border-2 border-white/30 bg-white/10 backdrop-blur-xl text-white px-12 py-6 rounded-3xl hover:bg-white/20 transition-all duration-300 cursor-pointer inline-flex items-center gap-4">
                    <Building2 className="w-6 h-6" />
                    <span className="text-xl">View Premium Portfolio</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}