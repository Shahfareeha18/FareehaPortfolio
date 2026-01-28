function MissionStats() {
  return (
    <div className="flex flex-wrap -m-4 mb-48">
      {/* Mission */}
      <div className="w-full lg:w-1/2 p-4">
        <div className="rounded-3xl p-12 bg-gradient-to-t from-pink-300 via-pink-700 to-darkPink-900 h-full">
          <p className="uppercase text-white text-opacity-70 text-lg font-medium mb-4">
            My Mission
          </p>
          <p className="text-white text-2xl font-semibold max-w-md">
            To build scalable, secure, and high-performance web applications that
            solve real business problems and grow with user needs.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="w-full lg:w-1/2 p-4">
        <div className="rounded-3xl p-4 bg-gradient-to-b from-pink-300 via-pink-700 to-darkPink-900 h-full">
          <div className="rounded-2xl bg-darkPink-900 p-12 h-full">
            <div className="flex flex-wrap justify-between gap-10 text-center">
              <div>
                <p className="text-white text-4xl font-bold mb-1">4+</p>
                <p className="text-white text-opacity-70">Years Experience</p>
              </div>

              <div>
                <p className="text-white text-4xl font-bold mb-1">60+</p>
                <p className="text-white text-opacity-70">Projects Delivered</p>
              </div>

              <div>
                <p className="text-white text-4xl font-bold mb-1">eCommerce</p>
                <p className="text-white text-opacity-70">& CRM Systems</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MissionStats;
