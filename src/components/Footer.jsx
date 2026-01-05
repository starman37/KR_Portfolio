// --- FIX ---
// 'darkMode' prop is no longer needed.
export default function Footer() {
  return (
    <footer
      // --- THEME ---
      // Styled with our new border and text variables
      className="py-8 text-center border-t border-border bg-transparent"
    >
      <p className="text-text-dim">
        {/* --- FIX ---
            Changed name to match Navbar */}
        © 2024 Starman-Webworks. Built with React & Tailwind CSS
      </p>
    </footer>
  );
}
