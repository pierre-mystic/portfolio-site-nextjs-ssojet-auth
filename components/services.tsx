import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Code, Database, Zap } from "lucide-react"

const services = [
  {
    icon: Brain,
    title: "Machine Learning Solutions",
    description: "Custom ML models and algorithms tailored to your specific business needs and data requirements.",
  },
  {
    icon: Code,
    title: "AI Application Development",
    description: "End-to-end development of AI-powered applications using modern frameworks and best practices.",
  },
  {
    icon: Database,
    title: "Data Engineering & MLOps",
    description: "Scalable data pipelines and ML operations infrastructure for production-ready AI systems.",
  },
  {
    icon: Zap,
    title: "AI Consulting & Strategy",
    description: "Strategic guidance on AI adoption, technology selection, and implementation roadmaps.",
  },
]

export function Services() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-balance">Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Comprehensive AI solutions from concept to deployment
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-lg flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
