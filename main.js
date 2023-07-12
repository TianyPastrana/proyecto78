var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://i.pinimg.com/originals/7e/f7/53/7ef75351fde1235a269ebca166f30f0e.png", "https://banner2.cleanpng.com/20190131/hgs/kisspng-nicole-watterson-gumball-watterson-darwin-watterso-s4s-sht-4chan-says-ampquot-thread-32-7217-5c53a8edd952a1.5384808515489866058902.jpg" , "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuy9vRwA06YWF24XgtTsXouLF0VyhE_srExQ&usqp=CAU", "https://i.pinimg.com/originals/cd/35/86/cd35864a5243416f13bea1a3906da000.jpg"];
var names = ["Fmaily Book","David pastrana", "Victoria Almendra Sanchez", "Sebastiany Pastrana Sanchez", "Aytana Pastrna",];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 4
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Depura el código para almacenar la lista de imágenes en updatedImage. Utiliza images[i]
    var updatedImage = images[i];
    //Depura el código para almacenar la lista de nombres en updatedName. Utiliza names[i]
    var updatedName = names[i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}