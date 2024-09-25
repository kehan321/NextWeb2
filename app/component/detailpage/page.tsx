// app/component/detailpage/page.tsx
"use client"
import { useSearchParams } from 'next/navigation';

const DetailPage = () => {
  const searchParams = useSearchParams();

  // Access the query parameters with fallback values
  const image = searchParams.get('image') || '';
  const title = searchParams.get('title') || 'Untitled';
  const subtitle = searchParams.get('subtitle') || 'No description available.';

  return (
    <div className="container mx-auto p-4 scroll-container">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      {image ? (
        <img
          src={image}
          alt={title}
          className="my-4 rounded-lg shadow-lg  "
          loading="lazy" // Improve performance by lazy loading the image
        />
      ) : (
        <div className="bg-gray-200 h-64 flex items-center justify-center rounded-lg">
          <span className="text-gray-600">Image not available</span>
        </div>
      )}
      <p className="text-xl text-gray-700">{subtitle}</p>
    </div>
  );
};

export default DetailPage;
