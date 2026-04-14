import Navbar from "@/components/Navbar";
import Stars from "@/components/Stars";
import Countdown from "@/components/Countdown";
import WaitlistForm from "@/components/WaitlistForm";

const features = [
  {
    label: "WooCommerce Sync",
    icon: "M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016A3.001 3.001 0 0021 9.349m-18 0a2.99 2.99 0 00.621-1.244L4.25 5.5h15.5l.63 2.605a3 3 0 00.621 1.244",
  },
  {
    label: "No-Code Setup",
    icon: "M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42",
  },
  {
    label: "Real-time Products",
    icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
  },
  {
    label: "Checkout in Framer",
    icon: "M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-gray-100 overflow-x-hidden relative font-[family-name:var(--font-inter)]">
      {/* Stars background */}
      <Stars />

      {/* Bottom glow */}
      <div className="fixed -bottom-[200px] left-1/2 -translate-x-1/2 w-[120%] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(79,70,229,0.4)_0%,rgba(79,70,229,0.15)_30%,transparent_70%)] pointer-events-none z-0" />

      {/* Page content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        <Navbar />

        {/* Hero */}
        <section className="flex-1 flex items-center justify-between px-12 pb-[120px] pt-10 max-w-[1400px] mx-auto w-full gap-[60px] max-lg:flex-col max-lg:text-center max-lg:justify-center max-lg:px-6 max-lg:pb-[100px] max-lg:gap-10">
          <div className="flex-1 max-w-[600px] max-lg:flex max-lg:flex-col max-lg:items-center">
            {/* Launch badge */}
            <div className="inline-flex items-center gap-2.5 px-[18px] py-2 bg-white/5 border border-white/10 rounded-full text-[13px] font-semibold tracking-widest uppercase text-gray-400 mb-8 font-[family-name:var(--font-space-grotesk)]">
              <span className="w-2 h-2 bg-indigo-600 rounded-sm animate-pulse" />
              Launching 25 June, 2026
            </div>

            <h1 className="font-[family-name:var(--font-space-grotesk)] text-[clamp(36px,5vw,56px)] font-bold leading-[1.1] tracking-tight mb-5">
              Get Early Access to{" "}
              <span className="bg-gradient-to-br from-indigo-300 to-indigo-600 bg-clip-text text-transparent">
                FramerBridge
              </span>
            </h1>

            <p className="text-[17px] leading-relaxed text-gray-400 mb-10 max-w-[480px]">
              Seamlessly display and sell your WooCommerce products directly
              inside Framer. No code, no complexity - just connect and sell.
            </p>

            <Countdown />
          </div>

          <div className="w-[420px] shrink-0 max-lg:w-full max-lg:max-w-[420px]">
            <WaitlistForm />
          </div>
        </section>

        {/* Features strip */}
        <div className="flex justify-center gap-10 px-12 pb-[60px] max-w-[1400px] mx-auto w-full relative z-10 flex-wrap max-lg:gap-5 max-lg:px-6 max-lg:pb-10">
          {features.map((feature) => (
            <div
              key={feature.label}
              className="flex items-center gap-2.5 text-gray-400 text-sm font-medium"
            >
              <svg
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 text-indigo-300 shrink-0"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={feature.icon}
                />
              </svg>
              {feature.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
