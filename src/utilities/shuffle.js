const shuffle = () => {

    const assets = [
        { image: '/assets/17pwa.jpg'},
        { image: '/assets/16pwa.jpg'},
        { image: '/assets/5pwa.jpg'},
        { image: '/assets/7pwa.jpg'},
        { image: '/assets/11pwa.jpg'},
        { image: '/assets/10pwa.jpg'},
        { image: '/assets/1pwa.jpg'},
        { image: '/assets/13pwa.jpg'}
    ]
    return [...assets,...assets]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({...card, id:Math.random()}));
};

export default shuffle;