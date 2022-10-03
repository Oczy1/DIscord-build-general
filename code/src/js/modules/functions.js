/* Проверка поддержки webp, добавление класса webp или по-webp для HTML */
export function isWebp() {
    // Проверка поддержки webp
    function testWebP(callback) {

        var webP = new Image();
        webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    //Добавление класса _webp или _no-webp для HTML
    testWebP(function (support) {
        let className = support === true ? 'webp' : 'no-webp';
        document.documentElement.classList.add(className);
        });
    }


export function parallaxcloud(){
    window.onload = function(){
        const parallax = document.querySelector('.parallax');

        if(parallax){
            const info = document.querySelector('.info');
            const cloud = document.querySelector('.image-cloud');

            // Коэффициенты

            const forClound = 10;

            // Скорость анимации
            const speed = 0.05;

            // Объявление переменных
            let positionX = 0, positionY = 0;
            let coordXprocent = 0, coordYprocent = 0;

            function setMouseParallaxStyle(){
                const distX = coordXprocent - positionX;
                const distY = coordYprocent - positionY;

                positionX = positionX + (distX * speed);
                positionY = positionY + (distY * speed);

                //Передаем стили
                cloud.style.cssText = 'transform: translate(${positionX / forCloud}%,${positionY / forCloud}%);';


                requestAnimationFrame(setMouseParallaxStyle);
            }
            setMouseParallaxStyle();

            parallax.addEventListener("mousemove", function (e){

                //Получение высоты и ширины блока
                const parallaxWidth = parallax.offsetWidth;
                const parallaxHeight = parallax.offsetHeight;

                //Ноль по середине
                const coordX = e.pageX - parallaxWidth / 2;
                const coordY = e.pageY - parallaxHeight / 2;

                //Получаем проценты
                coordXprocent = coordX / parallaxWidth * 100;
                coordXprocent = coordY / parallaxHeight * 100;
            });
        }
    }
}