import { SideCorner } from "@/shared/components/atoms/SideCorner";

export const FrameInvertedRadius = () => {
  return (
    <div className="fixed w-full h-screen top-0 left-0 z-50 pointer-events-none ">
      <div className="relative w-full h-full text-surface">
        <div className="bg-surface w-4 h-full left-0 top-0 absolute" />
        <div className="bg-surface w-4 h-full right-0 top-0 absolute" />
        <div className="bg-surface w-full h-4 right-0 top-0 absolute" />
        <div className="bg-surface w-full h-4 right-0 bottom-0 absolute" />
        <SideCorner position="bottom-left" className="left-4 bottom-4" />
        <SideCorner position="bottom-right" className="right-4 bottom-4" />
        <SideCorner position="top-right" className="right-4 top-4" />
        <SideCorner position="top-left" className="left-4 top-4" />
      </div>
    </div>
  );
};
