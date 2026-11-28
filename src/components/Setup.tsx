
const INDUSTRIES = [
  {
    name: "Agriculture",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500&q=85",
  },
  {
    name: "Logistics",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=500&q=85",
  },
  {
    name: "Accommodation & Food Service",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&q=85",
  },
  {
    name: "Manufacturing",
    image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=500&q=85",
  },
  {
    name: "Contracting",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&q=85",
  },
  {
    name: "Trading & Services",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&q=85",
  },
  {
    name: "Social & Personal Services",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=500&q=85",
  },
  {
    name: "Transport, Storage & Communication",
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60f?w=500&q=85",
  },
  {
    name: "Real Estate",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&q=85",
  },
  {
    name: "Renting & Bus Service",
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=500&q=85",
  },
  {
    name: "Education",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=500&q=85",
  },
  {
    name: "Health & Social Work",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&q=85",
  },
  {
    name: "Construction",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=500&q=85",
  },
  {
    name: "Financial Intermediation",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=85",
  },
  {
    name: "Classification Service",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=500&q=85",
  },
  {
    name: "Artificial Intelligence",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&q=85",
  },
  {
    name: "General Trading",
    image: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=500&q=85",
  },
  {
    name: "Consultancy Services",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&q=85",
  },
  {
    name: "Blockchain Development",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=500&q=85",
  },
  {
    name: "Robotics & Gaming",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&q=85",
  },
  {
    name: "VR & AR",
    image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=500&q=85",
  },
];

export default function Industries() {
  return (
    <section className="w-full overflow-hidden bg-white py-10">

      <div className="mx-auto max-w-[1400px] px-5">

        {/* Heading */}
        <div className="mb-12 text-center sm:mb-16">
       

          <h2 className="mt-3 text-[30px] font-semibold tracking-tight text-black sm:text-[48px]">
            Industries We Serve
          </h2>

        </div>

      </div>

      {/* Infinite Moving Slider */}
   <div className="relative mx-auto max-w-[1400px] overflow-hidden">

  {/* Left white gradient */}
  <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-white to-transparent sm:w-32" />

  {/* Your sliding content */}
  <div className="logo-marquee flex w-max items-center">
    {/* Existing content */}
  </div>

  {/* Right white gradient */}
  <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-white to-transparent sm:w-32" />



        <div className="industry-marquee flex w-max items-start">

          {/* Original + Duplicate for seamless loop */}
          {[0, 1].map((group) => (
            <div
              key={group}
              aria-hidden={group === 1}
              className="flex shrink-0 items-start gap-8 px-4 sm:gap-12 sm:px-6 lg:gap-14"
            >

              {INDUSTRIES.map((industry) => (
                <div
                  key={industry.name}
                  className="group flex w-[145px] shrink-0 cursor-pointer flex-col items-center text-center sm:w-[165px]"
                >

                  {/* Circular Image */}
                  <div className="aspect-square w-full overflow-hidden rounded-full bg-gray-100">
                    <img
                      src={industry.image}
                      alt={industry.name}
                      loading="lazy"
                      className="h-full w-full rounded-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  {/* Industry Name */}
                  <h3 className="mt-4 min-h-[42px] text-[14px] font-semibold leading-5 text-[#171717] transition-colors duration-300 group-hover:text-[#d70000] sm:text-[15px]">
                    {industry.name}
                  </h3>

                </div>
              ))}

            </div>
          ))}

        </div>

      </div>

      {/* Slider Animation */}
      <style jsx>{`
        .industry-marquee {
          animation: industry-scroll 85s linear infinite;
          will-change: transform;
        }

        .industry-marquee:hover {
          animation-play-state: paused;
        }

        @keyframes industry-scroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .industry-marquee {
            animation: none;
          }
        }
      `}</style>

    </section>
  );
}
