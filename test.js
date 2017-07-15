document.body.style.border = "5px solid red";
html2canvas(document.body, {
  onrendered: function(canvas) {
    var dataURL = canvas.toDataURL();
    console.log(dataURL);
    window.open(dataURL);
  }
});
