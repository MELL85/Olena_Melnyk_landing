(() => {

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
        'navAboutMe': {
            'ua': 'Про мене',
            'en': 'About me',
        },
        'navTopics': {
            'ua': 'Теми',
            'en': 'Topics',
        },
        'navCost': {
            'ua': 'Вартість',
            'en': 'Cost',
        },
        'navAboutClub': {
            'ua': 'Про клуб',
            'en': 'About club',
        },
        'navTestimonials': {
            'ua': 'Відгуки',
            'en': 'Testimonials',
        },
        'navPrivate': {
            'ua': 'Закритий клуб',
            'en': 'Private club',
        },
        'navContacts': {
            'ua': 'Контакти',
            'en': 'Contacts',
        },
        'headTitleLife': {
            'ua': 'ПРОжиття',
            'en': 'ABOUTlife',
        },
        'homeTextUp': {
            'ua': 'Терапія почуттів замість келиха вина за ціною кави.',
            'en': 'Emotional therapy instead of a glass of wine for the price of a coffee.',
        },
        'homeText': {
            'ua': 'Тепер це можливо!',
            'en': 'Now it is possible!',
        },
        'homeTitleUp': {
            'ua': 'З чого почати? Як зрозуміти свої почуття? Що робити якщо не можу піти до психолога?',
            'en': "Where to start? How to understand your feelings? What should I do if I can't go to a psychologist?",
        },
        'homeTitle': {
            'ua': 'Відповідь на ці запитання - Закритий клуб із Оленою Мельник',
            'en': 'The answer to these questions - is the Private Club with Olena Melnyk',
        },
        'btn': {
            'ua': 'Приєднатися',
            'en': 'Join a private club',
        },
        'infoTitle': {
            'ua': '"Закритий клуб" це річна програма опрацювання основних запитів жінок, які приходять до психолога, щоб змінити своє життя.',
            'en': '"Private Club" is a year-long program for processing the main requests of women who come to a psychologist to change their lives.',
        },
        'topics': {
            'ua': 'Теми:',
            'en': 'Topics:',
        },
        'intelligence': {
            'ua': 'Емоційний інтелект',
            'en': 'Emotional intelligence',
        },
        'guilty': {
            'ua': 'Почуття провини',
            'en': 'Feeling guilty',
        },
        'fears': {
            'ua': 'Страхи',
            'en': 'Fears',
        },
        'aggression': {
            'ua': 'Агресія',
            'en': 'Aggression',
        },
        'shame': {
            'ua': 'Почуття сорому',
            'en': 'A feeling of shame',
        },
        'offense': {
            'ua': 'Образи',
            'en': 'Offense',
        },
        'responsibility': {
            'ua': 'Відповідальність',
            'en': 'Responsibility',
        },
        'awareness': {
            'ua': 'Усвідомленість',
            'en': 'Awareness',
        },
        'anxiety': {
            'ua': 'Почуття тривоги',
            'en': "A feeling of anxiety",
        },
        'observer': {
            'ua': 'Як розвинути внутрішнього спостерігача',
            'en': "How to develop an inner observer",
        },
        'manifestation': {
            'ua': 'Проявленість',
            'en': 'Manifestation',
        },
        'subconscious': {
            'ua': 'Робота з підсвідомим',
            'en': 'Working with the subconscious',
        },
        'awaits': {
            'ua': 'Це те, що вже чекає на тебе в клубі!',
            'en': 'This is what awaits you in the club!',
        },
        'question': {
            'ua': 'СКІЛЬКИ КОШТУЄ ОДНА СЕСІЯ У ХОРОШОГО ПСИХОЛОГА?',
            'en': 'HOW MUCH DOES ONE SESSION COST WITH A GOOD PSYCHOLOGIST?',
        },
        'questionText': {
            'ua': 'Від 2 тисяч гривень і вище за одну сесію. У нашому клубі за 1200 гривень на місяць ви отримаєте доступ до аудіо-лекцій, завдань з терапевтичними техніками (учасниці клубу кажуть, що за ефективністю кожна з них дорівнює сесії в психолога), які змінять якість вашого життя!',
            'en': 'From 2 thousand hryvnias and above for one session. In our club, for 1,200 hryvnias per month, you will get access to audio lectures, tasks with therapeutic techniques (club members say that each of them is as effective as a session with a psychologist), which will change the quality of your life!',
        },
        'answer': {
            'ua': 'Кому потрібен закритий клуб?',
            'en': 'Who needs a Private club?',
        },
        'answerText': {
            'ua': 'За мене дадуть відповідь дівчата, які вже пройшли програму',
            'en': 'Girls who have already passed the program will answer for me',
        },
        'aboutClubTitle': {
            'ua': ' - це',
            'en': ' - this',
        },
        'access': {
            'ua': 'Доступ до усіх матеріалів з моменту оплати',
            'en': 'Access to all materials from the moment of payment',
        },
        'anyTime': {
            'ua': 'Можливість проходити завдання у будь-який час, в комфортному темпі',
            'en': 'Ability to complete tasks at any time, at a comfortable pace',
        },
        'importantTopics': {
            'ua': 'Тільки найважливіші теми',
            'en': 'Only the most important topics',
        },
        'recording': {
            'ua': 'І бонус — чотири важливих групових зустрічі: «Мій ресурс», «ЛегкаЯ», «Сценарії стосунків», «Томограма мого життя» у запису',
            'en': 'And a bonus — four important group meetings: "My resource", "EasyI", "Relationship scenarios", "Tomogram of my life" in the recording',
        },
        'lectures': {
            'ua': 'Кожна з цих групових є окремою терапевтичою роботою з вашою енергією, зайвою вагою, комунікацією і розумінням себе та партнера в стосунках, минулого, що впливає на тут і зараз',
            'en': 'Each of these groups is a separate therapeutic work with your energy, excess weight, communication and understanding of yourself and your partner in the relationship, the past, which affects the here and now',
        },
        'privateChannel': {
            'ua': 'Можливість ставити питання в закритому каналі',
            'en': 'Ability to ask questions in a private channel',
        },
        'textPageUp': {
            'ua': 'Спробуйте уявити, яким може бути ваше життя, якщо ви розберетеся зі страхами, почуттям провини, агресією, налагодите самооцінку, зможете відстоювати свої кордони, перестанете ображатися, візьмете нарешті відповідальність за своє життя і, забувши про роль жертви, станете талановитим автором своєї долі.',
            'en': 'Try to imagine what your life could be like if you deal with fears, feelings of guilt, aggression, establish self-esteem, be able to defend your boundaries, stop taking offense, finally take responsibility for your life and, forgetting the role of a victim, become a talented author of your own destiny.',
        },
        'textPage': {
            'ua': 'Це буде життя зовсім іншої якості, де доросла усвідомлена і вільна особистість сміливо йде до реальності своєї мрії!',
            'en': 'It will be a life of a completely different quality, where an adult aware and free person boldly goes to the reality of his dream!',
        },
        'costTitleOne': {
            'ua': '1 місяць',
            'en': '1 month',
        },
        'costTextOne': {
            'ua': 'Тобі зручніше подовжувати кожен місяць? Тоді цей пакет для тебе!',
            'en': 'Is it more convenient for you to extend each month? Then this package is for you!',
        },
        'costOne': {
            'ua': '1200 грн',
            'en': '1200 hrn',
        },
        'btnCost': {
            'ua': 'Приєднатися',
            'en': 'Join',
        },
        'costTitleTwo': {
            'ua': '3 місяці + 1',
            'en': '3 months + 1',
        },
        'costTextTwo': {
            'ua': 'Подобаються вигідні умови з подарунками? Тоді це твое!',
            'en': "Do you like good deals with gifts? Then it's yours!",
        },
        'costTwo': {
            'ua': '3600 грн',
            'en': '3600 hrn',
        },
        'meHeadTitle': {
            'ua': 'Олена Мельник',
            'en': 'Olena Melnyk',
        },
        'meTitle': {
            'ua': 'ПСИХОЛОГИНЯ, ПРАКТИКУЮЧА ЖІНОЧА ТРЕНЕРКА, БЛОГЕРКА',
            'en': "PSYCHOLOGIST, PRACTICE WOMEN'S TRAINER, BLOGGER",
        },
        'meHeadText': {
            'ua': 'Автор методик розвитку, експерт у сфері емоційної компетенції та психології відносин, інтегративний підхід.',
            'en': 'Author of development methods, expert in the field of emotional competence and psychology of relationships, integrative approach.',
        },
        'meDiploma': {
            'ua': 'Диплом КНУ імені Тараса Шевченка',
            'en': 'Diploma of KNU named after Taras Shevchenko',
        },
        'mePractice': {
            'ua': 'Більше 5 років практики',
            'en': 'More than 5 years of practice',
        },
        'meSessions': {
            'ua': 'Більше 2000 проведених сесій',
            'en': 'More than 2000 conducted sessions',
        },
        'meCreator': {
            'ua': 'Творець 6 онлайн курсів, які пройшли понад 1000 жінок',
            'en': 'The creator of 6 online courses that have been completed by more than 1000 women',
        },
        'contactHeadTitle': {
            'ua': 'Звʼяжіться зі мною',
            'en': 'Contact me',
        },
        'contactText': {
            'ua': "Якщо у вас є будь-які запитання або запити про психологічні проблеми, будь ласка не соромтеся звертатися до мене.",
            'en': "If you have any questions or inquiries about psychological issues, please do not hesitate to contact me.",
        },
        'contactAdrTitle': {
            'ua': 'Адреса',
            'en': 'Address',
        },
        'contactAdrTextUp': {
            'ua': 'вул. Шота Руставелі, 39/41, оф.210',
            'en': 'St. Shota Rustaveli, 39/41, office 210',
        },
        'contactAdrText': {
            'ua': 'м. Київ, Україна',
            'en': 'Kyiv, Ukraine',
        },
        'contactCont': {
            'ua': 'Контакти',
            'en': 'Contacts',
        },
        'contactEmail': {
            'ua': 'Електронна пошта:',
            'en': 'Email:',
        },
        'btnForm': {
            'ua': 'Записатись',
            'en': 'Sign up',
        },
        'btnLong': {
            'ua': 'Вступити в закритий клуб',
            'en': 'Join a private club',
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

    // ==============

    // const langButtons = document.querySelectorAll('.lang-btn');

    // langButtons.forEach(function (langButton) {
    //     langButton.addEventListener('click', function (event) {
    //         let lang = event.target.dataset.btn;
    //         let currentUrl = new URL(window.location.href);
    //         let currentLanguage = currentUrl.hash.substring(1);

    //         if (currentLanguage === lang) {
    //             return;
    //         }

    //         currentUrl.hash = lang;

    //         window.location.href = currentUrl.toString();
    //     });
    // });

    // const langButtons = document.querySelectorAll('.lang-btn');

    // langButtons.forEach(function (langButton) {
    //     langButton.addEventListener('click', function (event) {
    //         let lang = event.target.dataset.btn;
    //         let currentUrl = new URL(window.location.href);
    //         let currentLanguage = currentUrl.hash.substring(1);

    //         if (currentLanguage === lang) {
    //             return;
    //         }

    //         if (lang === 'en') {
    //             currentUrl.hash = 'en';
    //         } else {
    //             currentUrl.hash = '';
    //         }

    //         window.location.href = currentUrl.toString();
    //     });
    // });

    // ==============

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
            const elems = document.querySelectorAll(`[data-lang=${key}]`);
            if (elems.length > 0) {
                elems.forEach((elem) => {
                    elem.textContent = currentText[key][currentLang];
                });
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
        });
    }));

    function resetActiveClass(arr, activeClass) {
        arr.forEach(elem => {
            elem.classList.remove(activeClass);
        });
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
        const navLang = navigator.language.slice(0, 2).toLowerCase();
        const result = allLangs.some((elem) => {
            return elem === navLang;
        });
        if (result) {
            return navLang;
        }
    }


})();