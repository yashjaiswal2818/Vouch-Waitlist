const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-zinc-800">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="font-semibold text-zinc-50 text-xl">EchoWidget</div>
        
        <nav className="flex items-center gap-6">
          <button
            onClick={() => scrollToSection('journey')}
            className="text-zinc-400 hover:text-zinc-50 transition-colors text-sm font-medium"
          >
            Our Journey ↓
          </button>
          <button
            onClick={() => scrollToSection('waitlist')}
            className="px-4 py-2 rounded-md border border-zinc-700 text-zinc-50 text-sm font-medium hover:bg-zinc-800 transition-colors"
          >
            Request Access
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
