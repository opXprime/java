

const student = [

    {name: 'john', age: 20},
    {name: 'jane', age: 22},
    {name: 'doe', age: 19}
];

console.table(student);

console.time('loop');
let total= 0;
for(let i=0; i<student.length; i++){
    total += student[i].age;
}
console.timeEnd('loop');

const msg = document.getElementById('msg');
msg.textContent = "baby shark doo doo doo doo doo doo";
const p = document.createElement('p');
p.textContent = "hello world";
document.body.append(p);

const dialog = document.createElement('dialog');
document.body.append(dialog);
dialog.showModal();

// console logging the document properties
const headElement = document.head;
console.log(headElement);
const url = document.URL;
console.log(url);
const title = document.title;
console.log(title);
const bodyElement = document.body;
console.log(bodyElement);


const note = document.querySelector('#note');
document.querySelector('#showNote').addEventListener('click', () =>    {
    note.classList.toggle('hightlight');
});


//query selector
const myElement = document.querySelector('#my-element');
console.log(myElement.textContent);

const myList = document.querySelector('#my-list>li:nth-child(3)');
console.log(myList.textContent);

const img = document.createElement('img');
    img.id = "logo";
    img.src = "img.png";
    img.alt = "the logo shows the image";
    console.log(img.outerHTML);
    document.body.append(img);


