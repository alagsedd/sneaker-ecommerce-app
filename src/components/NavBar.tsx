import styles from "../styles/NavBar.module.css";
import cart from "../assets/icons/icon-cart.svg";
import profile from "../assets/Gallary/image-avatar.png";
import menu from "../assets/icons/icon-menu.svg";
import close from "../assets/icons/icon-close.svg";
import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import BuyCountContext from "../contexts/BuyCountContext";

const NavBar = () => {
  const [displayMenu, setDisplayMenu] = useState(false);
  const [show, setShow] = useState(false);
  const { buyCount } = useContext(BuyCountContext);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {" "}
      <nav className={styles.nav}>
        <div className={styles.menuSneakersTab}>
          <img
            onClick={() => setDisplayMenu(true)}
            src={menu}
            alt="Your browser doesn'tsupport this image"
            className={styles.menu}
          />
          <span className={styles.brandName}>sneakers</span>
        </div>

        <ul className={styles.horizonMenu}>
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className={styles.cartIconTab}>
          <img
            onClick={handleShow}
            src={cart}
            alt="Your browser doesn'tsupport this image"
            className={styles.cartIcon}
          />
          <img
            src={profile}
            alt="Your browser doesn'tsupport this image"
            className={styles.profilePic}
          />
        </div>
      </nav>
      {displayMenu && (
        <ul className={styles.menuList}>
          <li>
            <img
              onClick={() => setDisplayMenu(false)}
              src={close}
              alt="Your browser doesn'tsupport this image"
              className="close"
            />
          </li>
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      )}
      <div className="modalBox">
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Cart</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {buyCount === 0 ? (
              <p>Cart is empty</p>
            ) : (
              <span className={styles.buyCount}>Pending items: {buyCount}</span>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default NavBar;
