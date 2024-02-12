// console.log("Har har mahadev");
const reviews = [
    {
        id: 1,
        src: `images/1.avif`,
        author: 'Heena Jakaro',
        job: `software developer`,
        desc: `Enthusiastic and detail-oriented software developer with a passion for crafting innovative solutions to complex problems.`
    }, 
    {
        id: 2,
        src: `images/2.avif`,
        author: 'Shizuka Minamoto',
        job: `team leader`,
        desc: `Passionate and results-driven software development team leader with a proven track record of guiding teams to success.`
    }, 
    {
        id: 3,
        src: `images/3.avif`,
        author: 'Sumire Hoshino',
        job: `backend enginner`,
        desc: `Versatile and detail-oriented backend engineer with a passion for architecting robust and scalable solutions`
    }, 
    {
        id: 4,
        src: `images/4.jpg`,
        author: 'Mitsuo Suwa',
        job: `ui engineer`,
        desc: `Creative and detail-driven UI engineer with a passion for crafting exceptional user experiences`
    }, 
    {
        id: 5,
        src: `images/5.avif`,
        author: 'Hidetoshi Dekisugi',
        job: `full statck developer`,
        desc: `Versatile and results-driven Full Stack Developer with a passion for creating end-to-end solutions that seamlessly integrate front-end and back-end technologies`
    }, 
]
// variale declared
let currentItem = 0;
const img = document.querySelector(".img-container > img");
const author = document.querySelector("#author");
const job = document.querySelector("#job");
const desc = document.querySelector("#desc");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const randomBtn = document.querySelector(".surprise");
window.addEventListener("DOMContentLoaded", () => {
    let reviewItem = reviews[currentItem];
    img.src = reviewItem.src;
    author.textContent = reviewItem.author;
    job.textContent = reviewItem.job;
    desc.textContent = reviewItem.desc;
});
function showReviewItem(currentItem){
    let reviewItem = reviews[currentItem];
    img.src = reviewItem.src;
    author.textContent = reviewItem.author;
    job.textContent = reviewItem.job;
    desc.textContent = reviewItem.desc;
}
nextBtn.addEventListener("click", function(){
    currentItem++;
    if(currentItem > reviews.length - 1){
         currentItem = 0;
    }
    showReviewItem(currentItem);
});
prevBtn.addEventListener("click", function() {
     currentItem--;
     if(currentItem < 0){
          currentItem = reviews.length - 1;
     }
     showReviewItem(currentItem);
})
randomBtn.addEventListener("click", function() {
      currentItem = Math.floor(Math.random() * reviews.length);
      showReviewItem(currentItem);    
})

