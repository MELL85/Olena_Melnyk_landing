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
            'ua': 'Рік психотерапії за ціною сукні.',
            'en': 'A year of psychotherapy for the price of a dress.',
        },
        'homeText': {
            'ua': 'Тепер це можливо!',
            'en': 'Now it is possible!',
        },
        'homeTitleUp': {
            'ua': 'З чого почати? Як це опрацювати? Що робити, якщо в мене немає грошей на психолога?',
            'en': 'Where to start? How to process it? What to do if there is no money for a psychologist?',
        },
        'homeTitle': {
            'ua': 'Відповідь на ці запитання - Закритий клуб із Оленою Мельник',
            'en': 'The answer to these questions - is the Private Club with Olena Melnyk',
        },
        'btn': {
            'ua': 'Приєднатися',
            'en': 'Join a closed club',
        },
        'infoTitle': {
            'ua': 'Закритий клуб" це річна програма опрацювання 12-ти основних запитів жінок, які приходять до психолога, щоб змінити своє життя.',
            'en': '"Private Club" is a year-long program for processing 12 main requests of women who come to a psychologist to change their lives.',
        },
        'topics': {
            'ua': 'Теми:',
            'en': 'Topics:',
        },
        'quilty': {
            'ua': 'Почуття провини',
            'en': 'Feeling guilty',
        },
        'fears': {
            'ua': 'Страхи',
            'en': 'Fears',
        },
        'borders': {
            'ua': 'Межі',
            'en': 'Borders',
        },
        'vision': {
            'ua': 'Образи',
            'en': 'Vision',
        },
        'aggression': {
            'ua': 'Агресія',
            'en': 'Aggression',
        },
        'self': {
            'ua': 'Самооцінка',
            'en': 'Self-esteem',
        },
        'responsibility': {
            'ua': 'Відповідальність',
            'en': 'Responsibility',
        },
        'victim': {
            'ua': 'Стан жертви',
            'en': 'Condition of the victim',
        },
        'feeling': {
            'ua': 'Почуття',
            'en': "Feeling",
        },
        'worthy': {
            'ua': 'Я гідна',
            'en': "I'm Worthy",
        },
        'affinity': {
            'ua': 'Близкість',
            'en': 'Affinity',
        },
        'confidence': {
            'ua': 'Впевненість',
            'en': 'Confidence',
        },
        'lineage': {
            'ua': 'Рід',
            'en': 'Lineage',
        },
        'question': {
            'ua': 'СКІЛЬКИ КОШТУЄ ОДНА СЕСІЯ У ХОРОШОГО ПСИХОЛОГА?',
            'en': 'HOW MUCH DOES ONE SESSION COST WITH A GOOD PSYCHOLOGIST?',
        },
        'questionText': {
            'ua': 'Від 2 тисяч гривень і вище за одну сесію. У нашому клубі за 10 тисяч гривень ви отримаєте доступ до 12 аудіо-лекцій з терапевтичними техніками (учасниці клубу кажуть, що за ефективністю кожна з них дорівнює сесії в психолога), а це лише 833 гривні!',
            'en': 'From 2 thousand hryvnias and above for one session. In our club, for 10 thousand hryvnias, you will get access to 12 audio lectures with therapeutic techniques (club members say that each of them is as effective as a session with a psychologist), and this is only 833 hryvnias!',
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
            'ua': '12 місяців доступу до всіх матеріалів з моменту оплати',
            'en': '12 months of access to all materials from the moment of payment',
        },
        'participants': {
            'ua': 'Понад 1000 учасниць',
            'en': 'More than 1000 participants',
        },
        'importantTopics': {
            'ua': '12 найважливіших тем',
            'en': '12 most important topics',
        },
        'recording': {
            'ua': '12 прямих ефірів у записі',
            'en': '12 live broadcasts in the recording',
        },
        'lectures': {
            'ua': '2 бонусні лекції "Самоцінність" і "Адаптація"',
            'en': '12 bonus lectures "Self-esteem" and "Adaptation"',
        },
        'closedInstagram': {
            'ua': 'Закритий акаунт в інстаграмі з можливістю поставити запитання щодо уроків професійному психологу',
            'en': 'A closed Instagram account with the opportunity to ask questions about the lessons to a professional psychologist',
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
            'ua': 'Спеціаліст кількох терапевтичних технік і автор проєктів із розкриття сексуальності та збільшення фінансового благополуччя.',
            'en': 'A specialist in several therapeutic techniques and the author of projects on revealing sexuality and increasing financial well-being.',
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
            'ua': 'Більше 5000 проведених сесій',
            'en': 'More than 5000 conducted sessions',
        },
        'meCreator': {
            'ua': 'Творець 10 онлайн курсів',
            'en': 'Creator of 10 online courses',
        },
        'meParticipants': {
            'ua': 'Мої курси пройшли понад 60 000 учасниць по всьому світу',
            'en': 'My courses have been completed by more than 60,000 participants all over the world',
        },
        'meBlog': {
            'ua': 'Понад 300 000 жінок читають мій блог в Instagram',
            'en': 'Over 300,000 women read my blog on Instagram',
        },
        'meAuthor': {
            'ua': 'Автор власного каналу на',
            'en': 'The author of his own channel on',
        },
        'contactHeadTitle': {
            'ua': 'Звʼяжіться зі мною',
            'en': 'Contact me',
        },
        'contactText': {
            'ua': "Якщо у вас є будь-які запитання або запити про проблему з психічним здоров'ям, будь ласка, не соромтеся. Не соромтеся звертатися до мене, і я зв'яжуся з вами якомога швидше.",
            'en': "If you have any questions or queries about a mental health problem, please don't hesitate. Feel free to contact me and I will get back to you as soon as possible.",
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
            'en': 'Join a closed club',
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