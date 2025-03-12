
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Bot, Building, ChartBar, Clock, Database, MessageSquare } from "lucide-react";

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
