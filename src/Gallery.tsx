import { useState, useEffect } from "react";
import Art from "./Components/Art";
export type ArtResponse = {
  id: number;
  img_url: string;
  title: string;
  description?: string;
  author: string;
};

type createArtRequest = {
  img_url: string;
  title: string;
  description?: string;
  author: string;
};

const Gallery: React.FC = () => {
  const [gallery, setGallery] = useState<ArtResponse[]>([]);

  useEffect(() => {
    const url: string = "http://localhost:8000/gallery";
    const fetchQuestions = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Failed to fetch gallery, status code: ${response.status}`);
        }
        const data: ArtResponse[] = await response.json();
        setGallery(data);
      } catch (error: any) {
        console.error(error.message);
      }
    };

    fetchQuestions();
  }, []);

  const handleClick = () => {
    const url: string = "http://localhost:8000/gallery";

    const payload: createArtRequest = {
      img_url: "/external/images/chloe.webp",
      title: "Chloe",
      description: "my cat :>",
      author: "Evan",
    };

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      mode: "cors",
    });
  };
  return (
    <div className="grid grid-cols-3 gap-20 p-[5%] bg-drawn-bg">
      <button
        className="fixed z-10 right-[5%] bottom-[5%] border-1 border-gray-100 rounded-full hover:cursor-pointer hover:bg-drawn-cyan bg-drawn-black text-drawn-white  w-10 h-10"
        onClick={handleClick}
      >
        +
      </button>{" "}
      {gallery.map((art: ArtResponse, i) => (
        <Art key={i} {...art} />
      ))}
    </div>
  );
};
export default Gallery;
