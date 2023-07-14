const routes = (notesHandler) => [
    {
        method: 'POST',
        path: '/notes',
        handler: notesHandler.postNoteHandler,
    },
    {
        method: 'GET',
        path: '/notes',
        handler: notesHandler.getNotesHandler,
    },
    {
        method: 'GET',
        path: '/notes/{id}',
        handler: notesHandler.getNoteByIdHandler,
    },
    {
        method: 'PUT',
        path: '/notes/{id}',
        handler: notesHandler.putNoteByIdHandler,
    },
    {
        method: 'DELETE',
        path: '/notes/{id}',
        handler: notesHandler.deleteNoteByIdHandler,
    },
];

module.exports = routes;
