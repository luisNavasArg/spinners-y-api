import style from './cards.models.css'
const Cards=({h,index})=>{
   return(
      <div className="text card col-3" key={index} >
              <img src={"https://pruebagcd.herokuapp.com/" + h.ruta} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title bg-info m-5 p-2">{h.nombre}</h5>
                <p className="card-text">{h.info}</p> 
                <p>Servicios</p>
                <ul>
                  {h.servicio.map((i,index) => <li key={index.toString()}>{i}</li>)}
                  <p>Dirección</p>
                  <p>{h.direccion}</p>
                </ul>
                <a href="#" className="btn btn-danger">Ver más</a>
              </div>
            </div>
   )
}
export default Cards