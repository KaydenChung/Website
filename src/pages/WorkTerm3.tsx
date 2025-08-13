import Navigation from '@/components/Navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, MapPin, ExternalLink, Code, Clock, FolderKanban, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const WorkTerm3 = () => {

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
      title: 'Deliverable Tracking',
      description:
        'Created Excel dashboards and Python scripts to track the status of engineering deliverables, deadlines, and milestones.',
    },
    {
      icon: Users,
      title: 'Stakeholder Communication',
      description:
        'Facilitated alignment between internal engineering teams, external vendors, and stakeholders (Ontario Power Generation).',
    },
    {
      icon: Clock,
      title: 'Project Coordination',
      description:
        'Provided updates on key project deadlines, analyzing schedules to support proactive, data-driven decision-making.',
    },
    {
      icon: FolderKanban,
      title: 'Technical Documentation',
      description:
        'Managed version control of engineering deliverables, ensuring accessibility to internal teams and external stakeholders.',
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
            <Badge className="bg-accent text-accent-foreground">Work Term 3</Badge>

            <h1 className="text-4xl md:text-5xl font-bold">
              <span className="gradient-text">Student Engineering Coordinator</span>
            </h1>

            <h2 className="text-2xl font-semibold text-foreground">AtkinsRéalis</h2>

            <div className="flex flex-wrap justify-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>Summer 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>Whitby, Ontario</span>
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
                  In Summer 2025, I joined AtkinsRéalis as a Student Engineering Coordinator 
                  to support the Pickering Nuclear Generating Station refurbishment project. 
                  This role immersed me in a highly collaborative engineering environment 
                  where precision and clear communication were essential.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  My key responsibilities involved developing tracking tools using Excel 
                  and Python, as well as coordinating with Ontario Power Generation 
                  and internal engineering teams to ensure technical consistency.
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
                    {['Excel', 'Python', ,'Power Automate', 'Automation Scripting'].map((skill) => (
                      <Badge key={skill} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Professional Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Project Coordination', 'Stakeholder Communication', 'Process Optimization'].map((skill) => (
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
                    <strong>Tool Development:</strong> Enhanced my ability to develop technical solutions using Excel and Python, improving workflow efficiency and supporting engineering teams.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <strong>Cross-Team Communication:</strong> Developed strong skills in managing stakeholder interactions and facilitating effective collaboration across multiple departments.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <strong>Engineering Project Insight:</strong> Gained hands-on experience working within a nuclear engineering project environment, where precision and thorough documentation were critical.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-hover bg-gradient-subtle">
            <CardContent className="p-8">

              <h3 className="text-2xl font-bold text-primary mb-6">Reflection</h3>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                This co-op term gave me insight into how various engineering disciplines collaborate 
                on high-stakes projects. Working in the growing and dynamic nuclear industry, where 
                safety and precision are critical, was both challenging and rewarding.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                I leave this role with stronger technical and professional skills, as well as a deeper 
                understanding of the operational backbone behind large-scale infrastructure projects.
              </p>

            </CardContent>
          </Card>

          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center pt-8 gap-4">

            <Button variant="outline" asChild>
              <Link to="/work-term-2">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Previous: Work Term 2
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

export default WorkTerm3;
