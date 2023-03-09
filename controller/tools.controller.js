let fs = require('fs');
const {log:clg} = console;
let tools = [
    { id: 1, name: "Hammer" },
    { id: 2, name: "Hammer2" },
    { id: 3, name: "Hammer3" },
    { id: 4, name: "Hammer" },
    { id: 5, name: "Hammer2" },
    { id: 6, name: "Hammer3" },
];
module.exports.getSpecificTool = (q, s, n)=>{
    try{

        const { id } = q.params;
        // const { name, email } = q.query.himnisya;
        const selected2 = tools.find(function (e, i, a) {
            const selected = e.id == id
            return selected;
        })
        clg(selected2 , '2')
        s.send(selected2)

    }
    catch(e){
        const {name, message} = e;
        console.log("🚀 ~ file: tools.controller.js:26 ~ message:", message)
        
    }
}
module.exports.updateUser = (q, s, n)=>{
    const data  = q.body; 
    clg(data, 'data')
    const founded = tools.find(t=> t.id == q.params.id)
    clg(founded, 'founded')
    return null; 
}
module.exports.randomUser= (req, res, next) => {
    fs.readFile('data.json', function (err, data) {
        if (err)
            console.log(err, 'err');;

        const Data = data.toString('utf8')
        const real = JSON.parse(Data)
        const index = Math.floor(Math.random() * 20);
        res.send(real[index]);
    });

}
module.exports.randomUserAll= (req, res, next) => {
    const {quantity} = req.query;
    fs.readFile('data.json', function (err, data) {
        if (err)
            console.log(err, 'err');;

        const Data = data.toString('utf8')
        const real = JSON.parse(Data)
        res.send(real.slice(0, quantity));
    });

}

module.exports.getByid =  function getByid(q, s, n){
    const id = q.params.id;
    console.log(id, "id");
    n();
}

module.exports.addData = function addData(q, s, n){
    const newUser = q.body;
    clg(newUser, '"newUser"')
    var data = fs.readFileSync("data.json");
    var myObject = JSON.parse(data);
    clg(myObject, 'myobject')
    // Defining new data to be added

    // Adding the new data to our object
    myObject.push(newUser);

    // Writing to our JSON file
    var newData2 = JSON.stringify(myObject);
    fs.writeFile("data.json", newData2, (err) => {
        // Error checking
        if (err) clg(err, '"err"')
        console.log("New data added");
    });
}

module.exports.updateRandomUser = function updateRandomUser(q, s, n){
    const id = q.params.id;
    const updateData = q.body;
    clg(id, updateData, '"id"')
    updateData._id = id;
    const fileName = '../data.json';
    const file = require(fileName);
    clg(file, 'file')
    file.push({update:true})
    const remainingUser =  file.filter(f=>f._id !==id);
    remainingUser.push(updateData)
    console.log("🚀 ~ file: tools.controller.js:97 ~ updateRandomUser ~ remainingUser:", remainingUser)
    fs.appendFile(fileName, JSON.stringify(file, 0, 4), 'utf8', function writeJSON(err) {
        if (err) return console.log(err);
        // console.log(JSON.stringify(file));
    });
    n();
}