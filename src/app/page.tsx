import Image from "next/image";
import styles from "./page.module.css";
import Footer from "./_Components/footer";
import Header from "./_Components/header";
import AllProducts from "./_Components/all-products";

export default function Home() {
  
  return (
    <div className="root">
      <Header />
      <AllProducts />
      <Footer />
    </div>
  );
}
