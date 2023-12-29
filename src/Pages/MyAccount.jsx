import React from "react";
import "./styles/MyAccount.css";
import { MdNavigateNext } from "react-icons/md";
import { useNavigate } from "react-router";
useNavigate;
function MyAccount() {
  const navigate = useNavigate();
  return (
    <div className="containerHeight">
      <div className="container custmPadding myaccHeader  undefined">
        <div className="backtoListing hidden-ls">
          <div className="websiteMyacTitle">
            <div>My Account</div>
            <hr />
          </div>
        </div>
        <div className="maHead visible-ls">
          <a className="icon_previous"></a>
        </div>
      </div>
      <div className="myaccBox" style={{ marginBottom: "0rem" }}>
        <div className="accOptionsBox">
          <div className="container custmPadding">
            <div className="clearfix accOptions">
              <div
                className="accOptionsInner"
                onClick={() => {
                  navigate("/comingsoon");
                }}
              >
                <a aria-current="false" id="testMyOrders">
                  <div id="acc">
                    <span className="accHead">My Orders</span>
                    <i className="icon_next">
                      <MdNavigateNext />
                    </i>
                  </div>
                  <span className="accNote">View, modify and track orders</span>
                </a>
              </div>
              <div className="accOptionsInner">
                <a
                  aria-current="false"
                  id="testMyOrders"
                  onClick={() => {
                    navigate("/comingsoon");
                  }}
                >
                  <div id="acc">
                    <span className="accHead">My Payment</span>
                    <i className="icon_next">
                      <MdNavigateNext />
                    </i>
                  </div>
                  <span className="accNote">
                    View, modify and Payment methods
                  </span>
                </a>
              </div>
              <div className="accOptionsInner">
                <a
                  aria-current="false"
                  id="testMyOrders"
                  onClick={() => {
                    navigate("/comingsoon");
                  }}
                >
                  <div id="acc">
                    <span className="accHead">My Wallet</span>
                    <i className="icon_next">
                      <MdNavigateNext />
                    </i>
                  </div>
                  <span className="accNote">
                    bewakoof Wallet History and redeemed gift cards
                  </span>
                </a>
              </div>
              <div className="accOptionsInner">
                <a
                  aria-current="false"
                  id="testMyOrders"
                  onClick={() => {
                    navigate("/comingsoon");
                  }}
                >
                  <div id="acc">
                    <span className="accHead">My Address</span>
                    <i className="icon_next">
                      <MdNavigateNext />
                    </i>
                  </div>
                  <span className="accNote">Edit, add or remove address</span>
                </a>
              </div>
              <div className="accOptionsInner">
                <a
                  aria-current="false"
                  id="testMyOrders"
                  onClick={() => {
                    navigate("/myProfile");
                  }}
                >
                  <div id="acc">
                    <span className="accHead">My Profile</span>
                    <i className="icon_next">
                      <MdNavigateNext />
                    </i>
                  </div>
                  <span className="accNote">
                    Edit personal info, change password
                  </span>
                </a>
              </div>
            </div>
            <div className="clearfix accOptions">
              <div className="accOptionsInner">
                <a aria-current="false" id="testMyOrders">
                  <div id="acc">
                    <span className="accHead">Refer and Earn</span>
                    <i className="icon_next">
                      <MdNavigateNext />
                    </i>
                  </div>
                  <span className="accNote">
                    Invite your friends and earn rewards
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="emptyAccBox">
          <div className="container custmPadding">
            <div className="emptyAccText">
              <h3>Buy something to get personalised recommendations.</h3>
              <a
                onClick={() => {
                  navigate("/");
                }}
                className="continueShoppingBtn"
              >
                Continue Shopping
              </a>
              <img
                src="https://images.bewakoof.com/web/empty-account-1530180452.png"
                alt=""
                className="emptyMobImg"
              />
              {/* <img
                src="https://images.bewakoof.com/web/empty-account-mob-1530180454.png"
                alt=""
                className="emptyMobImg"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyAccount;
