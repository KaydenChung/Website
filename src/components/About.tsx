import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const skills = [
    { name: 'Python', level: 90, icon: '🐍' },
    { name: 'Java', level: 85, icon: '☕' },
    { name: 'C', level: 80, icon: '⚡' },
    { name: 'HTML', level: 95, icon: '🌐' },
    { name: 'CSS', level: 90, icon: '🎨' },
    { name: 'JavaScript', level: 88, icon: '📜' },
    { name: 'React', level: 85, icon: '⚛️' },
    { name: 'Node.js', level: 75, icon: '🟢' },
  ];

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 animate-slide-in-left">
            <Card className="card-hover">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-primary">Personal Overview</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    I'm currently pursuing a degree in <strong>Software Engineering at the University of Guelph</strong>, 
                    where I've developed a strong foundation in software engineering principles and 
                    modern development practices.
                  </p>
                  <p>
                    Outside of school and work, I'm passionate about staying active through sports including 
                    <strong> baseball, basketball, and volleyball</strong>. I maintain my fitness routine by hitting 
                    the gym at least 5 times a week.
                  </p>
                  <p>
                    I also have a keen interest in <strong>nutrition and cooking</strong>, always exploring healthy 
                    recipes and understanding how proper nutrition fuels both physical and mental performance.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="animate-slide-in-right">
            <Card className="card-hover">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-primary">Technical Skills</h3>
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    {skills.map((skill) => (
                      <div key={skill.name} className="flex items-center space-x-3 p-3 rounded-lg bg-background border border-border hover:shadow-md transition-shadow">
                        <span className="text-2xl">{skill.icon}</span>
                        <span className="font-medium">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
