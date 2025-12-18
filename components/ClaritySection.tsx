export default function ClaritySection() {
  return (
    <section className="bg-stone-50 text-slate-900 py-24 md:py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* WHO WE ARE */}
          <div className="space-y-6">
            <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-violet-600">
              Who We Are
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-slate-700">
              <p>
                We are a small, independent lab focused on turning ideas into shipped products.
              </p>
              <p>
                Continuum Labs brings together long-term thinking, modern tools, and disciplined 
                execution to build useful software in public.
              </p>
            </div>
          </div>

          {/* WHAT WE DO */}
          <div className="space-y-6">
            <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-violet-600">
              What We Do
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-slate-700">
              <p>
                We design and ship small, useful applications — one every month.
              </p>
              <p>
                Each build begins with a real problem, is scoped deliberately, and is released 
                as a working artifact that anyone can use or learn from.
              </p>
            </div>
          </div>

          {/* HOW WE DO IT */}
          <div className="space-y-6">
            <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-violet-600">
              How We Do It
            </h2>
            <div className="space-y-4">
              <ul className="space-y-3 text-lg leading-relaxed text-slate-700">
                <li className="flex gap-3">
                  <span className="text-slate-400 select-none">–</span>
                  <span>Start with first principles, not features</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-slate-400 select-none">–</span>
                  <span>Keep scope intentionally small</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-slate-400 select-none">–</span>
                  <span>Use AI to accelerate, not replace, thinking</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-slate-400 select-none">–</span>
                  <span>Ship consistently, iterate openly</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-slate-400 select-none">–</span>
                  <span>Document what worked and what didn't</span>
                </li>
              </ul>
              <p className="text-lg font-medium text-slate-800 pt-4">
                Execution is not the outcome. It is the discipline.
              </p>
            </div>
          </div>

          {/* OUR NORTH STAR */}
          <div className="space-y-6">
            <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-violet-600">
              Our North Star
            </h2>
            <div className="space-y-4">
              <p className="text-xl leading-relaxed text-slate-800 font-medium">
                To turn thoughtful ideas into shipped reality — consistently, transparently, 
                and over time.
              </p>
              <p className="text-lg leading-relaxed text-slate-700">
                Momentum is our advantage. Continuity is our edge.
              </p>
            </div>
          </div>

        </div>

        {/* CHARTER - Full Width */}
        <div className="mt-24 lg:mt-32 pt-16 lg:pt-24">
          <div className="max-w-2xl">
            <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-violet-600 mb-8">
              Our Charter
            </h2>
            <p className="text-xl leading-relaxed text-slate-800 mb-8">
              We believe ideas earn their value by being built.
            </p>
            <div className="space-y-2 text-lg text-slate-700">
              <p>We build small.</p>
              <p>We ship monthly.</p>
              <p>We learn in public.</p>
              <p>We optimize for the long arc.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
