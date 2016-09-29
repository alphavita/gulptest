;
console.log('map4'); // Как только будет загружен API и готов DOM, выполняем инициализацию
ymaps.ready(init);

// Инициализация и уничтожение карты при нажатии на кнопку.
function init () {
    var myMap;
     var myPlacemark;

    $('#toggle').bind({
        click: function () {
            if (!myMap) {
                myMap = new ymaps.Map('map', {
                    center: [50.42562807, 30.53356600], // Киев
                    zoom: 16
                }, {
                    searchControlProvider: 'yandex#search'
                });
                $(".location").html( '<span class="hide">Скрыть карту</span>');


            }
            else {
                myMap.destroy();// Деструктор карты
                myMap = null;

                $(".location").html( 'BuildHomeLtd.  Street Name 123   23 45 Cityname');

            }
        }
    });


};

