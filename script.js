// ----------------------------HEADER-----------------------------
//-------------------------Selectores (header)--------------------
const marvelLogo = document.querySelector(".marvel-logo");
const dcLogo = document.querySelector(".dc-logo");
const marvelImage = document.querySelector("#marvel");
const dcImage = document.querySelector("#dc");
const hero1 = document.querySelector("#h-1");
const hero2 = document.querySelector("#h-2");
const hero3 = document.querySelector("#h-3");
let activeMode = "marvel"

//----------------------Funciones (header)-------------------------
function swapLogo() {
  marvelLogo.classList.toggle("move-left");
  dcLogo.classList.toggle("move-right");
  marvelImage.classList.toggle("opacate");
  dcImage.classList.toggle("opacate")
}
function swapTextDc() {
  hero1.textContent = "Wonder Woman";
  hero2.textContent = "Batman";
  hero3.textContent = "Superman";
  activeMode = "dc"
}
function swapTextMarvel() {
  hero1.textContent = "Captain America";
  hero2.textContent = "Iron Man";
  hero3.textContent = "Spiderman";
  activeMode = "marvel";
}
//-------------------------Listener (header)---------------------
marvelLogo.addEventListener("click", handleMarvel);
dcLogo.addEventListener("click", handleDc);
//-------------------------FIN HEADER----------------------------

//--------------------------MAIN---------------------------------
//---------------------Selectores (main)-------------------------
const cartButton = document.querySelector("#cart-button");
const heroBtn1 = document.querySelector("#hero1");
const heroBtn2 = document.querySelector("#hero2");
const heroBtn3 = document.querySelector("#hero3");
const comicCover = document.querySelector("#comic-img");
const addToCart = document.querySelector("#add-to-cart");
const counter = document.querySelector("#counter");
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const checkbox1 = document.querySelector("#feature1");
const checkbox2 = document.querySelector("#feature2");
const checkbox3 = document.querySelector("#feature3");
const biography = document.querySelector(".mid-bio");
const price = document.querySelector("#comic-precio");
const comicTitle = document.querySelector("#comic-titulo");
const step1 = document.querySelector("#mid1");
const step2 = document.querySelector("#mid2");
const step3 = document.querySelector("#mid3");
const step4 = document.querySelector("#mid4");
const step5 = document.querySelector("#mid5");
const step6 = document.querySelector(".thankYouNote");
let heroState = "capitan"
const today = new Date();
let date = today.toLocaleDateString('en-US', { 
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});
const shipping = document.querySelector("#shipping")
const freeShip = document.querySelector("#freeShip");
const extraShip = document.querySelector("#extraShip");
const premiumShip = document.querySelector("#premiumShip");
let shipmentResume = document.querySelector("#shipmentResume");
let shipmentType = ''
let shipmentcost = 0
//Funciones (main)
shipping.innerText = "Please select a shipping method"
function setShipToFree(){
  let targetDay = new Date(date);
  targetDay.setHours(targetDay.getHours() + 72);
  let shippingDay = targetDay.toLocaleDateString('en-US', { 
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});
  shipping.innerText = "Your shippment will arrive the " + shippingDay;
  shipmentType = "You are using Free Shipment. Your product will arrive the: " + shippingDay
  shipmentResume.innerText = shipmentType;
}
function setShipToExtra(){
  let targetDay = new Date(date);
  targetDay.setHours(targetDay.getHours() + 48);
  let shippingDay = targetDay.toLocaleDateString('en-US', { 
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});
  shipping.innerText = "Your shippment will arrive the " + shippingDay;
  shipmentType = "You are using Extra Shipment. Your product will arrive the: " + shippingDay;
  shipmentResume.innerText = shipmentType;
  shipmentcost = 4.99;
}
function setShipToPremium(){
  let targetDay = new Date(date);
  targetDay.setHours(targetDay.getHours() + 24);
  let shippingDay = targetDay.toLocaleDateString('en-US', { 
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});
  shipping.innerText = "Your shippment will arrive the " + shippingDay;
  shipmentType = "You are using Premium Shipment. Your product will arrive the: " + shippingDay;
  shipmentResume.innerText = shipmentType;
  shipmentcost=9.99
}
function handleMarvel() {
  swapLogo()
  swapTextMarvel()
  toCapi()
}
function handleDc() {
  swapLogo()
  swapTextDc()
  toWonderWoman()
}
function nextStep() {
  step1.classList.toggle("hidden");
  step2.classList.toggle("hidden");
}


//-----------------Upper bar buttons functions--------------------

