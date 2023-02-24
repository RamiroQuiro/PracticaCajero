import CardCajero from "../../../componente/CardCajero";

export default  function Cajero({params}) {
const {id}=params

  return (
    <div className="text-neutral-700 pt-10 m-0 bg-neutral-100 w-full h-screen mx-auto">

   <CardCajero
   id={id}
   />
    </div>
  );
}
