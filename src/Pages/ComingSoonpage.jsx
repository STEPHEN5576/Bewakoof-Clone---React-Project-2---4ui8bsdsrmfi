import React from "react";

function ComingSoonpage() {
  return (
    <div
      className="container-xxl py-3"
      style={{ justifyContent: "center", textAlign: "center", width: "50%" }}
    >
      <div className="misc-wrapper">
        <h2 className="mb-2 mx-2">We are Launching soon</h2>
        <p className="mb-4 mx-2">
          We're creating something awesome. Please subscribe to get notified
          when it's ready!
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="d-flex gap-2">
            <input
              type="email"
              className="form-control"
              placeholder="email"
              autoFocus
              fdprocessdid="4awma"
            />
            <button
              type="submit"
              className="btn btn-primary"
              fdprocessdid="c7mi8g"
            >
              Notify
            </button>
          </div>
        </form>
        <div className="mt-5">
          <img
            src="https://www.socialappbuilder.com/gfba2/assets/img/illustrations/boy-with-rocket-light.png"
            alt="src"
            style={{ width: "500px" }}
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
}

export default ComingSoonpage;
