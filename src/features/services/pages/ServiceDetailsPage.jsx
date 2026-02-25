import { useParams } from "react-router-dom";

export default function ServiceDetailsPage() {
  const { id } = useParams();
  return <div>Service Details Page - {id}</div>;
}