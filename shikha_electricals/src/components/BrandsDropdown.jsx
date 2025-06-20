import React, { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";

const brandGroups = [
  {
    groupName: "",
    brands: ["Sujata", "V-guard", "MicroTek", "Crompton", "Lister", "Sparsh Pearl"],
  },
  {
    groupName: "Brands",
    brands: ["Vinay", "Havells", "Ashirwad", "Plumber", "Million"],
  },
  {
    groupName: "",
    brands: ["Symphony", "LauritzKnudsen", "Bajaj", "Philips", "Ahuja", "Elisa"],
  },
];

const BrandsDropdown = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 250);
  };

  return (
    <>
      {dropdownOpen && (
        <div
          className="fixed inset-0 bg-transparent backdrop-blur-md z-40"
          onClick={() => setDropdownOpen(false)}
        />
      )}

      <div
        className="relative z-50"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button
          className="flex items-center px-5 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          aria-haspopup="true"
          aria-expanded={dropdownOpen}
        >
          Brands
          <ChevronDown
            className={`ml-3 h-5 w-5 transition-transform duration-400 ease-in-out ${
              dropdownOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>

        <div
          className={`absolute left-1/2 top-full mt-3 w-[90vw] max-w-7xl bg-white bg-opacity-100 shadow-xl rounded-2xl
            origin-top transform transition-all duration-400 ease-in-out
            ${dropdownOpen
              ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
              : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
            }
            -translate-x-1/2
          `}
        >
          <div className="mx-auto px-12 py-8 flex justify-around font-semibold text-gray-900 select-none text-sm gap-x-12">
            {brandGroups.map(({ groupName, brands }, index) => (
              <div key={index} className="min-w-[300px]">
                {groupName && (
                  <h2 className="mb-5 text-base font-bold border-b border-gray-300 pb-2">
                    {groupName}
                  </h2>
                )}
                <ul className="space-y-2">
                  {brands.map((brand) => (
                    <li key={brand}>
                      <a
                        href="#"
                        className="block py-1 hover:underline hover:text-blue-600 transition-colors cursor-pointer"
                      >
                        {brand}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandsDropdown;
