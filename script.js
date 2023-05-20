

let texts = [
    "My Name is Ojo Abiola Victoria, a front-end developer trainee who is based in Lagos. I graduated from the department of Biochemistry in the University of Benin in August, 2021.", "During my National Youth Service in 2022, I was introduced to tech. Immediately after my service in February, 2023, I made sure to attain the necessary skills needed for my transition into tech.", "I love building beautiful websites and bringing creative designs to life and I believe that under the right learning platform, there's so much more that I can do, hence, the application for an internship.", "I look forward to hearing from you. Thank you."
];
 let text=document.getElementById("add_text");
let btn = document.getElementById("btn");
btn.addEventListener("click", changeText);
 text.innerText = texts[0];


    function changeText(){
       let searchTerm =  text.innerText  ;
       let index = texts.indexOf(searchTerm)+1;
       if(index == texts.length )index=0;
          let result = texts[index];
          text.innerText = result;
    	  return;
       }
