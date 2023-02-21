import React from "react";
import SideMenu from "../Components/SideMenu";
import Clients from "./Clients";

function Home() {
  return (
    <>
      <div className="container-fluid">
        <div className="row m-0">
          <div className="col-lg-2 col-md-2 col-12 p-0">
            <SideMenu />
          </div>
          <div className="col-lg-10 col-md-10 col-12">
            <h3>Dashboard</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
