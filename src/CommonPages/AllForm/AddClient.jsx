import React from "react";
import SideMenu from "../../Components/SideMenu";

function AddClient() {
  return (
    <>
      <div className="container-fluid">
        <div className="row m-0">
          <div className="col-lg-2 col-md-2 col-12 p-0">
            <SideMenu />
          </div>
          <div className="col-lg-10 col-md-10 col-12">
            <div className="form-heading mb-4">
              <h3>Add Client Form</h3>
            </div>
            <div className="row p-0">
              <div className="col-lg-8 col-md-8 col-12">
                <div className="form-data">
                  <div className="input-flied">
                    <label>Title</label>
                    <input type="text" name="" />
                  </div>
                  <div className="input-flied">
                    <label>Title</label>
                    <input type="text" name="" />
                  </div>
                  <div className="input-flied">
                    <label>Title</label>
                    <input type="text" name="" />
                  </div>
                  <div className="input-flied">
                    <label>Title</label>
                    <input type="text" name="" />
                  </div>
                  <div className="input-flied">
                    <label>Title</label>
                    <input type="text" name="" />
                  </div>
                  <div className="input-flied">
                    <label>Title</label>
                    <input type="text" name="" />
                  </div>
                  <div className="input-flied submit-btn">
                    <button type="button" className="btn">
                      Add Client Done.
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-12">
                <div className="output-img">
                    <img src="" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddClient;
