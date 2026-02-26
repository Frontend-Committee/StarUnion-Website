import { useParams } from "react-router-dom";

export default function WorkShopDetailsPage() {
  const { id } = useParams();
  return <div>Workshop Details Page - {id}</div>;
}