function toCapi() {
  checkbox1.checked = true;
  checkbox2.checked = false;
  checkbox3.checked = false;
  comicCover.src = "resources/capiGrapa.jpg";
  comicCover.alt = "capiGrapa";
  heroState = "capitan"
  comicTitle.textContent = "Captain America. Rogers / Wilson: Captain America 9 #146/9"
  price.textContent = "5,50€"
  biography.innerHTML = '<p><b>Number of pages:</b> 48pp</p><p><b>Authors:</b> Colin Kelley, Jackson Lanzing, Carmen Carnero, Ig Guara.</p><p><b>Description:</b> "The Invader" begins. When he is about to give up the search for the Outer Circle, Steve receives information on his next move. Sharon returns to help in a new mission, while Sam Wilson deals with the consequences of his conflict with the White Wolf. </p>'
}
function toIronMan() {
  checkbox1.checked = true;
  checkbox2.checked = false;
  checkbox3.checked = false;
  comicCover.src = "resources/ironGrapa.jpg";
  comicCover.alt = "ironGrapa";
  heroState = "ironman"
  comicTitle.textContent = "The Invincible Iron Man #146/1"
  price.textContent = "4,60€"
  biography.innerHTML = "<p><b>Number of pages:</b> 40pp</p><p><b>Authors:</b> Gerry Duggan, Juan Manuel Frigeri y Bryan Valenza</p><p><b>Description:</b> Tony Stark has lost everything. His health, his fame, his friends. But Stark doesn't understand that he still has more to lose. It will happen when the assassins start chasing him. It's the beginning of the end, with the Golden Avenger fighting for his life and discovering what it means to fall. </p>";
}
function toSpiderMan() {
  checkbox1.checked = true;
  checkbox2.checked = false;
  checkbox3.checked = false;
  comicCover.src = "resources/spiderGrapa.jpg";
  comicCover.alt = "spiderGrapa";
  heroState = "spiderman"
  comicTitle.textContent = "The Amazing Spiderman: Dark Web #219/10"
  price.textContent = "5,50€"
  biography.innerHTML = "<p><b>Number of pages:</b> 48pp</p><p><b>Authors:</b> Zeb Wells, Ed McGuinness</p><p><b>Description:</b> 'Dark Web' continues. Non-stop spider battles! First, Spiderman vs. Venom, and then Spiderman vs. Abyss, the creature also known as Ben Reilly. What is Abyss's plan and why is The Lethal Protector helping him? </p>";
}
function toWonderWoman() {
  checkbox1.checked = true;
  checkbox2.checked = false;
  checkbox3.checked = false;
  comicCover.src = "resources/wonderGrapa.jpg";
  comicCover.alt = "wonderGrapa";
  heroState = "wonderwoman"
  comicTitle.textContent = "Wonder Woman #39/3"
  price.textContent = "9€"
  biography.innerHTML = "<p><b>Number of pages:</b> 96pp</p><p><b>Authors:</b> Becky Cloonan, Michael Conrad, Vita Ayala, Andy McDonald, Jill Thompson.</p><p><b>Description:</b> Diana returns to Earth and faces her greatest threat: a world that doesn't need her! Lost and without purpose, Wonder Woman travels in search of answers and an old friend. To forge his new path, he needs to stop living in the past and sever his ties to the Sphere of the Gods. This volume also includes the 2021 Annual for the collection, which serves as a prologue to the Amazon Challenge event. </p>";
}
function toBatman() {
  checkbox1.checked = true;
  checkbox2.checked = false;
  checkbox3.checked = false;
  comicCover.src = "resources/batmanGrapa.jpg";
  comicCover.alt = "batmanGrapa";
  heroState = "batman"
  comicTitle.textContent = "Batman #131/1"
  price.textContent = "3,75€"
  biography.innerHTML = "<p><b>Number of pages:</b> 48pp</p><p><b>Authors:</b> Chip Zdarsky y Jorge Jiménez.</p><p><b>Description:</b> New stage! A new turning point for Bruce Wayne. The Dark Knight's nightmares are about to come to life. </p>";
}
function toSuperMan() {
  checkbox1.checked = true;
  checkbox2.checked = false;
  checkbox3.checked = false;
  comicCover.src = "resources/superGrapa.jpg";
  comicCover.alt = "superGrapa";
  heroState = "superman"
  comicTitle.textContent = "Superman #130/20"
  price.textContent = "4,75€"
  biography.innerHTML = "<p><b>Number of pages:</b> 56pp</p><p><b>Authors:</b> Tom Taylor, Kennedy Johnson y Cian Tormey.</p><p><b>Description:</b> Jay's Return! The Revolutionaries and Jon have to stop Henry Bendix once and for all. Is Jay the hero everyone expects him to be? Meanwhile, Superman, Authority and theirs plan the great war against the tyrant Mongul. Battleworld is hanging by a thread! </p>";
}
function handleBtn1() {
  if (activeMode === "marvel") {
    toCapi()
  } else toWonderWoman()
}
function handleBtn2() {
  if (activeMode === "marvel") {
    toIronMan()
  } else toBatman()
}
function handleBtn3() {
  if (activeMode === "marvel") {
    toSpiderMan()
  } else toSuperMan()
}
//-----------------------Load Data and logic algorithm of the cart---------------------
let cartCounter = 0;
let products = [];
let totalPrice = 0;
let productsTittles = [];
function handleCart() {
  cartCounter++;
  counter.textContent = " (" + cartCounter + ")";
  let currentPrice = price.textContent;
  let productPrice = parseFloat(currentPrice.replace(/\./g, "").replace("€", ""));
  totalPrice += productPrice;
  let currentTittle = comicTitle.textContent;
  productsTittles.push(currentTittle);
  let currentAlt = comicCover.alt;
  products.push(currentAlt);
}
//--------------------Load img to final page--------------------
const carritoDiv = document.querySelector(".pedido-container");
const carritoTittleResume = document.querySelector(".formProductDetails");
const finalPrice = document.querySelector("#finalPrice");

