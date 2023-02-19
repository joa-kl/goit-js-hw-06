const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const gallery = document.querySelector(".gallery");
const imagesHTML = images.map((image) => {
  return `<li><img src="${image.url}" alt="{image.alt}"></li>`;
});
gallery.insertAdjacentHTML("beforeend", imagesHTML.join(""));
gallery.style.display = "flex";
gallery.style.flexWrap = "wrap";
const lis = gallery.querySelectorAll("li");
lis.forEach(li => {
  li.style.listStyle = "none";
  li.style.margin = "10px";
  li.style.flexBasis = "calc(30 % - 30px)";
  li.style.maxWidth = "calc(30 % - 30px)";
  li.style.maxHeight = "calc(30 % - 30px)";
});
const imgs = gallery.querySelectorAll("img");
imgs.forEach(img => {
  img.style.width = "100%";
});