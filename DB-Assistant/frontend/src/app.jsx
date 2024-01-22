import { useRef, useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/navbar/navbar";
import BodyView from "./components/bodyView/bodyView";
import TableGen from "./components/bodyView/tableGen";

const User = "you";
const GPT = "ai";
function App() {
  const localHost = "http://localhost:8000";
  const inputRef = useRef(null);
  const [qna, setQna] = useState([]);
  const [loading, setLoading] = useState(false);
  const [responseData, setResponseData] = useState(null);
  const [showTable, setShowTable] = useState(false);
  // const [showDBTable, setShowDBTable] = useState(false);
  const QGLogoInterface = "./icons/QGLogoInterface.png";
  const prePrompt = `This is a json data from a SQLite Database whose table name is alertDump and table headers are: 
  Severity, Time Received (Asia/Dubai), Object, node_hint, Title. 
  You should strictly reply with a json format. There are 3 types of responses you should stick to i.e.
  Database data, Query and general information response
  For Databse data response;
  Example
  User: Give me a 3 random alerts and their data
  Assistant: { "table": {
                "headers": ["exampleHeading", "exampleHeading", "exampleHeading"],
                "rows": [
                          ["NORMAL", "server1", "A memory bottleneck symptom has been detected based on several me"],
                          ["MAJOR", "Server23", "CPU Utilization has exceeded configured Threshold value. Thre"],
                          ["WARNING", "Server13", "Disk Usage - Root Partition: DISK WARNING - free space: / 1693 MB "]
                        ]
              }
  }  
  .
  For Query response
  The format for a reply in case of query requirement should be json format and should be a SQLite Query, 
  Stictly stick to this below format. Example
  User: Give me a query to view all the data
  Assistant: { table: {
    headers: ['Query'],
    rows: [
      ["SELECT * FROM alertDump WHERE Severity='CRITICAL'"]
    ]
  }
}.

  For General response
  The format for a reply in case of general response should be json format and should be a analysis response,
  Stictly stick to this below format and donot include any backticks or any other thing rather than this format. Example
  User: How many servers are there
  Assistant: { table: {
    headers: ['Response'],
    rows: [
      ["Total servers: <get the number of servers>"]
    ]
  }
}.`;

  const updateQNA = (from, value) => {
    setQna((qna) => [...qna, { from, value }]);
  };

  useEffect(() => {
    axios
      .post(`${localHost}/viewAlertDump`)
      .then((response) => {
        //console.log(response);
        //console.log(JSON.stringify(response.data, null, 2));

        setResponseData(JSON.stringify(response.data, null, 2)); // Store the response data in state
        //console.log(setResponseData);
      })
      .catch((error) => {
        console.error("Error fetching data from viewAlertDump:", error);
      });
  }, []);

  const handleSend = () => {
    const userQuestion = inputRef.current.value.trim();

    //to send as prompt to the model only JSON data of database
    let question = ` ${responseData}`;

    //to render in UI
    let messageContentUpdate = `${userQuestion}`;

    if (!responseData) {
      // Append the desired data from `resp` to the question and messageContentUpdate variables
      question =
        "If you dont find any JSON Data, reply as No Data found. Please make sure you are able to connect to database";
    }

    //to send as prompt to the model with JSON data, prePrompt and the user prompt.
    question += `${prePrompt} ${userQuestion}`;

    //Replace messageContentUpdate with question to view
    //the full message text that is sent to GPT
    if (messageContentUpdate !== "") {
      updateQNA(User, messageContentUpdate);

      setLoading(true);
      axios
        .post(`${localHost}/chat`, {
          question,
        })
        .then((response) => {
          updateQNA(GPT, response.data.answer.table);
          if (response.data.answer.table) {
            setShowTable(true);
          } else {
            setShowTable(false);
          }
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  const renderContent = (qna) => {
    /*

    const value = qna.value;

    if (Array.isArray(value)) {
      return value.map((v) => <p className="message-text">{v}</p>);
    }

    return <p className="message-text">{value}</p>;

    */
    console.log(qna);

    if (showTable && qna.from === "ai") {
      // If the showTable state is true, display the table component
      return <TableGen headers={qna.value.headers} rows={qna.value.rows} />;
    } else {
      const value = qna.value;

      if (Array.isArray(value)) {
        return value.map((v) => <p className="message-text">{v}</p>);
      }

      return <p className="message-text">{value}</p>;
    }
  };

  return (
    <div>
      <Navbar />

      <BodyView
        qna={qna}
        User={User}
        renderContent={renderContent}
        QGLogoInterface={QGLogoInterface}
        loading={loading}
        inputRef={inputRef}
        handleSend={handleSend}
      />
    </div>
  );
}

export default App;

//For Testing Only
/* 
    { from: User, value: "From User"},
    { from: GPT, value: ["From GPT, Message 1", "From GPT, Message 2"]},
    { from: User, value: ["From User, Message 1"]},
    { from: User, value: "From User"},
    { from: GPT, value: ["From GPT, Message 1", "From GPT, Message 2"]},
    { from: User, value: ["From User, Message 1"]},
    { from: User, value: "From User"},
    { from: GPT, value: ["From GPT, Message 1", "From GPT, Message 2"]},
    { from: User, value: ["From User, Message 1"]},
    { from: User, value: "From User"},
    { from: GPT, value: ["From GPT, Message 1", "From GPT, Message 2"]},
    { from: User, value: ["From User, Message 1"]},
    { from: User, value: "From User"},
    { from: GPT, value: ["From GPT, Message 1", "From GPT, Message 2"]},
    { from: User, value: ["From User, Message 1", "From User, Message 2"]}
          
  */
