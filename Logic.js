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

const cityInfo = {
    cair: [
        {
            number: 323,
            stars: '✮✮✮✮',
            rooms: 3,
            price: '4000р',
            img: './img/cair1.png'
        },
        {
            number: 201,
            stars: '✮✮✮',
            rooms: 2,
            price: '3200р',
            img: './img/cair2.png'
        }
    ],
    rome: [
        {
            number: 145,
            stars: '✮✮✮✮✮',
            rooms: 4,
            price: '6500р'
        }
    ]
};