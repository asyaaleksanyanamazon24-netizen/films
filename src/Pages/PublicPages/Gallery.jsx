import React, {useRef, useState} from 'react';

const Gallery = () => {
    const [page, setPage] = useState(1)
    const limit = 4
    const images = [
        "../../../public/Images/Slider/img1.webp",
        "../../../public/Images/Slider/img2.jpg",
        "../../../public/Images/Slider/img3.jpg",
        "../../../public/Images/Slider/img4.jpg",
        "../../../public/Images/Slider/img3.jpg",
        "../../../public/Images/Slider/img4.jpg",
        "../../../public/Images/Slider/img1.webp",
        "../../../public/Images/Slider/img2.jpg",
        "../../../public/Images/Slider/img3.jpg",
        "../../../public/Images/Slider/img1.webp",
        "../../../public/Images/Slider/img2.jpg",
        "../../../public/Images/Slider/img3.jpg",
        "../../../public/Images/Slider/img4.jpg",
        "../../../public/Images/Slider/img1.webp",
        "../../../public/Images/Slider/img2.jpg",
        "../../../public/Images/Slider/img3.jpg",
        "../../../public/Images/Slider/img4.jpg",
        "../../../public/Images/Slider/img1.webp",
        "../../../public/Images/Slider/img2.jpg",
        "../../../public/Images/Slider/img3.jpg",
        "../../../public/Images/Slider/img4.jpg",
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
          <div>
              <button
                  disabled={page === 1}
                  onClick={()=>{setPage(page - 1)}}>Prev</button>
              {
                  pagesArr.map((p, index) => {
                      return <button
                          onClick={()=>{
                              setPage(p)
                          }}
                          key={index}>{p}</button>
                  })
              }
              <button

                  disabled={page === totalPages}
                  onClick={()=>{setPage(page + 1)}}

              >Next</button>
          </div>

        </div>
    );
}

export default Gallery;