"use client";

export default function Navbar() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed bottom-4 sm:bottom-10 left-1/2 -translate-x-1/2 z-50 px-4 w-full max-w-sm sm:max-w-none sm:w-auto">
      <div className="bg-white border-2 border-dimsum-dark rounded-full px-4 sm:px-6 py-2.5 sm:py-3 flex gap-3 sm:gap-6 shadow-md sm:shadow-[8px_8px_0px_0px_rgba(26,26,26,1)] w-full sm:w-auto justify-center sm:justify-start">
        {["MENU", "ORDER", "LOCATION"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={(e) => scrollToSection(e, item)}
            className="text-xs sm:text-sm font-black hover:text-dimsum-yellow transition tracking-tighter cursor-pointer min-h-[44px] flex items-center"
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
}