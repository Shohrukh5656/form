var resultDiv = $("#result")

$("#formDATA").on("submit", (e) => {
e.preventDefault();
var d = {}
var data = $("#formDATA").serializeArray()
$.each(data,function(){
d[this.name] = this.value
});
console.log(d);
e.target.reset()
})
