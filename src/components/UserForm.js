import { useState } from "react";
import "../pages/Pages.css/UserForm.css";

function UserForm() {
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");
  const [priority, setPriority] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newData = { date, message, priority };

    const response = await fetch("/api/user-data", {
      method: "POST",
      body: JSON.stringify(newData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }

    if (response.ok) {
      setError(null);
      setDate("");
      setMessage("");
      setPriority("");
      console.log("new data added", json);
      window.confirm("New data has been added successfully!");
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Message </h3>

      <label>Enter Date:</label>
      <input
        type="text"
        onChange={(e) => setDate(e.target.value)}
        value={date}
      />

      <label>Enter Message:</label>
      <input
        type="text"
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      />

      <label>Enter Priority:</label>
      <input
        type="text"
        onChange={(e) => setPriority(e.target.value)}
        value={priority}
      />

      <button>Add Data </button>
    </form>
  );
}

export default UserForm;
