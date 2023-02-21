import React, { useEffect, useState } from "react";
import { FiEdit, FiEye, FiMoreVertical, FiTrash2 } from "react-icons/fi";
import AddButton from "../Components/AddButton";
import SideMenu from "../Components/SideMenu";
import { URL_LINK } from "../Helper";

function Clients() {
  const [data, setData] = useState([]);

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
  return (
    <>
      <div className="container-fluid">
        <div className="row m-0">
          <div className="col-lg-2 col-md-2 col-12 p-0">
            <SideMenu />
          </div>
          <div className="col-lg-10 col-md-10 col-12">
            <AddButton title="Add Client" link="/AddClient"/>
            <table className="table">
              <thead className="table-dark sticky-top">
                <tr>
                  <th>#</th>
                  <th>Client Logo</th>
                  <th>Title</th>
                  <th>Upto Offer</th>
                  <th>Description</th>
                  <th>Store Link</th>
                  <th>Updated Time</th>
                  <th>Others</th>
                </tr>
              </thead>
              <tbody>
                {data.map((val, ind) => {
                  const {
                    _id,
                    client_logo,
                    offer_description,
                    price_title,
                    store_link,
                    upto_offer,
                    updatedAt,
                  } = val;
                  return (
                    <tr key={ind}>
                      <td>1</td>
                      <td>
                        <div className="fetch-img">
                          <img src={client_logo} alt="" />
                        </div>
                      </td>
                      <td>{price_title}</td>
                      <td>{upto_offer}</td>
                      <td>{offer_description}</td>
                      <td>{store_link}</td>
                      <td>{updatedAt.slice(0, 10)}</td>
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
                              <a
                                type="button"
                                className="dropdown-item crud"
                                href="#"
                                title="Edit"
                              >
                                <FiEdit />
                              </a>
                            </li>
                            <li>
                              <a
                                type="button"
                                className="dropdown-item crud"
                                href="#"
                                title="View"
                              >
                                <FiEye />
                              </a>
                            </li>
                            <li>
                              <a
                                type="button"
                                className="dropdown-item crud"
                                href="#"
                                title="Delete"
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
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Clients;
