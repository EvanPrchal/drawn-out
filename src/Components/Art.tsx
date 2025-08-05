import type { ArtResponse } from "../Gallery";

const Art: React.FC<ArtResponse> = ({ id, img_url, title, description = "", author }) => {
  return (
    <div className="text-drawn-white font-body text-3xl flex flex-col">
      <img src="/external/images/fillerimg.png" className="" alt={`img_url = ${img_url}`}></img>
      <section className="flex justify-between">
        <p className="">{title}</p>
        <p className="">By: {author}</p>
      </section>
      <p className="text-2xl break-all">{description}</p>
    </div>
  );
};
export default Art;
