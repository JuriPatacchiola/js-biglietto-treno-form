    // Costante prezzo al km
    const PRICE_PER_KM = 0.21;

    // Seleziono il form
    const form = document.getElementById('ticketForm');
    // Aggiungo listener per l’evento di invio (submit)
    form.addEventListener('submit', function(event) {
      event.preventDefault();
    
      // Leggo i valori dagli input del form
      const firstName = form.firstName.value.trim();
      const km = parseFloat(form.km.value);
      const ageCategory = form.ageCategory.value; // 'minor' | 'adult' | 'over65'
    
     // Validazione base
      if (!firstName) {
        console.error('Errore: inserisci il nome e cognome.');
        document.getElementById('errorMessage').textContent = 'Inserisci il nome e cognome. ';
        document.getElementById('result').style.display = 'none';
        return;
      }


      if (isNaN(km) || km <= 0) {
        console.error('Errore: inserisci un numero di chilometri valido.');
        document.getElementById('errorMessage').textContent = 'Inserisci un numero di chilometri valido (> 0).';
        document.getElementById('result').style.display = 'none';
        return;
      }

      if (!ageCategory) {
        console.error('Errore: seleziona la categoria d\'età.');
        document.getElementById('errorMessage').textContent = 'Seleziona la categoria d\'età.';
        document.getElementById('result').style.display = 'none';
        return;
      }

      // se arrivo qui, rimuovo eventuali messaggi di errore
      document.getElementById('errorMessage').textContent = '';
    
       // Calcolo prezzo base
      const basePrice = km * PRICE_PER_KM;
      let discount = 0;

      // Regole di sconto (in base alla selezione a tendina)
      if (ageCategory === 'minor') {
        discount = 0.20; // 20% sconto
      } else if (ageCategory === 'over65') {
        discount = 0.40; // 40% sconto
      } else {
        discount = 0; // maggiorenne: nessuno sconto
      }

      // Calcolo prezzo finale
      const finalPrice = basePrice * (1 - discount);
    
     // Output in console
      console.log('--- Calcolo Prezzo Biglietto ---');
      console.log(`Nome: ${firstName}`);
      console.log(`Chilometri: ${km}`);
      console.log(`Categoria età: ${ageCategory}`);
      console.log(`Prezzo base: €${basePrice.toFixed(2)}`);
      console.log(`Sconto applicato: ${discount * 100}%`);
      console.log(`Prezzo finale: €${finalPrice.toFixed(2)}`);
      console.log('--------------------------------');

      const currencyFmt = new Intl.NumberFormat('it-IT', {
        style: 'currency',
        currency: 'EUR',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
       // calcolo importo sconto
      const discountAmount = basePrice * discount;

       // mappa label per la categoria visualizzata
      const categoryLabelMap = {
        minor: 'Minorenne (sconto 20%)',
        adult: 'Maggiorenne (nessuno sconto)',
        over65: 'Over 65 (sconto 40%)'
      };

       // recap in pagina
      document.getElementById('recapName').textContent = `Passeggero: ${firstName}`;
      document.getElementById('recapKm').textContent = `Chilometri: ${km}`;
      document.getElementById('recapCategory').textContent = `Categoria: ${categoryLabelMap[ageCategory] || ageCategory}`;
      document.getElementById('recapBase').textContent = `Prezzo base: ${currencyFmt.format(basePrice)}`;
      document.getElementById('recapDiscount').textContent = `Sconto applicato: ${Math.round(discount * 100)}%`;
      document.getElementById('recapDiscountAmount').textContent = `Importo sconto: ${currencyFmt.format(discountAmount)}`;
      document.getElementById('recapFinal').textContent = `Prezzo finale: ${currencyFmt.format(finalPrice)}`;

      // mostra il risultato
      document.getElementById('result').style.display = 'block';
      }) 
