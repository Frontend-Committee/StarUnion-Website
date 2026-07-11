import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

function getImageUrl(image) {
  if (!image) return "";
  return image.startsWith("http") ? image : `${import.meta.env.VITE_API_URL}${image}`;
}

export default function ImageLightbox({ images, initialIndex, onClose }) {
  const [index, setIndex] = useState(initialIndex ?? 0);

  const handlePrevious = useCallback(() => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const handleNext = useCallback(() => {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") handlePrevious();
      if (event.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose, handlePrevious, handleNext]);

  if (
    initialIndex === null ||
    initialIndex === undefined ||
    !images ||
    images.length === 0 ||
    index < 0 ||
    index >= images.length
  ) {
    return null;
  }

  const current = images[index];

  return (
    <div className="fixed inset-0 z-50 bg-black/95">
      <div className="relative flex items-center justify-center w-full h-full px-4 py-12">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-white rounded-full hover:bg-white/10"
          aria-label="Close"
        >
          <X className="w-8 h-8" />
        </button>

        {images.length > 1 && (
          <button
            type="button"
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-white rounded-full hover:bg-white/10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
        )}

        <img
          src={getImageUrl(current.image)}
          alt={current.caption || "Gallery image"}
          className="max-w-full max-h-full rounded-lg object-contain"
        />

        {images.length > 1 && (
          <button
            type="button"
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-white rounded-full hover:bg-white/10"
            aria-label="Next image"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        )}

        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                className={`w-2 h-2 rounded-full ${
                  i === index ? "bg-white" : "bg-white/40"
                }`}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
