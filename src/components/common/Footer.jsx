export default function Footer() {
  return (
    <footer className="mt-10 bg-white border-t">
      <div className="grid  gap-6 container text-sm md:grid-cols-3">
        
        <div>
          <h2 className="mb-2 text-lg font-bold">Star Union</h2>
          <p className="text-gray-600">
            Building a strong tech community through events, workshops, and projects.
          </p>
        </div>

        <div>
          <h3 className="mb-2 font-semibold">Quick Links</h3>
          <ul className="space-y-1 text-gray-600">
            <li><span className="cursor-pointer hover:text-black">Home</span></li>
            <li><span className="cursor-pointer hover:text-black">Events</span></li>
            <li><span className="cursor-pointer hover:text-black">Workshops</span></li>
            <li><span className="cursor-pointer hover:text-black">Projects</span></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-2 font-semibold">More</h3>
          <ul className="space-y-1 text-gray-600">
            <li><span className="cursor-pointer hover:text-black">Committees</span></li>
            <li><span className="cursor-pointer hover:text-black">Services</span></li>
            <li><span className="cursor-pointer hover:text-black">Profile</span></li>
            <li><span className="cursor-pointer hover:text-black">Login</span></li>
          </ul>
        </div>

      </div>

      <div className="pb-4 text-xs text-center text-gray-500">
        © 2026 Star Union. All rights reserved.
      </div>
    </footer>
  );
}