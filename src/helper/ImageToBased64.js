export const convertImageToBase64 = (imageUrl) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();

      const base64 = await new Promise((innerResolve, innerReject) => {
        const reader = new FileReader();
        reader.onload = () => {
          innerResolve(reader.result.split(",")[1]);
        };
        reader.onerror = innerReject;
        reader.readAsDataURL(blob);
      });
      const imgResult = `data:image/jpeg;base64,${base64}`;
      resolve(imgResult);
    } catch (error) {
      reject(`Error converting image ${imageUrl} to base64: ${error}`);
    }
  });
};
