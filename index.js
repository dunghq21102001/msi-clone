

function toggleMenu() {
    console.log('s');
    document.getElementById("myDropdown").classList.toggle("show");
    document.body.classList.toggle("no-scroll");

  }

  function toggleTabHeader(tabNumber) {

    var selectedTab = document.getElementById('tab' + tabNumber);

    var tabContents = document.getElementsByClassName('h-tab-content');
    for (var i = 0; i < tabContents.length; i++) {
        if (tabContents[i] !== selectedTab) {
            tabContents[i].style.maxHeight = '0';
        }
    }

    if (selectedTab) {
        if (selectedTab.style.maxHeight) {
            selectedTab.style.maxHeight = null;
            selectedTab.style.maxHeight = selectedTab.scrollHeight + 'px';
        } else {
            selectedTab.style.maxHeight = selectedTab.scrollHeight + 'px';
        }
    }
}

  
document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.f-slide');
    const dots = document.querySelectorAll('.f-dot');
    let currentIndex = 0;

    function showSlide(index) {
        if (index < 0 || index >= slides.length) {
            return;
        }

        slides.forEach(slide => {
            slide.style.display = 'none';
        });

        dots.forEach(dot => {
            dot.classList.remove('active');
        });

        slides[index].style.display = 'block';
        dots[index].classList.add('active');
    }

    showSlide(currentIndex);

    dots.forEach((dot, index) => {
        dot.addEventListener('click', function () {
            showSlide(index);
            currentIndex = index;
        });
    });


    setInterval(function () {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }, 3000);
});


const futureOfSmartList = [
    { name: 'EV Charger', imgUrl: 'https://storage-asset.msi.com/global/picture/banner/banner_1702950131edc2f0228a84269a6a00e84756392975.png' },
    { name: 'Server', imgUrl: 'https://storage-asset.msi.com/global/picture/banner/banner_1703069134b295f093e56a580ae63777dbe810ad60.png' },
    { name: 'Automotive & Commercial', imgUrl: 'https://storage-asset.msi.com/global/picture/banner/banner_17029501882751b5b40237510e25a49464ccb8ed56.png' },
    { name: 'FUNTORO', imgUrl: 'https://storage-asset.msi.com/global/picture/banner/banner_1702950529e8f204d7b16e2d31d981950add8510c0.png' },
    { name: 'Autonomous Mobile Robot', imgUrl: 'https://storage-asset.msi.com/global/picture/banner/banner_170295024628fb9845930a6802a55e0ae375ccf018.png' },
    { name: 'AIoT & Industrial', imgUrl: 'https://storage-asset.msi.com/global/picture/banner/banner_170295046455aadc98104b0d070dc0122d86bb2e03.png' },
    { name: 'Rugged Tablet', imgUrl: 'https://storage-asset.msi.com/global/picture/banner/banner_17029503335a47b1dfeda2ebdf6321c0f0f11a74ff.png' },
]

const container = document.querySelector('.smart-items');

futureOfSmartList.forEach(item => {
    const div = document.createElement('div');
    div.classList.add('smart-item');

    const img = document.createElement('img');
    img.src = item.imgUrl;
    img.alt = item.name;

    const name = document.createElement('div');
    name.textContent = item.name;
    name.classList.add('item-name');

    div.appendChild(img);
    div.appendChild(name);

    container.appendChild(div);
});


function toggleTab(tabNumber) {

    var selectedTab = document.getElementById('tab' + tabNumber);

    var tabContents = document.getElementsByClassName('tab-content');
    for (var i = 0; i < tabContents.length; i++) {
        if (tabContents[i] !== selectedTab) {
            tabContents[i].style.maxHeight = '0';
        }
    }

    if (selectedTab) {
        if (selectedTab.style.maxHeight) {
            selectedTab.style.maxHeight = null;
            selectedTab.style.maxHeight = selectedTab.scrollHeight + 'px';
        } else {
            selectedTab.style.maxHeight = selectedTab.scrollHeight + 'px';
        }
    }
}


