// Esercizio:
// - aggiungere un campo di input e un pulsante per aggiungere nuove cose da fare alla lista;
// - cancellare un item dalla lista, al click sulla relativa icona 'X'.
// Bonus:
// - Oltre al click sul pulsante, consentire l'inserimento del nuovo item anche premendo il tasto Invio della tastiera, dopo aver scritto il testo nel campo di input.


console.log("hello world");
var list = new Vue (
  {
    el: '#list_item',
    data: {
      // - creare una lista di cose da fare e mostrarla in pagina con Vue;
      toDoList:[
        "cucinare",
        "fare benzia",
        "fare la spesa",
        "comprare il giornale"
      ],

      message: "hello world",
    },
    methods:{
      deleteItem: function(item){
        console.log(item);
        this.toDoList.splice(item, 1)
      },
    },
  }
);
