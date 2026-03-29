const buttonChoice = document.querySelectorAll('.place');
let timeID;

buttonChoice.forEach((button) => {
    button.addEventListener('click', () => {
        const selectBtn = button.nextElementSibling;
        const hotelID = selectBtn.id;

        clearTimeout(timeID);

        if (selectBtn.classList.contains('open')) {
            selectBtn.classList.remove('open'); // закрытие сразу
            return;
        }

        timeID = setTimeout(() => {
            const hotels = cityInfo[hotelID];
            selectBtn.innerHTML = '';

            hotels.forEach((hotel) => {
                selectBtn.insertAdjacentHTML(
                    'beforeend',
                    `
                    <div class="hotel-card">
                        <p>Номер: ${hotel.number}</p>
                        <p>Класс: ${hotel.stars}</p>
                        <p>Комнат: ${hotel.rooms}</p>
                        <p>Цена/сут: ${hotel.price}</p>
                    </div>
                    <img src="${hotel.img}" width="180">
                    `
                );
            });

            selectBtn.classList.add('open'); // открытие с задержкой
        }, 2000);
    });
});
                    
//Номер: 323
//Класс: ✮✮✮✮
//Комнат: 3
//Цена.сут: 4000р

const cities = [
  {
    id: 'rome',
    country: 'Italy',
    city: 'Rome',
    address: 'Via di S. Eufemia, 19, 00187 Roma RM, Italy',
    hotels: [
      {
        id: 'rome-hotel-1',
        name: 'Hotel 77 Seventy-Seven - Maison D’Art Collection',
        price: 65,
        stars: 4,
        rooms: 1,
        image: './images/rome/1.jpg',
        description: 'Уютный отель в центре Рима.'
      },
      {
        id: 'rome-hotel-2',
        name: 'Trevi Palace Luxury Inn',
        price: 95,
        stars: 5,
        rooms: 2,
        image: './images/rome/2.jpg',
        description: 'Отель рядом с основными достопримечательностями.'
      }
    ]
  },
  {
    id: 'cair',
    country: 'Egypt',
    city: 'Cairo',
    address: 'Cairo, Egypt',
    hotels: [
      {
        id: 'cair-hotel-1',
        name: 'Cairo Paradise Hotel',
        price: 40,
        stars: 3,
        rooms: 1,
        image: './images/cairo/1.jpg',
        description: 'Простой и удобный вариант для поездки.'
      }
    ]
  },
  {
    id: 'paris',
    country: 'France',
    city: 'Paris',
    address: 'Paris, France',
    hotels: []
  },
  {
    id: 'madrid',
    country: 'Spain',
    city: 'Madrid',
    address: 'Madrid, Spain',
    hotels: []
  }
];