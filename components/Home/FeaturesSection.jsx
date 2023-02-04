import Image from "next/image";
const incentives = [
  {
    name: "Wicked Fast",
    imageSrc: "/icons/dashboard-speed.svg",
    description:
      "We could get into all the tech and coding we did... but just try navigating around the site and you'll see what we mean.",
  },
  {
    name: "Customizable",
    imageSrc: "/icons/puzzle.svg",
    description:
      "Because we build all our sites from scratch you can customize everything from the functionality of the site to design of your shop.",
  },
  {
    name: "Inventory",
    imageSrc: "/icons/box-iso.svg",
    description:
      "We integrate with Shopify for our backend, which means you get top of the line payment processing and inventory management.",
  },
];

export default function FeaturesSection() {
  return (
    <div className="px-4 bg-white">
      <div className="px-0 py-24 mx-auto max-w-7xl sm:py-32 lg:px-4">
        <div className="max-w-2xl mx-auto lg:max-w-none">
          <div className="max-w-3xl mx-auto mb-10 text-center md:mb-16">
            <h2 className="mb-5 text-4xl font-bold tracking-tight text-transparent magic md:mb-10 sm:text-5xl md:text-6xl bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              <span className="magic-text">An Unmatched <br/> Experience</span>
            </h2>
            <p className="mt-4 text-gray-500">
              Our ecommerce platform is designed to elevate the shopping experience for small businesses and their
              customers, leading to increased customer satisfaction and online conversions.
            </p>
          </div>
          <div className="grid grid-cols-1 mt-16 gap-y-10 gap-x-16 lg:grid-cols-3">
            {incentives.map((incentive) => (
              <div key={incentive.name} className="flex flex-col items-center justify-center text-center">
                <div className="sm:flex-shrink-0">
                  <Image className="w-16 h-16" height={64} width={64} src={incentive.imageSrc} alt="" />
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                  <h3 className="text-lg font-medium text-gray-900">{incentive.name}</h3>
                  <p className="mt-2 text-sm text-gray-500">{incentive.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}