var resultDiv = $("#result")

$("#send").on("click", () => {
    var d = {} 
    var data = $("#formDATA").serializeArray()
    $.each(data,function(){
        d[this.name] = this.value
    });
    console.log(d);
})
