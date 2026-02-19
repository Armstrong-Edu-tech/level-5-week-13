import './globals.css'

// app/layout.js

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gray-100">
        
        {/* Header */}
        <header className="bg-gray-900 text-white px-6 py-4 shadow-md">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">My Website</h1>
            <nav className="space-x-4">
              <a href="/" className="hover:text-gray-300 transition">
                Home
              </a>
              <a href="/about" className="hover:text-gray-300 transition">
                About
              </a>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="bg-gray-100 flex-1 w-full px-6 py-10">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gray-200 text-center py-4">
          <p className="text-gray-600 text-sm">
            © 2026 My Website
          </p>
        </footer>

      </body>
    </html>
  )
}
