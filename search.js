function searchFunction(){
  var a;
  var i;
  
  var input = document.getElementById('searchIn');
  var filter = input.value.toUpperCase();
  var ul = document.getElementById('itemList');
  var li = ul.getElementsByTagName('li');
  
  for(i = 0; i < li.length; i++){
  	a = li[i].getElementsByTagName("a")[0];
    if(a.innerHTML.toUpperCase().indexOf(filter) > -1){
    	li[i].style.display = "";
      }else{
      	li[i].style.display = "none";
      }
    }
 }

 function addToTheList(){
     var entry = document.getElementById('newListItem').value;
     var node = document.createElement('li');
     var aNode = document.createElement('a');
     aNode.href = "#";
     node.appendChild(aNode);
     aNode.innerText = entry;
     document.getElementById("itemList").appendChild(node);
     document.getElementById('newListItem').value = '';
 }