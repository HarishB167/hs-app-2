import React from "react";
import { useRouteError } from "react-router-dom";

function NotFound(props) {
  const error = useRouteError();
  console.error(error);
  return (
    <div>
      Not Found
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

export default NotFound;
