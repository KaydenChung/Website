import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Calendar, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Student Engineering Coordinator',
      company: 'AtkinsRealis',
      period: 'Summer 2025',
      location: 'Whitby, ON',
      description: 'Tracked project deliverables using Excel and Python while coordinating with engineering teams and stakeholders like OPG.',
      skills: ['Project Reporting', 'Engineering Coordination', 'Stakeholder Management', 'Python/Excel'],
      reportLink: '/work-term-3',
      image: '/AtkinsRealis.jpg'
    },
    {
      id: 2,
      title: 'Support Analyst',
      company: 'Research Services Office',
      period: 'Fall 2024',
      location: 'Guelph, ON',
      description: 'Provided technical support and analysis for research operations, helping streamline processes and improve efficiency.',
      skills: ['Technical Support', 'System Configuration', 'Quality Assurance', 'Problem Solving'],
      reportLink: '/work-term-2',
      image: '/UniversityOfGuelph.jpg'
    },
    {
      id: 3,
      title: 'Research Assistant',
      company: 'Manufactured Ecosystems Project',
      period: 'Summer 2024',
      location: 'Guelph, ON',
      description: 'Worked on cutting-edge research in manufactured ecosystems, contributing to innovative solutions in environmental technology.',
      skills: ['Web Development', 'Task Automation', 'Data Analysis', 'Python'],
      reportLink: '/work-term-1',
      image: '/UniversityOfGuelph.jpg'
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Work Experience</span>
          </h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={exp.id} className={`card-hover animate-fade-in ${index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'}`}>
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-3 gap-8 items-center">
                  <div className="lg:col-span-2 space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-primary">{exp.title}</h3>
                      <h4 className="text-xl font-semibold text-foreground">{exp.company}</h4>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </div>

                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>

                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    <Button asChild className="btn-hero">
                      <Link to={exp.reportLink}>
                        View Work Term Report
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>

                  </div>

                  <div className="lg:col-span-1">
                    <div className="relative">
                      <img
                        src={exp.image}
                        alt={exp.company}
                        className="w-full h-48 object-cover rounded-lg shadow-card"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
                    </div>
                  </div>

                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
