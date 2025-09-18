// components/HeroHeading.tsx
export default function HeroHeading() {
  return (
    <div className="flex flex-col items-center text-center gap-4">
      <p className="text-sm md:text-base font-medium tracking-wide">
        Stop overpaying and start saving today!
      </p>

      <h1 className="font-bold leading-tight tracking-tight text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl  [text-wrap:balance]">
        Save up to{" "}
        <span className="text-green-400">
          $715
        </span>{" "}
        a year on car insurance — get a free consultation
      </h1>
    </div>
  );
}
