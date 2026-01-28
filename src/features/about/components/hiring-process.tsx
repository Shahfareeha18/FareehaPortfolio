function HiringProcess() {
  const processSteps = [
    'Candidate screening',
    'Technical interview',
    'Negotiation offer',
    'Onboarding'
  ];

  return (
    <div className="flex flex-wrap -m-4 mb-24">
      <div className="w-full lg:w-2/3 p-4">
        <h3 className="font-heading text-white text-4xl font-bold mb-4 max-w-xs">Our hiring process</h3>
        <p className="text-white text-opacity-70 max-w-lg">
          Our interview process aims to ensure Vista is the right fit for you just as much as ensuring you are the right fit for Vista. We encourage you to apply and see for yourself what makes us a great place to work!
        </p>
      </div>
      <div className="w-full lg:w-1/3 p-4">
        <div className="flex lg:justify-end gap-6">
          <div className="relative">
            <div className="relative z-50">
              {processSteps.map((_, index) => (
                <div key={index} className="rounded-full bg-pink-500 py-1 w-8 h-8 flex items-center justify-center mb-4">
                  <span className="text-white text-sm font-bold">{index + 1}</span>
                </div>
              ))}
            </div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-pink-500 h-full w-px"></div>
          </div>
          <div className="flex flex-col gap-5">
            {processSteps.map((step, index) => (
              <p key={index} className="text-white text-lg font-semibold">{step}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HiringProcess;