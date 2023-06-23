import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRoutes } from "react-router-dom";
import { handleUserLoggedIn } from "../redux/Reducer/Auth";
function Route() {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  useEffect(() => {
    dispatch(handleUserLoggedIn(true));

    // eslint-disable-next-line
  }, []);
  const { route } = useSelector((state) => state?.auth);
  const routes = useRoutes(route);

  return <React.Fragment>{routes}</React.Fragment>;
}

export default Route;
