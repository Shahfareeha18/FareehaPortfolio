import Image from 'next/image';

function BenefitsGrid() {
  const benefits = [
    {
      icon: '/images/wallet.svg',
      title: 'Inclusive Health Package',
      description: 'We care for your well-being, no health expense stress.'
    },
    {
      icon: '/images/weight.svg',
      title: 'Free Gym Membership',
      description: 'Enjoy a complimentary gym membership for your fitness.'
    },
    {
      icon: '/images/global.svg',
      title: 'Flexible Working Style',
      description: "We're fully remote, working across time zones."
    },
    {
      icon: '/images/happyemoji.svg',
      title: 'Balanced Working Life',
      description: 'Enjoy 4-week vacations. Recharge as needed.'
    },
    {
      icon: '/images/messages.svg',
      title: 'Diversity and Inclusion',
      description: 'Diversity in team members and inclusive culture.'
    },
    {
      icon: '/images/blur.svg',
      title: 'Generous Perks Program',
      description: 'We offer stipends for home office, learning, and wellness perks.'
    }
  ];

  return (
    <>
      <h2 className="font-heading text-white text-4xl font-bold mb-4">Benefits</h2>
      <p className="text-white text-opacity-70 mb-16 max-w-2xl">
        Our team receives support, enjoys ample vacation time, opportunities to give back, and the financial resources they need to thrive both inside and outside of work.
      </p>
      <div className="flex flex-wrap -m-4 lg:mb-16">
        {benefits.slice(0, 3).map((benefit, index) => (
          <div key={index} className="w-full lg:w-1/3 p-4">
            <div className="bg-gradient-to-b from-pink-300 via-pink-700 to-darkPink-900 rounded-2xl p-px">
              <div className="bg-darkPink-900 rounded-2xl p-8">
                <Image className="h-6 mb-6" src={benefit.icon} alt="" width={24} height={24} />
                <p className="text-white text-lg font-semibold mb-2">{benefit.title}</p>
                <p className="text-white text-opacity-70 max-w-xs">{benefit.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap -m-4 mb-24">
        {benefits.slice(3, 6).map((benefit, index) => (
          <div key={index + 3} className="w-full lg:w-1/3 p-4">
            <div className="bg-gradient-to-b from-pink-300 via-pink-700 to-darkPink-900 rounded-2xl p-px">
              <div className="bg-darkPink-900 rounded-2xl p-8">
                <Image className="h-6 mb-6" src={benefit.icon} alt="" width={24} height={24} />
                <p className="text-white text-lg font-semibold mb-2">{benefit.title}</p>
                <p className="text-white text-opacity-70 max-w-xs">{benefit.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default BenefitsGrid;