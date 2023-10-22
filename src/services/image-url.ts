import noImg from "../assets/no-image-placeholder-6f3882e0.webp";

const getCropedImageUrl = (
  url: string,
  width: number = 600,
  height: number = 400
) => {
  if (!url) return noImg;
  const target = "media/";
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + `crop/${width}/${height}/` + url.slice(index);
};

export default getCropedImageUrl;
