import React from 'react';

function Pagination({ currentPage, totalPages, onPageChange }) {
  const pageNumbers = [];

  // Generate page numbers
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex flex-wrap justify-center mt-6 gap-2">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 md:px-4 md:py-2 bg-gray-300 hover:bg-gray-400 focus:bg-gray-600 active:bg-gray-700 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Prev
      </button>

      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => onPageChange(number)}
          className={`px-3 py-1 md:px-4 md:py-2 rounded-md ${currentPage === number ? 'bg-purple-500 text-white font-bold' : 'bg-gray-300 hover:bg-gray-400'}`}
        >
          {number}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 md:px-4 md:py-2 bg-gray-300 hover:bg-gray-400 focus:bg-gray-600 active:bg-gray-700 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
