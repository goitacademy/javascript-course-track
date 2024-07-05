/*
 * Koleksiyon oluşturup ekliyoruz
 */
const options = [
    {
        label: 'kırmızı',
        color: '#F44336'
    },
    {
        label: 'yeşil',
        color: '#4CAF50'
    },
    {
        label: 'mavi',
        color: '#2196F3'
    },
    {
        label: 'gri',
        color: '#607D8B'
    },
    {
        label: 'pembe',
        color: '#E91E63'
    },
    {
        label: 'çivit',
        color: '#3F51B5'
    }
];
const colorPickerContainerEl = document.querySelector('.js-color-picker');    /*
 * Renk seçici işaretlemesi oluşturmak için bir işlev yazma
 */