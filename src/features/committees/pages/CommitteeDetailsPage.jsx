import { useParams } from "react-router-dom";

export default function CommitteeDetailsPage() {
  const { id } = useParams();
  return <div>Committee Details Page - {id}</div>;
}