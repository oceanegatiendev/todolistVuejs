const app = {
    data() {
        return {
            newNote: '',
            notes: [],
            afficher: false,
        }

    },
    mounted() {
        if (localStorage.getItem("notesList")) {
            console.log(localStorage.getItem("notesList"))
            this.notes = JSON.parse(localStorage.getItem("notesList"));
        }
      },
    methods: {
        addNote(){
            if(this.newNote != ""){
                this.notes.push({
                    id: Date.now(),
                    content: this.newNote,
                    update: false,
                });
                this.saveNote(this.notes);
                this.newNote = "";
            }
        },
        deleteNote(note){
            this.notes.splice(this.notes.indexOf(note), 1);
        },
        openUpdateNote(note){
            note.update = !note.update;
        },
        updateNote(note){
            this.notes.splice(this.notes.indexOf(note), 1);
            this.notes.push({
                id: note.id,
                content: note.content,
                update: false,
            });
            this.saveNote(this.notes);
        },
        saveNote(note) {
            const parsed = JSON.stringify(note);
            localStorage.setItem("notesList", parsed);
          }
        
    }


}

Vue.createApp(app).mount('#app')