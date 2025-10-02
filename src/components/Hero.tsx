import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { ArrowRight, Play, Star, Users, MapPin, Briefcase, Award, TrendingUp, Globe, CheckCircle, Target, Building, Clock, UserCheck, Shield, Zap, Heart, Calculator, Wrench, Megaphone, Truck, Stethoscope, HardHat, ChartBar, Laptop, Gavel, Building2, Crown, Trophy, ArrowUpRight, ChevronRight } from "lucide-react";
import { motion, useInView } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useRef } from "react";

export function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const stats = [
    { icon: Users, value: "25,000+", label: "Professionals Placed", color: "text-blue-600" },
    { icon: Building2, value: "1,200+", label: "Partner Companies", color: "text-emerald-600" },
    { icon: Globe, value: "18", label: "European Countries", color: "text-purple-600" },
    { icon: Trophy, value: "98%", label: "Success Rate", color: "text-orange-600" }
  ];

  const industries = [
    { name: "Technology", percentage: 28, icon: Laptop },
    { name: "Finance", percentage: 22, icon: ChartBar },
    { name: "Healthcare", percentage: 18, icon: Stethoscope },
    { name: "Engineering", percentage: 16, icon: HardHat },
    { name: "Marketing", percentage: 10, icon: Megaphone },
    { name: "Logistics", percentage: 6, icon: Truck }
  ];

  const liveUpdates = [
    { location: "Amsterdam", role: "Senior Developer", salary: "€85K", time: "2 min ago" },
    { location: "London", role: "Product Manager", salary: "£75K", time: "5 min ago" },
    { location: "Berlin", role: "Data Scientist", salary: "€70K", time: "8 min ago" }
  ];

  return (
    <section ref={ref} className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Navigation Spacing */}
      <div className="h-20"></div>
      
      {/* Background Elements */}
      <div className="absolute inset-0 top-20">
        {/* Hero Background Image */}
        <motion.div 
          className="absolute inset-0 bg-cover bg-center"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.08 }}
          transition={{ duration: 3, ease: "easeOut" }}
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1728341651771-49116b839d18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb25kb24lMjBmaW5hbmNpYWwlMjBkaXN0cmljdCUyMHNreWxpbmV8ZW58MXx8fHwxNzU5MzA4NTgzfDA&ixlib=rb-4.1.0&q=80&w=1080')`
          }}
        />
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(148,163,184,0.03)_1px,transparent_1px),linear-gradient(rgba(148,163,184,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        
        {/* Floating Elements */}
        <motion.div 
          className="absolute top-1/4 right-10 w-72 h-48 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20"
          initial={{ x: 100, y: -50, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
        />
        <motion.div 
          className="absolute bottom-1/3 left-10 w-64 h-40 bg-blue-500/10 backdrop-blur-xl rounded-3xl border border-blue-200/30"
          initial={{ x: -100, y: 50, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 2, delay: 1.5 }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-12 gap-16 items-center min-h-[85vh]">
          
          {/* Left Content - Hero Information */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Trust Badge */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Badge className="bg-blue-50 text-blue-700 border-blue-200 px-6 py-3 text-base hover:bg-blue-100 transition-all duration-300">
                <Crown className="w-5 h-5 mr-2 text-yellow-500" />
                Europe's #1 Recruitment Platform
                <div className="flex ml-3">
                  {[1,2,3,4,5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </Badge>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              className="space-y-6"
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
                <span className="text-slate-900">Land Your Dream Job in</span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
                  Europe's Top Markets
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-slate-600 max-w-3xl leading-relaxed">
                Connect with Europe's most prestigious companies across all industries. 
                From Amsterdam to Stockholm, we place professionals in roles that transform careers.
              </p>
            </motion.div>

            {/* Stats Grid */}
            <motion.div 
              className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-8"
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.8 }}
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center group"
                  initial={{ y: 30, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.8, delay: 1 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-white shadow-lg flex items-center justify-center group-hover:shadow-xl transition-all duration-300`}>
                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                  <div className="text-slate-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 pt-6"
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 1, delay: 1.4 }}
            >
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 group"
                >
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-6 text-lg font-semibold rounded-xl"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </Button>
              </motion.div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div 
              className="flex flex-wrap items-center gap-8 pt-8 border-t border-slate-200"
              initial={{ y: 30, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 1.8 }}
            >
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-emerald-600" />
                <span className="text-slate-700 font-medium">ISO 27001 Certified</span>
              </div>
              <div className="flex items-center gap-3">
                <Award className="w-6 h-6 text-blue-600" />
                <span className="text-slate-700 font-medium">Award Winning Service</span>
              </div>
              <div className="flex items-center gap-3">
                <UserCheck className="w-6 h-6 text-purple-600" />
                <span className="text-slate-700 font-medium">GDPR Compliant</span>
              </div>
            </motion.div>
          </div>
          
          {/* Right Content - Dashboard Cards */}
          <div className="lg:col-span-4">
            <motion.div 
              className="space-y-6"
              initial={{ x: 100, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.6 }}
            >
              
              {/* Live Opportunities Card */}
              <Card className="bg-white/80 backdrop-blur-xl border-0 shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-bold text-slate-900 text-lg">Live Opportunities</h3>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                      <span className="text-emerald-600 font-medium">Live</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {liveUpdates.map((update, index) => (
                      <motion.div 
                        key={index}
                        className="flex items-center justify-between p-4 bg-slate-50 rounded-xl hover:bg-blue-50 transition-colors cursor-pointer group"
                        initial={{ x: 20, opacity: 0 }}
                        animate={isInView ? { x: 0, opacity: 1 } : {}}
                        transition={{ delay: 2 + index * 0.2 }}
                        whileHover={{ x: 5 }}
                      >
                        <div className="flex-1">
                          <div className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                            {update.role}
                          </div>
                          <div className="text-slate-600 text-sm">{update.location}</div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-emerald-600">{update.salary}</div>
                          <div className="text-slate-500 text-xs">{update.time}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full mt-4 border-blue-200 text-blue-600 hover:bg-blue-50"
                  >
                    View All Opportunities
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>

              {/* Industry Distribution Card */}
              <Card className="bg-white/80 backdrop-blur-xl border-0 shadow-xl">
                <CardContent className="p-6">
                  <h3 className="font-bold text-slate-900 text-lg mb-6">Industry Distribution</h3>
                  
                  <div className="space-y-4">
                    {industries.map((industry, index) => (
                      <motion.div 
                        key={index}
                        className="flex items-center gap-4"
                        initial={{ x: 20, opacity: 0 }}
                        animate={isInView ? { x: 0, opacity: 1 } : {}}
                        transition={{ delay: 2.5 + index * 0.1 }}
                      >
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                          <industry.icon className="w-4 h-4 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-center mb-1">
                            <span className="font-medium text-slate-900">{industry.name}</span>
                            <span className="text-slate-600 font-semibold">{industry.percentage}%</span>
                          </div>
                          <div className="w-full bg-slate-200 rounded-full h-2">
                            <motion.div 
                              className="h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                              initial={{ width: 0 }}
                              animate={isInView ? { width: `${industry.percentage}%` } : {}}
                              transition={{ duration: 1.5, delay: 3 + index * 0.1 }}
                            />
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Success Stories Teaser */}
              <Card className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white border-0 shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <Trophy className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg mb-2">Success Story</h4>
                      <p className="text-emerald-100 text-sm mb-3">
                        "EuropeanCareers helped me land my dream role as a Tech Lead in Amsterdam with a 40% salary increase!"
                      </p>
                      <div className="text-emerald-200 font-medium">- Sarah M., Software Engineer</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section - Partner Companies */}
        <motion.div 
          className="mt-20 pt-16 border-t border-slate-200"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1, delay: 2 }}
        >
          <div className="text-center mb-12">
            <p className="text-slate-600 text-lg font-medium mb-8">
              Trusted by Europe's leading companies
            </p>
            
            <div className="flex justify-center items-center gap-12 flex-wrap">
              {[1,2,3,4,5,6].map((i) => (
                <motion.div 
                  key={i}
                  className="w-32 h-16 bg-slate-100 rounded-xl flex items-center justify-center hover:bg-slate-200 transition-colors cursor-pointer"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ 
                    delay: 2.5 + i * 0.1, 
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="w-20 h-8 bg-slate-300 rounded" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}