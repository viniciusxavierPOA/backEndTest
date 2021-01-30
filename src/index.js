const express = require('express');

const { uuid } = require('uuidv4');

const app = express();
app.use(express.json());


/*
    Query params = Filtros e paginação.
    Route params = indentificar recursos na hora deletar ou atualizar um recurso.
    Request body= Conteúdo na hora de criar ou editar um recurso ( enviado através do json)
*/
/*
    Midleware = pode interromper totalmente um requisição ou alterar dados da requisição.
*/



const projects = [];
function logRequests(request, response,next){
    const { method, url } = request;
    const logLabel = `[${method.toUpperCase()}] ${url}`;
    console.log(logLabel);
    return next();
}; // middleware formato

app.use(logRequests);

app.get('/projects', (request, response) => {
  //  const { title , owner } = request.query;

//    console.log(title);
  //  console.log(owner);

    return response.json(projects);
});
app.post('/projects', (request, response) => {
    const { title, owner} = request.body;
    
    const project = { id: uuid(), title, owner};

    projects.push(project);

    return response.json(project);
});
app.put('/projects/:id', (request, response) => {
    const {id} = request.params;
    console.log(id);

    return response.json([
        'Projeto 4',
        'Projeto 2',
        'Projeto 3',

    ]);
});
app.delete('/projects/:id', (request, response) => {
    const { id } = request.params;
    console.log(id);

    return response.json([
        'Projeto 2',
        'Projeto 3',

    ]);
});


app.listen(3333, () => {
    console.log('Back-end started!');
});
