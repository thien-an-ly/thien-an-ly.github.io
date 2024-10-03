import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col bg-backgroundDark">
      <Navbar />
      <main className="mt-16 grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
