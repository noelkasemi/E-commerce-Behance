import { useState, useEffect } from "react";
import UserFetcher from "../components/partials/data/users";
import UsertList from "../components/partials/main/content3";


export default function Hire() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false); // State to control the visibility of the Form component

  // Function to toggle the visibility of the Form component
  const toggleForm = () => {
    setShowForm(!showForm);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    return (
        <section>
           
            <UserFetcher setData={setData} setError={setError} />
            <UsertList data={data} onHireChange={toggleForm} error={error} />
           
        </section>
    )
}