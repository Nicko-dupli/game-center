export const childLinks = [
    {
        link: {path: '/'},
        isScrollTop: true,
        name: 'О проекте',
        subLinks: [
            {link: {path: '/', hash: '#about'}, name: 'Расположение'},
            {link: {path: '/', hash: '#advantages'}, name: 'Преимущества'},
            {link: {path: '/', hash: '#finish'}, name: 'Отделка'},
        ],
    },

    {
        link: {path: '/filter/'},
        name: 'Выбрать квартиру',
        subLinks: [
            {
                link: {name: 'filter', query: {rooms: '0,1'}, params: {changeFilter: true}},
                name: 'Однокомнатные'
            },
            {
                link: {name: 'filter', query: {rooms: '2'}, params: {changeFilter: true}},
                name: 'Двухкомнатные'
            },
            {
                link: {name: 'filter', query: {rooms: '3'}, params: {changeFilter: true}},
                name: 'Трехкомнатные'
            },
            {link: {path: '/', hash: '#visual'}, name: 'Визуальный выбор'},
        ],
    },

    {
        link: {path: '/purchase/'},
        name: 'Способы покупки',
        subLinks: [
            {link: {path: '/purchase/mortgage/'}, name: 'Ипотека'},
            // {link: {path: '/'}, name: 'Рассрочка'},
            // {link: {path: '/'}, name: 'Военная ипотека'},
            // {link: {path: '/'}, name: 'Материнский капитал'},
        ],
    },

    {
        link: {path: '/post/'},
        name: 'Новости',
        subLinks: [
            {link: {path: '/promo/'}, name: 'Акции'},
            {link: {path: '/post/'}, name: 'Новости'},
        ],
    },

    // {
    //     link: {path: '/post/'},
    //     name: 'Ход строительства',
    //     // subLinks: [
    //     //     {link: {path: '/'}, name: 'Фото'},
    //     //     {link: {path: '/'}, name: 'Веб-камера'},
    //     // ],
    // },
];

export const soloLinks = [
    {link: {path: '/progress/'}, name: 'Ход строительства'},
    {link: {path: '/documents/'}, name: 'Документы'},
    // {link: {path: '/'}, name: 'Ритейл'},
    {link: {path: '/contacts/'}, name: 'Контакты'},
    // {link: {path: '/'}, name: 'Парковки'},
];
