let uri = 'https://bravevillainousexponents.dbronskih.repl.co/characters';

fetch(uri)
    .then(response => response.json())
    .then(json => console.log(json));
