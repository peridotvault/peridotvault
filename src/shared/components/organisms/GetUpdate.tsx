import { GoArrowDownRight, GoMail } from "react-icons/go";

export const GetUpdate = () => {
  return (
    <section
      id="waitlist"
      className="w-full px-8 pb-4 pt-24 max-md:pt-10 flex justify-center "
    >
      <div className="w-full max-w-(--container-max-width) rounded-3xl max-md:rounded-2xl bg-linear-to-br from-foreground to-accent px-24 max-md:px-8">
        <div className="flex h-full flex-col items-center justify-center lg:py-28 md:py-20 py-12 max-lg:w-full max-lg:justify-start lg:gap-18 md:gap-10 gap-8 max-md:gap-6">
          <h2 className="lg:text-7xl md:text-5xl text-3xl text-background max-w-4xl text-center font-medium">
            Get Exclusive PeridotVault Platform Updates
          </h2>
          <div className="flex max-md:flex-col items-center w-full max-w-120 bg-background  rounded-2xl p-1.5  relative">
            <div className="flex items-center py-2 pl-3 w-full">
              <GoMail className="w-8 h-8 p-1 text-label" />
              <input
                type="email"
                name=""
                className="py-1 px-3 max-md:px-6 max-md:text-base w-full placeholder:text-white/80 outline-none duration-300"
                placeholder="Email Address"
                required
              />
            </div>

            <button className="h-full max-md:w-full rounded-xl bg-accent text-background flex items-center justify-center overflow-hidden md:shrink-0 group cursor-pointer">
              <span className="bg-white w-full rounded-xl h-full flex items-center justify-center text-sm p-3 font-medium">
                Join Waitlist
              </span>
              <GoArrowDownRight className="w-14 h-12 p-3 group-hover:-rotate-45 duration-300" />
            </button>
          </div>
        </div>
      </div>

      {/* <div
                className="w-full max-w-[1200px] rounded-3xl max-md:rounded-2xl max-md:px-8"
                dangerouslySetInnerHTML={{
                    __html: `
                            <script async src="https://subscribe-forms.beehiiv.com/embed.js"></script><iframe src="https://subscribe-forms.beehiiv.com/d02990e0-4f60-462c-8a98-1f99bf8416fc" class="beehiiv-embed" data-test-id="beehiiv-embed" frameborder="0" scrolling="no" style="width: 100%; height: 450px; margin: 0; border-radius: 0px 0px 0px 0px !important; background-color: transparent; box-shadow: 0 0 #0000; max-width: 100%;"></iframe>
                            `
                }}
            /> */}
    </section>
  );
};
