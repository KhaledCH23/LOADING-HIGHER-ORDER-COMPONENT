import React from "react";
import Spinner from "react-spinner";
function WithLoading(Component) {
  return function WihLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return <Spinner className="react-spinner" />;
  };
}
export default WithLoading;
