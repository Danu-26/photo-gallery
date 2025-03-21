import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchPhotoById } from '../redux/photoDetailsSlice';

function PhotoDetailsPage() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { photo, isLoading, error } = useSelector((state) => state.photoDetails);

    useEffect(() => {
        dispatch(fetchPhotoById(id));
    }, [dispatch, id]);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!photo) return <p>No photo found.</p>;

    return (
        <div className="max-w-full mx-auto p-4 sm:p-6 flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-4 sm:p-6 shadow-lg rounded-lg w-full max-w-2xl">
                <img
                    src={photo.url}
                    alt={photo.title}
                    className="w-full max-h-[400px] sm:max-h-[500px] rounded-lg object-cover"
                />
                <div className="mt-4 sm:mt-6 text-center">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-purple-600">{photo.title}</h2>
                    <p className="text-gray-600 mt-2 text-base sm:text-lg"><strong>Album ID:</strong> {photo.albumId}</p>
                    <p className="text-gray-600 text-base sm:text-lg"><strong>Photo ID:</strong> {photo.id}</p>
                </div>

                <div className="mt-4 sm:mt-6 flex justify-center">
                    <button
                        onClick={() => navigate("/")}
                        className="bg-gray-500 text-white px-4 py-2 sm:px-6 sm:py-3 w-full max-w-sm rounded-lg hover:bg-gray-700 transition duration-200 ease-in-out flex items-center justify-center"
                    >
                        <i className="ri-arrow-left-line mr-2"></i> Back to Gallery
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PhotoDetailsPage;
