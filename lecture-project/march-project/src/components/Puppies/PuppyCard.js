import { Link } from "react-router-dom";

export default function PuppyCard({ breed }) {
  return (
    <Link to={`/puppies/${breed}`}>
      <div className="puppy-card">
        <h3>{breed}</h3>
      </div>
    </Link>
  )
}