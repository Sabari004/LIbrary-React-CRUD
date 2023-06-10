import axios from "axios";
import "../styles/ViewComponent.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
export default function ViewComponent() {
  const location = useLocation();
  const [value, setValue] = useState();
  useEffect(() => {
    axios
      .get(`http://localhost:8080/book/id/${location.state.id}`)
      .then((res) => {
        setValue(res.data);
        console.log(value);
      });
  }, []);
  return (
    <>
      {value && (
        <center>
          <img src={value.imageUrl}></img>
          <h5>Event id : {value.id}</h5>
          <h5>Event name : {value.name}</h5>
          <h5>Book author : {value.author}</h5>
          <h5>Book topic : {value.topic}</h5>
          <h5>Book description : {value.description}</h5>
        </center>
      )}
    </>
  );
}
