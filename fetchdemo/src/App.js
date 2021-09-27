import { useEffect, useState } from "react";
import "./App.css";
import UserCard from "./UserCard";

function App() {
  //https://reqres.in/api/users --- the URL

  const [data, setData] = useState([]);

  useEffect(() => {
    //Fetch the data here on screen load
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="App">
      {data?.length > 0 &&
        data.map((user) => {
          //pass the object in a prop "cardDetails"
          return <UserCard cardDetails={user} />;
        })}
    </div>
  );
}

export default App;
