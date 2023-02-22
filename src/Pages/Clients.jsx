import React, { useEffect, useState } from "react";
import { FiEdit, FiEye, FiMoreVertical, FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import AddButton from "../Components/AddButton";
import SideMenu from "../Components/SideMenu";
import { FILE_UPLOADS, URL_LINK } from "../Helper";
import Loader from "../Source/Loader";

function Clients() {
  const [data, setData] = useState([]);
  const [valueData, setValueData] = useState([]);
  const [image, setImage] = useState("");
  // console.log(valueData);

  const [loading, setLoading] = useState(true);

  const deleteHandler = (id: any) => {
    fetch(`${URL_LINK}/clients-store/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log("delete ->", result);
        getData();
      });
  };

  const getData = () => {
    fetch(`${URL_LINK}/clients-store`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => {
        setData(result.client_data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const spin = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      clearTimeout(spin);
    };
  }, []);

  const ViewHandler = (id: any) => {
    fetch(`${URL_LINK}/clients-store/${id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => {
        let fetcD = result.client_data;
        setValueData(fetcD);
        // // http://localhost:8000/public/image/
        setImage(`${FILE_UPLOADS}/${fetcD.client_logo}`);
      });
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row m-0">
          <div className="col-lg-2 col-md-2 col-12 p-0">
            <SideMenu />
          </div>
          <div className="col-lg-10 col-md-10 col-12">
            <AddButton title="Add Client" link="/AddClient" />
            <table className="table">
              <thead className="table-dark sticky-top">
                <tr>
                  <th>#</th>
                  <th>Client Logo</th>
                  <th>Title</th>
                  <th>Upto Offer</th>
                  <th>Description</th>
                  <th>Store Link</th>
                  {/* <th>Updated Time</th> */}
                  <th>Others</th>
                </tr>
              </thead>
              {loading ? (
                <Loader />
              ) : (
                <tbody>
                  {data.map((val, ind) => {
                    // console.log(val)
                    const {
                      _id,
                      client_logo,
                      offer_description,
                      price_title,
                      store_link,
                      upto_offer,
                      // updatedAt,
                    } = val;
                    return (
                      <tr key={ind}>
                        <td>1</td>
                        <td>
                          <div className="fetch-img">
                            <img
                              src={`${FILE_UPLOADS}/${client_logo}`}
                              alt=""
                            />
                          </div>
                        </td>
                        <td>{price_title}</td>
                        <td>{upto_offer}</td>
                        <td>{offer_description}</td>
                        <td>{store_link}</td>
                        {/* <td>{updatedAt.slice(0,10)}</td> */}
                        <td className="td-p">
                          <div className="btn-group curd-btn">
                            <button
                              className="btn dropdown-toggle"
                              type="button"
                              id="dropdownMenuButton2"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <FiMoreVertical />
                            </button>
                            <ul
                              className="dropdown-menu dropdown-men"
                              aria-labelledby="dropdownMenuButton2"
                            >
                              <li>
                                <Link
                                  type="button"
                                  className="dropdown-item crud"
                                  to={`/EditClient/${_id}`}
                                  title="Edit"
                                >
                                  <FiEdit />
                                </Link>
                              </li>
                              <li>
                                <a
                                  type="button"
                                  className="dropdown-item crud"
                                  title="View"
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleModal"
                                  onClick={() => ViewHandler(_id)}
                                >
                                  <FiEye />
                                </a>
                              </li>
                              <li>
                                <a
                                  type="button"
                                  className="dropdown-item crud"
                                  title="Delete"
                                  onClick={() => deleteHandler(_id)}
                                >
                                  <FiTrash2 />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              )}
            </table>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h6 className="modal-title" id="exampleModalLabel">
                Client Details
              </h6>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body client-body">
              <div className="body-img">
                <img src={image} alt="" />
              </div>
              <div className="modal-content x-content p-2">
                <div className="text-content">
                  <h4>Title</h4>
                  <h6>{valueData.price_title}</h6>
                </div>
                <div className="text-content">
                  <h4>Upto Offers</h4>
                  <h6>{valueData.upto_offer}</h6>
                </div>
                <div className="text-content">
                  <h4>Description</h4>
                  <h6>{valueData.offer_description}</h6>
                </div>
                <div className="text-content">
                  <h4>Client Link</h4>
                  <h6>{valueData.store_link}</h6>
                </div>
                <div className="text-content">
                  <h4>Update Date</h4>
                  <h6>{valueData.updatedAt}</h6>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <Link to={`/EditClient/${valueData._id}`} type="button" className="btn">
              <FiEdit /> Edit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Clients;

// motion.div
//                                     initial={{ opacity: 0 }}
//                                     animate={{ opacity: 1 }}
//                                     exit={{ opacity: 0 }}
