import React from "react";

const images = [
  { id: 1, colSpan: 2, rowSpan: 2 }, // big
  { id: 2, colSpan: 1, rowSpan: 1 },
  { id: 3, colSpan: 1, rowSpan: 1 },
  { id: 4, colSpan: 2, rowSpan: 1 },
  { id: 5, colSpan: 1, rowSpan: 2 },
  { id: 6, colSpan: 1, rowSpan: 1 },
  { id: 7, colSpan: 1, rowSpan: 1 },
  { id: 8, colSpan: 2, rowSpan: 2 },
  { id: 9, colSpan: 1, rowSpan: 1 },
  { id: 10, colSpan: 1, rowSpan: 1 },
  { id: 11, colSpan: 1, rowSpan: 1 },
  { id: 12, colSpan: 1, rowSpan: 1 },
];

const Gallery = () => {
  return (
    <section
      id="gallery"
      className="bg-pink-100 min-h-screen py-12 px-6 sm:px-12 flex flex-col items-center"
    >
      <h1
        className="text-4xl font-bold text-pink-700 mb-10"
        style={{ fontFamily: "Times New Roman, serif" }}
      >
        My Life Gallery
      </h1>

      <div
        className="
          grid 
          grid-cols-2 sm:grid-cols-3 md:grid-cols-4 
          auto-rows-[150px] 
          gap-4 
          w-full max-w-7xl
        "
      >
        {images.map(({ id, colSpan, rowSpan }) => (
          <div
            key={id}
            className="rounded-xl overflow-hidden shadow-lg bg-white"
            style={{
              gridColumn: `span ${colSpan}`,
              gridRow: `span ${rowSpan}`,
            }}
          >
            <img
              src={`https://picsum.photos/id/${id * 10}/600/600`}
              alt={`Gallery image ${id}`}
              className="object-cover w-full h-full"
              loading="lazy"
              draggable={false}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
