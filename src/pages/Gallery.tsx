import Navigation from '@/components/Navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Gallery = () => {

  const [ready, setReady] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setReady(true);
      window.scrollTo(0, 0);
    }, 0);
    return () => clearTimeout(timer);
  }, []);
  if (!ready) {
    return <div className="min-h-screen bg-background"></div>;
  }

  const landscapeProjects = [
    {
      id: 1,
      title: 'Large Multi-Elevation Backyard',
      description: 'A spacious backyard with layered elevations that create zones for entertaining and relaxing, connected by cohesive hardscaping.',
      date: 'September 2024',
      videoSrc: '/videos/LargeBackyard.mp4'
    },
    {
      id: 2,
      title: 'Residential Driveway Interlock',
      description: 'A professional driveway interlock design that provides both the front and side of the house with a clean, modern layout.',
      date: 'April 2025',
      videoSrc: '/videos/DrivewayInterlock.mp4'
    },
    {
      id: 3,
      title: 'Large Pool Backyard',
      description: 'An expansive backyard retreat centered around a full-size pool, featuring lounge areas, privacy landscaping, and contemporary design elements.',
      date: 'December 2025',
      videoSrc: '/videos/PoolBackyard.mp4'
    },
    {
      id: 4,
      title: 'Residential Porch Interlock',
      description: 'This upgraded front porch uses interlock pavers to create a welcoming entryway that blends seamlessly with the house exterior.',
      date: 'March 2025',
      videoSrc: '/videos/PorchInterlock.mp4'
    },
    {
      id: 5,
      title: 'Small Residential Backyard',
      description: 'A thoughtful redesign of a small backyard space, maximizing function and charm with compact seating, greenery, and low-maintenance finishes.',
      date: 'November 2024',
      videoSrc: '/videos/SmallBackyard.mp4'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-24 pb-12 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <Button variant="ghost" asChild className="mb-6">
            <Link to="/#projects">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Link>
          </Button>
          
          <div className="text-center space-y-6">

            <h1 className="text-4xl md:text-5xl font-bold">
              <span className="gradient-text">3D Landscape Gallery</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore my showcase of professional 3D landscape renderings that highlight 
              innovative design solutions, each accompanied by immersive video walkthroughs.
            </p>

          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {landscapeProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden border-border bg-card shadow-lg">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">

                    <div className="relative bg-gradient-subtle">
                      <div className="aspect-video w-full">
                        <video 
                          src={project.videoSrc} 
                          controls 
                          className="w-full h-full object-cover rounded-none"
                          preload="metadata"
                        />
                      </div>
                    </div>
                    
                    <div className="p-8 flex flex-col justify-center">
                      <div className="mb-4">
                        <span className="text-sm text-muted-foreground">{project.date}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-primary mb-4">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>

                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl font-bold text-primary">Ready to Work Together?</h2>
          <p className="text-muted-foreground leading-relaxed">
            Connect with me for forward-thinking landscape and web solutions 
            that blend creativity and smart automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="btn-hero">
              <Link to="/#contact">
                Get In Touch
                <ExternalLink className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/#projects">
                View Other Projects
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
