import { IconType } from "react-icons/lib";

type FeatureHeaderProps = {
  Icon: IconType;
  title: string;
  description: string;
};

export const FeatureHeader = ({
  Icon,
  title,
  description,
}: FeatureHeaderProps) => {
  return (
    <div className="flex w-full items-start gap-4 max-md:flex-col">
      {/* TItle  */}
      <div className="flex items-center gap-6 max-md:gap-4 w-2/5 max-md:w-full">
        <Icon className="text-accent text-5xl" />
        <div>
          <label className="uppercase text-sm max-md:text-xs text-accent">
            feature
          </label>
          <h2 className="text-4xl font-bold max-md:text-3xl">{title}</h2>
        </div>
      </div>

      {/* description */}
      <p className="w-3/5 max-md:w-full md:text-lg">{description}</p>
    </div>
  );
};
