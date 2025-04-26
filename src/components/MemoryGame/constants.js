export const getCards = () => {
    const grid = Array.from({length: 18}, (_, index) => index + 1);
    const cards = [...grid, ...grid].sort(() => Math.random() - 0.5);
    return cards.map((card, index) => ({
        id: index, number: card, isFlipped: false
    }))
}