function Bulb1ON()
{
    document.getElementById("bulb1").style.backgroundColor="yellow";
}
function Bulb1Off()
{
    document.getElementById("bulb1").style.backgroundColor="white";
}
function Bulb1ORed()
{
    document.getElementById("bulb1").style.backgroundColor="red";
}
function Bulb1OGreen()
{
    document.getElementById("bulb1").style.backgroundColor="green";
}
function Bulb1Blue()
{
    document.getElementById("bulb1").style.backgroundColor="blue";
}

document.getElementById("bulb1Color").addEventListener("change",ChangeBulbColor);

function ChangeBulbColor()
{
  const color=  document.getElementById("bulbe1Color").value;
  document.getElementById("bulb1").style.backgroundColor=color;
}

function reset()
{
    window.location.reload();
}





