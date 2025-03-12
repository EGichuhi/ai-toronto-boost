import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  ArrowRight, Bot, Building, ChartBar, Clock, Database, 
  MessageSquare, Briefcase, Users, Mail, CheckCircle, GraduationCap,
  Zap, Shield, Network
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

      {/* For Business Section */}
      <section id="for-business" className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Enterprise Solutions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm">
              <Building className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Scale Your Operations</h3>
              <p className="text-gray-600 mb-6">
                Transform your business processes with enterprise-grade AI solutions designed for scaling companies.
              </p>
              <ul className="space-y-3">
                {['Custom AI Integration', 'Process Automation', 'Enterprise Analytics'].map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
            <div className="space-y-6">
              <Card className="p-6 hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm">
                <h4 className="text-xl font-semibold mb-2">Enterprise Support</h4>
                <p className="text-gray-600">Dedicated team for your business needs</p>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm">
                <h4 className="text-xl font-semibold mb-2">Custom Solutions</h4>
                <p className="text-gray-600">Tailored AI implementations for your workflow</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* For Individual Section */}
      <section id="for-individual" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Individual Solutions</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow bg-gradient-to-br from-primary/5 to-blue-50">
              <Users className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Freelancers</h3>
              <p className="text-gray-600">Automate your workflow and focus on what matters</p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow bg-gradient-to-br from-primary/5 to-blue-50">
              <Briefcase className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Consultants</h3>
              <p className="text-gray-600">Enhance your services with AI-powered tools</p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow bg-gradient-to-br from-primary/5 to-blue-50">
              <GraduationCap className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Entrepreneurs</h3>
              <p className="text-gray-600">Scale your business with smart automation</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our AI Solutions</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Cutting-edge AI automation solutions tailored for modern businesses
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Intelligent Customer Service",
                description: "24/7 automated support with human-like interactions",
                icon: MessageSquare,
              },
              {
                title: "Predictive Analytics",
                description: "Transform your data into actionable business insights",
                icon: ChartBar,
              },
              {
                title: "Process Automation",
                description: "Streamline workflows with AI-powered automation",
                icon: Bot,
              },
            ].map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/50 backdrop-blur-sm border border-gray-100">
                <service.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose Us
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Enterprise Security",
                description: "Bank-grade security protocols for your business data",
                icon: Shield,
              },
              {
                title: "Rapid Deployment",
                description: "Get your AI solutions running in weeks, not months",
                icon: Clock,
              },
              {
                title: "Seamless Integration",
                description: "Connect with your existing tools and workflows",
                icon: Network,
              },
            ].map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 rounded-lg hover:bg-white/50 transition-colors">
                <benefit.icon className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section id="careers" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Join Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <GraduationCap className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">AI Engineers</h3>
              <p className="text-gray-600 mb-4">Build cutting-edge AI solutions for our clients</p>
              <Button variant="outline" className="w-full">View Position</Button>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Users className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Solution Architects</h3>
              <p className="text-gray-600 mb-4">Design scalable automation solutions</p>
              <Button variant="outline" className="w-full">View Position</Button>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Briefcase className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Business Analysts</h3>
              <p className="text-gray-600 mb-4">Bridge business needs with technical solutions</p>
              <Button variant="outline" className="w-full">View Position</Button>
            </Card>
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
      <section className="py-20 px-4 bg-gradient-to-br from-primary to-blue-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join innovative businesses already benefiting from AI automation
          </p>
          <Button className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-6">
            Schedule Your Free Consultation
          </Button>
        </div>
      </section>
    </div>
  );
}
