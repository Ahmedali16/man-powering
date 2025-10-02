import { Quote, Star, Crown, Building2, TrendingUp, Award, Sparkles, CheckCircle } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Chief Technology Officer",
      company: "Fintech Unicorn, Amsterdam", 
      image: "https://images.unsplash.com/photo-1551989745-8ac16ba81d78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWNjZXNzZnVsJTIwcHJvZmVzc2lvbmFsJTIwd29tYW4lMjBidXNpbmVzc3xlbnwxfHx8fDE3NTkyMzg1OTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      quote: "EuropeanCareers didn't just find me a role—they architected my entire executive transition to Amsterdam. Their C-level network access and strategic positioning elevated my career trajectory beyond expectations. The white-glove relocation service was exceptional.",
      rating: 5,
      flag: "🇳🇱",
      salary: "€180k",
      company_logo: "💎"
    },
    {
      name: "Marcus Thompson",
      role: "Investment Director", 
      company: "Goldman Sachs, London",
      image: "https://images.unsplash.com/photo-1758518727984-17b37f2f0562?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWNjZXNzZnVsJTIwcHJvZmVzc2lvbmFsJTIwbWFuJTIwYnVzaW5lc3N8ZW58MXx8fHwxNTk5MjM4NTkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      quote: "Their executive search sophistication is unmatched. The team understood my investment banking background and connected me directly with Goldman's leadership. The entire process felt like premium executive consulting rather than traditional recruitment.",
      rating: 5,
      flag: "🇬🇧",
      salary: "£225k",
      company_logo: "🏛️"
    },
    {
      name: "Dr. Elena Müller",
      role: "VP of Engineering",
      company: "BMW Group, Munich",
      image: "https://images.unsplash.com/photo-1758691736975-9f7f643d178e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxkaXZlcnNlJTIwcHJvZmVzc2lvbmFsJTIwdGVhbXxlbnwxfHx8fDE3NTkxOTY1MjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      quote: "Exceptional strategic guidance throughout my transition to BMW's executive team. Their deep understanding of German automotive culture and engineering leadership dynamics made the difference. Truly world-class recruitment consulting.",
      rating: 5,
      flag: "🇩🇪",
      salary: "€195k",
      company_logo: "🚗"
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
            backgroundImage: `url('https://images.unsplash.com/photo-1758630737900-a28682c5aa69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtb2Rlcm4lMjBjb3Jwb3JhdGUlMjB3b3Jrc3BhY2UlMjBvZmZpY2UlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NTkyNDA5MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`
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
            <Award className="w-5 h-5 text-indigo-400" />
            <span className="text-white/90 text-lg">Executive Success Stories</span>
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
              Client
            </motion.span>
            <motion.span 
              className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent relative"
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Transformations
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
            Real success stories from C-level executives and senior professionals who transformed their careers through our premium European recruitment network.
          </motion.p>
        </motion.div>
        
        {/* Premium Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-10 max-w-7xl mx-auto mb-24">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              className="group relative"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              {/* Glassmorphism Card */}
              <div className="absolute inset-0 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-700 shadow-2xl"></div>
              
              <div className="relative p-10 space-y-8">
                {/* Quote Icon and Company Badge */}
                <div className="flex items-start justify-between">
                  <motion.div 
                    className="w-16 h-16 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 flex items-center justify-center shadow-xl"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Quote className="w-8 h-8 text-indigo-400" />
                  </motion.div>
                  
                  <div className="text-right">
                    <div className="text-3xl mb-2">{testimonial.company_logo}</div>
                    <motion.div 
                      className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl px-4 py-2"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.5 + index * 0.1, type: "spring" }}
                    >
                      <Crown className="w-4 h-4 text-yellow-400" />
                      <span className="text-white text-sm">{testimonial.salary}</span>
                    </motion.div>
                  </div>
                </div>
                
                {/* Rating */}
                <div className="flex gap-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, rotate: 180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7 + i * 0.1, type: "spring" }}
                    >
                      <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                    </motion.div>
                  ))}
                </div>
                
                {/* Quote */}
                <blockquote className="text-white/80 leading-relaxed text-lg italic">
                  "{testimonial.quote}"
                </blockquote>
                
                {/* Profile */}
                <div className="flex items-center gap-6 pt-6 border-t border-white/10">
                  <div className="relative">
                    <ImageWithFallback
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-20 h-20 rounded-2xl object-cover shadow-xl"
                    />
                    <motion.div 
                      className="absolute -bottom-2 -right-2 w-8 h-8 bg-white/20 backdrop-blur-xl rounded-xl border border-white/30 flex items-center justify-center text-lg shadow-xl"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                    >
                      {testimonial.flag}
                    </motion.div>
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="text-xl text-white mb-1">{testimonial.name}</h4>
                    <p className="text-white/60 mb-1">{testimonial.role}</p>
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-indigo-400" />
                      <p className="text-indigo-400 text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
                
                {/* Success Indicator */}
                <motion.div 
                  className="flex items-center gap-3 bg-emerald-500/20 backdrop-blur-xl border border-emerald-400/30 rounded-2xl p-4"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1, type: "spring" }}
                >
                  <CheckCircle className="w-5 h-5 text-emerald-400" />
                  <span className="text-white/90 text-sm">Executive Placement Successful</span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Premium Statistics */}
        <motion.div 
          className="text-center"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-16 shadow-2xl max-w-6xl mx-auto">
            <motion.div 
              className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4 text-white" />
            </motion.div>
            
            <div className="space-y-12">
              <div>
                <h3 className="text-3xl text-white mb-4">Performance Excellence</h3>
                <p className="text-xl text-white/70 max-w-3xl mx-auto">
                  Industry-leading metrics that define our commitment to executive-level recruitment success across Europe's premier markets.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-12">
                {[
                  { number: "98%", label: "Executive Success Rate", icon: TrendingUp, gradient: "from-emerald-500 to-teal-600" },
                  { number: "4.9/5", label: "C-Level Satisfaction", icon: Star, gradient: "from-yellow-500 to-orange-500" },
                  { number: "21 Days", label: "Average Placement", icon: Building2, gradient: "from-indigo-500 to-purple-600" }
                ].map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div 
                      key={index}
                      className="text-center group"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.8 + index * 0.2, type: "spring" }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <motion.div 
                        className={`w-20 h-20 bg-gradient-to-br ${stat.gradient} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:scale-110 transition-transform duration-300`}
                        whileHover={{ rotateY: 180 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="w-10 h-10 text-white" />
                      </motion.div>
                      <motion.div 
                        className="text-5xl text-white mb-3"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                      >
                        {stat.number}
                      </motion.div>
                      <div className="text-white/70 text-lg">{stat.label}</div>
                      
                      {/* Dynamic Progress Line */}
                      <motion.div 
                        className={`h-1 w-0 bg-gradient-to-r ${stat.gradient} group-hover:w-full transition-all duration-1000 rounded-full mx-auto mt-4`}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 2, delay: 1.5 + index * 0.3 }}
                      ></motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}