const Mission = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-sm font-semibold text-zinc-400 tracking-wider">OUR PHILOSOPHY</p>
            <h2 className="text-4xl font-bold text-zinc-50">
              It's More Than a Snippet.
            </h2>
            <p className="text-lg text-zinc-400 leading-relaxed">
              Customer testimonials aren't just quotes; they're stories. They're the most authentic marketing you have. Our mission is to provide a tool so beautiful and intuitive that it does justice to your customers' words, helping you build genuine trust, not just social proof.
            </p>
          </div>

          <div className="relative h-96 flex items-center justify-center">
            <div className="absolute inset-0">
              <svg className="w-full h-full" viewBox="0 0 400 400">
                <defs>
                  <linearGradient id="dotGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(217, 91%, 60%)" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="hsl(217, 91%, 60%)" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
                
                <circle cx="100" cy="100" r="4" fill="url(#dotGradient)">
                  <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle cx="200" cy="80" r="4" fill="url(#dotGradient)">
                  <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" begin="0.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="300" cy="120" r="4" fill="url(#dotGradient)">
                  <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" begin="1s" repeatCount="indefinite" />
                </circle>
                <circle cx="150" cy="200" r="4" fill="url(#dotGradient)">
                  <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" begin="1.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="250" cy="220" r="4" fill="url(#dotGradient)">
                  <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" begin="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="180" cy="300" r="4" fill="url(#dotGradient)">
                  <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" begin="2.5s" repeatCount="indefinite" />
                </circle>

                <line x1="100" y1="100" x2="200" y2="80" stroke="hsl(217, 91%, 60%)" strokeWidth="1" strokeOpacity="0.3">
                  <animate attributeName="stroke-opacity" values="0.1;0.5;0.1" dur="3s" repeatCount="indefinite" />
                </line>
                <line x1="200" y1="80" x2="300" y2="120" stroke="hsl(217, 91%, 60%)" strokeWidth="1" strokeOpacity="0.3">
                  <animate attributeName="stroke-opacity" values="0.1;0.5;0.1" dur="3s" begin="0.5s" repeatCount="indefinite" />
                </line>
                <line x1="100" y1="100" x2="150" y2="200" stroke="hsl(217, 91%, 60%)" strokeWidth="1" strokeOpacity="0.3">
                  <animate attributeName="stroke-opacity" values="0.1;0.5;0.1" dur="3s" begin="1s" repeatCount="indefinite" />
                </line>
                <line x1="150" y1="200" x2="250" y2="220" stroke="hsl(217, 91%, 60%)" strokeWidth="1" strokeOpacity="0.3">
                  <animate attributeName="stroke-opacity" values="0.1;0.5;0.1" dur="3s" begin="1.5s" repeatCount="indefinite" />
                </line>
                <line x1="250" y1="220" x2="180" y2="300" stroke="hsl(217, 91%, 60%)" strokeWidth="1" strokeOpacity="0.3">
                  <animate attributeName="stroke-opacity" values="0.1;0.5;0.1" dur="3s" begin="2s" repeatCount="indefinite" />
                </line>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
