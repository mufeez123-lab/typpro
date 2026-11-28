
const PROCESS_STEPS = [
  {
    number: "01",
    title: "Finalize Business Activity",
    description:
      "Select from DET-approved activities or a combination that suits you. Share your business idea with our experts and they will suggest the appropriate business activity.",
  },
  {
    number: "02",
    title: "Pick Right Jurisdiction",
    description:
      "You can start on either UAE mainland, free zone, or offshore, based on your specific needs. Each jurisdiction offers unique benefits.",
  },
  {
    number: "03",
    title: "Decide Legal Structure",
    description:
      "Choose the appropriate structure, such as LLC, Sole Proprietorship, FZC, FZE, or another option. Structure impacts the ownership and taxation of business.",
  },
  {
    number: "04",
    title: "Register Trade Name",
    description:
      "Your company name should be unique and compliant with UAE regulations. You can tell us your favorite options and most suitable will get registered.",
  },
  {
    number: "05",
    title: "Choose Office Space",
    description:
      "Lease the right workspace for your business and complete the Ejari registration. TYPPRO business centers offer luxurious office space at prime locations.",
  },
  {
    number: "06",
    title: "Apply For Trade License",
    description:
      "We will get your NOC if UAE resident from DET or free zone along with other external approvals for business license, ensuring smooth application.",
  },
  {
    number: "07",
    title: "Get Your Visa",
    description:
      "Next, we will get your residency visa. This includes medical tests and Emirates ID processing. You can then sponsor your family and staff.",
  },
  {
    number: "08",
    title: "Set Up Banking",
    description:
      "TYPPRO has partnered with the best UAE banks. We will open your corporate bank account and get you operational faster.",
  },
];

export default function ProcessStack() {
  return (
    <section className="w-full bg-[#f5f5f5] pr-4  sm:pr-8 lg:pr-12 ">
      <div className="mx-auto max-w-[1500px]">

      

        {/* Sticky Image + Scroll Stack */}
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-2 lg:gap-12">

          {/* Left Sticky Image */}
          <div className="sticky top-20 z-0 h-[42vh] overflow-hidden  sm:h-[55vh] lg:top-24 lg:h-[calc(100vh-120px)]">
            <img
              src="/images/image-process.webp"
              alt="Professional working on a project"
              className="h-full w-full object-cover"
              loading="lazy"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 text-white sm:bottom-10 sm:left-10">
              <span className="text-[11px] font-semibold uppercase tracking-[3px]">
                Our Expertise
              </span>
              <h3 className="mt-3 max-w-[400px] text-[26px] font-bold leading-tight sm:text-[36px]">
                Excellence At Every Step
              </h3>
            </div>
          </div>

          {/* Right Scroll Stack Cards */}
          <div className="relative mt-10 mx-[60px] max-w-[490px] pb-16 lg:pb-24 ">
  {/* Section Heading */}
        <div className="mb-12 lg:mb-16">
          <span className="text-[12px] font-bold uppercase  text-[#d70000]">
            HOW WE WORK
          </span>

          <h2 className="mt-4 max-w-[650px] text-[34px] font-semibold leading-[1.1] tracking-tight text-[#111111] sm:text-[45px] ">
            Process of
Company Setup in
UAE
          </h2>
        </div>
            {PROCESS_STEPS.map((step, index) => (
                
              <article
                key={step.number}
                className={`sticky top-20 flex min-h-[440px] flex-col justify-between overflow-hidden px-6 py-7 transition-colors duration-500 sm:min-h-[500px] sm:px-8 sm:py-9 lg:top-24 lg:min-h-[calc(45vh-140px)] lg:px-7 lg:py-6 ${
                  index % 2 === 0
                    ? "bg-white text-[#111111]"
                    : "bg-[#d70000] text-white"
                }`}
              >
                
                
                {/* Number */}
                <div className="flex items-center justify-between border-b border-current/20 pb-1">
                  <span className="text-[23px] font-medium tracking-tight">
                    {step.number}
                  </span>
{/* 
                  <span className="text-[11px] font-semibold uppercase tracking-[2px] opacity-50">
                    STEP {step.number} / 08
                  </span> */}
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col justify-start py-4">
                  <h3 className="max-w-[550px] text-[24px] font-semibold leading-[1.2] ">
                    {step.title}
                  </h3>

                  <p className="mt-6 max-w-[490px] text-[14px] leading-[1.9] ">
                    {step.description}
                  </p>
                </div>

                {/* Bottom Progress */}
                {/* <div className="flex items-center justify-between border-t border-current/20 pt-5">
                  <span className="text-[11px] font-semibold uppercase tracking-[2px] opacity-60">
                    Our Working Process
                  </span>

                  <div className="flex gap-1">
                    {PROCESS_STEPS.map((_, dotIndex) => (
                      <span
                        key={dotIndex}
                        className={`h-[3px] w-5 ${
                          dotIndex <= index
                            ? "bg-[#d70000]"
                            : "bg-current/20"
                        }`}
                      />
                    ))}
                  </div>
                </div> */}

              </article>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}
