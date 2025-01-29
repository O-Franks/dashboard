import "../pages/Pages.css/userData.css";

const UserData = ({ data }) => {
  return (
    <div className="data-details">
      <h4>{data.date}</h4>
      <p>{data.message}</p>
      <p> {data.priority}</p>
    </div>
  );
};

export default UserData;
