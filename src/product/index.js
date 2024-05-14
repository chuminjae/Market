import { useParams } from "react-router-dom";
function Productpage() {
  const { id } = useParams();
  return <h1>product Page item {id}</h1>;
}
export default Productpage;
