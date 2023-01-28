function res(){
  window.open("file:///C:/Users/Backoffice/OneDrive/%C3%81rea%20de%20Trabalho/00/index2.html")
  window.close("file:///C:/Users/Backoffice/OneDrive/%C3%81rea%20de%20Trabalho/00/index.html")
}

function res2(){
  window.open("file:///C:/Users/Backoffice/OneDrive/%C3%81rea%20de%20Trabalho/00/index3.html")
  window.close("file:///C:/Users/Backoffice/OneDrive/%C3%81rea%20de%20Trabalho/00/index.html")
}

function logar(){

  var login = document.getElementById('login').value;
  var senha = document.getElementById('senha').value;

  if(login == "vitor@gmail.com" && senha == "12345" || login == "rita@md.com" && senha == "rt123"){
      alert('Sucesso');
      location.href = "file:///C:/Users/vitor/OneDrive/Documentos/GitHub/Login/index4.html";
  }else{
      alert('Usuario ou senha incorretos');
  }
}