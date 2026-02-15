type ContainerGlassProps = {
  title: string;
  description: string;
};

export const ContainerGlass = ({ title, description }: ContainerGlassProps) => {
  return (
    <div className="aspect-square max-md:aspect-video border rounded-2xl flex flex-col gap-8 py-8 max-md:py-6 max-md:gap-6 bg-white/5 backdrop-blur-md border-border hover:bg-primary/50 duration-300">
      <h3 className="text-xl px-8 max-md:text-lg">{title}</h3>
      <hr className="border-t border-border " />
      <p className="px-8 text-3xl max-md:text-2xl">{description}</p>
    </div>
  );
};
