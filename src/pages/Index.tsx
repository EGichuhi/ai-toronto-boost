import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  ArrowRight, Bot, Building, ChartBar, Clock, Database, 
  MessageSquare, Briefcase, Users, Mail, CheckCircle, GraduationCap
} from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Transform Your Toronto Business with AI Automation
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Empower your small or medium business with custom AI solutions. 
              Streamline operations, reduce costs, and grow faster.
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
              Book Free Consultation
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our AI Solutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Customer Service AI",
                description: "24/7 automated customer support with human-like interactions",
                icon: MessageSquare,
              },
              {
                title: "Data Analysis",
                description: "Turn your business data into actionable insights",
                icon: ChartBar,
              },
              {
                title: "Process Automation",
                description: "Streamline repetitive tasks and workflows",
                icon: Bot,
              },
            ].map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <service.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose Us
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Local Expertise",
                description: "Deep understanding of Toronto's business landscape",
                icon: Building,
              },
              {
                title: "Quick Implementation",
                description: "Get your AI solutions up and running in weeks, not months",
                icon: Clock,
              },
              {
                title: "Data Security",
                description: "Enterprise-grade security for your business data",
                icon: Database,
              },
            ].map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <benefit.icon className="w-6 h-6 text-secondary flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="cases" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Manufacturing Efficiency",
                industry: "Manufacturing",
                results: "40% reduction in processing time",
                description: "Implemented AI-driven quality control and inventory management.",
              },
              {
                title: "Customer Service Enhancement",
                industry: "Retail",
                results: "24/7 support coverage",
                description: "Deployed intelligent chatbots for consistent customer support.",
              },
            ].map((study, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                <p className="text-gray-600 mb-4">Industry: {study.industry}</p>
                <p className="text-secondary font-semibold mb-2">{study.results}</p>
                <p className="text-gray-600">{study.description}</p>
              </Card>
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
      <section className="py-20 px-4 bg-primary text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Automate Your Business?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join other Toronto businesses already benefiting from AI automation
          </p>
          <Button className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-6">
            Schedule Your Free Consultation
          </Button>
        </div>
      </section>
    </div>
  );
}
