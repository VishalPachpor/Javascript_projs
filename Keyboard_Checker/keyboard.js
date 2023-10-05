const keyPress = document.getElementById("insert");

window.addEventListener("keydown", function(e){
    keyPress.innerHTML = `<div id="color"> 
     <table>
  <tr>
    <th>Key</th>
    <th>keyCode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === " " ? "space" : e.key }</td>
    <td>${e.keyCode} </td>
    <td>${e.code}</td>
  </tr>
  
</table>
    </div>`
})