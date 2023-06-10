import { useLocation, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "../styles/EditComponent.css";
import axios from "axios";
function EditComponent() {
  const navigate = useNavigate();

  const [id, setId] = useState();
  const [stock, setStock] = useState([]);
  const [name, setName] = useState();
  const [author, setAuthor] = useState();
  const [topic, setTopic] = useState();
  const [description, setDescription] = useState();
  const [image, setImage] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/book/id/${location.state.id}`)
      .then((res) => {
        console.log(res.data);
        setId(res.data.id);
        setStock(res.data);
        setName(res.data.name);
        setTopic(res.data.topic);
        setImage(res.data.imageUrl);
        setDescription(res.data.description);
        setAuthor(res.data.author);
      });
  }, []);

  async function validateUser(e) {
    e.preventDefault();
    await axios.post("http://localhost:8080/book", {
      id: location.state.id,
      name: name,
      author: author,
      topic: topic,
      description: description,
      imageUrl: image,
    });
    alert("success");

    setName();
    setTopic();
    setImage();
    setDescription();
    setAuthor();
    navigate("/");
  }
  const location = useLocation();
  return (
    <>
      {stock && (
        <>
          <form>
            <img src={image}></img>
            <h3>Edit {name}</h3>
            <div className="mb-3">
              <label>Book Name :</label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label>Author :</label>
              <input
                type="text"
                className="form-control"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label>Topic : </label>
              <input
                type="text"
                className="form-control"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label>description : </label>
              <input
                type="text"
                className="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <button type="submit" onClick={validateUser}>
              Submit
            </button>
          </form>
        </>
      )}
    </>
  );
}

export default EditComponent;