function loadCart(){
  for(let i = 0; i < products.length; i++){
    let productCode = products[i];
    let productElement = document.createElement("img");
    productElement.className = "finalPic"
    productElement.src = "resources/" + productCode + ".jpg"
    carritoDiv.appendChild(productElement)
  }
  for(let i = 0; i < productsTittles.length; i++){
    let productTittle = productsTittles[i];
    let productElement = document.createElement("p");
    productElement.textContent = productTittle;
    carritoTittleResume.appendChild(productElement);
  }
  
}
//---------------------Boton de terminos y condiciones-------------------
const termsCheckBox = document.querySelector("#terms");
const finalBuyButton = document.querySelector("#toBuy");
function activateBuyButton(){
  if(termsCheckBox.checked){
    finalBuyButton.disabled = false;
    finalBuyButton.classList.remove("disabled");
  } else {
    finalBuyButton.disabled = true;
    finalBuyButton.classList.add("disabled");
  }
};
finalBuyButton.addEventListener("click", activateBuyButton)
termsCheckBox.addEventListener("change", activateBuyButton)
//----------------------------------FIN------------------------------------
//-------------------Manejo de checkbox en pagina principal-----------------
function handleCheckbox1() {
  if (checkbox1.checked && activeMode === "marvel" && heroState === "capitan") {
    comicCover.src = "resources/capiGrapa.jpg"
    comicCover.alt = "capiGrapa"
    comicTitle.textContent = "Captain America. Rogers / Wilson: Captain America 9 #146/9"
    price.textContent = "5,50€"
    biography.innerHTML = '<p><b>Number of pages:</b> 48pp</p><p><b>Authors:</b> Colin Kelley, Jackson Lanzing, Carmen Carnero, Ig Guara.</p><p><b>Description:</b> "The Invader" begins. When he is about to give up the search for the Outer Circle, Steve receives information on his next move. Sharon returns to help in a new mission, while Sam Wilson deals with the consequences of his conflict with the White Wolf. </p>'
  } else if (checkbox1.checked && activeMode === "marvel" && heroState === "ironman") {
    comicCover.src = "resources/ironGrapa.jpg"
    comicCover.alt = "ironGrapa"
    comicTitle.textContent = "The Invincible Iron Man #146/1"
    price.textContent = "4,60€"
    biography.innerHTML = "<p><b>Number of pages:</b> 40pp</p><p><b>Authors:</b> Gerry Duggan, Juan Manuel Frigeri y Bryan Valenza</p><p><b>Description:</b> Tony Stark has lost everything. His health, his fame, his friends. But Stark doesn't understand that he still has more to lose. It will happen when the assassins start chasing him. It's the beginning of the end, with the Golden Avenger fighting for his life and discovering what it means to fall. </p>";
  } else if (checkbox1.checked && activeMode === "marvel" && heroState === "spiderman") {
    comicCover.src = "resources/spiderGrapa.jpg"
    comicCover.alt = "spiderGrapa"
    comicTitle.textContent = "The Amazing Spiderman: Dark Net #219/10"
    price.textContent = "5,50€"
    biography.innerHTML = "<p><b>Number of pages:</b> 48pp</p><p><b>Authors:</b> Zeb Wells, Ed McGuinness</p><p><b>Description:</b> 'Dark Web' continues. Non-stop spider battles! First, Spiderman vs. Venom, and then Spiderman vs. Abyss, the creature also known as Ben Reilly. What is Abyss's plan and why is The Lethal Protector helping him? </p>";
    //DC
  } else if (checkbox1.checked && activeMode === "dc" && heroState === "wonderwoman") {
    comicCover.src = "resources/wonderGrapa.jpg"
    comicCover.alt = "wonderGrapa"
    comicTitle.textContent = "Wonder Woman #39/3"
    price.textContent = "9€"
    biography.innerHTML = "<p><b>Number of pages:</b> 96pp</p><p><b>Authors:</b> Becky Cloonan, Michael Conrad, Vita Ayala, Andy McDonald, Jill Thompson.</p><p><b>Descripction:</b> Diana returns to Earth and faces her greatest threat: a world that doesn't need her! Lost and without purpose, Wonder Woman travels in search of answers and an old friend. To forge his new path, he needs to stop living in the past and sever his ties to the Sphere of the Gods. This volume also includes the 2021 Annual for the collection, which serves as a prologue to the Amazon Challenge event. </p>";
  } else if (checkbox1.checked && activeMode === "dc" && heroState === "batman") {
    comicCover.src = "resources/batmanGrapa.jpg"
    comicCover.alt = "batmanGrapa"
    comicTitle.textContent = "Batman #131/1"
    price.textContent = "3,75€"
    biography.innerHTML = "<p><b>Number of pages:</b> 48pp</p><p><b>Authors:</b> Chip Zdarsky y Jorge Jiménez.</p><p><b>Description:</b> New stage! A new turning point for Bruce Wayne. The Dark Knight's nightmares are about to come to life. </p>";
  } else if (checkbox1.checked && activeMode === "dc" && heroState === "superman") {
    comicCover.src = "resources/superGrapa.jpg"
    comicCover.alt = "superGrapa"
    comicTitle.textContent = "Superman #130/20"
    price.textContent = "4,75€"
    biography.innerHTML = "<p><b>Number of pages:</b> 56pp</p><p><b>Authors:</b> Tom Taylor, Kennedy Johnson y Cian Tormey.</p><p><b>Description:</b> Jay's Return! The Revolutionaries and Jon have to stop Henry Bendix once and for all. Is Jay the hero everyone expects him to be? Meanwhile, Superman, Authority and theirs plan the great war against the tyrant Mongul. Battleworld is hanging by a thread! </p>";
  }
};
function handleCheckbox2() {
  if (checkbox2.checked && activeMode === "marvel" && heroState === "capitan") {
    comicCover.src = "resources/capiTomo.jpg"
    comicCover.alt = "capiTomo"
    comicTitle.textContent = "Captain America: The Winter Soldier"
    price.textContent = "30€"
    biography.innerHTML = "<p><b>Number of pages:</b> 544pp</p><p><b>Authors:</b> Ed Brubaker, Steve Epting y Michael Lark.</p><p><b>Description:</b> For more than fifty years, the Soviet Union had a covert agent: an undetectable assassin known as The Winter Soldier. Now he's back, working under General Lukin, who has managed to get hold of a Cosmic Cube taken from the Red Skull. Captain America has sworn to take down Lukin, but along the way he finds himself pitted against The Winter Soldier, whose true identity hides the biggest secret in the Marvel Universe in over half a century. </p>"
  } else if (checkbox2.checked && activeMode === "marvel" && heroState === "ironman") {
    comicCover.src = "resources/ironTomo.jpg"
    comicCover.alt = "ironTomo"
    comicTitle.textContent = "The Invincible Iron Man. Looking Fordward"
    price.textContent = "45€"
    biography.innerHTML = '<p><b>Number of pages:</b> 512pp</p><p><b>Authors:</b> Kurt Busiek y Sean Chen.</p><p><b>Description:</b> Tony Stark returns to the Marvel Universe to restore Iron Man to its brilliance. As Tony rebuilds his corporation from the ground up, enemies old and new remind him that the job is never done. Romance, rivalry and robots will keep Tony busy, while he helps Carol Danvers to fight her worst enemy: alcohol. Includes crosses with other series. </p>';
  } else if (checkbox2.checked && activeMode === "marvel" && heroState === "spiderman") {
    comicCover.src = "resources/spiderTomo.jpg"
    comicCover.alt = "spiderTomo"
    comicTitle.textContent = "The Amazing Spiderman. The death of Gwen Stacy"
    price.textContent = "49,95€"
    biography.innerHTML = "<p><b>Number of pages:</b> 624pp</p><p><b>Authors:</b> Roy Thomas, Gerry Conway, John Romita y Stan Lee.</p><p><b>Description:</b> The most dramatic event in the life of Spider-Man! In 1972, a nineteen-year-old named Gerry Conway became the successor to Stan Lee, the genius who had brought the wall-crawler to life. Together with John Romita, he returned the wall-crawler to its essence, but he did much more: convinced that the hero's girlfriend was a hindrance to him, he got rid of the adorable Gwen Stacy, in a saga that impacted and continues to impact generations of readers. and that changed comic book history forever. Live the night Gwen Stacy died.</p>";
    //DC
  } else if (checkbox2.checked && activeMode === "dc" && heroState === "wonderwoman") {
    comicCover.src = "resources/wonderTomo.jpg"
    comicCover.alt = "wonderTomo"
    comicTitle.textContent = "Wonder Woman: The Spirit of Truth"
    price.textContent = "12,50€"
    biography.innerHTML = '<p><b>Number of pages:</b> 72pp</p><p><b>Authors:</b> Alex Ross y Paul Dini.</p><p><b>Description:</b> When Wonder Woman sets out to help innocents in the Third World, she realizes that the cultural gulf that separates her from them stands between her and those she seeks to help, seeing her as a product of Western culture, despite its Amazonian origin. After seeking the advice of her best friend, Superman, she decides to integrate into those towns that reject her in order to better understand them and be understood. </p>'
  } else if (checkbox2.checked && activeMode === "dc" && heroState === "batman") {
    comicCover.src = "resources/batmanTomo.jpg"
    comicCover.alt = "batmanTomo"
    comicTitle.textContent = "Batman: The Dark Knigth Returns"
    price.textContent = "32€"
    biography.innerHTML = '<p><b>Number of pages:</b> 240pp</p><p><b>Authors:</b> Frank Miller, Klaus Janson y Lynn Varley.</p><p><b>Description:</b> An old and tired Bruce Wayne, retired 10 years ago after the death of his disciple Robin from his life as a superhero, decides to return to wearing the bat mask once more when the latest events in Gotham City make him recapitulate his decision to abandon his role of street watcher. </p>'
  } else if (checkbox2.checked && activeMode === "dc" && heroState === "superman") {
    comicCover.src = "resources/superTomo.jpg"
    comicCover.alt = "superTomo"
    comicTitle.textContent = "Superman: Red Son"
    price.textContent = "28€"
    biography.innerHTML = "<p><b>Number of pages:</b> 168pp</p><p><b>Authors:</b> Mark Millar, Dave Johnson y Kilian Plunkett.</p><p><b>Description:</b> In this version of the well-known story, a certain Kryptonian rocket crashes on Earth, carrying a baby who will one day become the most powerful being on the planet. But his ship doesn't crash in America. It doesn't grow in Smallville, Kansas. Instead, he finds his home on a collective farm in the Soviet Union.</p>"
  }
};
function handleCheckbox3() {
  if (checkbox3.checked && activeMode === "marvel" && heroState === "capitan") {
    comicCover.src = "resources/capiCgc.jpg"
    comicCover.alt = "capiCgc"
    comicTitle.textContent = "Captain America Comics #1"
    price.textContent = "1.500.000€"
    biography.innerHTML = '<p><b>Number of pages:</b> 64pp</p><p><b>Authors:</b> Joe Simon, Jack Kirby, Ed Herron y Al Liederman.</p><p><b>Description:</b> Origin and first appearance of Captain America, Bucky and Red Skull. Young Steve Rogers is a weakling who wants to join the army to fight in World War II. After being rejected, he volunteers for an experiment that grants him superhuman abilities. With the help of British secret agent Bucky Barnes, he becomes Captain America and fights against the forces of evil led by the villainous Red Skull. </p>';
  } else if (checkbox3.checked && activeMode === "marvel" && heroState === "ironman") {
    comicCover.src = "resources/ironCgc.jpg"
    comicCover.alt = "ironCgc"
    comicTitle.textContent = "Tales of Suspense #39: Iron Man is born"
    price.textContent = "375.000€"
    biography.innerHTML = "<p><b>Number of pages:</b> 64pp</p><p><b>Authors:</b> Stan Lee, Larry Lieber, Don Heck, Steve Ditko y Jack Kirby.</p><p><b>Description:</b> Origin and first appearance of Iron Man. In a military defense laboratory, the millionaire inventor Tony Stark presents his latest creations. Soon after, in Vietnam, Stark is captured by the evil Wong-Chu and forced to build weapons for the communist insurgency. Together with a famous physicist, Stark develops armor to save his life and escape captivity. Turned into Iron Man, he fights against Wong-Chu's forces and vows to avenge his friend's death. </p>";
  } else if (checkbox3.checked && activeMode === "marvel" && heroState === "spiderman") {
    comicCover.src = "resources/spiderCgc.jpg"
    comicCover.alt = "spiderCgc"
    comicTitle.textContent = "The Amazing Fantasy #15"
    price.textContent = "3.600.000€"
    biography.innerHTML = '<p><b>Number of pages:</b> 64pp</p><p><b>Authors:</b> Stan Lee, Steve Ditko y Jack Kirby.</p><p><b>Description:</b> Origin and first appearance of Spiderman (Peter Parker). Also origin of Uncle Ben and Aunt May. Peter Parker is a high school student who gains supernatural abilities after being bitten by a radioactive spider. At the same time, his uncle is murdered, leading him to take on the responsibility of being a masked hero. </p>';
    //DC
  } else if (checkbox3.checked && activeMode === "dc" && heroState === "wonderwoman") {
    comicCover.src = "resources/wonderCGC.jpg"
    comicCover.alt = "wonderCGC"
    comicTitle.textContent = "All Star Comic #8"
    price.textContent = "940.000€"
    biography.innerHTML = '<p><b>Number of pages:</b> 64pp</p><p><b>Authors:</b> William Moulton Marston y H. G. Peter.</p><p><b>Description:</b> Origin and first appearance of Wonder Woman. Also, Starman and Doctor Midnight join the Justice Society of America and Green Lantern becomes an Honorary Member. </p>';
  } else if (checkbox3.checked && activeMode === "dc" && heroState === "batman") {
    comicCover.src = "resources/batmanCgc.jpg"
    comicCover.alt = "batmanCgc"
    comicTitle.textContent = "Detective Comics #27: The Case of the Quemical Syndicate"
    price.textContent = "1.450.000€"
    biography.innerHTML = '<p><b>Number of pages:</b> 64pp</p><p><b>Authors:</b> Bob Kane y Bill Finger.</p><p><b>Description:</b> First appearance of Batman (Bruce Wayne) and Commissioner Gordon. In his first case, Batman investigates the murder of a chemical magnate, discovering that one of his associates murdered him to steal the secret contracts that would leave him sole owner of the Apex Chemical Corporation. </p>';
  } else if (checkbox3.checked && activeMode === "dc" && heroState === "superman") {
    comicCover.src = "resources/superCgc.jpg"
    comicCover.alt = "superCgc"
    comicTitle.textContent = "Action Comics #1: Superman, Champion of the Oppressed"
    price.textContent = "3.180.000€"
    biography.innerHTML = '<p><b>Number of pages:</b> 64pp</p><p><b>Authors:</b> Jerry Siegel, Joe Shuster, Jack Adler y Homer Fleming.</p><p><b>Description:</b> A space ship from a destroyed world lands on Earth and its occupant becomes Superman. In addition, a scientific explanation of the powers of this being that will become the greatest hero on earth is given. </p>';
  }
};
//-------------------Event Listeners (main)----------------------
heroBtn1.addEventListener("click", handleBtn1)
heroBtn2.addEventListener("click", handleBtn2)
heroBtn3.addEventListener("click", handleBtn3)
addToCart.addEventListener("click", handleCart)
freeShip.addEventListener("change", setShipToFree)
extraShip.addEventListener("change", setShipToExtra)
premiumShip.addEventListener("change", setShipToPremium)
//----------------------Checkboxes (main)-------------------------
checkbox1.checked = true;
checkbox2.checked = false;
checkbox3.checked = false;
let lastChecked = checkbox1;
function setLastChecked(){
  if(checkbox1.checked == true){
    lastChecked = checkbox1;
  } else if (checkbox2.checked == true){
    lastChecked = checkbox2;
  } else if (checkbox3.checked == true){
    lastChecked = checkbox3;
  }
}
checkboxes.forEach(function(checkbox) {
  checkbox.addEventListener('change', function() {
    
      checkboxes.forEach(function(siblingCheckbox) {
        if (siblingCheckbox !== checkbox) {
          siblingCheckbox.checked = false;
        }
      });
    if (checkbox1.checked == false && checkbox2.checked == false && checkbox3.checked == false) {
    lastChecked.checked = true;
  }
  setLastChecked()});
});
//--------------CHECKBOX DE GRAPA------------------
checkbox1.addEventListener("change", handleCheckbox1)
//---------------CHECKBOX DE TOMO------------------
checkbox2.addEventListener("change", handleCheckbox2)
//---------------CHECKBOX DE CGC-------------------
checkbox3.addEventListener("change", handleCheckbox3)

