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

module.exports.getByid =  function getByid(q, s, n){
    const id = q.params.id;
    console.log(id, "id");
    n();
}