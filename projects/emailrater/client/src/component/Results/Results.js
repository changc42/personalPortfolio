import React, { useEffect, useState } from "react";
import ResultCard from "./ResultCard/ResultCard";
import { Typography } from "@material-ui/core";

export default function Results() {
  let [isLoading, setIsLoading] = useState(true);
  let [myMessageList, setMyMessageList] = useState([]);

  useEffect(() => {
    fetch("api/sendResults")
      .then((res) => {
        console.log("reponse from /api/sendResults: ", res);
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setMyMessageList(data.myMessageList);
        setIsLoading(false);
        console.log(myMessageList, "Test");
      });
  }, [isLoading]);

  return (
    <div>
      {isLoading ? (
        <p>loading your messages</p>
      ) : (
        <div className="App">
          <Typography variant="h3" style={{ textAlign: "center" }}>
            Results:
          </Typography>
          {myMessageList.map((msg) => {
            return <ResultCard message={msg} />;
          })}
        </div>
      )}
    </div>
  );
}
