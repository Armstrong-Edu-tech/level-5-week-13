import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Next E-Commerce App",
  description: "Modern e-commerce app built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className="bg-white text-gray-800 min-h-screen flex flex-col">
        
        {/* Navbar */}
        <header className="bg-white shadow-sm sticky top-0 z-50 border-b">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            
            {/* Logo */}
            <Link
              href="/"
              className="text-2xl font-bold text-blue-600 hover:opacity-80 transition"
            >
              NextShop
            </Link>

            {/* Navigation Links */}
            <nav className="flex items-center gap-8 text-sm font-medium">
              <Link href="/login" className="text-blue-600 transition">
                Login
              </Link>

              <Link href="/products" className="text-blue-600 transition">
                Products
              </Link>

              <Link href="/cart" className="text-blue-600 transition">
                Cart
              </Link>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow max-w-7xl mx-auto w-full px-6 py-10">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-white border-t">
          <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} NextShop. All rights reserved.
          </div>
        </footer>

      </body>
    </html>
  );
}
