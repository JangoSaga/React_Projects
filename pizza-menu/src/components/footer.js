import Order from "./order";
export default function Footer() {
  const hour = new Date().getHours();
  const isOpen = hour >= 10 && hour <= 22;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order />
      ) : (
        <p>We,re happy to welcome you between 10:00 - 22:00 :)</p>
      )}
    </footer>
  );
}
