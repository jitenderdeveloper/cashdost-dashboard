import React from "react";
import { Oval } from "react-loader-spinner";

function Loader() {
  return (
    <>
      <div className="loader">
        <Oval
          height={40}
          width={40}
          color="#4fa94d"
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#4fa94d"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      </div>
    </>
  );
}

export default Loader;
