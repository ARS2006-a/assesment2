// 1 create tag
const v = document.createElement("h3");

// 2 put content
v.textContent = "added from js";

// 3 where we have to put find its node
const h3 = document.getElementsByClassName("cnt");

// 4.
h3[0].appendChild(v);
{
    /* <div>
    <h2 class = "sd">fgfgfg</h2>
    </div>*/

}

const div = document.createElement("div");
const h2 = document.createElement("h2");

h2.textContent = "Anything";
h2.classList.add = "sd";
div.appendChild(h2);

document.body.appendChild(div);



{/*
 <div>
    <button class="a">Increment</button>
    <button>Decrement</button>h2j4aBnaDqKeY
    <button>Reset</button>
   </div>*/ 
    
}
const div1 = document.createElement("div");
const b1 = document.createElement("button");
const b2 = document.createElement("button");
const b3 = document.createElement("button");

b1.textContent="increment";
b2.textContent="decrement";
b3.textContent="reset";

div1.appendChild(b1);
div1.appendChild(b2);
div1.appendChild(b3);

// document.body.appendChild(div1);


    let img = document.createElement("img");
        img.id = "MyImage"; 
    img.alt = "Description of the image"; 
    img.height = 200; 
    img.width = 300; 
        document.body.appendChild(img); 

    let img = document.createElement("img");
img.setAttribute('id', 'myImageId');
img.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRTsf29HUi0nvaSdHHo5EHbonRTNfJHurM7A&s'
img.setAttribute('alt', 'Description of the image');
img.setAttribute('height', '200'); 
img.setAttribute('width', '300');
document.body.appendChild(img); 

 
Create a new image element
const imgElement = document.createElement('img');

Create attribute nodes
const idAttr = document.createAttribute('id');
idAttr.value = 'myImageIdAlternative';

const srcAttr = document.createAttribute('src');
srcAttr.value = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRTsf29HUi0nvaSdHHo5EHbonRTNfJHurM7A&s';

const altAttr = document.createAttribute('alt');
altAttr.value = 'Another image description';

const heightAttr = document.createAttribute('height');
heightAttr.value = '150';

const widthAttr = document.createAttribute('width');
widthAttr.value = '250';

// Append attribute nodes to the image element
imgElement.setAttributeNode(idAttr);
imgElement.setAttributeNode(srcAttr);
imgElement.setAttributeNode(altAttr);
imgElement.setAttributeNode(heightAttr);
imgElement.setAttributeNode(widthAttr);

// Append the image to a parent element
document.body.appendChild(imgElement);
     

    const imgElement = document.createElement('img');
        imgElement.id = 'myImage';
    imgElement.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVRoLY3SSqU0HpNAP_-uwfp98RSCrxFqk5Gw&s';
    imgElement.alt = 'Description of the image';
    imgElement.height = 300; // in pixels
    imgElement.width = 300;  // in pixels
    document.body.appendChild(imgElement);


    const incButtton = document.querySelector("button");
    console.log(incButton);
    incButtton.addEventListener("click",()  => {
        console.log("button clicked");
    });