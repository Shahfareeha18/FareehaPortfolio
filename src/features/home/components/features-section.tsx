import Image from 'next/image';
import projects from '@/data/projects.json'; // Replace with your projects data

const FeaturesSection = () => {
  if (!projects) return null;

  return (
    <section className="bg-darkPink-900 py-28">
      <div className="container max-w-6xl mx-auto px-4">
        <p className="uppercase text-sweetPink-400 text-xs tracking-widest mb-4">PROJECTS & SKILLS</p>
        <h2 className="font-heading text-white text-4xl md:text-5xl font-bold mb-4">Highlighted Work & Expertise</h2>
        <p className="text-white text-opacity-70 text-lg max-w-xl mb-20">
          Here are some of the projects I have built using Laravel, Node.js, Next.js, and other modern technologies.
        </p>

        {projects.map((project, index) => (
          <div key={project.id} className={`rounded-2xl border border-white/20 py-6 pr-6 pl-6 md:pl-14 ${index < projects.length - 1 ? 'mb-10' : ''}`}>
            <div className="flex flex-wrap items-center -m-4 mb-6">
              <div className="w-full lg:w-1/3 p-4">
                <h3 className="font-heading text-white text-4xl font-bold max-w-xs mb-4">{project.title}</h3>
                <ul className="flex flex-col gap-2">
                  {project.keyPoints.map((point, idx) => (
                    <li key={idx} className="text-white text-sm flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" fill="none">
                        <path d="M4.16666 10.8333L5.73222 12.3988C6.70853 13.3752 8.29145 13.3752 9.26774 12.3988L15.8333 5.83325" stroke="white" strokeWidth="1.5" strokeLinecap="round"></path>
                      </svg>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full lg:w-2/3 p-4">
                <div className="rounded-xl px-6 md:px-12 py-6">
                  {project.image && (
                    <Image
                      className="rounded-xl object-cover w-full h-full"
                      style={{ height: '288px' }}
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={288}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
