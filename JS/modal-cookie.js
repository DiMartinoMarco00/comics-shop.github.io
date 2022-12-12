const cookieBox = document.querySelector(".modal-cookie");

let acceptBtn = cookieBox.querySelector(".buttons button");

acceptBtn.addEventListener('click', function()
{
    //il cookie di impostazione per 1 mese scadrà automaticamente
    document.cookie = "CookieBy=MarcoDiMartino; max-age=" + 60 * 60 * 24 * 30;//60 secondi * 60 minuti * 24 ore * 30 giorni = 1 mese

    if(document.cookie)//se il cookie di cui sopra è impostato
    {
        cookieBox.classList.add("hide");//nascondere il contenitore dei cookie una volta che questi sono stati impostati
    }
    else 
    {
        alert("Il cookie non può essere impostato!");//Se il cookie non può essere impostato, viene segnalato un errore.
    }

    //nascondiamo la casella dei cookie se questi sono impostati e non sono scaduti.
    let checkCookie = document.cookie.indexOf("CookieBy=MarcoDiMartino");//controllo del cookie impostato

    //se il cookie è impostato, nascondere la casella dei cookie, altrimenti mostrarla.
    checkCookie != -1 ? cookieBox.classList.add("hide") : cookieBox.classList.remove("hide");
}); 