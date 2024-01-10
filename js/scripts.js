document.addEventListener('DOMContentLoaded', function () {
      // messaggio visualizzato
      const messageData = "Buon Anno Nuovo!";
  
      // elemento h1
      const h1Element = document.getElementById('messaggio');
  
      // testo dell'elemento h1
      h1Element.textContent = messageData;

      // Ottieni l'elemento img
      const imgElement = document.querySelector('img');

      // Ottieni il percorso dell'immagine dal data
      const percorsoImmagine = imgElement.dataset.immagineSrc;

      // Imposta l'attributo src dell'elemento img
      imgElement.src = percorsoImmagine;

});