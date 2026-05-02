export default function Footer() {
  return (
    <footer className="bg-slate-950">
      <div className="max-w-7xl mx-auto px-8 py-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-lg font-bold text-white">NAHINBUILDS</div>
        <div className="font-body-md text-sm text-slate-500 uppercase tracking-widest text-center">
          © 2026 NAHINBUILDS. ALL RIGHTS RESERVED.
        </div>
        <div className="flex gap-8">
          <a className="text-slate-500 hover:text-blue-400 transition-colors font-body-md text-sm" href="#">LinkedIn</a>
          <a className="text-slate-500 hover:text-blue-400 transition-colors font-body-md text-sm" href="#">GitHub</a>
          <a className="text-slate-500 hover:text-blue-400 transition-colors font-body-md text-sm" href="#">Twitter</a>
          <a className="text-slate-500 hover:text-blue-400 transition-colors font-body-md text-sm" href="#">Dribbble</a>
        </div>
      </div>
    </footer>
  );
}
