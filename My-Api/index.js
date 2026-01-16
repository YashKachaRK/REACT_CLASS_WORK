const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Hello World!"));
app.get("/uni", (req, res) => res.send("Hello My Rku"));
app.get("/student", (req, res) =>
  res.json({
    name: "Yash",
    city: "Rajkot",
    sem: 6,
    year: 2025,
  })
);
app.get("/myname/:a/:b", (req, res) =>
  res.send(
    `${req.params.a} +  ${req.params.b} =  ${
      Number(req.params.a) + Number(req.params.b)
    }

    ${req.params.a} -  ${req.params.b} =  ${
      Number(req.params.a) - Number(req.params.b)
    }
    ${req.params.a} *  ${req.params.b} =  ${
      Number(req.params.a) * Number(req.params.b)
    }
    ${req.params.a} /  ${req.params.b} =  ${
      Number(req.params.a) / Number(req.params.b)
    }`
  )
);
app.post("/", (req, res) => res.send("from post"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
