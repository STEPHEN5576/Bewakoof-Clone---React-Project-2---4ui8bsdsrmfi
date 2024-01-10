import React from "react";
import { Link } from "react-router-dom";
import "./styles/Myprofile.css";
import { useNavigate } from "react-router-dom";
import OdersCard from "../components/OderCom/OdersCard";
function Oder() {
  const navigate = useNavigate();
  return (
    <div className="container profilePage">
      <div className="container custmPadding myaccHeader  undefined">
        <div className="backtoListing hidden-xs">
          <a
            id="testBackToList"
            onClick={() => {
              navigate("/myAccount");
            }}
          >
            <span>
              <i className="icon_previous">
                <svg
                  stroke="currentColor"
                  fillRule="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  className="w-4 h-4 object-cover"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                  ></path>
                </svg>
              </i>
              Back to my account
            </span>
          </a>
          <div className="websiteMyacTitle">
            <div>My Orders</div>
            <hr />
          </div>
        </div>
        <div className="websiteMyacTitle"></div>
      </div>
      <div className="custmPadding clearfix">
        <OdersCard />
      </div>
    </div>
  );
}

export default Oder;
