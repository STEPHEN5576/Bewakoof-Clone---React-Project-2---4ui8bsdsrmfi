import React, { useState, useEffect } from "react";
import styles from "./styles/Navbar.module.css";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { connect } from "react-redux";
import { BsHeart, BsBagCheck } from "react-icons/bs";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { useDispatch, useSelector } from "react-redux";
import { Store } from "../../Store";
import { AUTH_SIGN_OUT } from "../../Store/auth/auth.types";
import { setInputValue } from "../../Store/searchState/search.action";
import { fetchClothes } from "../../Store/SearchCatagories/Clothes.actions";

// import SearchSection from "./SearchSect/SearchSection";
const Navabar = ({ inputValue, updateInputValue }) => {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.auth.data);
  // const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const [suggestions, setSuggestions] = useState([]);

  const { clothes, loading, error } = useSelector((state) => state.clothes);
  console.log("datadd", clothes);

  const handleLoginClick = () => {
    if (isAuthenticated) {
      dispatch({
        type: AUTH_SIGN_OUT,
      });
    } else {
      navigate("/login");
    }
    console.log(Store.getState());
  };

  const handleSearch = (e) => {
    updateInputValue(e.target.value);
    console.log("input", inputValue);
    const filteredSuggestions = clothes.filter((item) =>
      item.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
  };

  const handleSelectSuggestion = (selectedItem, selectedItemId) => {
    // Set the selected suggestion as the input value
    updateInputValue(selectedItem);
    // Clear suggestions
    setSuggestions([]);
    updateInputValue("");
    navigate(`/Product/${selectedItemId}`);
  };

  console.log("inputvalue", inputValue);

  useEffect(() => {
    const url =
      "https://academics.newtonschool.co/api/v1/ecommerce/clothes/products";
    dispatch(fetchClothes(url));
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <div style={{ backgroundColor: "#eeeeee" }}>
        <div className={styles.upper}>
          <div className={styles.one}>
            <li>Offers</li>
            <li>Fanbook</li>
            <li>Download App</li>
            <li>TriBe Membership</li>
          </div>
          <div className={styles.two}>
            <li>Contact Us</li>
            <li>Track Order</li>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "white",
          borderBottom: "1px solid",
          height: "60px",
          paddingTop: "15px",
          display: "flex",
          alignContent: "center",
          // justifyContent: "space-between",
        }}
      >
        <div className={styles.bottom}>
          <Navbar bg="white" expand="lg">
            <Container fluid>
              <Nav
                className={`me-auto my-2 my-lg-0 ${styles.navlinks}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                }}
                navbarScroll
              >
                <Navbar.Brand onClick={() => navigate("/")}>
                  <img
                    className={styles.logo}
                    src="https://images.bewakoof.com/web/ic-desktop-normal-bwkf-logo.svg"
                    alt=""
                    style={{ display: "flex", alignItems: "center" }}
                  />
                </Navbar.Brand>
                {/* <Navbar.Toggle aria-controls="navbarScroll" /> */}
                <Navbar.Collapse
                  id="navbarScroll"
                  style={{
                    display: "flex",
                    alignContent: "baseline",
                    marginBottom: "10px",
                    justifyContent: "space-between",
                    width: "70%",
                  }}
                >
                  {/* <Nav
                  className={`me-auto my-2 my-lg-0 ${styles.navlinks}`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                  navbarScroll
                > */}
                  <Nav.Link
                    className={styles.navlinks}
                    style={{
                      marginRight: "22px",
                      //  marginLeft: "20%"
                    }}
                    onClick={() => navigate("/mens")}
                  >
                    Men
                  </Nav.Link>
                  <Nav.Link
                    className={styles.navlinks}
                    style={{ marginRight: "22px" }}
                    onClick={() => navigate("/womens")}
                  >
                    Women
                  </Nav.Link>
                  <Nav.Link
                    className={styles.navlinks}
                    style={{ marginRight: "22px" }}
                  >
                    Mobile Covers
                  </Nav.Link>
                  <Form className={styles.Search}>
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                      style={{ alignContent: "center" }}
                      onChange={handleSearch}
                    />
                    {/* Display suggestions */}
                    {suggestions.length > 0 && (
                      <ul className={styles.suggestionsList}>
                        {suggestions.map((item, index) => (
                          <li
                            key={index}
                            onClick={() =>
                              handleSelectSuggestion(item.name, item._id)
                            }
                          >
                            {item.name}
                          </li>
                        ))}
                      </ul>
                    )}
                  </Form>

                  <Nav.Link
                    className={`${styles.navlinks} ms-auto`}
                    style={{ marginRight: "21px" }}
                    onClick={handleLoginClick}
                  >
                    {isAuthenticated ? "Logout" : "Login"}
                  </Nav.Link>
                  <Nav.Link className={styles.navlinks}>
                    <BsHeart
                      style={{ fontSize: "25px", marginRight: "22px" }}
                    />
                  </Nav.Link>
                  <Nav.Link className={styles.navlinks}>
                    <BsBagCheck
                      style={{
                        fontSize: "25px",
                        marginBottom: "5px",
                        marginRight: "22px",
                      }}
                      onClick={() => navigate("/cart")}
                    />
                  </Nav.Link>
                  <Nav.Link>
                    <img
                      className={styles.flag}
                      src="https://media.istockphoto.com/vectors/flag-of-india-vector-id519611160?k=20&m=519611160&s=170667a&w=0&h=JOCO7AChggIcda8uslrXXXt90mL6gylVXZVu-RipZxg="
                      alt=""
                      style={{
                        fontSize: "25px",
                        marginBottom: "5px",
                      }}
                    />
                  </Nav.Link>
                </Navbar.Collapse>
              </Nav>
            </Container>
          </Navbar>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  inputValue: state.search.inputValue,
});

const mapDispatchToProps = {
  updateInputValue: setInputValue,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navabar);
