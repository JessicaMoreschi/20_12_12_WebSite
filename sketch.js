document.getElementById('demosMenu').addEventListener('change', function(e){
    var dropdown = document.getElementById('demosMenu');
    window.location.href = dropdown.options[dropdown.selectedIndex].getAttribute('id') + '.html';
});

function buy(){
  document.getElementById('testoBuy').style.display='block';
  document.getElementById("testoBuyBtn").innerHTML = "Comprato";
}
