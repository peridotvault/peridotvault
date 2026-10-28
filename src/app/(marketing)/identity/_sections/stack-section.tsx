import BentoStack from "@/features/peridot-id/components/bento-stack";
import BentoSecure from "@/features/peridot-id/components/bento-secure";
import Bento3 from "@/components/blocks/bento-3";

export function StackSection() {
  return (
    <>
      <section aria-label="Stack" className="w-full border-b border-line">
        <div className="mx-auto w-full max-w-(--container-max-width)">
          <div className="grid gap-px bg-line md:grid-cols-3">
            <BentoStack />
            <BentoSecure />
            <Bento3 />
          </div>
        </div>
      </section>
    </>
  );
}
