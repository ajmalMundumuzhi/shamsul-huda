import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12 px-4">
      <div className="container mx-auto">
        
        {/* --- Main Grid Section --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

          {/* Block 1: Logo & Text (Spans 5 cols on desktop) */}
          <div className="md:col-span-5">
            <img 
              src="/shia  WATERMARK.png" // Make sure this path is correct
              alt="Logo"
              className="h-12 mb-4" // 48px height
            />
            <p className="text-sm text-gray-400">
              Shamsul Huda Islamic Academy , a graduate institute affiliated to Darul Huda Islamic University Kerala, is a prestigious centre of Islamic higher learning founded upon the philosophy of imparting islamic education combined with modern curriculum and moral upbringing.
            </p>
          </div>

          {/* Block 2: Links 1 (Starts at col 7, spans 2) */}
          <div className="md:col-start-7 md:col-span-2">
            <nav className="flex flex-col space-y-2">

              <h2 className="mb-4 font-semibold">Social Media</h2>
              <Link to="/contact" className="hover:underline">Contact</Link>
              <Link to="/mission" className="hover:underline">Mission</Link>
              <Link to="/faculties" className="hover:underline">Faculties</Link>
              <Link to="/facilities" className="hover:underline">Facilities</Link>
              <Link to="/management" className="hover:underline">Management</Link>
            </nav>
          </div>

          {/* Block 3: Links 2 (Starts at col 10, spans 2) */}
          <div className="md:col-start-10 md:col-span-2">
            <nav className="flex flex-col space-y-2">
                <h2 className="mb-4 font-semibold">Social Media</h2>
              <a href="#" className="hover:underline">Youtube</a>
              <a href="#" className="hover:underline">Instagram</a>
              <a href="#" className="hover:underline">Instagram</a>
            </nav>
          </div>
          
        </div>

        {/* --- Copyright Section --- */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <p className="text-sm text-gray-500">
            © All Right Reserved 2025.
          </p>
        </div>

      </div>
    </footer>
    )
}