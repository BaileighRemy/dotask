const express = require("express")
//Setup express, this enables us to write less code
const app = express();

const PORT = process.env.PORT || 3000

function doWork (task) {
    return `Task Complete: ${task}`
}

// Configure your doors aka routes, verbs
//app.get(route, your function)
app.get("/doWork", (request, response) => {
    //Input
    const task = request.query.task;
    //Do work
    const result = doWork(task)
    //Output
    //Server output
console.log(result)

    //Client output
   // response.send(result)
   response.json({
    message: result
   })
})

app.get("/", (req, res) => res.send("this is the default route.. Happy face"))

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))