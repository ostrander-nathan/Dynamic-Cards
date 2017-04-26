 document.getElementById('btn').addEventListener('click', function() {
     var value = document.getElementById("input").value;
     var textarea = document.createElement('div');
     textarea.className = "mytextbox";
     textarea.innerHTML = value;
     var btnDelete = document.createElement("button");
     btnDelete.innerHTML = "Delete";
     btnDelete.addEventListener("click", function() {
         this.parentNode.remove();
     });
     textarea.appendChild(btnDelete);
     document.getElementById('output').appendChild(textarea);
 })