//-----------------FIN MAIN----------------------

const bar = document.querySelector("#bar");
const toStep3 = document.querySelector("#toStep3");
const toStep4 = document.querySelector("#toStep4");
const toStep5 = document.querySelector("#toStep5");
const toStep6 = document.querySelector("#toBuy");
const toBuy = document.querySelector(".toBuyStuff");
const clearAll = document.querySelectorAll("input");
const clearBtn = document.querySelectorAll(".buttonClear");
const clearBtnShip = document.querySelector("#btnShip");

//-----------------Input`s atributte--------------------------
const userBox = document.querySelector("#userBox");


//----------------------Function (footer)----------------------
let progress = 0;
function fillbar() {
  if (progress < 100) {
    let percentagePerPage = 20;
    progress += percentagePerPage;
    bar.style.width = progress + '%';
  } else {
    progress = 0;
    bar.style.width = progress + '%';
  }
}
function setAllToNormal() {
  marvelLogo.classList.remove("move-left");
  marvelImage.classList.remove("opacate");
  dcLogo.classList.remove("move-right");
  dcImage.classList.remove("opacate");
  marvelLogo.removeEventListener("click", handleMarvel);
  dcLogo.removeEventListener("click", handleDc);
  heroBtn1.removeEventListener("click", handleBtn1);
  heroBtn2.removeEventListener("click", handleBtn2);
  heroBtn3.removeEventListener("click", handleBtn3);
  addToCart.removeEventListener("click", handleCart);
  checkbox1.removeEventListener("change", handleCheckbox1)
  checkbox2.removeEventListener("change", handleCheckbox2)
  checkbox3.removeEventListener("change", handleCheckbox3)
}
function nextStep2() {
  step2.classList.toggle("hidden");
  step3.classList.toggle("hidden");
}
function nextStep3() {
  step3.classList.toggle("hidden");
  step4.classList.toggle("hidden");
}
function nextStep4(){
  step4.classList.toggle("hidden");
  step5.classList.toggle("hidden");
}
function nextStep5() {
  toBuy.classList.toggle("hidden");
  step6.classList.toggle("hidden");
  setTimeout(function() {location.reload()}, 4000);
}

