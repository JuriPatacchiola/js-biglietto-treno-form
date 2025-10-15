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
    
       // Calcolo prezzo base
      const basePrice = km * PRICE_PER_KM;
      let discount = 0;

      // Regole di sconto
      if (age < 18) {
        discount = 0.20; // 20% sconto
      } else if (age >= 65) {
        discount = 0.40; // 40% sconto
      }

      // Calcolo prezzo finale
      const finalPrice = basePrice * (1 - discount);
    
     // Output in console
      console.log('--- Calcolo Prezzo Biglietto ---');
      console.log(`Chilometri: ${km}`);
      console.log(`Età: ${age}`);
      console.log(`Prezzo base: €${basePrice.toFixed(2)}`);
      console.log(`Sconto applicato: ${discount * 100}%`);
      console.log(`Prezzo finale: €${finalPrice.toFixed(2)}`);
      console.log('--------------------------------');
    
    
    
    
    }) // Evita il ricaricamento della pagina