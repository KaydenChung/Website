import Navigation from '@/components/Navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, MapPin, ExternalLink, Target, Users, Lightbulb, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const WorkTerm1 = () => {

  const [ready, setReady] = useState(false);
  useEffect(() => {
    setReady(true);
    window.scrollTo(0, 0);
  }, []);
  if (!ready) {
    return <div className="min-h-screen bg-background"></div>;
  }

  const achievements = [
    {
      icon: Target,
      title: 'Research Objectives',
      description: 'Successfully contributed to research in manufactured ecosystems, focusing on sustainable environmental solutions.'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Worked closely with research faculty and graduate students to advance project goals and methodologies.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Developed novel approaches to data collection and analysis within the manufactured ecosystems framework.'
    },
    {
      icon: TrendingUp,
      title: 'Skills Development',
      description: 'Enhanced research capabilities, data analysis skills, and understanding of environmental technologies.'
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
            <Badge className="bg-primary text-primary-foreground">Work Term 1</Badge>
            
            <h1 className="text-4xl md:text-5xl font-bold">
              <span className="gradient-text">Research Assistant</span>
            </h1>
            
            <h2 className="text-2xl font-semibold text-foreground">
              Manufactured Ecosystems Project
            </h2>
            
            <div className="flex flex-wrap justify-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>Summer 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>University of Guelph</span>
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
                  During my first co-op work term in Summer 2024, I worked as a Research Assistant on the 
                  Manufactured Ecosystems project at the University of Guelph. This opportunity allowed me 
                  to gain experience in environmental technology and academic research while contributing 
                  to an interdisciplinary initiative.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The Manufactured Ecosystems project focused on developing sustainable solutions for environmental 
                  challenges through engineered biological systems. My role involved supporting various aspects of 
                  the research process including website design and data analysis to help refine research methodologies.
                </p>
              </div>
            </CardContent>
          </Card>

          <div>
            <h3 className="text-2xl font-bold text-primary mb-8 text-center">Key Responsibilities</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="card-hover">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <achievement.icon className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-2">{achievement.title}</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {achievement.description}
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
                    {['Website Design', 'Python', 'Data Analysis', 'Microsoft Office Suite', 'Research Methodology'].map((skill) => (
                      <Badge key={skill} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Soft Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Interdisciplinary Collaboration', 'Research Communication', 'Project Management', 'Problem Solving'].map((skill) => (
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
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <strong>Technical Expertise:</strong> Enhanced programming skills in Python for data analysis 
                    and gained experience with specialized research software.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <strong>Communication & Collaboration:</strong> Sharpened professional communication skills through 
                    regular collaboration with professors, graduate students, and research teams.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <strong>Research Proficiency:</strong> Gained hands-on experience conducting 
                    structured academic research in an interdisciplinary setting.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-hover bg-gradient-subtle">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">Reflection</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                This co-op term provided an engaging introduction to academic research and its intersection with technology. 
                Contributing to the Manufactured Ecosystems project allowed me to support experimental design, data analysis, 
                and literature review within a highly interdisciplinary team.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The experience sharpened my technical capabilities while also strengthening my communication and collaboration skills. 
                Working closely with researchers across disciplines taught me how to convey complex ideas clearly and contribute 
                meaningfully in a fast-paced, research-driven environment.
              </p>
            </CardContent>
          </Card>

          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center pt-8 gap-4">
            
            <Button variant="outline" asChild>
              <Link to="/#experience">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Experience
              </Link>
            </Button>

            <Button asChild>
              <Link to="/work-term-2">
                Next: Work Term 2
                <ExternalLink className="w-4 h-4 ml-2" />
              </Link>
            </Button>

          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkTerm1;