function clear() {
  for (let i = 0; i < clearAll.length; i++) {
    let currentInput = clearAll[i];
    currentInput.value = "";
  }
}
const inputFree = document.querySelector("#freeShip");

const inputExtra = document.querySelector("#extraShip");

const inputPremium = document.querySelector("#premiumShip");
function uncheckAll(){
  inputFree.checked = false;
  inputExtra.checked = false;
  inputPremium.checked = false;
}
//Funcion que agrega a la form de telefono el codigo dependiendo de la country elegida
document.getElementById('countrySelect').addEventListener('change', function() {
  let countrySelect = document.getElementById('countrySelect');
  let phoneNumberInput = document.getElementById('phoneNumberInput');
  let selectedCountry = countrySelect.value;
  let phoneCode = '';
  
  switch (selectedCountry) {
    case 'Andorra':
      phoneCode = '+376';
      break;
    case 'Spain':
      phoneCode = '+34';
      break;
    case 'Germany':
      phoneCode = '+49';
      break;
    case 'France':
      phoneCode = '+33';
      break;
    case 'Greece':
      phoneCode = '+30';
      break;
    default:
      break;
  }
  phoneNumberInput.value = phoneCode;
});


//Validation JS forms//

//Username//
const inputUser = document.querySelector("#inputUser");

