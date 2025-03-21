import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos } from "../redux/photoSlice";
import { useNavigate } from "react-router-dom";
import Pagination from '../components/Pagination.jsx';
import HeroSection from '../components/HeroSection.jsx';
import "remixicon/fonts/remixicon.css";

function PhotoGalleryPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { photos, isLoading, error } = useSelector((state) => state.photos);

    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [photosPerPage] = useState(50);  // Display 50 photos per page

    useEffect(() => {
        dispatch(fetchPhotos());
    }, [dispatch]);

    // Search query filtering
    const filteredPhotos = photos.filter(photo =>
        photo.title.toLowerCase().trim().includes(searchQuery.toLowerCase().trim())
    );





    // Pagination logic
    const indexOfLastPhoto = currentPage * photosPerPage;
    const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage;
    const currentPhotos = filteredPhotos.slice(indexOfFirstPhoto, indexOfLastPhoto);
    const totalPages = Math.ceil(filteredPhotos.length / photosPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    if (isLoading) return <p className="text-center text-lg mt-10">Loading...</p>;
    if (error) return <p className="text-center text-red-500 mt-10">Error: {error}</p>;

    return (
        <>
            <HeroSection />

            {/* Search */}
            <div className="p-4 flex justify-center">
                <div className="relative w-full max-w-md">
                    <i className="ri-search-line absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-lg"></i>
                    <input
                        type="text"
                        placeholder="Search photos..."
                        className="p-2 pl-10 border border-gray-400 rounded-md w-full focus:border-purple-800 focus:ring-2 focus:ring-purple-800 outline-none"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>

            {/* Photo Gallery */}
            <div className="p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {currentPhotos.length > 0 ? (
                    currentPhotos.map((photo) => (
                        <div key={photo.id} className="p-4 shadow-lg border rounded-lg bg-white">
                            <img
                                src={photo.thumbnailUrl}
                                alt={photo.title}
                                className="w-full h-auto rounded object-cover aspect-[4/3]"
                            />
                            <div className="mt-4 text-center">
                                <p className="text-sm mt-2">{photo.title}</p>
                                <button
                                    className="mt-2 bg-purple-400 text-white px-3 py-1 rounded hover:bg-purple-600 transition"
                                    onClick={() => navigate(`/photos/${photo.id}`)}
                                >
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="col-span-full text-center text-gray-500">No photos found</p>
                )}
            </div>

            {/* Pagination */}
            <div className="flex justify-center p-4 sm:p-6 flex-wrap gap-2">
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            </div>
        </>
    );
}

export default PhotoGalleryPage;
