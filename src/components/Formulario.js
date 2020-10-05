import React, { useState } from 'react';
import PropTypes from "prop-types";

const Formulario = ({guardarBusquedaLetra}) => {

    const [ busqueda, guardarBusqueda ] = useState({
        artista: '',  // este valor lo tomara de la propiedad name de input de artista
        cancion: ''   // este valor lo tomara de la propiedad name de input de cancion
    });

    // Extraemos artista y cancion para colocarlos como values
    const { artista, cancion } = busqueda;

    // state para validar errores 
    const [ error, guardarError ] = useState(false);

    // Creamos una funcion para leer el contenido de cada input
    const actualizarState = e => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    };

    // Consultar las APIs
    const buscarInformacion = e => {
        e.preventDefault();

        // Validacion
        if ( artista.trim() === '' || cancion.trim() === ''){
            guardarError(true);
            return;
        }
        guardarError(false);

        // Si esta todo bien pasamos al componente principal
        guardarBusquedaLetra(busqueda);
    
    }

    return ( 
        <div className="bg-info">
            <div className="container">
                <div className="row">
                    <form
                        className="col card text-white bg-transparent mb-5 pt-5 pb-2"
                        onSubmit={buscarInformacion}
                    >
                        <fieldset>
                            <legend className="text-center">
                                Buscador Letras Canciones
                            </legend>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Artista</label>
                                        <input 
                                            type="text"
                                            className="form-control"
                                            name="artista"
                                            placeholder="Nombre del Artista"
                                            onChange={actualizarState}
                                            value={artista}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Canción</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="cancion"
                                            placeholder="Nombre de la Canción"
                                            onChange={actualizarState}
                                            value={cancion}
                                        />
                                    </div>
                                </div>
                            </div>
                            {error ? <p className="alert alert-danger text-center p-2">Todos los campos son obligatorios</p> : null}
                            <button
                                type="submit"
                                className="btn btn-primary btn-block"
                            >Buscar</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
     );
}

Formulario.propTypes = {
  guardarBusquedaLetra: PropTypes.func.isRequired,
};
 
export default Formulario;