inputUser.addEventListener('blur', function() {
  
  let value = inputUser.value;
  if(value.length < 5) {
    inputUser.setCustomValidity('Value must be at least 5 characters.');
    inputUser.reportValidity();
    return;
  } ;
  if(value.length > 20) {
    inputUser.setCustomValidity('Value cannot be longer than 20 characters.');
    inputUser.reportValidity();
    return;
  }
  let pattern = /[^' ']+/;
  if (!pattern.test(value)) {
    inputUser.setCustomValidity('The value cannot contain blank spaces.');
    inputUser.reportValidity();
    return;
  }
  inputUser.setCustomValidity('');
});

//Email//

const inputEmail = document.querySelector("#inputEmail");


inputEmail.addEventListener('blur', function() {
  let value = inputEmail.value;
  if(value.length > 50) {
    inputEmail.setCustomValidity('Value cannot be longer than 50 characters.');
    inputEmail.reportValidity();
    return;
  }
  
  let pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  if (!pattern.test(value)) {
    inputEmail.setCustomValidity('This email its not valid.');
    inputEmail.reportValidity();
    return;
  }
  
  inputEmail.setCustomValidity('');
});

//Password//

const inputPassword = document.querySelector("#passw");


inputPassword.addEventListener('blur', function() {
let value = inputPassword.value;
  if(value.length < 8) {
  inputPassword.setCustomValidity("Password should be at least 8 characters");
  inputPassword.reportValidity();
    return;
}
else if(value.length > 30) {
  inputPassword.setCustomValidity("Password should not exceed 30 characters");
  inputPassword.reportValidity();
  return;
}
else if (!/[A-Z]/.test(value)) {
  inputPassword.setCustomValidity("Password should have at least 1 uppercase");
  inputPassword.reportValidity();
  return;
}
else if (!/[a-z]/.test(value)){
  inputPassword.setCustomValidity("Password should have at least 1 lowercase");
  inputPassword.reportValidity();
  return;
}
else if (!/[0-9]/.test(value)) {
 inputPassword.setCustomValidity("Password should have at least 1 number");
  inputPassword.reportValidity();
  return;
}
else if (!/[^\w\s]/.test(value)) {
  inputPassword.setCustomValidity("Password should have at least 1 special character");
  inputPassword.reportValidity();
  return;
}
   inputPassword.setCustomValidity(''); 
});

