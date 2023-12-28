import React from "react";
import "./styles/Myprofile.css";
function MyProfile() {
  return (
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
        <form action="" className="accProfileForm">
          <div id="form">
            <div class="col-xs-12 col-sm-6 noPd">
              <div class="xgroup">
                <input
                  type="text"
                  name="fname"
                  maxlength="71"
                  value="Stephen"
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
            <input
              type="email"
              name="email"
              readonly=""
              value="stephengabriel777@gmail.com"
            />
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
              <a class="inputHelp" aria-current="false" href="#ChangePassword">
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
                value="7090006912"
              />
              <span class="bar"></span>
              <span class="countryCode">
                +91<span>|</span>
              </span>
              <label for="mobile">Phone Number</label>
              <div class="verifyMobileBox veryfyMobile">
                <p>
                  <i class="icon_tick"></i>
                </p>
              </div>
              <div class="inputHelp" style={{ cursor: "pointer" }}>
                Change Mobile Number
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default MyProfile;
{
  /*   <div class="custmPadding clearfix">
  // <form name="profileForm" class="accProfileForm" autocomplete="off" novalidate="">
  <
  div class="col-xs-12 col-sm-6 noPd"><div class="xgroup"><input type="text" name="fname" maxlength="71" value="Stephen"><span class="bar"></span><label>First Name</label></div></div>
  
  <div class="col-xs-12 col-sm-6 noPdRight noPdXs"><div class="xgroup"><input type="text" name="lname" value=""/><span class="bar"></span><label>Last Name</label></div></div>

  <div class="xgroup"><input type="email" name="email" readonly="" value="stephengabriel777@gmail.com"/><span class="bar"></span><label for="email">Email Id</label></div>
  
  <div class="col-xs-12 col-sm-6 noPd"><div class="xgroup" style="margin-bottom: 60px;"><input readonly="" value="******" style="letter-spacing: 2px;" /><span class="bar"></span><label>Password</label><a class="inputHelp" aria-current="false" href="#ChangePassword">Change Password</a></div></div>
  
  <div class="col-xs-12 col-sm-6 noPd clearLeft"><div class="xgroup verifyPhoneInput veryfyMobileOuter"><input type="tel" name="mobile" maxlength="10" readonly="" value="7090006912" /><span class="bar"></span><span class="countryCode">+91<span>|</span></span><label for="mobile">Phone Number</label><div class="verifyMobileBox veryfyMobile"><p><i class="icon_tick"></i></p></div><div class="inputHelp" style="cursor: pointer;">Change Mobile Number</div></div></div>
  
  <div class="xgroup" style="margin-bottom: 60px;"><input class="" type="date" name="date_of_birth" id="DD/MM/YYYY" value="" style="text-transform: uppercase; font-size: 12px; white-space: nowrap; height: 25px;" /><span class="bar"></span><span class="msgs"><div style="margin-bottom: 10px;"><span class="msgs" style="white-space: pre-wrap; position: unset; font-size: 10px;">Share your DOB to get special gifts on the 1st day of your birthday month</span></div></span></div><div class="genderTabBox clearfix"><span class="addrTypeTitle">Gender</span><div class="addrTypeList"><div class="addrSubType"><input type="radio" name="gender" id="male" value="male" /><label for="male" class="">Male</label></div><div class="addrSubType"><input type="radio" name="gender" id="female" value="female" /><label for="female" class="">Female</label></div><input type="hidden" value="" /></div></div><div class="wtsapp-tgl"><div class="selectCheckbox selectCustomCheckbox selectCheckbox-blue "><input type="radio" checked="" style="opacity: 0;" /><label></label></div><span>I want to receive order updates on Whatsapp</span></div><button type="submit" class="submit">SAVE CHANGES</button></form></div>
       </div> */
}
