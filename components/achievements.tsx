import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Award, Star, Target } from "lucide-react"

const achievements = [
  {
    icon: Trophy,
    title: "Best AI Innovation Award",
    description:
      "Recognized for developing a breakthrough computer vision system that improved medical diagnosis accuracy by 23%.",
    year: "2024",
  },
  {
    icon: Award,
    title: "Top 40 Under 40 in AI",
    description:
      "Featured in TechCrunch's annual list of young innovators making significant impact in artificial intelligence.",
    year: "2023",
  },
  {
    icon: Star,
    title: "Research Excellence Grant",
    description: "Awarded $250K NSF grant for research on ethical AI and bias mitigation in machine learning systems.",
    year: "2023",
  },
  {
    icon: Target,
    title: "Patent Holder",
    description: "Holds 3 patents in neural network optimization and distributed machine learning architectures.",
    year: "2022-2024",
  },
]

export function Achievements() {
  return (
    <section className="py-20 px-4 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-balance">Achievements</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Recognition for contributions to the AI community and industry
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <achievement.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-xl">{achievement.title}</CardTitle>
                      <span className="text-sm text-muted-foreground font-medium">{achievement.year}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">{achievement.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
