export function About() {
  return (
    <section className="py-20 px-4 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-balance">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Passionate about the intersection of artificial intelligence and human creativity
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              With over 6 years of experience in AI and machine learning, I specialize in developing intelligent systems
              that solve complex real-world problems. My journey began with a fascination for neural networks and has
              evolved into expertise across the entire AI pipeline.
            </p>
            <p className="text-lg leading-relaxed">
              I believe in the power of AI to augment human capabilities, not replace them. My work focuses on creating
              ethical, transparent, and accessible AI solutions that benefit everyone.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="font-semibold text-lg mb-2">Experience</h3>
              <p className="text-2xl font-bold text-primary">6+ Years</p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="font-semibold text-lg mb-2">Projects</h3>
              <p className="text-2xl font-bold text-primary">50+</p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="font-semibold text-lg mb-2">Publications</h3>
              <p className="text-2xl font-bold text-primary">12</p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="font-semibold text-lg mb-2">Awards</h3>
              <p className="text-2xl font-bold text-primary">8</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
