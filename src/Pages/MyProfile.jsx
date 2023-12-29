import "./styles/Myprofile.css";
import { TiTick } from "react-icons/ti";
import React, { useEffect, useState } from "react";
import Model2 from "../components/Model2";
function MyProfile() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [dob, setDob] = useState("");
  const [show, setShow] = useState(false);
  const [gender, setGender] = useState("male"); // Default value

  useEffect(() => {
    // Fetch values from local storage
    const storedFirstName = localStorage.getItem("name") || "";
    const storedLastName = localStorage.getItem("lastName") || "";
    const storedEmail = localStorage.getItem("Email") || "";
    const storedMobile = localStorage.getItem("mobile") || "";
    const storedDob = localStorage.getItem("dob") || "";

    // Set state with retrieved values
    setFirstName(storedFirstName);
    setLastName(storedLastName);
    setEmail(storedEmail);
    setMobile(storedMobile);
    setDob(storedDob);
  }, []);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Save updated values to local storage

    // localStorage.setItem("firstName", firstName);
    // localStorage.setItem("lastName", lastName);
    // localStorage.setItem("email", email);
    // localStorage.setItem("mobile", mobile);
    // localStorage.setItem("dob", dob);
  };
  const handleClose = () => {
    setShow(false);
  };

  const handleClick = () => {
    setShow(true);
  };

  return (
    <>
      <Model2 show={show} handleClose={handleClose} />
      <div className="container profilePage">
        <div className="container custmPadding myaccHeader  undefined">
          <div className="backtoListing hidden-xs">
            <a id="testBackToList">
              <span>
                <i className="icon_previous"></i>
                Back to my account
              </span>
            </a>
            <div className="websiteMyacTitle">
              <div>My Profile</div>
              <hr />
            </div>
          </div>
          <div className="websiteMyacTitle"></div>
        </div>
        <div className="custmPadding clearfix">
          <form action="" className="accProfileForm" onSubmit={handleSubmit}>
            <div id="form">
              <div class="col-xs-12 col-sm-6 noPd">
                <div class="xgroup">
                  <input
                    type="text"
                    name="fname"
                    maxlength="71"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <span class="bar"></span>
                  <label>First Name</label>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 noPdRight noPdXs">
                <div class="xgroup">
                  <input type="text" name="lname" value="" />
                  <span class="bar"></span>
                  <label>Last Name</label>
                </div>
              </div>
            </div>

            <div class="xgroup">
              <input type="email" name="email" readonly="" value={email} />
              <span class="bar"></span>
              <label for="email">Email Id</label>
            </div>

            <div class="col-xs-12 col-sm-6 noPd">
              <div class="xgroup" style={{ marginBottom: "60px" }}>
                <input
                  readonly=""
                  value="******"
                  style={{ letterSpacing: "2px" }}
                />
                <span class="bar"></span>
                <label>Password</label>
                <a
                  class="inputHelp"
                  aria-current="false"
                  // href="#ChangePassword" 
                  onClick={handleClick}
                >
                  Change Password
                </a>
              </div>
            </div>

            <div class="col-xs-12 col-sm-6 noPd clearLeft">
              <div class="xgroup verifyPhoneInput veryfyMobileOuter">
                <input
                  type="tel"
                  name="mobile"
                  maxlength="10"
                  readonly=""
                  value="0000000000"
                />
                <span class="bar"></span>

                <label for="mobile">Phone Number</label>
                <div class="verifyMobileBox veryfyMobile">
                  <p>
                    <i class="icon_tick">
                      <TiTick />
                    </i>
                  </p>
                </div>
                <div class="inputHelp" style={{ cursor: "pointer" }}>
                  Change Mobile Number
                </div>
              </div>
            </div>

            <div class="xgroup" style={{ marginRight: "60px" }}>
              <input
                class=""
                type="date"
                name="date_of_birth"
                id="DD/MM/YYYY"
                value=""
                style={{
                  textTransform: "uppercase",
                  fontSize: "12px",
                  whiteSpace: "nowrap",
                  height: "25px",
                }}
              />
              <span class="bar"></span>
              <span class="msgs">
                <div style={{ marginBottom: "10px" }}>
                  <span
                    class="msgs"
                    style={{
                      whiteSpace: "pre-wrap",
                      position: "unset",
                      fontSize: "10px",
                    }}
                  >
                    Share your DOB to get special gifts on the 1st day of your
                    birthday month
                  </span>
                </div>
              </span>
            </div>

            <div class="genderTabBox clearfix">
              <span class="addrTypeTitle">Gender</span>
              <div class="addrTypeList">
                <div class="addrSubType">
                  <input type="radio" name="gender" id="male" value="male" />
                  <label for="male" class="">
                    Male
                  </label>
                </div>
                <div class="addrSubType">
                  <input
                    type="radio"
                    name="gender"
                    id="female"
                    value="female"
                  />
                  <label for="female" class="">
                    Female
                  </label>
                </div>
                <input type="hidden" value="" />
              </div>
            </div>
            <div class="wtsapp-tgl">
              <div class="selectCheckbox selectCustomCheckbox selectCheckbox-blue ">
                <input type="radio" checked="" style={{ opacity: "0.9" }} />
                <label></label>
              </div>
              <span>I want to receive order updates on Whatsapp</span>
            </div>
            <button type="submit" class="submit">
              SAVE CHANGES
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default MyProfile;
