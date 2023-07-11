class NotesHandler {
    constructor(service) {
        this._service = service;
    }

    postNoteHandler(request, h) {
        const { title = 'untitled', body, tags } = request.payload;

        this._service.addNote({title, body, tags });
    }

    getNotesHandler(request, h) {
        
    }

    getNoteByIdHandler(request, h) {
        
    }

    putNoteByIdHandler(request, h) {
        
    }

    deleteNoteByIdHandler(request, h) {
        
    }
}