let count = 0; 

function viewcount(q, s, n) {
    count++;
    s.send({count})
    console.log(count, '"count"');
}
module.exports=viewcount;