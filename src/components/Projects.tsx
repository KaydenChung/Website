import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Full Stack Todo List Web App',
      description: 'A modern todo list web application built with React and Vite, featuring Google Firebase for secure user authentication and real-time a database.',
      image: '/TodoList.jpg',
      technologies: ['UI/UX Design', 'React', 'Vite', 'Google Firebase'],
      liveUrl: 'https://kaydenslists.com/',
      githubUrl: 'https://github.com/KaydenChung/TodoList',
      featured: true
    },
    {
      id: 2,
      title: 'Online Route Optimization Tool',
      description: 'An online tool that automates recycling logistics by optimizing user-submitted pickup addresses and generating efficient collection routes for drivers.',
      image: '/RecyclingRouter.jpg',
      technologies: ['UI/UX Design', 'Path Optimization', 'Python'],
      liveUrl: 'https://recyclingrouter.onrender.com/',
      githubUrl: 'https://github.com/KaydenChung/RecyclingRouter',
      featured: true
    },
    {
      id: 3,
      title: '3D Landscape Designs',
      description: 'Professional 3D renderings produced with Uvision® software, precisely crafted to visualize design ideas prior to on-site implementation.',
      image: '/LandscapeDesigns.jpg',
      technologies: ['3D Design', 'CAD Modeling', 'Rendering'],
      viewUrl: '/gallery',
      featured: true
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={project.id} className={`card-hover group animate-scale-in`} style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {project.featured && (
                  <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                    Featured
                  </Badge>
                )}
              </div>
              
              <CardContent className="p-6 space-y-4">
                
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2 pt-2">
                  {project.liveUrl && (
                    <Button size="sm" asChild className="flex-1">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button size="sm" variant="outline" asChild className="flex-1">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.viewUrl && (
                    <Button size="sm" asChild className="flex-1">
                      <Link to={project.viewUrl}>
                        <Eye className="w-4 h-4 mr-2" />
                        View Gallery
                      </Link>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
