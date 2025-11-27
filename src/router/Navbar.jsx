import React from "react";
import Nova from "/Nova.svg";

function Navbar() {
  return (
    <div>
      <nav className="fixed top-4 left-50 right-50 z-50 md:left-90 md:right-90">
        <div className="flex items-center justify-between p-3 backdrop-blur-xl border-b border-white/30 rounded-3xl shadow-xl">
          <a href="/" className="flex items-center space-x-2 group">
            <img
              src={Nova}
              alt="Nova Logo"
              className="w-10 h-10 object-cover transition-all duration-300 ease-out group-hover:rotate-6 group-hover:scale-90"
            />
            <span className="text-white text-lg font-bold">Nova</span>
          </a>
          <div className="hidden md:flex space-x-10 tracking-tight text-xs sm:text-sm md:text-base font-medium">
            <a
              href="#features"
              className="text-white hover:text-purple-400 transition"
            >
              ฟีเจอร์
            </a>
            <a
              href="#pricing"
              className="text-white hover:text-purple-400 transition"
            >
              ราคา
            </a>
            <a
              href="#docs"
              className="text-white hover:text-purple-400 transition"
            >
              เอกสาร
            </a>
            <a
              href="#contact"
              className="text-white hover:text-purple-400 transition"
            >
              ติดต่อเรา
            </a>
          </div>
          <button className="px-6 py-3 text-white tracking-tight text-xs sm:text-sm md:text-base font-medium cursor-pointer rounded-2xl border-t border-white/30 backdrop-blur-xl hover:bg-gray-500/15 transition-all duration-300">
            เข้าสู่ระบบ
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
