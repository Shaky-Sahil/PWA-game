const shuffle = () => {

    const assets = [
        { image: '/assets/17pwa.ico'},
        { image: '/assets/16pwa.ico'},
        { image: '/assets/5pwa.ico'},
        { image: '/assets/7pwa.ico'},
        { image: '/assets/11pwa.ico'},
        { image: '/assets/10pwa.ico'},
        { image: '/assets/1pwa.ico'},
        { image: '/assets/13pwa.ico'}
    ]
    return [...assets,...assets]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({...card, id:Math.random()*100}));
};

export default shuffle;