send.addEventListener("click",fnc);
function fnc ()
 {
    let val_finpribil=finpribil.value;
    let val_valpribil=valpribil.value;
    let val_operpribil=operpribil.value;
    let val_nalogi=nalogi.value;
    let val_result;

    val_result=val_finpribil+val_valpribil+val_operpribil-val_nalogi;

    result.innerHTML=val_result
}