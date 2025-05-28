export const derivedAltImage = (image: string): string => {
  const fileName = image.split("/").pop() || "";
  const alt = fileName.replace(/\.[^/.]+$/, "");
  return alt || "image";
};
