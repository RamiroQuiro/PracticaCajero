
import { useFetchQueryCajeroAllCajeros } from "../../services/useFetch";
import ColumnaTablaBodyCajeros from "./ColumnaTablaBodyCajeros";

export default async function TablaCajerosBody() {
  const respuesta = await useFetchQueryCajeroAllCajeros();

  if (!respuesta) {
    return <>{<span>Cargando tabla</span>}</>;
  }

  if (respuesta) {
    return (
      <tbody>
        {respuesta.map((cajero, i) => (
          // tslint:disable-next-line
          <ColumnaTablaBodyCajeros cajero={cajero} key={i} />
        ))}
      </tbody>
    );
  }
  return <div>cargando</div>;
}
