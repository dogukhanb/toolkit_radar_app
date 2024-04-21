import { useSelector } from "react-redux";

const Header = () => {
  const { isLoading, isError, flights } = useSelector((state) => state.flight);
  return (
    <header>
      <div>
        <img src="/plane-logo.png" alt="logo" />
        <h3>Uçus Radarı</h3>
      </div>
      <p>
        {isLoading
          ? "Uçuşlar Hesaplanıyor..."
          : isError
          ? "Üzgünüz Bir Hata Oluştu"
          : flights.length + " Uçuş Bulundu"}
      </p>
    </header>
  );
};

export default Header;
