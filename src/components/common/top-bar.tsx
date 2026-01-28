import { Linkedin } from "lucide-react";

function TopBar() {
  return (
    <aside className="py-3 bg-sweetPink-200 text-sweetPink-900">
      <div className="flex items-center justify-center gap-2 text-sm font-medium">
        <Linkedin className="w-4 h-4" />
        <span>Connect with me on</span>
        <a
          href="https://www.linkedin.com/in/syeda-fareeha-2428111a1"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold underline underline-offset-4 hover:no-underline transition"
        >
          LinkedIn
        </a>
      </div>
    </aside>
  );
}

export default TopBar;
