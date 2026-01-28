function SkillsSection() {
  const skills = [
    'PHP',
    'Laravel',
    'Node.js',
    'Next.js',
    'HTML',
    'CSS',
    'Bootstrap',
    '.NET MVC',
    'WordPress'
  ];

  return (
    <div className="max-w-6xl mx-auto mb-48">
      <p className="text-center text-white mb-10 text-xl font-medium">
        Skills & Technologies
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-6 py-3 bg-white/10 text-white rounded-full text-sm font-medium backdrop-blur-md hover:bg-white/20 transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default SkillsSection;
