import { Button } from '@/components/ui/button';
import { ArrowDown, Eye, Github, Linkedin, Mail, Lightbulb, Settings } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-10 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6 space-y-10 text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-10 animate-fade-in">
              <div className="space-y-8">

                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">
                  <span className="gradient-text">Kayden Chung</span>
                </h1>

                <div className="flex items-center justify-center lg:justify-start space-x-3">
                  <p className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl text-muted-foreground font-semibold">
                    Software Solutioneer
                  </p>
                  <Settings className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-primary flex-shrink-0" />
                </div>

                <p className="text-xl sm:text-2xl lg:text-2xl text-muted-foreground flex items-center justify-center lg:justify-start space-x-2">
                  <span>Whitby, Ontario | Guelph, Ontario</span>
                  <span>📌</span>
                </p>

              </div>

              <p className="text-lg sm:text-xl md:text-2xl lg:text-xl text-muted-foreground max-w-3xl leading-relaxed">
                Passionate about using technology to create innovative solutions for business problems. 
                Specializing in full-stack development with a focus on modern web technologies.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6">

                <Button variant="outline" size="default" asChild className="text-base px-6 py-3">
                  <a href="mailto:kayden.chung@icloud.com" target="_blank" rel="noopener noreferrer">
                    <Mail className="w-5 h-5 mr-3" />
                    Email
                  </a>
                </Button>

                <Button variant="outline" size="default" asChild className="text-base px-6 py-3">
                  <a href="https://github.com/KaydenChung" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5 mr-3" />
                    GitHub
                  </a>
                </Button>

                <Button variant="outline" size="default" asChild className="text-base px-6 py-3">
                  <a href="https://linkedin.com/in/kaydenchung" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5 mr-3" />
                    LinkedIn
                  </a>
                </Button>

              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex justify-center order-1 lg:order-2">
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
              <div className="absolute inset-0 bg-gradient-hero rounded-full animate-pulse"></div>
              <img
                src="/ProfilePicture.jpg"
                alt="Kayden Chung"
                className="relative w-full h-full rounded-full object-cover border-4 border-background shadow-elevated"
              />
              <div className="absolute -bottom-6 -right-6 animate-float">
                <span className="text-5xl sm:text-6xl lg:text-7xl">👋</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;