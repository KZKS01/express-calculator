const express = require("express");
const app = express();
const port = 3000;

//Make a route that responds to the URI calc. Give the route two params, :num1and :num2.
// app.get('/calc/:num1/:num2', function(req, res){
//     const num1 = parseInt(req.params.num1); //The params come in as strings, so to add them together as numbers they must be parseInt'ed or Number()'ed
//     const num2 = parseInt(req.params.num2);
//     const sum = parseInt(num1) + parseInt(num2);
//     res.send(`The sum is ${sum}.`);
// })


app.get("/calcquery/:num1/:num2", (req, res) => {
    //console.log("req.query: ", req.query)
    const num1 = parseInt(req.params.num1); //The params come in as strings, so to add them together as numbers they must be parseInt'ed or Number()'ed
    const num2 = parseInt(req.params.num2);
    if(req.query.operation === 'add') { //http://localhost:3000/calcquery/4/4?operation=add
        console.log(req.query.operation);
        const sum = num1 + num2;
        res.send(`The sum is ${sum}.`);

    } else if(req.query.operation === 'subtract') {
        console.log(req.query.operation);
        const result = num1 - num2;
        res.send(`The result is ${result}.`);

    } else if(req.query.operation === 'multiply') {
      console.log(req.query.operation);
      const result = num1 * num2;
      res.send(`The result is ${result}.`);

    } else if(req.query.operation === 'divide') {
      console.log(req.query.operation);
      const result = num1 / num2;
      res.send(`The result is ${result}.`);

    } else if(req.query.operation === 'exponent') {
      console.log(req.query.operation);
      const result = num1 ** num2;
      res.send(`The result is ${result}.`);

    } else {
      res.send(`No operation.`);
    }
  })

//NOTE: We are allowed have many res.sendswithin a single route if they send independently, 
//ie. they are inside if statements and have no risk of running at the same time.


app.listen(port, () => {
  console.log("Express is listening on port: ", port)
})