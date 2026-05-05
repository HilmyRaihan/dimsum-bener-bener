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
    <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-white border-2 border-dimsum-dark rounded-full px-6 py-3 flex gap-6 shadow-[8px_8px_0px_0px_rgba(26,26,26,1)]">
        {["MENU", "ORDER", "LOCATION"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={(e) => scrollToSection(e, item)}
            className="text-xs font-black hover:text-dimsum-yellow transition tracking-tighter cursor-pointer"
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
}