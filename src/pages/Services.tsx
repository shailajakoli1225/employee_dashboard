import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Brain, 
  Shield, 
  Palette, 
  GraduationCap, 
  ArrowRight, 
  Check,
  Zap,
  Users,
  Award,
  Clock
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      subtitle: 'Full-Stack Excellence',
      description: 'Custom web applications built with modern technologies and best practices for optimal performance and user experience.',
      features: [
        'React & Next.js Development',
        'Node.js & Express Backend',
        'Database Design & Optimization',
        'RESTful API Development',
        'Progressive Web Apps (PWA)',
        'E-commerce Solutions',
        'CMS Integration',
        'Performance Optimization'
      ],
      technologies: ['React', 'Next.js', 'Node.js', 'MongoDB', 'PostgreSQL', 'AWS'],
      color: 'from-cyan-400 to-blue-600',
      bgColor: 'bg-cyan-400/10',
      projects: '200+',
      satisfaction: '98%',
    },
    {
      icon: Brain,
      title: 'AI Solutions',
      subtitle: 'Intelligent Automation',
      description: 'Custom AI implementations including chatbots, machine learning models, and intelligent automation systems.',
      features: [
        'Custom Chatbot Development',
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision Solutions',
        'Predictive Analytics',
        'AI Agent Development',
        'Data Pipeline Automation',
        'Model Deployment & Scaling'
      ],
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI', 'Hugging Face', 'Docker'],
      color: 'from-purple-400 to-pink-600',
      bgColor: 'bg-purple-400/10',
      projects: '50+',
      satisfaction: '95%',
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      subtitle: 'Digital Protection',
      description: 'Comprehensive security solutions to protect your digital assets and ensure compliance with industry standards.',
      features: [
        'Security Audits & Assessments',
        'Penetration Testing',
        'Vulnerability Management',
        'Compliance Implementation',
        'Incident Response Planning',
        'Security Architecture Design',
        'Employee Security Training',
        'Continuous Monitoring'
      ],
      technologies: ['Kali Linux', 'OWASP', 'Nessus', 'Metasploit', 'Wireshark', 'Splunk'],
      color: 'from-red-400 to-orange-600',
      bgColor: 'bg-red-400/10',
      projects: '100+',
      satisfaction: '99%',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      subtitle: 'User-Centered Design',
      description: 'Beautiful and intuitive designs that combine aesthetics with functionality for optimal user experience.',
      features: [
        'User Research & Analysis',
        'Information Architecture',
        'Wireframing & Prototyping',
        'Visual Design Systems',
        'Usability Testing',
        'Mobile-First Design',
        'Accessibility Compliance',
        'Design System Creation'
      ],
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'Principle', 'InVision', 'Framer'],
      color: 'from-green-400 to-teal-600',
      bgColor: 'bg-green-400/10',
      projects: '150+',
      satisfaction: '97%',
    },
    {
      icon: GraduationCap,
      title: 'Training Programs',
      subtitle: 'Skill Development',
      description: 'Professional development programs and internships to build the next generation of tech talent.',
      features: [
        'Full-Stack Development Bootcamp',
        'AI/ML Specialization Track',
        'Cybersecurity Certification',
        'UI/UX Design Workshop',
        'Professional Mentorship',
        'Industry Project Experience',
        'Career Placement Support',
        'Continuous Learning Path'
      ],
      technologies: ['Curriculum Design', 'LMS', 'Project-Based Learning', 'Mentorship', 'Certification'],
      color: 'from-yellow-400 to-orange-600',
      bgColor: 'bg-yellow-400/10',
      projects: '500+',
      satisfaction: '96%',
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We analyze your requirements and define project scope',
      icon: Users,
    },
    {
      step: '02',
      title: 'Planning',
      description: 'Strategic planning and architecture design',
      icon: Zap,
    },
    {
      step: '03',
      title: 'Development',
      description: 'Agile development with regular updates',
      icon: Code,
    },
    {
      step: '04',
      title: 'Delivery',
      description: 'Testing, deployment, and ongoing support',
      icon: Award,
    },
  ];

  return (
    <div className="min-h-screen gradient-bg pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden particle-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-12 leading-relaxed">
              Comprehensive digital solutions designed to transform your business
              and accelerate your growth in the digital landscape.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/contact">
                <motion.button
                  className="glass px-8 py-4 rounded-full text-white font-semibold text-lg hover:bg-cyan-400/20 transition-all duration-300 flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={service.title}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    isEven ? '' : 'lg:grid-flow-col-dense'
                  }`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Service Info */}
                  <div className={isEven ? '' : 'lg:col-start-2'}>
                    <motion.div
                      className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center mb-6`}
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className={`w-8 h-8 bg-gradient-to-r ${service.color} bg-clip-text text-transparent`} />
                    </motion.div>

                    <h2 className="text-4xl font-heading font-bold text-white mb-2">
                      {service.title}
                    </h2>
                    <p className={`text-xl bg-gradient-to-r ${service.color} bg-clip-text text-transparent font-semibold mb-6`}>
                      {service.subtitle}
                    </p>
                    <p className="text-white/80 text-lg mb-8 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Stats */}
                    <div className="flex items-center space-x-8 mb-8">
                      <div className="text-center">
                        <div className={`text-2xl font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                          {service.projects}
                        </div>
                        <div className="text-white/60 text-sm">Projects</div>
                      </div>
                      <div className="text-center">
                        <div className={`text-2xl font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                          {service.satisfaction}
                        </div>
                        <div className="text-white/60 text-sm">Satisfaction</div>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-8">
                      <h4 className="text-white font-semibold mb-4">Technologies We Use:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-white/10 rounded-full text-white/80 text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link to="/contact">
                      <motion.button
                        className={`glass px-6 py-3 rounded-full text-white font-medium hover:bg-gradient-to-r hover:${service.color} transition-all duration-300 flex items-center space-x-2`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </Link>
                  </div>

                  {/* Features List */}
                  <div className={isEven ? '' : 'lg:col-start-1 lg:row-start-1'}>
                    <motion.div
                      className="glass rounded-3xl p-8"
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-2xl font-heading font-bold text-white mb-6">
                        What We Deliver
                      </h3>
                      <ul className="space-y-4">
                        {service.features.map((feature, featureIndex) => (
                          <motion.li
                            key={featureIndex}
                            className="flex items-center space-x-3"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <div className={`w-6 h-6 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                              <Check className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-white/90">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery
              and exceptional results every time.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.step}
                  className="glass rounded-2xl p-8 text-center group hover:bg-white/5 transition-all duration-500"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <div className="text-6xl font-bold gradient-text mb-4">
                    {step.step}
                  </div>
                  
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-xl font-heading font-bold text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            className="glass rounded-3xl p-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-heading font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create a custom solution
              that drives your business forward.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <motion.button
                  className="glass px-8 py-4 rounded-full text-white font-semibold text-lg hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-600 transition-all duration-300 flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              
              <Link to="/portfolio">
                <motion.button
                  className="border-2 border-white/30 px-8 py-4 rounded-full text-white font-semibold text-lg hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Our Work
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;