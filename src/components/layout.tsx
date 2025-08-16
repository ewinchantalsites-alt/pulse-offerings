import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

interface LayoutProps {
  children: React.ReactNode;
  showNav?: boolean;
  showFooter?: boolean;
}

export function Layout({ children, showNav = true, showFooter = true }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {showNav && <Navigation />}
      <main className="flex-1">
        {children}
      </main>
      {showFooter && <Footer />}
    </div>
  );
}