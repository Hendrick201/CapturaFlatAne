
function catchData()
{
    
    var name, telNumber, city, addres, addresNumber, district;
    name = document.getElementById("name").value +"";
    city = document.getElementById("city").value + "";
    telNumber = document.getElementById("telNumber").value +"";
    addres = document.getElementById("addres").value +"";
    addresNumber = document.getElementById("addresNumber").value +"";
    district = document.getElementById("district").value +"";
    document.getElementById("finalLink").href="https://api.whatsapp.com/send?phone=553498824016&text=Olá,%20tudo%20bem?%0asegue%20abaixo%20os%20meus%20dados:" + "%0a" + name + "%0a" + telNumber + "%0a" + city + "%0a" + addres + "," + "%20" + addresNumber +"," + "%20" + district +"."; 
}
function enableButton()
{
    var button = document.getElementById("sendLink");
    var buttonBlinder = document.getElementById("finalLinkBlinder");
        button.style.zIndex = "2";
        buttonBlinder.style.zIndex = "0";
        document.getElementById("finalLink").style.color = "white";
        document.getElementById("finalLink").style.borderColor = "white";
}