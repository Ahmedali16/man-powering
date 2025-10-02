import { Award, Users, Globe, Shield, TrendingUp, Building2, Target, CheckCircle, Code, Laptop } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div 
            className="space-y-8"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <motion.div 
                className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Building2 className="w-4 h-4" />
                About EuropeanCareers
              </motion.div>

              <motion.h2 
                className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                Connecting IT Talent with{" "}
                <span className="text-blue-600">European Tech Excellence</span>
              </motion.h2>

              <motion.p 
                className="text-xl text-slate-600 leading-relaxed"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                As Europe's premier tech recruitment firm, we specialize in connecting exceptional software engineers, IT professionals, and tech talent with leading companies and innovative startups across the Netherlands, UK, Germany, and beyond. Our comprehensive approach ensures successful placements that drive both individual tech careers and business innovation.
              </motion.p>
            </div>

            {/* Key Values */}
            <motion.div 
              className="grid md:grid-cols-2 gap-6"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              {[
                { icon: Target, title: "Precision Matching", desc: "98% placement success rate" },
                { icon: Shield, title: "Trusted Partner", desc: "500+ corporate clients" },
                { icon: Globe, title: "European Network", desc: "25+ industry sectors" },
                { icon: TrendingUp, title: "Career Growth", desc: "Fast-track placements" }
              ].map((value, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">{value.title}</h3>
                    <p className="text-slate-600 text-sm">{value.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Certifications */}
            <motion.div 
              className="flex items-center gap-6 pt-6 border-t border-slate-200"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-blue-600" />
                <span className="text-slate-700 font-medium">ISO 9001:2015</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-slate-700 font-medium">GDPR Compliant</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Statistics Dashboard */}
          <motion.div 
            className="relative"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Main Stats Container */}
            <div className="bg-slate-50 rounded-2xl p-8 space-y-8">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Our Impact by Numbers</h3>
                <p className="text-slate-600 text-sm">Driving success across European markets</p>
              </div>

              {/* Key Statistics */}
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: "2000+", label: "Successful Placements", color: "text-blue-600" },
                  { number: "500+", label: "Corporate Partners", color: "text-green-600" },
                  { number: "98%", label: "Match Accuracy", color: "text-purple-600" },
                  { number: "21", label: "Avg Days to Hire", color: "text-orange-600" }
                ].map((stat, index) => (
                  <motion.div 
                    key={index}
                    className="text-center p-4 bg-white rounded-xl shadow-sm"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className={`text-3xl font-bold mb-2 ${stat.color}`}>{stat.number}</div>
                    <div className="text-slate-600 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Industry Coverage */}
              <div className="space-y-4">
                <h4 className="font-semibold text-slate-900">Industry Expertise</h4>
                <div className="space-y-3">
                  {[
                    { sector: "Technology & Software", percentage: 95 },
                    { sector: "Financial Services", percentage: 88 },
                    { sector: "Healthcare & Life Sciences", percentage: 82 },
                    { sector: "Engineering & Manufacturing", percentage: 91 }
                  ].map((industry, index) => (
                    <motion.div 
                      key={index}
                      className="space-y-2"
                      initial={{ x: 20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-700">{industry.sector}</span>
                        <span className="text-slate-500">{industry.percentage}%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <motion.div 
                          className="bg-blue-600 h-2 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${industry.percentage}%` }}
                          transition={{ delay: 0.6 + index * 0.1, duration: 0.8 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Quick Contact */}
              <motion.div 
                className="bg-blue-600 text-white rounded-xl p-6 text-center"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                viewport={{ once: true }}
              >
                <h4 className="font-semibold mb-2">Ready to Get Started?</h4>
                <p className="text-blue-100 text-sm mb-4">Connect with our recruitment experts today</p>
                <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                  Schedule Consultation
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}