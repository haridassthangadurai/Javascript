 function addBtn()
        {
            var val = document.getElementById("textInput").value;

            var ul = document.getElementById("listval");
            var li = document.createElement("li");

            li.innerText = val;
            ul.append(li);
        }