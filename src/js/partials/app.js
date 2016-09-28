;
console.log('map'); // Как только будет загружен API и готов DOM, выполняем инициализацию
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
                // $("#toggle").attr('value', 'Скрыть карту');

            }
            else {
                myMap.destroy();// Деструктор карты
                myMap = null;

                // $("#toggle").attr('value', 'Показать карту снова');
            }
        }
    });


}