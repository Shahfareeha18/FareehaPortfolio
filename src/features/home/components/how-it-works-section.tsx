import {
  RequirementsIcon,
  CodeIcon,
  DeployIcon
} from "@/components/icons/HowIWorkIcons";

const HowIWorkSection = () => {
  const steps = [
    {
      title: "Understand Requirements",
      description: "Collaborate with clients to gather requirements and plan the project architecture.",
      icon: <RequirementsIcon />
    },
    {
      title: "Develop & Code",
      description: "Write clean, scalable, and secure code using Laravel, Node.js, Next.js, and modern frontend technologies.",
      icon: <CodeIcon />
    },
    {
      title: "Testing & Deployment",
      description: "Perform rigorous testing and deploy production-ready applications for clients.",
      icon: <DeployIcon />
    }
  ];

  return (
    <section className="bg-darkPink-900 py-32">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-center text-white text-4xl md:text-5xl font-bold mb-20">
          How I Work
        </h2>

        <div className="flex flex-wrap justify-center -m-4">
          {steps.map((step, index) => (
            <div key={index} className="w-full md:w-1/3 p-4 text-center">
              <div className="flex flex-col items-center mb-4">
                
                {/* Icon Wrapper */}
                <div className="bg-gradient-to-b from-pink-300 via-pink-700 to-darkPink-900 rounded-full p-px mb-4">
                  <div className="bg-pinkSecondary-900 rounded-full w-14 h-14 flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>

                <h3 className="text-white text-2xl font-semibold mb-2">
                  {step.title}
                </h3>
              </div>

              <p className="text-white text-opacity-70 max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowIWorkSection;
