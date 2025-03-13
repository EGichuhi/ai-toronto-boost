import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  ArrowRight, Bot, Building, ChartBar, 
  MessageSquare, Briefcase, Users, Mail, CheckCircle, 
  Zap, Shield, Network, BrainCircuit, Cpu, Database
} from 'lucide-react';

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-block mb-4">
              <Zap className="w-12 h-12 text-blue-500 animate-pulse" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
              Transform Your Business with AI Automation
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Empower your business with custom AI solutions designed to streamline operations, 
              reduce costs, and accelerate growth.
            </p>
            <Button className="bg-blue-500 hover:bg-blue-600 text-lg px-8 py-6">
              Book Free Consultation
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our AI Solutions</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Cutting-edge AI services to revolutionize your business operations
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "AI Strategy Consulting",
                description: "Expert guidance on implementing AI solutions for your specific business needs",
                icon: BrainCircuit,
              },
              {
                title: "Large Language Models",
                description: "Custom LLM solutions for automation and natural language processing",
                icon: Cpu,
              },
              {
                title: "Process Automation",
                description: "Streamline operations with intelligent workflow automation",
                icon: Bot,
              },
              {
                title: "Data Analytics",
                description: "Transform raw data into actionable business insights",
                icon: ChartBar,
              },
              {
                title: "AI Integration",
                description: "Seamless integration of AI solutions with your existing systems",
                icon: Network,
              },
              {
                title: "Custom AI Development",
                description: "Tailored AI solutions built for your specific requirements",
                icon: Database,
              },
            ].map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/50 backdrop-blur-sm border border-gray-100">
                <service.icon className="w-12 h-12 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* For Business Section */}
      <section id="for-business" className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Enterprise Solutions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm">
              <Building className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Enterprise AI Integration</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive AI solutions designed for large-scale enterprises, featuring custom implementation and dedicated support.
              </p>
              <ul className="space-y-3">
                {[
                  'Custom AI Models Development',
                  'Enterprise-wide Integration',
                  'Dedicated Support Team',
                  'Scalable Infrastructure',
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
            <div className="space-y-6">
              <Card className="p-6 hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm">
                <h4 className="text-xl font-semibold mb-2">24/7 Enterprise Support</h4>
                <p className="text-gray-600">Round-the-clock support and monitoring for your AI systems</p>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm">
                <h4 className="text-xl font-semibold mb-2">Custom Solutions</h4>
                <p className="text-gray-600">Tailored AI implementations for your specific needs</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* For Individual Section */}
      <section id="for-individual" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Solutions for Professionals</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow bg-gradient-to-br from-blue-50 to-indigo-50">
              <Users className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Independent Consultants</h3>
              <p className="text-gray-600">Enhance your consulting practice with AI-powered insights</p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow bg-gradient-to-br from-blue-50 to-indigo-50">
              <Briefcase className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Small Businesses</h3>
              <p className="text-gray-600">Affordable AI solutions scaled for smaller operations</p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow bg-gradient-to-br from-blue-50 to-indigo-50">
              <Shield className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Startups</h3>
              <p className="text-gray-600">Future-proof your startup with cutting-edge AI technology</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose fitiAI
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Enterprise Security",
                description: "Bank-grade security protocols and data protection",
                icon: Shield,
              },
              {
                title: "Fast Implementation",
                description: "Get your AI solutions running in weeks, not months",
                icon: Zap,
              },
              {
                title: "Seamless Integration",
                description: "Works with your existing tools and systems",
                icon: Network,
              },
            ].map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 rounded-lg hover:bg-white/50 transition-colors">
                <benefit.icon className="w-6 h-6 text-blue-500 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section id="consultation" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Your Free Consultation</h2>
              <p className="text-gray-600 mb-8">
                Let's discuss how AI automation can transform your business operations and boost efficiency.
              </p>
              <div className="space-y-6">
                {[
                  {
                    title: "Personalized Analysis",
                    description: "Get a detailed assessment of your business needs",
                    icon: CheckCircle,
                  },
                  {
                    title: "Custom Solution Design",
                    description: "Receive tailored AI automation recommendations",
                    icon: CheckCircle,
                  },
                  {
                    title: "ROI Projection",
                    description: "Understanding the potential return on investment",
                    icon: CheckCircle,
                  },
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <benefit.icon className="w-6 h-6 text-secondary flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-6">Schedule Your Call</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Business Name</label>
                  <input type="text" className="w-full p-2 border rounded-md" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input type="email" className="w-full p-2 border rounded-md" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <input type="tel" className="w-full p-2 border rounded-md" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea className="w-full p-2 border rounded-md h-24"></textarea>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Book Consultation
                  <Mail className="ml-2" />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-500 to-violet-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join innovative businesses already benefiting from AI automation
          </p>
          <Button className="bg-white text-blue-500 hover:bg-gray-100 text-lg px-8 py-6">
            Schedule Your Free Consultation
          </Button>
        </div>
      </section>
    </div>
  );
}
