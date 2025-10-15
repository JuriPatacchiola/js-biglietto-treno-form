    // Costante prezzo al km
    const PRICE_PER_KM = 0.21;

    // Seleziono il form
    const form = document.getElementById('ticketForm');
    // Aggiungo listener per l’evento di invio (submit)
    form.addEventListener('submit', function(event) {
      event.preventDefault();
    
      // Leggo i valori dagli input del form
      const km = parseFloat(form.km.value);
      const age = parseInt(form.age.value, 10);
    
     // Validazione base
      if (isNaN(km) || km <= 0) {
        console.error('Errore: inserisci un numero di chilometri valido.');
        return;
      }

      if (isNaN(age) || age < 0) {
        console.error('Errore: inserisci un\'età valida.');
        return;
      }
    
    
    
    
    
    
    
    }) // Evita il ricaricamento della pagina