import { useParams } from "react-router-dom";

export default function ProjectDetailsPage() {
  const { id } = useParams();
  return <div>Project Details Page - {id}</div>;
}