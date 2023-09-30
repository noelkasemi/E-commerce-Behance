// UserList.js
import Article3 from "./article3";
import Form from "./form";
import { useState, useEffect, useRef, useCallback } from "react";

function UserList({ data, error }) {
  const [showForm, setShowForm] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const formRef = useRef(null);

  // Define toggleForm using useCallback
  const toggleForm = useCallback((user) => {
    setSelectedUser(user); // Set the selected user
    setShowForm(!showForm);
  }, [showForm]);

  // Define handleCloseForm using useCallback
  const handleCloseForm = useCallback(() => {
    setShowForm(false);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        formRef.current &&
        !formRef.current.contains(event.target) &&
        showForm
      ) {
        handleCloseForm();
      }
    };
 
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showForm, handleCloseForm]);

  const scrollToTheTop = () => {
    window.scrollTo(0, 0)
  }

  return (<>
   <h1 className="my-4 mt-16 text-center text-6xl font-bold">Hire your favorite Freelancer</h1>
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-8 pt-4 sm:pt-4 xs:px-12 px-6">
     
      {error ? (
        <p>{error}</p>
      ) : (
        data.map((user) => (
          <Article3
          onScroll={scrollToTheTop}
            onHireChange={() => toggleForm(user)}
            key={user.id}
            city={user.address.city}
            profileImgSrc={user.profileImageUrl}
            coverImgSrc={user.coverImageUrl}
            firstname={user.name.firstname}
            lastname={user.name.lastname}
          />
        ))
      )}
      {showForm && selectedUser ? (
        <Form ref={formRef} profileImgSrc={selectedUser.profileImageUrl} onClose={handleCloseForm} userName={selectedUser.username} />
      ) : null}
    </section>
    </>
  );
}

export default UserList;
