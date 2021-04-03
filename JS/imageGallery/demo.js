function myFunction() {
    var myobj = document.getElementById("img");
    myobj.remove();
  }
  $(document).on("click", "img", function() {
    $("#img").remove();
  });

  //Basta abrir o arquivo demo.html no navegador e clicar no botão "X", para ver a funcionalidade