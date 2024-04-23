//değer tanımsız , boş string veya 0 ise bilinmiyor döndürecek aksi takdirde veriyi döndürme

const checkValid = (value) => {
  return value === 0 || value === null || value === undefined || value === ""
    ? "Bilinmiyor"
    : value;
};

export default checkValid;
