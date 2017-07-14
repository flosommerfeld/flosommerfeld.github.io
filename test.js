document.body.style.border = "5px solid red";


if(document.title != "Historify"){
console.log("fdafafa");
  html2canvas(document.body, {
    onrendered: function(canvas) {
      var dataURL = canvas.toDataURL();
      console.log(dataURL);

    }
  });



}
