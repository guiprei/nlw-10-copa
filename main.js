function createGame (player1, hour, player2){
    return `<li>
    <img src="assets/${player1}.svg" alt="Bandeira do Brasil">
    <strong>${hour}</strong>
    <img src="assets//${player2}.svg" alt="Bandeira da Argentina">
</li>
`}
let delay = -0.4;
function  creatCard(date, day, games) {
    delay = delay + 0.4;
    return `
    <div class="card" style="animation-delay: ${delay}s">
        <h2>${date} <span>${day}</span></h2>
        <ul>
            ${games}
        </ul>
    </div>
    `
}

document.querySelector('#cards').innerHTML = 
    creatCard('24/11', 'quinta', createGame('brazil','16:00','serbia') + createGame ('suica', '07:00', 'cameroon'))+
    
    creatCard('28/11', 'segunda', createGame('brazil', '16:00', 'suica') + createGame ('cameroon', '07:00', 'serbia')) +

    creatCard('02/12', 'sexta', createGame('brazil', '16:00', 'cameroon') + createGame('serbia','16:00','suica')) 