import { arr } from "./db.js";
let doc = document;
let cont = doc.querySelector(".container");
let form = doc.forms.form;
let show_5 = doc.querySelector(".show_5");
let show_all = doc.querySelector(".show_all");
let box_num = doc.querySelector(".box_num");
let content = doc.querySelector(".content");
let b_window = doc.querySelector(".b_window");
let checkbox = doc.querySelector("#checkbox");
let toggle = doc.querySelector(".toggle");
// console.log(arr.slice(0, 5));
// show_5.onclick = (e) => {
//   e.preventDefault();
// };
create(arr);
function create(arr) {
  let a;
  // cont.innerHTML = "";
  for (let item of a || arr) {
    let mainDiv = doc.createElement("div");
    let mainImg = doc.createElement("img");
    let middleDiv = doc.createElement("div");
    let h1 = doc.createElement("h1");
    let p = doc.createElement("p");
    let btn = doc.createElement("button");
    let bottomDiv = doc.createElement("div");
    let bottomDivBox1 = doc.createElement("div");
    let bottomDivBox2 = doc.createElement("div");
    let bottomDivBox3 = doc.createElement("div");
    let box1p = doc.createElement("p");
    let box2p = doc.createElement("p");
    let box3p = doc.createElement("p");
    let box1img = doc.createElement("img");
    let box2img = doc.createElement("img");
    let box3img = doc.createElement("img");
    let b_window_p = doc.createElement("p");

    mainDiv.classList.add("mainDiv");
    mainImg.classList.add("mainImg");
    middleDiv.classList.add("middleDiv");
    h1.classList.add("h1");
    p.classList.add("p");
    bottomDiv.classList.add("bottomDiv");
    bottomDivBox1.classList.add("bottomDivBox");
    bottomDivBox2.classList.add("bottomDivBox");
    bottomDivBox3.classList.add("bottomDivBox");
    box1p.classList.add("boxP");
    box2p.classList.add("boxP");
    box3p.classList.add("boxP");
    btn.classList.add("btn");
    box1img.classList.add("boxImg");
    box2img.classList.add("boxImg");
    box3img.classList.add("boxImg");

    mainImg.setAttribute("src", item.image);
    box1img.setAttribute("src", "./icons/price.svg");
    box2img.setAttribute("src", "./icons/star.svg");
    box3img.setAttribute("src", "./icons/box.svg");
    
    h1.innerHTML = `${item.category} (${item.rating.count})`;
    item.description.length > 100
        ? item.description.slice(0, 90) + " <b>...read</b>"
        : item.description;
    box1p.innerHTML = item.price;
    box2p.innerHTML = item.rating.rate;
    box3p.innerHTML = item.rating.count;
    btn.innerHTML = "В избранное";
    
    cont.append(mainDiv);
    mainDiv.append(mainImg, middleDiv);
    middleDiv.append(h1, p, bottomDiv, btn);
    bottomDiv.append(bottomDivBox1, bottomDivBox2, bottomDivBox3);
    bottomDivBox1.append(box1img, box1p);
    bottomDivBox2.append(box2img, box2p);
    bottomDivBox3.append(box3img, box3p);
    content.append(b_window_p)
    
    btn.onclick = (e) => {
      e.preventDefault();
      console.log("click");
      box_num.innerHTML++;
      b_window_p.innerHTML = item.category
      b_window_p.push(item.category)
    };
    show_5.onclick = (e) => {
      cont.innerHTML = "";
      a = arr.slice(0, 5);
      e.preventDefault();
      create(a);
    };
    toggle.onclick = () => {
      // if(checkbox.status !== 'checked'){
      //   b_window.classList.remove('w_active')
      //   alert('Not Hi');
      // } else {
        //   b_window.classList.add('w_active')
        //   alert('Hi');
        // }
          b_window.classList.toggle('w_active')
      }
  }
}
show_all.onclick = (e) => {
  cont.innerHTML = "";
  e.preventDefault();
  create(arr);
};
