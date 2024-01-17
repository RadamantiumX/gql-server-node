let games = [
    {id: '1', title: 'Zelda, Tears of the Kingdom', platform: ['Switch']},
    {id: '2', title: 'Final Fantasy 7 Remake', platform: ['PS5', 'Xbox']},
    {id: '3', title: 'Elden Ring', platform: ['PS5', 'Xbox', 'PC']},
    {id: '4', title: 'Mario Kart', platform: ['Switch']},
    {id: '5', title: 'Pokemon Scarlet', platform: ['PS5', 'Xbox', 'PC']},
]

let authors = [
    {id: '1', name: 'mario', verified: true},
    {id: '2', name: 'yoshi', verified: false},
    {id: '3', name: 'peach', verified: true},
]

let reviews = [
    {id: '1', rating: 5, content: 'Great game', author_id: '1', game_id: '1'},
    {id: '2', rating: 4, content: 'Great game', author_id: '2', game_id: '3'},
    {id: '3', rating: 3, content: 'Great game', author_id: '3', game_id: '5'},
    {id: '4', rating: 5, content: 'Great game', author_id: '2', game_id: '2'},
    {id: '5', rating: 4, content: 'Great game', author_id: '2', game_id: '3'},
    {id: '6', rating: 3, content: 'Great game', author_id: '1', game_id: '1'},
    {id: '7', rating: 5, content: 'Great game', author_id: '1', game_id: '5'},
    {id: '8', rating: 4, content: 'Great game', author_id: '3', game_id: '1'},
    {id: '9', rating: 3, content: 'Great game', author_id: '2', game_id: '1'},
    {id: '10', rating: 5, content: 'Great game', author_id: '1', game_id: '2'},
    {id: '11', rating: 4, content: 'Great game', author_id: '3', game_id: '5'},
]

export default { games, authors, reviews }