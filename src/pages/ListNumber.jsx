import "../styles/layout.css";
import ListNumber from "../components/ListNumber";
import Header from "../components/Header";
import Footer from "../components/Footer";
export const ListNumber = () => {
  return (
    <div className="layout">
      <Header />
      <ListNumber />
      <Footer />
    </div>
  );
};

export default ListNumber;