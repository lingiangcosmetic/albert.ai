
function viewdiv(id){
	var el=document.getElementById(id);
	if(el.style.display === "block"){
		el.style.display="none";
        document.getElementById('arrow_down').style.display = 'block';
        document.getElementById('arrow_up').style.display = 'none';
	} else {
		el.style.display="block";
        document.getElementById('arrow_down').style.display = 'none';
        document.getElementById('arrow_up').style.display = 'block';

	}
}


function viewdivOnTabs(id){
    var el=document.getElementById("hidden_items" + id);
    if(el.style.display === "block"){
        el.style.display="none";
        document.getElementById('arrow_down' + id).style.display = 'block';
        document.getElementById('arrow_up' + id).style.display = 'none';
    } else {
        el.style.display="block";
        document.getElementById('arrow_down' + id).style.display = 'none';
        document.getElementById('arrow_up' + id).style.display = 'block';

    }
}