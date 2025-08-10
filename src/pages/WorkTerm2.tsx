import Navigation from '@/components/Navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, MapPin, ExternalLink, Headphones, FileCheck, Settings, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const WorkTerm2 = () => {

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
      icon: Headphones,
      title: 'Technical Support',
      description: 'Provided comprehensive technical support to system users, troubleshooting issues and ensuring smooth operations.'
    },
    {
      icon: FileCheck,
      title: 'Process Analysis',
      description: 'Analyzed existing research office processes and workflows to identify areas for improvement and efficiency optimization.'
    },
    {
      icon: Settings,
      title: 'System Administration',
      description: 'Assisted with system administration tasks, software deployment, and maintenance of research infrastructure.'
    },
    {
      icon: Users,
      title: 'User Training',
      description: 'Developed and delivered training materials and sessions for research staff on new systems and processes.'
    }
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
            <Badge className="bg-accent text-accent-foreground">Work Term 2</Badge>
            
            <h1 className="text-4xl md:text-5xl font-bold">
              <span className="gradient-text">Support Analyst</span>
            </h1>
            
            <h2 className="text-2xl font-semibold text-foreground">
              University of Guelph Research Office
            </h2>
            
            <div className="flex flex-wrap justify-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>Fall 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>Guelph, Ontario</span>
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
                  During Fall 2024, I worked as a Support Analyst for the University of Guelph's Research Office. 
                  This role provided me with valuable experience in technical support, process analysis, and 
                  working directly with research faculty and administrative staff.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The Research Office plays a crucial role in supporting the university's research activities, 
                  from grant administration to compliance oversight. My position involved helping streamline 
                  operations, resolve technical issues, and improve the overall efficiency of research support services.
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
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {responsibility.description}
                        </p>
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
                    {['Technical Support', 'System Administration', 'Database Management', 'Process Analysis'].map((skill) => (
                      <Badge key={skill} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Professional Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Customer Service', 'Research Communication', 'Project Management', 'Problem Solving'].map((skill) => (
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
                    <strong>Customer Service Excellence:</strong> Developed strong interpersonal skills and learned 
                    how to effectively communicate technical concepts to non-technical users.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <strong>Process Improvement:</strong> Gained experience in analyzing existing systems and 
                    implementing improvements that enhance efficiency and user satisfaction.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <strong>Administrative Insight:</strong> Learned about the administrative side of academic 
                    research and the complex systems that support university research activities.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-hover bg-gradient-subtle">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">Reflection</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                This co-op term offered a unique perspective on the role of technology in supporting research 
                operations, with a focus on the systems and processes that enable work to happen efficiently. 
                My experience in the Research Office underscored the importance of user-centered design and 
                revealed how well-structured workflows can significantly boost organizational productivity.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Throughout the term, I strengthened my problem-solving and communication skills—particularly 
                in translating technical concepts into real-world solutions. I also gained practical experience 
                with project management and process improvement methodologies that I can apply in future roles.
              </p>
            </CardContent>
          </Card>

          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center pt-8 gap-4">

            <Button variant="outline" asChild>
              <Link to="/work-term-1">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Previous: Work Term 1
              </Link>
            </Button>

            <Button asChild>
              <Link to="/work-term-3">
                Next: Work Term 3
                <ExternalLink className="w-4 h-4 ml-2" />
              </Link>
            </Button>

          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkTerm2;
