import React, { useEffect } from "react";
import { getOrder } from "../../Store/State/action";
import { useDispatch, useSelector } from "react-redux";

function OdersCard() {
  const dispatch = useDispatch();
  const {orders} = useSelector((state) => {
    console.log("Full state", state);
    return state.states;
  });

  console.log("orders", orders);

  // if (error) {
  //   // Handle error state, show an error message or take appropriate action
  //   console.log("error", error);
  // }

  useEffect(() => {
    dispatch(getOrder());
  }, [dispatch]);

  return <div>OdersCard</div>;
}

export default OdersCard;
