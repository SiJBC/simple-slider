
document.body.addEventListener("click", (event) => {
    if(event.target.id === "left"){
           imageArrayIndex ++
            if(imageArrayIndex === imageArray.length){
                imageArrayIndex = 0}
            img.remove()
            img.classList.remove("leftArrow")
            img.setAttribute("src", imageArray[imageArrayIndex])
            img.classList.add("rightArrow")
            buttons.remove()
            imgContainer.appendChild(img)
            imgContainer.appendChild(buttons)
    }
    if(event.target.id === "right"){
        imageArrayIndex--
        if(imageArrayIndex <= 0 ){
            imageArrayIndex = imageArray.length -1
        }
        img.remove()
        img.classList.remove("rightArrow")
        img.setAttribute("src", imageArray[imageArrayIndex])
        img.classList.add("leftArrow")
        buttons.remove()
        imgContainer.appendChild(img)
        imgContainer.appendChild(buttons)
    } 
})



const imageArray = [
    "https://images.pexels.com/photos/1000366/pexels-photo-1000366.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
"https://images.pexels.com/photos/4226881/pexels-photo-4226881.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940","https://images.pexels.com/photos/4033321/pexels-photo-4033321.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940","https://images.pexels.com/photos/4022082/pexels-photo-4022082.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940","https://images.pexels.com/photos/5699514/pexels-photo-5699514.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", "https://images.pexels.com/photos/3844790/pexels-photo-3844790.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940","https://images.pexels.com/photos/5699524/pexels-photo-5699524.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", "https://images.pexels.com/photos/4041268/pexels-photo-4041268.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
]

let imageArrayIndex = 0
const div = document.createElement("div")
document.body.appendChild(div)
div.style = "margin-left: 40%"
// div.setAttribute("style", "margin-left: 40%")
const buttons = document.createElementNS("http://www.w3.org/2000/svg", "svg");
buttons.setAttribute("width", "400")
buttons.setAttribute("height", "200")
const rightArrow = document.createElementNS( "http://www.w3.org/2000/svg", "polygon")
const leftArrow = document.createElementNS( "http://www.w3.org/2000/svg", "polygon")
rightArrow.setAttribute("fill", "#cccccc")
rightArrow.setAttribute("points", "340,0 400,0 340,20")
leftArrow.setAttribute("points", "0,0 60,0 60,20")
leftArrow.setAttribute("fill", "#cccccc")
leftArrow.id = "left"
rightArrow.id = "right"
buttons.appendChild(rightArrow)
buttons.appendChild(leftArrow)


const img = document.createElement("img")
const img1 = document.createElement("img")
const imgContainer = document.createElement("div")
document.body.appendChild(imgContainer)
imgContainer.style = "width: 400px; height: 400px; background-image: linear-gradient(to bottom right, grey, white); margin-left: 30%; position: absolute"
img.setAttribute("src", imageArray[imageArrayIndex])
img.setAttribute("src", imageArray[imageArrayIndex+1])
img1.style = "width: 300px; height: 300px; padding: 50px;  position: relative"
img.style = "width: 300px; height: 300px; padding: 50px;  position: relative"
imgContainer.appendChild(img)
imgContainer.appendChild(buttons)



