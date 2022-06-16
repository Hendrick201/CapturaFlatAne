
function catchData()
{
    var name, telNumber, addres, addresNumber, district;
    name = document.getElementById("name").value +"";
    telNumber = document.getElementById("telNumber").value +"";
    addres = document.getElementById("addres").value +"";
    addresNumber = document.getElementById("addresNumber").value +"";
    district = document.getElementById("district").value +"";
    console.log(name);
    document.getElementById("finalLink").href="https://api.whatsapp.com/send?phone=553498824016&text=Olá,%20tudo%20bem?%0asegue%20abaixo%20os%20meus%20dados:" + "%0a" + name + telNumber + "%0a" + addres + "," + "%20" + addresNumber +"," + "%20" + district +"."; 
}