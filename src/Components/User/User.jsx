import { useParams } from "react-router-dom";
function User() {
  const { userid } = useParams();
  return <div className="text-center bg-sky-400 py-5 font-semibold text-4xl">user: {userid}</div>;
}
export default User;
