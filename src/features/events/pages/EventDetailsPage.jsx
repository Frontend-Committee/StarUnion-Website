import { useParams } from "react-router-dom";

export default function EventDetailsPage() {
  const { id } = useParams();
  return <div>Event Details Page - {id}</div>;
}