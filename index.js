
document.querySelector('.btn').onclick= f1
document.querySelector('.btn').onclick= n1
document.querySelector('.btn2').onclick= f2

function f1(){
    let a=document.querySelector('.inp').value;
    c=a;
    console.log(c);
    document.body.style.margin = '20px';
    return c;
    
}
function n1(){
    let a=document.querySelector('.name').value;
    b=a;
    console.log(b);
    return b;
    
}




function f2(){
fetch ('http://63054b1b697408f7edc49ae4.mockapi.io/tasks',{
    method:'POST',
    headers:{
        'Content-type': 'application/json'
    },
    body: JSON.stringify({
        text:f1(),
        name: n1()
   
})})
.then(res=>res.json())
.then(data=>document.getElementById('root').innerHTML= JSON.stringify(data))

.then(data =>console.log(data))
.catch(error =>{console.log(error)})

}

let list=document.querySelector('.posts')

async function ass(){
let resp= await fetch ('http://63054b1b697408f7edc49ae4.mockapi.io/tasks')
let content = await resp.json()
console.log(content)
content= content
for (const key in content) {
    console.log(content[key])
    list.innerHTML+=`<li>
    ${content[key].name}<h1>${content[key].name}</h1>
    <img src="${content[key].text}"   alt="${content[key].text}">
    </li>
    
    `
}

}
{/* <iframe width="560" height="315" src="${content[key].datab}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
ass()
