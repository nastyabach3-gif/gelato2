const change = document.getElementById("change")

function change_all(){
  if (document.getElementsByTagName('h3')[3].innerText==="Bakhmeteva"){
    document.getElementsByTagName('h3')[0].innerText="Кто-то выдал..."
    document.getElementsByTagName('h3')[3].innerText="Бахметьева";
    document.getElementsByTagName('h3')[4].innerText="Анастасия";
    document.getElementsByTagName('h3')[5].innerText="Сергеевна";
    document.getElementsByTagName('h3')[7].innerText="Мордор";
  }
  else{
    if (document.getElementsByTagName('h3')[3].innerText==="Бахметьева"){
      document.getElementsByTagName('h3')[0].innerText="Somebody gave..."
      document.getElementsByTagName('h3')[3].innerText="Bakhmeteva";
      document.getElementsByTagName('h3')[4].innerText="Anastasia";
      document.getElementsByTagName('h3')[5].innerText="Sergeevna";
      document.getElementsByTagName('h3')[7].innerText="Mordor";

    }
  }
}

change.addEventListener("click", change_all)