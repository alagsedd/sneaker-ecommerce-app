import styles from "../styles/Body.module.css";
import minus from "../assets/icons/icon-minus.svg";
import plus from "../assets/icons/icon-plus.svg";
import product2 from "../assets/Gallary/image-product-2.jpg";
import product3 from "../assets/Gallary/image-product-3.jpg";
import product4 from "../assets/Gallary/image-product-4.jpg";
import product5 from "../assets/Gallary/image-product-5.jpg";
import product8 from "../assets/Gallary/sneaker-eight.jpg";
import { useContext, useState } from "react";
import BuyCountContext from "../contexts/BuyCountContext";
import { Button } from "@mui/material";
import { MdOutlineShoppingCart } from "react-icons/md";

const Body = () => {
  const { buyCount, dispatch } = useContext(BuyCountContext);
  const [currentSneaker, setCurrentSneaker] = useState(product8);

  return (
    <main className={styles.main}>
      <div className={styles.sneakerDisplay}>
        <div className={styles.currentSneaker}>
          <img
            src={currentSneaker}
            alt="Your browser doesn't support this image"
            className={styles.currentSneakerImage}
          />
        </div>

        <div className={styles.subSneakers}>
          <img
            onClick={() => setCurrentSneaker(product8)}
            className={styles.subSneakerImage}
            src={product2}
            alt="Your browser doesn't support this image"
          />
          <img
            onClick={() => setCurrentSneaker(product2)}
            className={styles.subSneakerImage}
            src={product2}
            alt="Your browser doesn't support this image"
          />
          <img
            onClick={() => setCurrentSneaker(product3)}
            className={styles.subSneakerImage}
            src={product2}
            alt="Your browser doesn't support this image"
          />
          <img
            onClick={() => setCurrentSneaker(product4)}
            className={styles.subSneakerImage}
            src={product3}
            alt="Your browser doesn't support this image"
          />
          <img
            onClick={() => setCurrentSneaker(product5)}
            className={styles.subSneakerImage}
            src={product3}
            alt="Your browser doesn't support this image"
          />
          <img
            onClick={() => setCurrentSneaker(product2)}
            className={styles.subSneakerImage}
            src={product3}
            alt="Your browser doesn't support this image"
          />
        </div>
      </div>
      <div className={styles.infoBox}>
        <span className={styles.title}>SNEAKER COMPANY</span>
        <h1 className={styles.headerOne}>
          <span>Fall Limited Edition Sneakers</span>
        </h1>

        <p>
          These low-profile sneakers are your perfect casual wear
          companion.Featuring a durable rubber outer sole, they will withstand
          everything the weather can offer.
        </p>

        <div className={styles.pricingBox}>
          <div className={styles.one}>
            <span className={styles.price}>$125.00</span>
            <img
              onClick={() => dispatch({ type: "decreaseBuyCount" })}
              src={minus}
              alt="Your browser doesn't support this image"
            />
          </div>
          <div className={styles.two}>
            <span className={styles.percent}>50%</span>
            <span className={styles.buyCount}>{buyCount}</span>
          </div>
          <div className={styles.three}>
            <span className={styles.cancelled}>$250.00</span>
            <img
              onClick={() => dispatch({ type: "increaseBuyCount" })}
              src={plus}
              alt="Your browser doesn't support this image"
            />
          </div>
        </div>

        <Button
          startIcon={<MdOutlineShoppingCart size="25" />}
          variant="outlined"
        >
          Add to purchase
        </Button>
      </div>
    </main>
  );
};

export default Body;
