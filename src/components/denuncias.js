
import React, { useEffect, useState } from "react";
import { db } from '../firebase';
import { Link } from "react-router-dom";
//  import {
//     firebase,
//     auth,
//     db,
//     storage
//  } from '../firebase';
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Denuncias = () => {

    const [denuncias, setDenuncias] = useState([]);
    const [currentId, setCurrentId] = useState("");

    const getDenuncias = async () => {

        db.collection("Denuncias").onSnapshot((querySnapshot) => {
          const docs = [];
          querySnapshot.forEach((doc) => {
            docs.push({ ...doc.data(), id: doc.id });
          });
          setDenuncias(docs);
        });
      };

      useEffect(() => {
        getDenuncias();
      }, []);
    //   const notify = () => toast("Wow so easy!");

      const addOrEditLink = async (linkObject) => {
         
        // toast("New Link Added", {
        //     type: "success",
        //   });
        //     if (currentId === "") {}
        // try {
            
        //     await db.collection("links").doc().set(linkObject);
        //     toast("New Link Added", {
        //       type: "success",
        //     });
        //   } else {
        //     await db.collection("links").doc(currentId).update(linkObject);
        //     toast("Link Updated Successfully", {
        //       type: "info",
        //     });
        //     setCurrentId("");
        //   }
        // } catch (error) {
        //   console.error(error);
        // }
      };
    
  return (
    <div className="container py-5">
      <div className="card">
          <div className="card-header container p-3">
          <h5 className=" text-start fw-bold m-0 ">Listado de las denuncias recibidas</h5>
          </div>
        <div className="card-body">
          <section className="w-100 p-4">
            <table className="table datatable-table">
              <thead className="datatable-header">
                <tr >
                  <td  align= "left" className="fw-bold" >
                    <i                      data-mdb-sort="name"
                      className="datatable-sort-icon fas fa-arrow-up"
                    ></i>{" "}
                    Name
                  </td>
                  <td align="left"  className="cursor-active fw-bold">
                    <i
                      data-mdb-sort="date"
                      className="datatable-sort-icon fas fa-arrow-up"
                    ></i>{" "}
                    Fecha
                  </td>
                  <td   className="cursor-active fw-bold" >
                    {" "}
                  </td>
                </tr>
              </thead>
              <tbody className="datatable-body">
                  {denuncias.map((d)=>(
                    <tr  data-mdb-index="0" key={d.id}>
                        <td  className="" align="left" data-mdb-field="name" false="">
                        {d.descripcion}
                        </td>
                        <td  className="" align="left" data-mdb-field="date" false="">
                        {d.fecha}
                        </td>
                        <td  className="" data-mdb-field="salary" false="">
                          <Link to={`/denuncias/${d.id}`}>
                          <i className="cursor-active fas fa-eye"></i>
                          {/* <i className="cursor-active fas fa-eye" onClick={() => {setCurrentId(d.id);addOrEditLink();}}></i> */}
                          </Link>
                        </td>
                    </tr>
                  )
                  )}
              </tbody>
            </table>
            <nav aria-label="Page navigation example">
            <ul className="pagination">
                <li className="page-item"><a className="page-link" href="/">Anterior</a></li>
                <li className="page-item"><a className="page-link" href="/">1</a></li>
                <li className="page-item"><a className="page-link" href="/">2</a></li>
                <li className="page-item"><a className="page-link" href="/">3</a></li>
                <li className="page-item"><a className="page-link" href="/">Siguiente</a></li>
            </ul>
            </nav>
          </section>

        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
export default Denuncias;
