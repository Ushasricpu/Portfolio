import { Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© {currentYear} Full Stack Developer Portfolio.</span>
            <span className="hidden md:inline">Built with</span>
            <Heart className="h-4 w-4 text-red-500 fill-red-500 hidden md:inline" />
            <span className="hidden md:inline">using React, FastAPI & Tailwind CSS</span>
          </div>
          
          <div className="flex items-center gap-6 text-sm">
            <button className="text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </button>
            <button className="text-muted-foreground hover:text-foreground transition-colors">
              Terms of Use
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
