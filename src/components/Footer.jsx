export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 py-8">
      <div className="max-w-4xl mx-auto px-6 md:px-10 flex justify-between text-xs text-zinc-400">
        <span>© {new Date().getFullYear()} Brijesh Poojary</span>
      </div>
    </footer>
  )
}