let chnEl = document.querySelectorAll("img")

 function changeImage() {
    let number = Math.ceil(Math.random() * 3)
   console.log(number)

   if (number === 1) { 
    chnEl[2].src = "https://thumbs.dreamstime.com/b/king-spades-illustration-playing-card-23685328.jpg" 
    chnEl[1].src  = "https://www.shutterstock.com/image-vector/queen-hearts-playing-card-classic-600w-2224891339.jpg"
    chnEl[0].src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ8vrR_3jkx7k2OUzgSOk2oJlxWw_l0cH2WJ8Lxw9Tww&s"

   }

   else if (number === 2) { 
      chnEl[0].src = "https://thumbs.dreamstime.com/b/king-spades-illustration-playing-card-23685328.jpg" 
      chnEl[1].src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ8vrR_3jkx7k2OUzgSOk2oJlxWw_l0cH2WJ8Lxw9Tww&s"
    chnEl[2].src  = "https://www.shutterstock.com/image-vector/queen-hearts-playing-card-classic-600w-2224891339.jpg"
  }
   else if (number === 3) { 

    chnEl[2].src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ8vrR_3jkx7k2OUzgSOk2oJlxWw_l0cH2WJ8Lxw9Tww&s"
    chnEl[0].src  = "https://www.shutterstock.com/image-vector/queen-hearts-playing-card-classic-600w-2224891339.jpg"
    chnEl[1].src = "https://thumbs.dreamstime.com/b/king-spades-illustration-playing-card-23685328.jpg" 

}




   
 }

    
