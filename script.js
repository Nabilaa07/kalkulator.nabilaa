let output = document.getElementById("output");

function insert(num){
    output.value += num;

}
function hitung(){
        if(output.value == ""){
            alert("Masukan angka untuk di operasi-kan!");

        }
        else{
            output.value = eval(output.value);
        }
    } 
    function Clear(){
        output.value = "";
    }
    function del(){
        output.value = output.value.slice(0,-1);
    }
