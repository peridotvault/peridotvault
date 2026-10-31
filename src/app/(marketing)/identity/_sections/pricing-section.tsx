import { SectionHeader } from "@/shared/components/atoms/SectionHeader";
import Pricing7 from "@/features/peridot-id/components/pricing-7";

export function PricingSection() {
  return (
    <>
      <section
        id="pricing"
        aria-label="Completely free to use"
        className="w-full"
      >
        <div className="mx-auto w-full max-w-(--container-max-width)">
          <SectionHeader
            title="Completely free to use"
          />
          <Pricing7 />
        </div>
      </section>
    </>
  );
}
