import Link from 'next/link';

function OpenRoles() {
  const jobOpenings = {
    'Engineering': [
      { title: 'Full-Stack Engineer', location: 'Remote' },
      { title: 'Senior Engineer (Platform Team)', location: 'Remote' }
    ],
    'Design': [
      { title: 'Staff Product Designer', location: 'Remote' },
      { title: 'Product Designer', location: 'Remote' }
    ]
  };

  return (
    <>
      <h3 className="font-heading text-white text-center text-4xl font-bold mb-10">Open roles</h3>
      {Object.entries(jobOpenings).map(([category, jobs], categoryIndex) => (
        <div key={category}>
          <h4 className="text-white text-lg font-semibold mb-4">{category}</h4>
          {jobs.map((job, jobIndex) => (
            <Link key={jobIndex} className="inline-block mb-4 w-full group" href="#">
              <div className="bg-gradient-to-t from-pink-300 via-pink-700 to-darkPink-900 rounded-2xl p-px">
                <div className="bg-pinkSecondary-900 rounded-2xl px-8 py-5">
                  <div className="flex flex-wrap -mx-4">
                    <div className="w-full sm:w-1/2 px-4">
                      <p className="text-white text-lg font-medium mb-2 sm:mb-0">{job.title}</p>
                    </div>
                    <div className="w-full sm:w-1/2 px-4">
                      <div className="flex flex-wrap justify-between items-center gap-4">
                        <p className="text-white text-opacity-70 group-hover:text-opacity-100 transition duration-200">
                          {job.location}
                        </p>
                        <span className="text-white text-opacity-50 group-hover:text-opacity-100 transition duration-200">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <g>
                              <path d="M6.875 3.75L13.125 10L6.875 16.25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            </g>
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
          {categoryIndex === 0 && <div className="mb-10"></div>}
        </div>
      ))}
    </>
  );
}

export default OpenRoles;