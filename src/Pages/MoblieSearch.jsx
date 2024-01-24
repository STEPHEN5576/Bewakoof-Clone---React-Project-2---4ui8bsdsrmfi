import React, { useState } from "react";
import { TfiSearch } from "react-icons/tfi";
import { AiFillCloseCircle } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import "./styles/MoblieSearch.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function MoblieSearch() {
  const navigate = useNavigate();
  const [searchBarClicked, setSearchBarClicked] = useState(true);
  const { clothes, loading, error } = useSelector((state) => state.clothes);
  const [inputValue, setInputvalue] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  const handleSearch = (e) => {
    setInputvalue(e.target.value);
    console.log("input", inputValue);
    const filteredSuggestions = clothes.filter((item) => {
      // const lowerCasedInput = inputValue.toLowerCase();

      return (
        item.name.toLowerCase().includes(inputValue) ||
        (item.color && item.color.toLowerCase().includes(inputValue)) ||
        (item.sellerTag && item.sellerTag.toLowerCase().includes(inputValue)) ||
        (item.subCategory &&
          item.subCategory.toLowerCase().includes(inputValue))
      );
    });
    setSuggestions(filteredSuggestions);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      // Handle the Enter key press
      navigate(`/search/${inputValue}`);
      // setSuggestions([]);
    }
  };
  const handleSearchSubmit = () => {
    navigate(`/search/${inputValue}`);
    // setSuggestions([]);
  };
  const handleValue = () => {
    setInputvalue("");
  };

  return (
    <div className={searchBarClicked ? "searchbox-container" : "hideSearchBar"}>
      <div className="searchbox-btns">
        <TfiSearch id="searchbox-srch-btn" onClick={handleSearchSubmit} />
        <div className="searchbox-input">
          <input
            type="text"
            value={inputValue}
            onChange={handleSearch}
            onKeyDown={handleKeyPress}
          />
        </div>
        <div className="searchbox-closebtn">
          <span onClick={handleValue}>Clear</span>

          <span>
            <AiFillCloseCircle
              onClick={() => {
                setSearchBarClicked(false);
                navigate("/");
              }}
            />
          </span>
        </div>
      </div>

      <div className="searchbox-results">
        <div className="searchbox-results">
          {inputValue &&
            suggestions.map((item) => (
              <div key={item._id}>
                {/* Render the properties of the suggestion object here */}

                <p
                  className="itemname"
                  onClick={() => {
                    navigate(`/Product/${item._id}`);
                  }}
                >
                  {item.name}
                </p>

                {/* Add other properties as needed */}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default MoblieSearch;
