import { Button } from "@/components/ui/button"
import { Github, Download, Mail, LogIn } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary/20 to-accent/10 px-4">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="relative w-48 h-48 mx-auto mb-8">
          <Image
            src="/professional-ai-engineer-portrait.jpg"
            alt="Alex Chen - AI Software Engineer"
            width={192}
            height={192}
            className="rounded-full object-cover border-4 border-primary/20 shadow-lg"
          />
        </div>

        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold text-balance">
            Alex <span className="text-primary">Chen</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light">
            AI Software Engineer & Machine Learning Specialist
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Crafting intelligent solutions that bridge the gap between cutting-edge AI research and real-world
            applications. Passionate about building systems that make a difference.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Github className="w-5 h-5 mr-2" />
            View GitHub
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary/10 bg-transparent"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </Button>
          <Button variant="ghost" size="lg" className="text-muted-foreground hover:text-foreground">
            <Mail className="w-5 h-5 mr-2" />
            Get in Touch
          </Button>
          <Link href="/login">
            <Button variant="secondary" size="lg" className="bg-secondary/80 hover:bg-secondary">
              <LogIn className="w-5 h-5 mr-2" />
              Admin Login
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
