// components/HeroHeading.tsx
export default function HeroHeading() {
  return (
    <div className="text-center mb-6 sm:mb-8 px-2">
        <p className="text-sm sm:text-lg mb-2 sm:mb-4">Stop Overpaying and Start Saving Today!</p>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            Save up to <span className="text-green-400">$715</span> a year on car
            <br className="hidden sm:block" />
            <span className="block sm:inline"> insurance — get a free consultation</span>
        </h1>
    </div>
  );
}
