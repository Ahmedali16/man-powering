import { FileText, Search, FileCheck, MapPin, ArrowRight, CheckCircle, Briefcase, Users, Clock } from "lucide-react";
import { motion } from "motion/react";

export function HowItWorks() {
  const steps = [
    {
      icon: FileText,
      number: "01",
      title: "Elite Application Process",
      description: "Submit your professional portfolio through our premium application gateway. Our recruitment specialists conduct initial career assessment and compatibility screening.",
      gradient: "from-indigo-500 to-purple-600",
      features: ["CV Analysis", "Skills Assessment", "Career Mapping"]
    },
    {
      icon: Search,
      number: "02", 
      title: "Strategic Talent Matching",
      description: "Our senior consultants leverage our extensive European network to identify premium opportunities that align with your expertise and career trajectory.",
      gradient: "from-purple-500 to-pink-600",
      features: ["Executive Search", "Role Optimization", "Company Vetting"]
    },
    {
      icon: FileCheck,
      number: "03",
      title: "Comprehensive Visa & Legal Support",
      description: "Full-service immigration support with dedicated legal experts handling all documentation, permits, and regulatory compliance across European jurisdictions.",
      gradient: "from-pink-500 to-orange-500",
      features: ["Legal Documentation", "Permit Processing", "Compliance Assurance"]
    },
    {
      icon: MapPin,
      number: "04",
      title: "Premium Relocation Services",
      description: "White-glove relocation support including executive housing, banking relationships, family integration, and ongoing settlement assistance.",
      gradient: "from-emerald-500 to-teal-600",
      features: ["Executive Housing", "Banking Setup", "Family Support"]
    }
  ];

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Professional Background */}
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {/* Primary Background */}
        <motion.div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1696861273647-92dfe8bb697c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxkaXZlcnNlJTIwcHJvZmVzc2lvbmFscyUyMGhhbmRzaGFrZSUyMGJ1c2luZXNzfGVufDF8fHx8MTc1OTI0MDkzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`
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
            <Briefcase className="w-5 h-5 text-indigo-400" />
            <span className="text-white/90 text-lg">Our Premium Recruitment Process</span>
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
              Strategic
            </motion.span>
            <motion.span 
              className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent relative"
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Placement Process
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
            Four sophisticated stages that transform exceptional talent into European success stories through our premium manpower services.
          </motion.p>
        </motion.div>
        
        {/* Premium Process Steps */}
        <div className="max-w-7xl mx-auto space-y-20">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;
            
            return (
              <motion.div 
                key={index} 
                className="relative"
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <motion.div 
                    className="absolute left-1/2 -translate-x-1/2 bottom-0 w-px h-20 bg-gradient-to-b from-white/30 to-transparent hidden lg:block"
                    initial={{ height: 0 }}
                    whileInView={{ height: 80 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                  ></motion.div>
                )}
                
                <div className={`grid lg:grid-cols-2 gap-16 items-center ${isEven ? '' : 'lg:grid-flow-dense'}`}>
                  {/* Content Side */}
                  <motion.div 
                    className={`space-y-8 ${isEven ? '' : 'lg:col-start-2'}`}
                    initial={{ x: isEven ? -50 : 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    <div className="flex items-center gap-6">
                      <motion.div 
                        className={`w-20 h-20 bg-gradient-to-br ${step.gradient} rounded-3xl flex items-center justify-center shadow-2xl`}
                        whileHover={{ scale: 1.1, rotateY: 180 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="w-10 h-10 text-white" />
                      </motion.div>
                      <motion.span 
                        className="text-6xl bg-gradient-to-r from-white/30 to-white/10 bg-clip-text text-transparent"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5, type: "spring" }}
                      >
                        {step.number}
                      </motion.span>
                    </div>
                    
                    <div className="space-y-6">
                      <h3 className="text-4xl text-white">{step.title}</h3>
                      <p className="text-xl text-white/70 leading-relaxed">
                        {step.description}
                      </p>
                      
                      {/* Feature List */}
                      <div className="grid grid-cols-1 gap-3">
                        {step.features.map((feature, featureIndex) => (
                          <motion.div 
                            key={featureIndex}
                            className="flex items-center gap-3"
                            initial={{ x: -20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.7 + featureIndex * 0.1 }}
                          >
                            <div className={`w-2 h-2 bg-gradient-to-r ${step.gradient} rounded-full`}></div>
                            <span className="text-white/60">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Visual Side */}
                  <motion.div 
                    className={`relative ${isEven ? 'lg:col-start-2' : ''}`}
                    initial={{ x: isEven ? 50 : -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  >
                    <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-12 shadow-2xl">
                      <motion.div 
                        className={`w-32 h-32 bg-gradient-to-br ${step.gradient} rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Icon className="w-16 h-16 text-white" />
                      </motion.div>
                      
                      <div className="text-center space-y-4">
                        <h4 className="text-2xl text-white">Step {step.number}</h4>
                        <div className="text-white/60">Professional Excellence</div>
                        
                        {/* Progress Indicator */}
                        <motion.div 
                          className={`h-2 bg-gradient-to-r ${step.gradient} rounded-full mx-auto`}
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: 1 }}
                        ></motion.div>
                      </div>
                      
                      {/* Floating Elements */}
                      <motion.div 
                        className="absolute -top-4 -right-4 w-8 h-8 bg-white/20 backdrop-blur-xl rounded-2xl border border-white/30 flex items-center justify-center"
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      >
                        <CheckCircle className="w-4 h-4 text-white" />
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Premium CTA */}
        <motion.div 
          className="text-center mt-24"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.div
            className="inline-flex items-center gap-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white px-12 py-6 rounded-3xl shadow-2xl hover:shadow-indigo-500/30 transition-all duration-300 cursor-pointer group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Users className="w-6 h-6" />
            <span className="text-xl">Ready to Begin Your Journey?</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="w-6 h-6" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}