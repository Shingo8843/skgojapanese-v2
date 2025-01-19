"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Modal from "@/components/Modal";

export default function SearchBox({ items, placeholder = "Search slides..." }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedSlide, setSelectedSlide] = useState(null);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    if (query) {
      const matches = items.filter((item) =>
        item.name.toLowerCase().includes(query)
      );
      setFilteredItems(matches);
    } else {
      setFilteredItems([]);
    }
  };

  return (
    <div className="mb-6">
      {/* Search Input */}
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder={placeholder}
        className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Suggestions */}
      {filteredItems.length > 0 && (
        <ul className="mt-4 bg-white shadow-lg rounded-lg">
          {filteredItems.map((item) => (
            <li
              key={item.name}
              className="p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => setSelectedSlide(item)}
            >
              <div className="flex items-center space-x-4">
                <div className="relative w-16 h-16">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="rounded-md object-cover"
                    sizes="64px"
                  />
                </div>
                <span>{item.name}</span>
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* Modal */}
      {selectedSlide && (
        <Modal onClose={() => setSelectedSlide(null)}>
          <div className="p-0 h-full w-full">
            <h2 className="text-2xl font-bold mb-4">{selectedSlide.name}</h2>
            <iframe
              src={selectedSlide.embedLink}
              title={selectedSlide.name}
              className="w-full h-full rounded-md"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </Modal>
      )}
    </div>
  );
}