//Confirm Password//

const inputConfirm = document.querySelector("#confirmPassw");


inputConfirm.addEventListener('blur', function() {
  let value = inputConfirm.value;
  if (value !== inputPassword.value) {
    inputConfirm.setCustomValidity("Password is not the same");
    inputConfirm.reportValidity();
    return;
  }
  inputConfirm.setCustomValidity(''); 
});

//Next step 2//

const confirmPassword = document.querySelector('#confirmPassw').value;
const myForm = document.querySelector("#myForm");

myForm.addEventListener("submit", function(event) {
  
  if (!inputUser.value || !inputEmail.value || !inputPassword.value || !inputConfirm) {
    event.preventDefault();
    alert('All fields are required!'); 
  }
  
  else {event.preventDefault();
        saveData();
        nextStep2();
        fillbar(); 
       }
});

// Object to save data Profile//
let userProfile = {};
function saveData() {
  userProfile.userName = inputUser.value;
  userProfile.userEmail = inputEmail.value;
  userProfile.userPassword = inputPassword.value;
  userProfile.userConfirm= inputConfirm.value;
}

//Address form//

//Name//

const inputName = document.querySelector("#inputName");

inputName.addEventListener('blur', function() {
  let value = inputName.value;
  
  if(value.length > 20) {
    inputName.setCustomValidity('Value cannot be longer than 20 characters.');
    inputName.reportValidity();
    return;
  }
  
  inputName.setCustomValidity('');
});

//Last Name//

const inputLastName = document.querySelector("#inputLastName");

inputLastName.addEventListener('blur', function() {
  let value = inputLastName.value;
  
  if(value.length > 20) {
    inputLastName.setCustomValidity('Value cannot be longer than 20 characters.');
    inputLastName.reportValidity();
    return;
  }
  
  inputLastName.setCustomValidity('');
});

//Birthday//

const inputBirthday = document.querySelector("#inputBirthday");


//Address//

const inputAddress = document.querySelector("#inputAddress");

inputAddress.addEventListener('blur', function() {
  let value = inputAddress.value;
  
  if(value.length > 50) {
    inputAddress.setCustomValidity('Value cannot be longer than 50 characters.');
    inputAddress.reportValidity();
    return;
  }
  
  inputAddress.setCustomValidity('');
});

//Second Address//

const inputSecondAddress = document.querySelector("#inputSecondAddress");


inputSecondAddress.addEventListener('blur', function() {
  let value = inputSecondAddress.value;
  
  if(value.length > 50) {
    inputSecondAddress.setCustomValidity('Value cannot be longer than 50 characters.');
    inputSecondAddress.reportValidity();
    return;
  }
  
  inputSecondAddress.setCustomValidity('');
});

//Country//

const inputCountry = document.querySelector("#countrySelect");

//PostCode//

const inputPostCode = document.querySelector("#inputPostCode");

inputPostCode.addEventListener('blur', function() {
  let value = inputPostCode.value;
  
  if(value.length < 5) {
    inputPostCode.setCustomValidity('Value must be at least 5 characters.');
    inputPostCode.reportValidity();
    return;
  }
  
  inputPostCode.setCustomValidity('');
});

//PhoneNumber//

const inputPhoneNumber = document.querySelector("#phoneNumberInput");


inputPhoneNumber.addEventListener('blur', function() {
  let value = inputPhoneNumber.value;
  if (!/^(0034|\+34)?(\d\d\d)-? ?(\d\d)-? ?(\d)-? ?(\d)-? ?(\d\d)$/.test(value) && !/^(00376|\+376)?(\d\d\d)-? ?(\d\d)-? ?(\d)-? ?(\d)-? ?(\d\d)$/.test(value) && !/^(0049|\+49)?(\d\d\d)-? ?(\d\d)-? ?(\d)-? ?(\d)-? ?(\d\d)$/.test(value) && !/^(0033|\+33)?(\d\d\d)-? ?(\d\d)-? ?(\d)-? ?(\d)-? ?(\d\d)$/.test(value) && !/^(0030|\+30)?(\d\d\d)-? ?(\d\d)-? ?(\d)-? ?(\d)-? ?(\d\d)$/.test(value)) {
    inputPhoneNumber.setCustomValidity('This phone number its not valid.');
    inputPhoneNumber.reportValidity();
    return;
  }
  
  inputPhoneNumber.setCustomValidity('');
});

//checkBox//

const inputCheckBoxAddress = document.querySelector("#checkAddress");

// next Step 3//

