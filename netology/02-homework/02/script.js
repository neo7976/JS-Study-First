let msg = [
    "Пойдем гулять в парк?",
    "Кажется, дождь собирается. Лучше пойдем в кино!",
    "Давай, сегодня как раз вышел новый фильм.",
    "Встречаемся через час у кинотеатра."
];

let word = 'кино';

for (let i = 0; i < msg.length; i++) {
    if (msg[i].includes(word)) {
        console.log(msg[i]);
    }
}