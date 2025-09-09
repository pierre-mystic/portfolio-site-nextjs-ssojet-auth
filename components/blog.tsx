import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"
import Image from "next/image"

const blogPosts = [
  {
    title: "The Future of Multimodal AI: Beyond Text and Images",
    description:
      "Exploring how AI systems are evolving to understand and generate content across multiple modalities simultaneously.",
    date: "March 15, 2024",
    readTime: "8 min read",
    image: "/futuristic-ai-multimodal-interface.jpg",
  },
  {
    title: "Building Ethical AI: A Practical Framework",
    description: "A comprehensive guide to implementing ethical considerations in AI development from the ground up.",
    date: "February 28, 2024",
    readTime: "12 min read",
    image: "/ethical-ai-framework-diagram.jpg",
  },
  {
    title: "Optimizing Large Language Models for Production",
    description:
      "Techniques and strategies for deploying LLMs efficiently while maintaining performance and reducing costs.",
    date: "February 10, 2024",
    readTime: "10 min read",
    image: "/llm-optimization-performance-charts.jpg",
  },
]

export function Blog() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-balance">Latest Blog Posts</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Insights and thoughts on the latest developments in AI and machine learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={400}
                  height={200}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <CardTitle className="text-xl leading-tight">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed mb-4">{post.description}</CardDescription>
                <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
