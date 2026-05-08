import Navigation from '@/components/Navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, MapPin, ExternalLink, Code, PanelsTopLeft, FolderKanban, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const WorkTerm4 = () => {

  const [ready, setReady] = useState(false);
  useEffect(() => {
    setReady(true);
    window.scrollTo(0, 0);
  }, []);
  if (!ready) {
    return <div className="min-h-screen bg-background"></div>;
  }

  const responsibilities = [
    {
      icon: Code,
      title: 'Backend API Development',
      description:
        'Enhanced and maintained enterprise backend APIs using Java and Spring Boot within RBC digital banking platforms.',
    },
    {
      icon: FolderKanban,
      title: 'Application Security',
      description:
        'Utilized Snyk to identify and remediate open-source vulnerabilities, improving application security and dependency health.',
    },
    {
      icon: PanelsTopLeft,
      title: 'Frontend Development',
      description:
        'Developed and refined Angular-based user interfaces for advisor reports and statements platforms.',
    },
    {
      icon: Users,
      title: 'Agile Collaboration',
      description:
        'Collaborated with developers, QA analysts, and product stakeholders in an Agile environment to deliver software enhancements.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-24 pb-12 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <Button variant="ghost" asChild className="mb-6">
            <Link to="/#experience">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Experience
            </Link>
          </Button>

          <div className="text-center space-y-6">
            <Badge className="bg-accent text-accent-foreground">Work Term 4</Badge>

            <h1 className="text-4xl md:text-5xl font-bold">
              <span className="gradient-text">Software Developer</span>
            </h1>

            <h2 className="text-2xl font-semibold text-foreground">Royal Bank of Canada (RBC)</h2>

            <div className="flex flex-wrap justify-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>Winter 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>Mississauga, Ontario</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <Card className="card-hover">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">Work Term Overview</h3>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  During Winter 2026, I worked as a Software Developer contributing to 
                  enterprise-scale financial applications within an Agile development 
                  environment. This experience provided exposure to modern full-stack
                  development practices, secure software delivery, and cross-team collaboration.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  My responsibilities included leveraging Snyk to remediate open-source 
                  vulnerabilities in Java/Spring Boot backend services, and implementing 
                  front-end features in Angular for the Advisor Experience platform.
                </p>
              </div>
            </CardContent>
          </Card>

          <div>
            <h3 className="text-2xl font-bold text-primary mb-8 text-center">Key Responsibilities</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {responsibilities.map((responsibility, index) => (
                <Card key={index} className="card-hover">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                          <responsibility.icon className="w-6 h-6 text-accent" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-2">{responsibility.title}</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">{responsibility.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card className="card-hover">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">Skills & Technologies</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-3">Technical Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Java/Spring Boot', 'Angular/TypeScript', 'REST APIs', 'Git'].map((skill) => (
                      <Badge key={skill} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Professional Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Software Development Lifecycle', 'Application Security', 'Agile Development', 'Cross-Functional Collaboration'].map((skill) => (
                      <Badge key={skill} variant="outline">{skill}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-hover">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">Learning Outcomes</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <strong>Enterprise Software Development:</strong> Gained experience contributing to large-scale enterprise banking applications using modern backend and frontend technologies.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <strong>Secure Development Practices:</strong> Developed a stronger understanding of application security through vulnerability remediation and dependency management using Snyk.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <strong>Agile Team Collaboration:</strong> Improved communication and collaboration skills by working closely with developers, testers, and business stakeholders in a fast-paced Agile environment.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-hover bg-gradient-subtle">
            <CardContent className="p-8">

              <h3 className="text-2xl font-bold text-primary mb-6">Reflection</h3>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                This co-op experience gave me valuable exposure to enterprise software development. 
                Working on production-level systems taught me the importance of the application 
                architecture, secure coding practices, and collaborative software delivery.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Through this experience, I improved my backend & frontend development skills, 
                and learned how effective collaboration drives successful software delivery.
              </p>

            </CardContent>
          </Card>

          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center pt-8 gap-4">

            <Button variant="outline" asChild>
              <Link to="/work-term-3">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Previous: Work Term 3
              </Link>
            </Button>

            <Button asChild>
              <Link to="/#experience">
                Back to Experience
                <ExternalLink className="w-4 h-4 ml-2" />
              </Link>
            </Button>

          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkTerm4;
