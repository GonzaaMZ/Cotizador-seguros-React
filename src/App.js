import styled from "@emotion/styled";
import { useState } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import Resultado from "./components/Resultado";
import Resumen from "./components/Resumen";
import Spinner from "./components/Spinner";

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
  background-color: #fff;
  padding: 3rem;
`;

function App() {
  const [resumen, setResumen] = useState({
    cotizacion: 0,
  });

  const [cargando, setCargando] = useState(false);

  const { data, cotizacion } = resumen;

  return (
    <Contenedor>
      <Header titulo="Cotizador de Seguros " />

      <ContenedorFormulario>
        <Formulario setResumen={setResumen} setCargando={setCargando} />

        {cargando ? <Spinner /> : null}

        {data ? <Resumen resumen={resumen} /> : null}

        {!cargando ? <Resultado cotizacion={cotizacion} /> : null}
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
