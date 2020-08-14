
// nav bar
let count = 0;
let minus = 10;
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll(".nav-links li");


hamburger.addEventListener("click", check)




function check()
{
    console.log("check");
    var c = document.getElementById("nav_links");
    c.classList.toggle("mystyle");
}

//for next

const DIVIMAGES = document.querySelector("#poem_container")
const DIV_POEM = document.querySelector("#ppoem")
const P_NAME = document.querySelector("#pname")
const P_AUTHOR = document.querySelector("#pauthor")
const P_POPULARITY = document.querySelector("#ppopularity")


let poemData = 

// dont touch my kachara
{'poem1': 

{'pname': 'Aedh Wishes for the Cloths of Heaven', 'pauthor': 'William Butler Yeats', 
'ppoem': 
`Had I the heaven’s embroidered cloths,

Enwrought with golden and silver light,

The blue and the dim and the dark cloths

Of night and light and the half-light,

I would spread the cloths under your feet:

But I, being poor, have only my dreams;

I have spread my dreams under your feet;

Tread softly because you tread on my dreams.`,

'rating': 'good'}, 

'poem2': 

{'pname': 'If I Can Stop One Heart From Breaking', 'pauthor': 'Emily Dickinson', 
'ppoem':
`If I can stop one heart from breaking,

I shall not live in vain;

If I can ease one life the aching,

Or cool one pain,

Or help one fainting robin

Unto his nest again,

I shall not live in vain.`,'rating': 'better'},


'poem3': 

{'pname': 'Always Marry An April Girl', 'pauthor': 'Ogden Nash', 
'ppoem':
`Praise the spells and bless the charms,

I found April in my arms.

April golden, April cloudy,

Gracious, cruel, tender, rowdy;

April soft in flowered languor,

April cold with sudden anger,

Ever changing, ever true --

I love April, I love you.`,'rating': 'bad'},

'poem4': 

{'pname': 'Now We Are Six', 'pauthor': 'A. A. Milne', 
'ppoem':
`When I was One,

I had just begun.

When I was Two,

I was nearly new.

When I was Three

I was hardly me.

When I was Four,

I was not much more.

When I was Five,

I was just alive.

But now I am Six,

I'm as clever as clever,

So I think I'll be six now for ever and ever.`
,'rating': 'bad'},

'poem5': 

{'pname': `Hug O' War`, 'pauthor': '	Shel Silverstein', 
'ppoem':
`I will not play at tug o' war.

I'd rather play at hug o' war,

Where everyone hugs

Instead of tugs,

Where everyone giggles

And rolls on the rug,

Where everyone kisses,

And everyone grins,

And everyone cuddles,

And everyone wins`,'rating': 'nice'},

'poem6': 

{'pname': 'Snowball', 'pauthor': '	Shel Silverstein', 
'ppoem':
`I made myself a snowball

As perfect as could be.

I thought I'd keep it as a pet

And let it sleep with me.

I made it some pajamas

And a pillow for its head.

Then last night it ran away,

But first it wet the bed.`,'rating': 'good'}

}

let breakLoopingPoem = false;
 

function add(param)
{
 
  if(param === "next")
  {
    breakLoopingPoem = true;
    if(count < 6)
      {
        count += 1
      }
  
    
  }
  else if (param === "pre")
  {
    breakLoopingPoem = true;

    if(count > 1)
      {
        count -= 1
      }
  
  
  }

  P_NAME.textContent =   poemData['poem'+count]["pname"]
  P_AUTHOR.textContent =   poemData['poem'+count]["pauthor"]
  DIV_POEM.innerHTML =    "<pre>" + "<p style=' padding: 70px; font-family: Helvetica Neue, Helvetica, ; word-spacing: 2px; font-size: 20px; justify-content: center; font-style: oblique;'>" +  poemData['poem'+count]["ppoem"] + "</p>" + "</pre>";
  P_POPULARITY.textContent =   poemData['poem'+count]['rating'] 
}

//add auto pick

//random 

function delayMaker(ms)
{
  return new Promise(resolve => setTimeout(resolve,ms));
  
}
async function automaticPoemChanger()
{
  let i = 1;
  while(i<=6 && breakLoopingPoem == false)
  {
    P_NAME.textContent =   poemData['poem' + [i]]["pname"];
    P_AUTHOR.textContent =   poemData['poem' + [i]]["pauthor"];
    DIV_POEM.innerHTML =    "<pre>" + "<p style=' padding: 70px; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; word-spacing: 2px; font-size: 20px; justify-content: center; font-style: oblique;'>" +  poemData['poem' + [i]]["ppoem"] + "</p>" + "</pre>";
    P_POPULARITY.textContent =   poemData['poem' + [i]]['rating'] ;
    i++;
    await delayMaker(2000);
    console.log(" value of " + i)

    if( i == 6)
  {
    i = 1;
  }
  }
  
  

  

 
}

//on start load poem 1
automaticPoemChanger();


//user define poem
const btn_save_poem = document.getElementById("btn_save_input");

const text_poem_input = document.getElementById("input_user_poem")
const text_user_name = document.getElementById("input_user_name")
const text_user_poem_name = document.getElementById("input_user_poem_name")

const show_user_poem = document.getElementById("show_user_poem")
const show_user_poem_name = document.getElementById("show_user_poem_name")
const show_user_author_name = document.getElementById("show_user_name")

const main_div_poem_shower = document.getElementById("third_page_own_create_poem")

btn_save_poem.addEventListener("click",userDefinePoem);

let check_poem_input_for_show = false
console.log("1 " +check_poem_input_for_show)


function userDefinePoem()
{
  let user_input_save_poem = text_poem_input.value;
  let user_name = text_user_name.value;
  let user_poem_name = text_user_poem_name.value
  
  
  if( text_poem_input.value != "" &&  text_user_name.value != "" &&  text_user_poem_name.value != "")
  { 
      show_user_poem.innerHTML = "<pre>" + user_input_save_poem + "</pre>";
      
      show_user_author_name.innerHTML = user_name;
      show_user_poem_name.innerHTML = user_poem_name

      text_poem_input.value = ""
      text_user_name.value = ""

      text_user_poem_name.value = ""
      check_poem_input_for_show = true

      if(check_poem_input_for_show == true)
      {
        main_div_poem_shower.style.display = "inline"
        
      }

  }
  else if(text_poem_input.value == "")
  {
    alert("please enter poem ")

  }
  else if(text_user_name.value == "" && text_poem_input.value != "" )
  {
    alert("please enter your name ")

  } 
  else if(text_user_poem_name.value == "" && text_poem_input.value != "" && text_user_name.value != "")
  {
    alert("please enter poem name ")

  }
  else
  {
    alert("enter data")
  }
}


const btn_to_create_poem = document.querySelector(".create_own_poem_btn")
btn_to_create_poem.addEventListener("click",visibleInputForPoem)

function visibleInputForPoem()
{
  document.getElementById("container-for-poem-input").style.display = "inline"
  btn_to_create_poem.style.display = "none"
}

document.getElementById("btn_cancel_input").addEventListener("click",invisibleInputForPoem)

function invisibleInputForPoem()
{
  document.getElementById("container-for-poem-input").style.display = "none"
  btn_to_create_poem.style.display = "inline"

}