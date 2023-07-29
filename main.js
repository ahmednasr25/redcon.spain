console.log("ahmednasr")

let li = document.querySelectorAll("header ul li a")
console.log(li)

li.forEach(function(ele) {
    ele.onclick = function () {
        li.forEach(function(ele) {
            ele.classList.remove("active")
        })
        ele.classList.add("active")
    }
})

let up = document.querySelector(".up")

window.addEventListener("scroll",  function() {
    this.scrollY >= 1000 ? up.classList.add("show") : up.classList.remove("show")
}) 

up.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

window.addEventListener("load", function(){
    
    let loading = document.querySelector(".aa")
        loading.classList.add("hidden")
})


let nums = document.querySelectorAll(".box2 .nums")
let section = document.querySelector(".state")
let started = false

window.onscroll = function () {
    if (window.scrollY >= section.offsetTop) {
        if(!started) {
            nums.forEach((nums) => startCount(nums))
        }
        started = true
    }
}

function startCount(el) {
    let goal = el.dataset.goal
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count)
        }
    }, 2000 / goal);
}