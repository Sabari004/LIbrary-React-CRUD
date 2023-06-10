import axios from "axios";
import "../styles/AddComponent.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function AddComponent() {
  const navigate = useNavigate();
  const [name, setName] = useState();
  const [id, setId] = useState();
  const [beforePrice, setBeforePrice] = useState();
  const [afterPrice, setAfterPrice] = useState();
  const [increasePercentage, setIncreasePercentage] = useState();
  const [topGain, setTopGain] = useState(0);

  const validateUser = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:8080/gainers`, {
        id,
        name,
        beforePrice,
        afterPrice,

        increasePercentage,
      })
      .then((r) => {
        console.log("Amount added");
        navigate("/");
      });
  };

  return (
    <>
      <table>
        <tr>
          <td>Event Id:</td>
          <td>
            <input
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder="Enter Event Id"
            />
          </td>
        </tr>
        <tr>
          <td>Event Name:</td>
          <td>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Event name"
            />
          </td>
        </tr>
        <tr>
          <td>Amount Before:</td>
          <td>
            <input
              type="Number"
              value={beforePrice}
              onChange={(e) => setBeforePrice(e.target.value)}
              placeholder="Enter Amount"
            />
          </td>
        </tr>
        <tr>
          <td>Amount After:</td>
          <td>
            <input
              type="Number"
              value={afterPrice}
              onChange={(e) => setAfterPrice(e.target.value)}
              placeholder="Enter Amount "
            />
          </td>
        </tr>
        <tr>
          <td>Amount Spend:</td>
          <td>
            <input
              type="Number"
              value={increasePercentage}
              onMouseEnter={(e) =>
                setIncreasePercentage(beforePrice - afterPrice)
              }
              placeholder="Enter Amount"
            />
          </td>
        </tr>

        <tr>
          <button className="submit" onClick={validateUser}>
            Submit
          </button>
        </tr>
      </table>
    </>
  );
}
