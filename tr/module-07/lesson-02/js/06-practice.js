/**
 * Sitenin araçlar arasında arama yapmasını sağlayın
 * Kullanıcı siteye geldiğinde hemen arama formunu ve tüm araçların kartlarını (çizelge cars) görür
 * Kullanıcı Marka veya Model aracının adını formuna girebilir ve seçim olarak Marka veya Modeli seçebilir (https://prnt.sc/PkkZZRy_ggtT)
 * Arama düğmesine basıldıktan sonra (formun gönderimi) arama kriterleriyle eşleşen araçları çiz
 */
const cars = [
    {
        id: 1,
        car: 'Audi',
        type: 'A6',
        price: 30000,
        img: 'https://static.wixstatic.com/media/90aeac_387e937e295a4f8586d9ff9d09b60cff~mv2.jpg/v1/fill/w_520,h_338,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/90aeac_387e937e295a4f8586d9ff9d09b60cff~mv2.jpg'
    },
    {
        id: 2,
        car: 'Honda',
        type: 'Civic',
        price: 12000,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU'
    },
    {
        id: 3,
        car: 'Audi',
        type: 'Q7',
        price: 40000,
        img: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg'
    },
    {
        id: 4,
        car: 'BMW',
        type: '5 siries',
        price: 9000,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU'
    },
    {
        id: 5,
        car: 'Honda',
        type: 'Accord',
        price: 20000,
        number: '+380000000000',
        img: 'https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg'
    },
    {
        id: 6,
        car: 'Volvo',
        type: 'XC60',
        price: 7000,
        img: 'https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320'
    }
];
const elements = {
    form: document.querySelector('.js-form'),
    container: document.querySelector('.js-list')
};