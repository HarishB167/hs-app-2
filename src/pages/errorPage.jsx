import { Flex } from "@chakra-ui/react";
import React from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

function ErrorPage(props) {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <Flex m="10px" flexDir="column" alignItems="center">
        <h1>Oops!</h1>
        <h2>{error.status}</h2>
        <p>{error.statusText}</p>
        {error.data?.message && <p>{error.data.message}</p>}
      </Flex>
    );
  } else {
    return <div>Oops</div>;
  }
}

export default ErrorPage;
