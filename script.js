const featuredItemsJS = JSON.parse(featuredItems);

const body4El = document.querySelector(".body_4");
const contentItems = document.querySelectorAll(".content1_image1");
const contentItem2 = document.querySelector(".content2_top_background");
const contentTopBackground = document.querySelector(".content2_top_background");

let count = 0;

featuredItemsJS.forEach((element) => {
  body4El.insertAdjacentHTML(
    "beforeend",
    `
    <div class="${element.content}">
        <div class="content1_image1">
        <img src="${element.img}" alt="picture_man" class="body4_picture1">
        <div class="content1_active">
                <img src="img/content1_active_img.png" alt="" class="content1_active_img">
                <p class="content1_active_p">Add to Cart</p>
        </div>
        </div>
        <div class="content1_bottom">
        <div class="content1__bottom">
        <p class="content1_text1"><strong>${element.title}</strong><br><br></p>
        <p class="content1_text2">${element.discription}</p><br>
        <p class="content1_text3">${element.price}</p>
      </div>
        </div>
    </div>
    
`
  );

  // if (element.img === "img/body4_picture2.png") {
  //   body4El.insertAdjacentHTML(
  //     "beforeend",
  //     `
  //   <div class="${element.content}">
  //     <div class="content2_top_background">
  //       <img src="${element.img}" alt="picture_women" class="content2_top_backgroun_img">
  //       <div class="content1_active">
  //           <img src="img/content1_active_img.png" alt="" class="content1_active_img">
  //           <p class="content1_active_p">Add to Cart</p>
  //       </div>
  //     </div>
  //     <div class="content1_bottom">
  //       <div class="content1__bottom">
  //         <p class="content1_text1"><strong>${element.title}</strong><br><br></p>
  //         <p class="content1_text2">${element.discription}</p><br>
  //         <p class="content1_text3">${element.price}</p>
  //       </div>
  //     </div>
  //   </div>

  //   `
  //   );
  // }
});

const dataProductsJS = JSON.parse(dataProducts);

const contentEl = document.querySelector(".content");
const circleEl = document.querySelector(".circle");
const content1ActiveEl = document.querySelectorAll(".content1_active");

