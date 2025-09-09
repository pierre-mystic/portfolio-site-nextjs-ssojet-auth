
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Achievements } from "@/components/achievements"
import { Blog } from "@/components/blog"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <Achievements />
      <Blog />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
