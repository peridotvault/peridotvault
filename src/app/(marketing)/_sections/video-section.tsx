export function VideoSection() {
  return (
    <section className="relative w-full overflow-hidden">
      <video
        autoPlay
        draggable={false}
        muted
        loop
        playsInline
        className="aspect-video w-full object-cover"
      >
        <source src="https://res.cloudinary.com/dcf3oktvs/video/upload/v1743225301/hb1b0kqgmkjlpy9qglzy.mp4" />
      </video>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-background to-transparent"
      />
    </section>
  );
}
