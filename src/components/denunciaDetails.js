import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { useParams } from "react-router-dom";
const DenunciasDetails = () => {
  const { id } = useParams();

  const [denuncia, setDenuncia, tipo, setTipo] = useState([]);
  const getDenuncia = async () => {
    db.collection("Denuncias")
      .doc(id)
      .get()
      .then((snapshot) => setDenuncia(snapshot.data()));
  };

  // const getDenuncia = async () => {
  //     db.collection("Denuncias").onSnapshot((querySnapshot) => {
  //       const docs = [];
  //       console.log(querySnapshot);
  //       querySnapshot.forEach((doc) => {
  //         docs.push({ ...doc.data(), id: doc.id });
  //       });
  //       setDenuncia(docs);
  //     });
  //   };

  useEffect(() => {
    getDenuncia();
  }, []);
  console.log(tipo);
  return (
    <div className="container">
      <div className="card px-4 py-4">
        <div className="row ">
          <div className="col-1">
            <img
              src={denuncia.user_image}
              className="rounded-circle"
              width="75"
            />
          </div>
          <div className="col-11">
            <div className="row ">
            <div className="col-2">
            <h4 className="my-0">
              {denuncia.user_name}
            </h4>
           
            </div>
            <div className="col-10">
            <div className="float-end">
            <span>{denuncia.fecha} </span>
            <span>{denuncia.hora}</span>
            </div>
            </div>
            </div>
          </div>
        </div>
        <p className="card-text float-start">{denuncia.descripcion}</p>
        <img src={denuncia.image} className="rounded float-center" height="600" />
        <form className="my-3" action="">
          
          <textarea className="form-control" type="text" multiple="true" />

          <button type="submit" className="btn btn-primary my-3 float-end">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};
export default DenunciasDetails;
