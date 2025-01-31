const hourEl = document.querySelector(".hour");
const minEl = document.querySelector(".min");
const secEl = document.querySelector(".sec");

let totalSeconds = parseInt(hourEl.textContent) * 3600 + parseInt(minEl.textContent) * 60 + parseInt(secEl.textContent);

function updateTimer() {
    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = totalSeconds % 60;

    hourEl.textContent = String(hours).padStart(2, '0');
    minEl.textContent = String(minutes).padStart(2, '0');
    secEl.textContent = String(seconds).padStart(2, '0');
}

let countdown = setInterval(() => {
    if (totalSeconds > 0) {
        totalSeconds--;
        updateTimer();
    } else {
        clearInterval(countdown);
    }
}, 1000);

updateTimer();

// 


const wrapperElemnt = document.querySelector(".famous__wrapper")
async function fetchProducts() {
    try {
        const result = await fetch("http://localhost:5000/products");
        const res = await result.json();
        const products = res.data
        products.forEach(product => {
            let become1 = product.price / 12
            let become = become1.toFixed(3)
            let som = product.price*2
            let som1 = som.toFixed(3)
            wrapperElemnt.appendChild(createCard(product.image, product.name, become, product.price))
        });
    } catch (err) {
        console.log(err);
    }
}
fetchProducts()
let newElement
function createCard(img, name, become, price) {
    newElement = document.createElement("div")
    newElement.classList.add("card2")
    newElement.innerHTML = `
            <div class="img">
                <i class="fa-regular fa-heart"></i>
                <svg class="comparison" data-v-eb40fcb7="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="none"
                                fill="grey" class="icon icon__comparison">
                                <rect data-v-eb40fcb7="" x="3.25" y="15" width="2.5" height="7" rx="1.25"></rect>
                                <rect data-v-eb40fcb7="" x="8.25" y="3" width="2.5" height="19" rx="1.25"></rect>
                                <rect data-v-eb40fcb7="" x="13.25" y="11" width="2.5" height="11" rx="1.25"></rect>
                                <rect data-v-eb40fcb7="" x="18.25" y="7" width="2.5" height="15" rx="1.25"></rect>
                </svg>
                <img src="${img}" alt="">
            </div>
            <div class="all">
                <h4 class="name">${name}</h4>
                <h5 class="price">${price}$</h5>
                <h6 class="become">${become}$ x 12oyiga</h6>
                <div class="shop">
                    <button class="btn"><svg data-v-03500956="" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class="icon icon__cart">
                    <path data-v-03500956=""
                        d="M5.625 18.75C6.48795 18.75 7.1875 18.0504 7.1875 17.1875C7.1875 16.3246 6.48795 15.625 5.625 15.625C4.76206 15.625 4.0625 16.3246 4.0625 17.1875C4.0625 18.0504 4.76206 18.75 5.625 18.75Z">
                    </path>
                    <path data-v-03500956=""
                        d="M15 18.75C15.8629 18.75 16.5625 18.0504 16.5625 17.1875C16.5625 16.3246 15.8629 15.625 15 15.625C14.1371 15.625 13.4375 16.3246 13.4375 17.1875C13.4375 18.0504 14.1371 18.75 15 18.75Z">
                    </path>
                    <path data-v-03500956=""
                        d="M3.125 5H16.7512C16.8427 5 16.9332 5.02011 17.0161 5.0589C17.099 5.0977 17.1724 5.15423 17.231 5.22451C17.2897 5.29479 17.3322 5.37709 17.3555 5.4656C17.3789 5.55412 17.3825 5.64668 17.3661 5.73674L16.0601 12.9242C16.0339 13.0683 15.958 13.1985 15.8456 13.2923C15.7332 13.3861 15.5915 13.4375 15.4451 13.4375H5.18665C5.04034 13.4375 4.89866 13.3862 4.78631 13.2924C4.67395 13.1987 4.59804 13.0686 4.57179 12.9246L2.65034 2.38788C2.6241 2.24394 2.54818 2.11377 2.43583 2.02005C2.32347 1.92633 2.1818 1.875 2.03548 1.875H0.9375"
                        stroke="black" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round" fill="white">
                    </path>
                </svg></button>
                    <button class="btn2">Muddatli to'lov</button>
                </div>
            </div>`
    const heartIcon = newElement.querySelector('.fa-heart');
    heartIcon.addEventListener('click', function () {
        if (heartIcon.classList.contains('fa-regular')) {
            heartIcon.classList.remove('fa-regular');
            heartIcon.classList.add('fa-solid');
            heartIcon.style.transition = "transform 0.2s ease";
        } else {
            heartIcon.classList.remove('fa-solid');
            heartIcon.classList.add('fa-regular');
        }
    });
    const comparisonIcon = newElement.querySelector('.comparison');
    console.log(comparisonIcon);
    comparisonIcon.addEventListener('click', function () {
        let currentFill = comparisonIcon.style.fill;
        if (currentFill === "gray") {
            comparisonIcon.style.fill = "red"; // Agar fill grey bo'lsa, red qil
          } else {
            comparisonIcon.style.fill = "gray"; // Aks holda green qil
          }
    });
    return newElement;
}