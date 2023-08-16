function search(){
    var num_cols, display, input, filter, table_body, tr, td, i, txtValue;
    num_cols = 3;
    input = document.getElementById("barra-busqueda");
    filter = input.value.toUpperCase();
    table_body = document.getElementById("grid");
    tr = table_body.getElementsByClassName("item");

    for(i=0; i< tr.length; i++){				
        display = "none";
        for(j=0; j < num_cols; j++){
            td = tr[i].getElementsByClassName("title")[j];
            if(td){
                txtValue = td.textContent || td.innerText;
                if(txtValue.toUpperCase().indexOf(filter) > -1){
                    display = "";
                }
            }
        }
        tr[i].style.display = display;
    }
}	