content1ActiveEl.forEach((element) => {
  element.addEventListener("click", function (e) {
    if (element.parentElement.parentElement.className === "content1") {
      contentEl.style.display = "flex";
      circleEl.style.display = "block";
      contentEl.insertAdjacentHTML(
        "beforeend",
        `
      <div class="product">
    <figure>
      <img class="img" src="${featuredItemsJS[0].img}" alt="photo of people">
    </figure>
    <div class="discription">
      <p class="title">${featuredItemsJS[0].title}</p>
      <div class="price">Price:
        <p class="price_">&nbsp;${featuredItemsJS[0].price}</p>
      </div>
      <div class="color">Color:
        <p class="color_">&nbsp;${featuredItemsJS[0].color}</p>
      </div>
      <div class="size">Size:
        <p class="size_">&nbsp;${featuredItemsJS[0].size}</p>
      </div>
      <div class="quantity">Quantity:
        <input class="inputForQuantity" type="number" max="9" min="1">
      </div>
    </div>
    <div class="cancel">
      <img class="vector" src="${featuredItemsJS[0].vector}" alt="button of cancel">
    </div>
  </div>
    `
      );
    }

    if (element.parentElement.parentElement.className === "content2") {
      contentEl.style.display = "flex";
      circleEl.style.display = "block";
      contentEl.insertAdjacentHTML(
        "beforeend",
        `
      <div class="product">
    <figure class="img2">
      <img src="${featuredItemsJS[1].img}" alt="photo of people">
    </figure>
    <div class="discription">
      <p class="title">${featuredItemsJS[1].title}</p>
      <div class="price">Price:
        <p class="price_">&nbsp;${featuredItemsJS[1].price}</p>
      </div>
      <div class="color">Color:
        <p class="color_">&nbsp;${featuredItemsJS[1].color}</p>
      </div>
      <div class="size">Size:
        <p class="size_">&nbsp;${featuredItemsJS[1].size}</p>
      </div>
      <div class="quantity">Quantity:
        <input class="inputForQuantity" type="number" max="9" min="1">
      </div>
    </div>
    <div class="cancel">
      <img class="vector" src="${featuredItemsJS[1].vector}" alt="button of cancel">
    </div>
  </div>
    `
      );
    }
    if (element.parentElement.parentElement.className === "content3") {
      contentEl.style.display = "flex";
      circleEl.style.display = "block";
      contentEl.insertAdjacentHTML(
        "beforeend",
        `
      <div class="product">
    <figure class="img2">
      <img src="${featuredItemsJS[2].img}" alt="photo of people">
    </figure>
    <div class="discription">
      <p class="title">${featuredItemsJS[2].title}</p>
      <div class="price">Price:
        <p class="price_">&nbsp;${featuredItemsJS[2].price}</p>
      </div>
      <div class="color">Color:
        <p class="color_">&nbsp;${featuredItemsJS[2].color}</p>
      </div>
      <div class="size">Size:
        <p class="size_">&nbsp;${featuredItemsJS[2].size}</p>
      </div>
      <div class="quantity">Quantity:
        <input class="inputForQuantity" type="number" max="9" min="1">
      </div>
    </div>
    <div class="cancel">
      <img class="vector" src="${featuredItemsJS[2].vector}" alt="button of cancel">
    </div>
  </div>
    `
      );
    }
    if (element.parentElement.parentElement.className === "content4") {
      contentEl.style.display = "flex";
      circleEl.style.display = "block";
      contentEl.insertAdjacentHTML(
        "beforeend",
        `
      <div class="product">
    <figure class="img2">
      <img src="${featuredItemsJS[3].img}" alt="photo of people">
    </figure>
    <div class="discription">
      <p class="title">${featuredItemsJS[3].title}</p>
      <div class="price">Price:
        <p class="price_">&nbsp;${featuredItemsJS[3].price}</p>
      </div>
      <div class="color">Color:
        <p class="color_">&nbsp;${featuredItemsJS[3].color}</p>
      </div>
      <div class="size">Size:
        <p class="size_">&nbsp;${featuredItemsJS[3].size}</p>
      </div>
      <div class="quantity">Quantity:
        <input class="inputForQuantity" type="number" max="9" min="1">
      </div>
    </div>
    <div class="cancel">
      <img class="vector" src="${featuredItemsJS[3].vector}" alt="button of cancel">
    </div>
  </div>
    `
      );
    }
    if (element.parentElement.parentElement.className === "content5") {
      contentEl.style.display = "flex";
      circleEl.style.display = "block";
      contentEl.insertAdjacentHTML(
        "beforeend",
        `
      <div class="product">
    <figure class="img2">
      <img src="${featuredItemsJS[4].img}" alt="photo of people">
    </figure>
    <div class="discription">
      <p class="title">${featuredItemsJS[4].title}</p>
      <div class="price">Price:
        <p class="price_">&nbsp;${featuredItemsJS[4].price}</p>
      </div>
      <div class="color">Color:
        <p class="color_">&nbsp;${featuredItemsJS[4].color}</p>
      </div>
      <div class="size">Size:
        <p class="size_">&nbsp;${featuredItemsJS[4].size}</p>
      </div>
      <div class="quantity">Quantity:
        <input class="inputForQuantity" type="number" max="9" min="1">
      </div>
    </div>
    <div class="cancel">
      <img class="vector" src="${featuredItemsJS[4].vector}" alt="button of cancel">
    </div>
  </div>
    `
      );
    }
    if (element.parentElement.parentElement.className === "content6") {
      contentEl.style.display = "flex";
      circleEl.style.display = "block";
      contentEl.insertAdjacentHTML(
        "beforeend",
        `
      <div class="product">
    <figure class="img2">
      <img src="${featuredItemsJS[5].img}" alt="photo of people">
    </figure>
    <div class="discription">
      <p class="title">${featuredItemsJS[5].title}</p>
      <div class="price">Price:
        <p class="price_">&nbsp;${featuredItemsJS[5].price}</p>
      </div>
      <div class="color">Color:
        <p class="color_">&nbsp;${featuredItemsJS[5].color}</p>
      </div>
      <div class="size">Size:
        <p class="size_">&nbsp;${featuredItemsJS[5].size}</p>
      </div>
      <div class="quantity">Quantity:
        <input class="inputForQuantity" type="number" max="9" min="1">
      </div>
    </div>
    <div class="cancel">
      <img class="vector" src="${featuredItemsJS[5].vector}" alt="button of cancel">
    </div>
  </div>
    `
      );
    }
  });
});

contentEl.addEventListener("click", function (e) {
  if (e.target.className === "vector") {
    e.target.parentElement.parentElement.remove();
  }
  if (contentEl.children.length === 1) {
    contentEl.style.display = "none";
    circleEl.style.display = "none";
  }
});
