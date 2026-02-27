{
  /*only for testing*/
}
export default function Navbar() {
  return (
    <nav className="bg-white border-b">
      <div className="flex items-center justify-between container">
        <h1 className="text-lg font-bold " >Star Union</h1>

        <div className="items-center hidden gap-2 text-sm font-medium md:flex">
          <span className="cursor-pointer hover:text-gray-600">Home</span>
          <span className="cursor-pointer hover:text-gray-600">Events</span>
          <span className="cursor-pointer hover:text-gray-600">Workshops</span>
          <span className="cursor-pointer hover:text-gray-600">Projects</span>
          <span className="cursor-pointer hover:text-gray-600">Committees</span>
          <span className="cursor-pointer hover:text-gray-600">Services</span>
        </div>

        <div className="flex items-center gap-2">
          <button className="px-4 py-1 text-sm border rounded-md hover:bg-gray-100">
            Login
          </button>

          <button className="px-4 py-1 text-sm text-white bg-black rounded-md">
            Profile
          </button>
        </div>
      </div>
    </nav>
  );
}
