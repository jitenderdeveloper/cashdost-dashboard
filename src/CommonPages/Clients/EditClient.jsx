import React, { useEffect, useState } from "react";
import { FiArrowUpLeft, FiCheckCircle } from "react-icons/fi";
import { Link, useNavigate, useParams } from "react-router-dom";
import SideMenu from "../../Components/SideMenu";
import { FILE_UPLOADS, URL_LINK } from "../../Helper";

function EditClient() {
  const nevigate = useNavigate();
  const params = useParams()
  // console.log(params);
  

  const [title, setTitle] = useState("");
  const [offers, setOffers] = useState("");
  const [file, setFile] = useState("");
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");

  const [image, setImage] = useState("");
  // console.log(file);

  const updateData = () => {
    // const allData = {title:title, offers:offers, file:file, link:link, description:description}
    // console.log(allData)
    const formData = new FormData();
    formData.append("price_title", title);
    formData.append("upto_offer", offers);
    formData.append("file", file);
    formData.append("store_link", link);
    formData.append("offer_description", description);

    fetch(`${URL_LINK}/clients-store/${params.id}`, {
      method: "PUT",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log("Add clients ->",result)
        let fetcD = result.client_data;
        // // http://localhost:8000/public/image/
        setImage(`${FILE_UPLOADS}/${fetcD.client_logo}`);
        // setImage(" ")
        nevigate("/Clients");
      });
  }


  const getData = () => {
    fetch(`${URL_LINK}/clients-store/${params.id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log(result);
        const {offer_description, price_title, store_link, upto_offer, client_logo} = result.client_data;
        // setImage(`${FILE_UPLOADS}/${client_logo}`);
        setTitle(price_title)
        setOffers(upto_offer)
        setFile(`${FILE_UPLOADS}/${client_logo}`)
        setLink(store_link)
        setDescription(offer_description)
      });
  };

  useEffect(() => {
    getData();
  }, []);

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
                    <input
                      type="text"
                      name=""
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                  <div className="input-flied">
                    <label>Upto Offers</label>
                    <input
                      type="text"
                      name=""
                      value={offers}
                      onChange={(e) => setOffers(e.target.value)}
                    />
                  </div>
                  <div className="input-flied">
                    <label>Client Logo</label>
                    <input
                      type="file"
                      name=""
                      // value={`${FILE_UPLOADS}/${file}`}
                      // value={image}
                      onChange={(e) => setFile(e.target.files[0])}
                    />
                  </div>
                  <div className="input-flied">
                    <label>Client Link</label>
                    <input
                      type="text"
                      name=""
                      value={link}
                      onChange={(e) => setLink(e.target.value)}
                    />
                  </div>
                  <div className="input-flied textarea">
                    <label>Description</label>
                    <textarea
                      name=""
                      id=""
                      value={description}
                      cols="30"
                      rows="5"
                      onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                  </div>
                  <div className="input-flied submit-btn">
                    <Link to="/Clients" type="button" className="btn">
                      <FiArrowUpLeft /> Move Back
                    </Link>
                    <button type="button" className="btn" onClick={updateData}>
                      <FiCheckCircle /> Update Data.
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-12">
                <div className="output-img edit-file">
                  <img src={file} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditClient;
