import React, { useEffect, useState } from "react";
import { FiArrowUpLeft, FiCheckCircle } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import SideMenu from "../../Components/SideMenu";
import { FILE_UPLOADS, URL_LINK } from "../../Helper";

function AddClient() {

  const nevigate = useNavigate()

  const [title, setTitle] = useState('')
  const [offers, setOffers] = useState('')
  const [file, setFile] = useState('')
  const [link, setLink] = useState('')
  const [description, setDescription] = useState('')

  const [image, setImage] = useState()
  // console.log(image);
  


  
  function postData(){
      // const allData = {title:title, offers:offers, file:file, link:link, description:description}  
      // console.log(allData) 
      const formData = new FormData();
      formData.append('price_title', title)
      formData.append('upto_offer', offers)
      formData.append('file', file)
      formData.append('store_link', link)
      formData.append('offer_description', description)

      fetch(`${URL_LINK}/clients-store`,{
        method:'POST',
        body:formData
      }).then((res) => res.json())
      .then((result) => {
        // console.log("Add clients ->",result)
        let fetcD = result.client_data;
        // // http://localhost:8000/public/image/
        setImage(`${FILE_UPLOADS}/${fetcD.client_logo}`)
        // setImage(" ")
        nevigate('/Clients')
      })
    }


  // useEffect(() =>{
  //   postData()
  // },[])

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
                    <input type="text" name="" onChange={(e) => setTitle(e.target.value)} />
                  </div>
                  <div className="input-flied">
                    <label>Upto Offers</label>
                    <input type="text" name="" onChange={(e) => setOffers(e.target.value)} />
                  </div>
                  <div className="input-flied">
                    <label>Client Logo</label>
                    <input type="file" name="" onChange={(e) => setFile(e.target.files[0])} />
                  </div>
                  <div className="input-flied">
                  <label>Client Link</label>
                    <input type="text" name="" onChange={(e) => setLink(e.target.value)} />
                  </div>
                  <div className="input-flied textarea">
                    <label>Description</label>
                    <textarea name="" id="" cols="30" rows="5" onChange={(e) => setDescription(e.target.value)}></textarea>
                  </div>
                  <div className="input-flied submit-btn">
                    <Link to="/Clients" type="button" className="btn"><FiArrowUpLeft />  Move Back</Link>
                    <button type="button" className="btn" onClick={postData}>
                     <FiCheckCircle /> Add Client Done.
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-12">
                <div className="output-img">
                    <img src={image} alt="" />
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
