export const blobToBase64 = (blob: File, callback: (str: string) => void) => {
  const reader = new FileReader();
  reader.onload = () => {
    const base64String = reader.result as string;
    callback(base64String);
  };
  reader.readAsDataURL(blob);
};

export default blobToBase64;