const myForm2 = document.querySelector("#myForm2");
myForm2.addEventListener("submit", function(event) {
  if (!inputName.value || !inputLastName.value || !inputBirthday.value || !inputAddress.value|| !inputPostCode.value || !inputPhoneNumber.value) {
    event.preventDefault();
    alert('All fields are required!'); 
  }
  else {event.preventDefault();
  saveDataAddress();
  nextStep3();
  fillbar();
}
});

// Object to save data Address//
let userAddress = {};
function saveDataAddress() {
  userAddress.userfirstName = inputName.value;
  userAddress.userLastName = inputLastName.value;
  userAddress.userBirthday = inputBirthday.value;
  userAddress.userFirstAddress = inputAddress.value;
  userAddress.userSecondAddress = inputSecondAddress.value;
  userAddress.userPostCode = inputPostCode.value;
  userAddress.userCountry = inputCountry.value;
  userAddress.userPhoneNumber = inputPhoneNumber.value;
  userAddress.usercheckboxAddress = inputCheckBoxAddress.value;
}

//Shipping Types//



//Next Step 4//

const myForm3 = document.querySelector("#myForm3");
myForm3.addEventListener("submit", function(event) {
  if (!inputFree.checked && !inputExtra.checked && !inputPremium.checked) {
    event.preventDefault();
    alert("Please select a shipping option.");
    return;
  } else {
  event.preventDefault();
  saveDataShippingTypes();
  nextStep4();
  let total = shipmentcost + totalPrice;
  total = total.toLocaleString('es-ES')
  finalPrice.textContent = "Final price: " + total + "€";
  fillbar();
}
  });

//Object to save Shipping types//

let userShippingTypes = {};
function saveDataShippingTypes() {
  if (inputFree.checked) {
    userShippingTypes.userShippingType = inputFree.value;
  } else if (inputExtra.checked) {
    userShippingTypes.userShippingType = inputExtra.value;
  } else if (inputPremium.checked) {
    userShippingTypes.userShippingType = inputPremium.value;
  } 
}



//Timer (footer)
//Boton Carro, inicio de timer
let duration = 300;
let display = document.querySelectorAll("#timer");
cartButton.addEventListener("click", function() {
  document.documentElement.classList.toggle('checked-out');
  for (let i = 0; i < display.length; i++) {
  startTimer(duration, display[i]); 
  }
  setTimeout(function() { fillbar(); loadCart(); }, 1000);
  setTimeout(function() { nextStep(); setAllToNormal(); }, 1100);
})
let timePassed = 0;
const burbuja4 = document.querySelectorAll("#bubble-4");
const burbuja3 = document.querySelectorAll("#bubble-3");
const burbuja2 = document.querySelectorAll("#bubble-2");
const burbuja1 = document.querySelectorAll("#bubble-1");
const burbujaOut = document.querySelectorAll("#bubbleOut");
function startTimer(duration, pantalla){
  let timer = duration;
  let minutes;
  let seconds;
  
  setInterval(function () {
    timePassed = timePassed + 1 / 3;
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    pantalla.textContent = minutes + ":" + seconds;
    
    if(--timer < 0){
      location.reload()
    }
  }, 1000);
  setTimeout(function() {
  for(let i = 0; i < burbuja4.length; i++){
    burbuja4[i].classList.toggle("hidden"); setTimeout(function() {burbuja4[i].classList.toggle("hidden")}, 5000)}}, 60000);
setTimeout(function(){
  for(let i = 0; i < burbuja3.length; i++){
  burbuja3[i].classList.toggle("hidden");
setTimeout(function(){
burbuja3[i].classList.toggle("hidden")}, 5000)}}, 120000);
setTimeout(function(){
  for(let i = 0; i < burbuja2.length; i++){
  burbuja2[i].classList.toggle("hidden");
setTimeout(function(){
  burbuja2[i].classList.toggle("hidden")}, 5000)}}, 180000);
setTimeout(function(){
  for(let i = 0; i < burbuja1.length; i++) {
  burbuja1[i].classList.toggle("hidden");
  setTimeout(function(){
    burbuja1[i].classList.toggle("hidden")}, 5000)}}, 240000);
setTimeout(function(){
  for(let i = 0; i < burbuja1.length; i++) {
  burbujaOut[i].classList.toggle("hidden");
  setTimeout(function(){
    burbujaOut[i].classList.toggle("hidden")}, 5000)}}, 300000);
}
const howMuchTime = document.querySelector("#how-much-time");
function showHowMuchTime(){
  timePassed = timePassed;
  let minutes = parseInt(timePassed / 60, 10);
  let seconds = parseInt(timePassed % 60, 10);
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  howMuchTime.innerText = "You took " + minutes + " minutes and " + seconds + " seconds to finish your purchase";
}
//Timer FIN
//Step 6//
toStep6.addEventListener("click", function() {
  nextStep5();
  fillbar();
  showHowMuchTime()
})
//GiftBox INICIO
const giftCheckbox = document.querySelector("#gift-checkbox");
const giftBoxes = document.querySelectorAll(".giftBox");
function handleGiftBox(){
  giftBoxes[0].classList.toggle("hidden");
  giftBoxes[1].classList.toggle("hidden");
}
giftCheckbox.addEventListener("change", handleGiftBox);
//GiftBox FIN

clearBtn[0].addEventListener("click", clear);
clearBtn[1].addEventListener("click", clear);
clearBtnShip.addEventListener("click", uncheckAll);




