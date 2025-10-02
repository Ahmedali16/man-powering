import { Briefcase, FileText, Plane, Users, ArrowUpRight, Check, Star, Target, Shield, Building, Code, Monitor, Cpu } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Services() {
  const services = [
    {
      icon: Code,
      title: "European Tech & IT Recruitment",
      description: "Specialized placement of software engineers, IT professionals, and tech talent across Europe's thriving tech hubs including Amsterdam, Berlin, and London.",
      features: ["Software Engineers", "DevOps Specialists", "Data Scientists", "Tech Leadership"],
      gradient: "from-indigo-500 to-purple-600",
      stats: { number: "850+", label: "Tech Professionals Placed" },
      image: "https://images.unsplash.com/photo-1637073849667-91120a924221?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzb2Z0d2FyZSUyMGVuZ2luZWVyJTIwdGVhbSUyMGNvZGluZ3xlbnwxfHx8fDE3NTkzMDM3ODN8MA&ixlib=rb-4.1.0&q=80&w=600"
    },
    {
      icon: FileText,
      title: "European Work Authorization", 
      description: "Fast-track visa processing and legal compliance for IT professionals seeking opportunities in the Netherlands, Germany, UK, and other EU markets.",
      features: ["Blue Card Processing", "ICT Permits", "Startup Visas", "EU Compliance"],
      gradient: "from-purple-500 to-pink-600",
      stats: { number: "98%", label: "Visa Success Rate" },
      image: "https://images.unsplash.com/photo-1567922997686-3145d6558633?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldXJvcGVhbiUyMHRlY2glMjBwcm9mZXNzaW9uYWxzJTIwb2ZmaWNlfGVufDF8fHx8MTc1OTMwMzc4N3ww&ixlib=rb-4.1.0&q=80&w=600"
    },
    {
      icon: Monitor,
      title: "European Tech Hub Relocation",
      description: "Complete relocation support for IT professionals moving to Europe's major tech centers: Amsterdam, Berlin, London, Stockholm, and Dublin.",
      features: ["Tech-Friendly Housing", "Startup Ecosystem Integration", "Tech Community Access", "Digital Nomad Support"],
      gradient: "from-pink-500 to-orange-500",
      stats: { number: "15", label: "European Tech Cities" },
      image: "https://images.unsplash.com/photo-1716703742196-9986679eb03f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwSVQlMjBlbmdpbmVlcnMlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzU5MzAzNzg5fDA&ixlib=rb-4.1.0&q=80&w=600"
    },
    {
      icon: Cpu,
      title: "IT Career Advancement Europe",
      description: "Strategic career development for engineers and IT professionals, leveraging Europe's booming tech ecosystem for rapid career progression.",
      features: ["Tech Salary Optimization", "European Tech Trends", "Startup Opportunities", "Leadership Pipeline"],
      gradient: "from-emerald-500 to-teal-600",
      stats: { number: "185%", label: "Average Salary Increase" },
      image: "https://images.unsplash.com/photo-1702468005178-d03074b08398?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldXJvcGVhbiUyMHN0YXJ0dXAlMjB0ZWNoJTIwdGVhbXxlbnwxfHx8fDE3NTkzMDM3OTZ8MA&ixlib=rb-4.1.0&q=80&w=600"
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
            <Building className="w-5 h-5 text-indigo-400" />
            <span className="text-white/90 text-lg">European Tech & IT Recruitment Excellence</span>
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
              Services Portfolio
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
            Specialized recruitment solutions connecting world-class IT professionals and software engineers with Europe's most innovative tech companies and leading startups.
          </motion.p>
        </motion.div>
        
        {/* Premium Services Grid */}
        <div className="grid lg:grid-cols-2 gap-10 max-w-7xl mx-auto mb-24">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
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
                
                <div className="relative p-12 space-y-8">
                  {/* Professional Image */}
                  <motion.div 
                    className="relative h-48 w-full rounded-2xl overflow-hidden mb-6"
                    initial={{ scale: 1.1, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                  >
                    <ImageWithFallback
                      src={service.image}
                      alt={`Professional ${service.title} team in European office`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                  </motion.div>

                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-6">
                      <motion.div 
                        className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-3xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300`}
                        whileHover={{ rotateY: 180 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="w-10 h-10 text-white" />
                      </motion.div>
                      <div>
                        <h3 className="text-3xl text-white mb-2">{service.title}</h3>
                        <div className="flex items-center gap-2">
                          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                          <span className="text-white/60 text-sm">Premium Service</span>
                        </div>
                      </div>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 45 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowUpRight className="w-8 h-8 text-white/40 group-hover:text-white transition-colors duration-300" />
                    </motion.div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-white/70 leading-relaxed text-xl">
                    {service.description}
                  </p>
                  
                  {/* Stats */}
                  <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                    <div className="flex items-center justify-between">
                      <div>
                        <motion.div 
                          className="text-4xl text-white mb-1"
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                        >
                          {service.stats.number}
                        </motion.div>
                        <div className="text-white/60">{service.stats.label}</div>
                      </div>
                      <Target className="w-8 h-8 text-indigo-400" />
                    </div>
                  </div>
                  
                  {/* Features */}
                  <div className="space-y-4">
                    <h4 className="text-white/90 text-sm uppercase tracking-wider flex items-center gap-2">
                      <Shield className="w-4 h-4" />
                      Service Highlights
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      {service.features.map((feature, featureIndex) => (
                        <motion.div 
                          key={featureIndex} 
                          className="flex items-center gap-3"
                          initial={{ x: -20, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.5 + featureIndex * 0.1 }}
                        >
                          <div className={`w-6 h-6 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                            <Check className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-white/80">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Dynamic Progress Line */}
                  <motion.div 
                    className={`h-1 w-0 bg-gradient-to-r ${service.gradient} group-hover:w-full transition-all duration-1000 rounded-full`}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, delay: 1 + index * 0.3 }}
                  ></motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Premium CTA Section */}
        <motion.div 
          className="text-center"
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
              <Star className="w-4 h-4 text-white" />
            </motion.div>
            
            <h3 className="text-3xl text-white mb-6">Ready to Launch Your European Tech Career?</h3>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Join Europe's premier recruitment network for IT professionals and software engineers. Access exclusive opportunities in Amsterdam, Berlin, London, and beyond.
            </p>
            
            <motion.div
              className="inline-flex items-center gap-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white px-12 py-6 rounded-3xl shadow-2xl hover:shadow-indigo-500/30 transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Building className="w-6 h-6" />
              <span className="text-xl">Schedule Tech Career Consultation</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowUpRight className="w-6 h-6" />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}