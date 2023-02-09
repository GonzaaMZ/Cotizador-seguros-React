import styled from "@emotion/styled";
import PropTypes from 'prop-types';
import { primerMayuscula } from "../helper";

const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F  ;
    color: #fff;
    margin-top: 1rem;
`

const Resumen = ({resumen}) => {

    const {data} = resumen;

    return ( 
        <ContenedorResumen>
        <h2>Resumen de Cotización</h2>
        <ul>
            <li>Marca: {primerMayuscula(data.marca)}</li>
            <li>Plan: {primerMayuscula(data.plan)}</li>
            <li>Año: {data.year}</li>
        </ul>
        </ContenedorResumen>
     );
}

Resumen.propTypes = {
    datos: PropTypes.object.isRequired,
  }
 
export default Resumen;