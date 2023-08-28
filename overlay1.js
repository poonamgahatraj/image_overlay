let x=document.getElementById("img")
x.addEventListener("mouseover",showImage)

function showImage()
{
  let y=document.getElementById("hi")

  y.style.display="block";
  let x=document.getElementById("img")
  x.style.opacity=0.5

}
