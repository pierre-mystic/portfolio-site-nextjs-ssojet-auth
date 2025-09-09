import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO, TechVision Inc.",
    content:
      "Alex transformed our data pipeline with cutting-edge ML solutions. The results exceeded our expectations, improving our prediction accuracy by 40%.",
    avatar: "/professional-woman-cto.png",
  },
  {
    name: "Dr. Michael Rodriguez",
    role: "Research Director, MedAI Labs",
    content:
      "Working with Alex on our medical imaging project was exceptional. His expertise in computer vision and deep learning delivered breakthrough results.",
    avatar: "/professional-man-research-director-portrait.jpg",
  },
  {
    name: "Emily Chen",
    role: "Product Manager, DataFlow",
    content:
      "Alex's ability to translate complex AI concepts into practical business solutions is remarkable. He's a true partner in innovation.",
    avatar: "/professional-woman-product-manager.png",
  },
]

export function Testimonials() {
  return (
    <section className="py-20 px-4 bg-accent/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-balance">What Clients Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Trusted by industry leaders and innovative companies worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-card-foreground leading-relaxed mb-6">"{testimonial.content}"</p>
                <div className="flex items-center gap-3">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
