export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#0a0e14]">
      <div className="absolute inset-0 mesh-bg opacity-80" />
      <div className="absolute inset-0 hero-spotlight" />
      <div className="absolute top-[10%] left-[5%] w-[420px] h-[420px] rounded-full bg-[#6b9e8f]/10 blur-[60px]" />
      <div className="absolute bottom-[12%] right-[8%] w-[380px] h-[380px] rounded-full bg-[#6b8cae]/8 blur-[55px]" />
      <div className="absolute inset-0 grid-bg opacity-50" />
    </div>
  );
}
