const countryList = ["Знайомство з IT: тест-драйв професій","Основи DevOps та Kubernetes від GlobalLogic","Основи Kubernetes","QA Manual від GlobalLogic", "Front-end. Повний курс для початківців", "Автоматичне тестування від GlobalLogic"];

const autoCompleteJs = new autoComplete ({
    selector: '#location',
    placeHolder: 'Search courses',
    data: {
        src: countryList,
        cache: true,
    },
    resultItem: {
        highlight: true,
    },
    events: {
        input: {
            selection: (event) => {
                const selection = event.detail.selection.value;
                autoCompleteJs.input.value = selection;
            },
        },
    },

    resultList: {
        maxResults: 15,
    },
    searchEngine: 'strict',
});