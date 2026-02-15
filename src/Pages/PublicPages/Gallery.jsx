import React, {useRef, useState} from 'react';

const Gallery = () => {
    const [page, setPage] = useState(1)
    const limit = 4
    const images = [
        "/Images/Slider/img1.webp",
        "/Images/Slider/img2.jpg",
        "/Images/Slider/img3.jpg",
        "/Images/Slider/img4.jpg",
        "/Images/Slider/img3.jpg",
        "/Images/Slider/img4.jpg",
        "/Images/Slider/img1.webp",
        "/Images/Slider/img2.jpg",
        "/Images/Slider/img3.jpg",
        "/Images/Slider/img1.webp",
        "/Images/Slider/img2.jpg",
        "/Images/Slider/img3.jpg",
        "/Images/Slider/img4.jpg",
        "/Images/Slider/img1.webp",
        "/Images/Slider/img2.jpg",
        "/Images/Slider/img3.jpg",
        "/Images/Slider/img4.jpg",
        "/Images/Slider/img1.webp",
        "/Images/Slider/img2.jpg",
        "/Images/Slider/img3.jpg",
        "/Images/Slider/img4.jpg",
    ]

    const startIndex = (page - 1) * limit
    const endIndex = startIndex + limit
    const currentImages = images.slice(startIndex, endIndex)
    const totalPages = Math.ceil(images.length / limit)

    const pagesArr = Array.from(Array(totalPages)).map((_, i) => i + 1)


    return (
        <div>
            <div className="grid grid-cols-2 gap-4">
                {
                    currentImages.map((image, index) => {
                        return <div key={index}>
                            <img className='w-full h-full object-cover' src={image} alt={`Image ${index + 1}`} />
                        </div>
                    })
                }
            </div>
            <div className="flex justify-center items-center gap-2 mt-8 mb-4">
                <button
                    className={`px-3 py-1 rounded border border-orange-500 ${page === 1 ? 'bg-white text-gray-400 cursor-not-allowed border-gray-300' : 'bg-white text-black hover:bg-gray-100'}`}
                    disabled={page === 1}
                    onClick={() => { setPage(page - 1) }}>Prev</button>
                {
                    pagesArr.map((p, index) => {
                        return <button
                            className={`w-8 h-8 rounded border border-orange-500 flex items-center justify-center ${page === p ? 'bg-white text-black font-bold border-2' : 'bg-white text-black hover:bg-gray-100'}`}
                            onClick={() => {
                                setPage(p)
                            }}
                            key={index}>{p}</button>
                    })
                }
                <button
                    className={`px-3 py-1 rounded border border-orange-500 ${page === totalPages ? 'bg-white text-gray-400 cursor-not-allowed border-gray-300' : 'bg-white text-black hover:bg-gray-100'}`}
                    disabled={page === totalPages}
                    onClick={() => { setPage(page + 1) }}

                >Next</button>
            </div>

        </div>
    );
}

export default Gallery;