(() => {

    // const langArr = {
    //     'tab-title': {
    //         'ua': 'Олена Мельник',
    //         'en': 'Olena Melnyk',
    //     },
    //     'navHead': {
    //         'ua': 'Головна',
    //         'en': 'Main',
    //     },
    //     'navPrivate': {
    //         'ua': 'Закритий клуб',
    //         'en': 'Private club',
    //     },
    //     'navContacts': {
    //         'ua': 'Контакти',
    //         'en': 'Contacts',
    //     },
    //     'headTitleLife': {
    //         'ua': '&#171ПРОжиття&#187',
    //         'en': '&#171ABOUT life&#187',
    //     },
    //     'btnLong': {
    //         'ua': 'Вступити в закритий клуб',
    //         'en': 'Join a closed club',
    //     },
    //     'messengers': {
    //         'ua': 'месенджери',
    //         'en': 'messengers',
    //     },
    // };

    // const select = document.querySelector('#lang');
    // const allLang = ['ua', 'en'];

    // select.addEventListener('change', changeURLLanguage);

    // function changeURLLanguage() {
    //     let lang = select.attributes.id.value;
    //     location.href = window.location.pathname + '#' + lang;
    //     location.reload();
    // }

    // function changeLanguage() {
    //     let hash = window.location.hash;
    //     hash = hash.substring(1);
    //     if (!allLang.includes(hash)) {
    //         location.href = window.location.pathname + '#ua';
    //         location.reload();
    //     }
    //     select.value = hash;
    //     document.querySelector('title').innerHTML = langArr['tab-title'][hash];
    //     for (let key in langArr) {
    //         let elem = document.querySelector('.lng-' + key);
    //         if (elem) {
    //             elem.innerHTML = langArr[key][hash];
    //         }
    //     }
    // }

    // changeLanguage();


    const allLangs = ['ua', 'en'];
    let currentLang = localStorage.getItem('language') || navigator.language || 'ua';
    // const langBtn = document.querySelectorAll('.lang-btn');
    const langBtn = document.querySelectorAll('[data-btn]');
    const currentPathName = window.location.pathname;
    let currentText = {};

    const langArr = {
        'tabTitle': {
            'ua': 'Олена Мельник',
            'en': 'Olena Melnyk',
        },
        'navHead': {
            'ua': 'Головна',
            'en': 'Main',
        },
        'navHeadDesctop': {
            'ua': 'Головна',
            'en': 'Main',
        },
        'navPrivate': {
            'ua': 'Закритий клуб',
            'en': 'Private club',
        },
        'navPrivateDesctop': {
            'ua': 'Закритий клуб',
            'en': 'Private club',
        },
        'navContacts': {
            'ua': 'Контакти',
            'en': 'Contacts',
        },
        'navContactsDesctop': {
            'ua': 'Контакти',
            'en': 'Contacts',
        },
        'mainPrivate': {
            'ua': 'Закритий клуб',
            'en': 'Private club',
        },
        'headTitleLife': {
            'ua': 'ПРОжиття',
            'en': 'ABOUT life',
        },
        'btnLong': {
            'ua': 'Вступити в закритий клуб',
            'en': 'Join a closed club',
        },
        'footerContacts': {
            'ua': 'Контакти',
            'en': 'Contacts',
        },
        'messengers': {
            'ua': 'Месенджери',
            'en': 'Messengers',
        },
        'copyright-title': {
            'ua': 'Олена Мельник. Всі права захищені.',
            'en': 'Olena Melnyk. All rights reserved.',
        },

    };

    function checkPagePathName() {
        switch (currentPathName) {
            case '/index.html':
                currentText = langArr;
                break;

            default:
                currentText = langArr;
                break;
        }
    }

    checkPagePathName();

    function changeLang() {
        for (const key in currentText) {
            const elem = document.querySelector(`[data-lang=${key}]`);
            if (elem) {
                elem.textContent = currentText[key][currentLang];
            }

        }
    }

    changeLang();

    langBtn.forEach((btn => {
        btn.addEventListener('click', (Event) => {
            currentLang = Event.target.dataset.btn;
            localStorage.setItem('language', Event.target.dataset.btn);
            resetActiveClass(langBtn, 'mobile__btn-active')
            btn.classList.add('mobile__btn-active');
            changeLang();
        })
    }))

    function resetActiveClass(arr, activeClass) {
        arr.forEach(elem => {
            elem.classList.remove(activeClass);
        })
    }

    function checkActiveLangBtn() {
        switch (currentLang) {
            case 'ua':
                document.querySelector('[data-btn="ua"]').classList.add('mobile__btn-active');
                break;
            case 'en':
                document.querySelector('[data-btn="en"]').classList.add('mobile__btn-active');
                break;

            default:
                document.querySelector('[data-btn="ua"]').classList.add('mobile__btn-active');
                break;
        }
    }

    checkActiveLangBtn();

    function checkBrowserLang() {
        const navLang = navigator.language.slice(0,2).toLowerCase()
        const result = allLangs.some(elem=>{
            return elem === navLang;

        })
        if(result){
            return navLang
        }
    }

})();