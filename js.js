function getLinks() {
    return document.body.getElementsByClassName("link-button");
}

function getParagraphs() {
    return document.body.getElementsByClassName("information");
}

function getH2() {
    return document.body.querySelectorAll("h2");
}

function changeLang(language) {
    const h2FI = ['Yhden sivun kauppasovellus (SPA)', 'Tietotekniikkasanakartuttaja', 'Turun avoin data (SPA)'];
    const h2E = ['Single-page application shop', 'IT word accumulator', 'City of Turku open data'];
    const finD = [
        `SPA-periaattella toimiva kauppa. Erittäin opettavainen projekti JS-kehitysraamien mahdollisuuksista ja niissä käytetyistä kehitysperiaatteista, kuten moduuleista holistiselta kannalta sekä jaettuna komponentteihin, palveluihin, reittivahteihin (route guard) jne., RxJS-kirjaston erinomaisuudesta ja JSON Web Tokeneista.`,

        `Kokonaan itsetehty palvelu PHP:llä, JavaScriptillä ja SQL:llä. Ohjelmistoratkaisupinona (solution stack) käytin XAMPP:ia, joka kätevästi tarjoaa paikallisen Apache-palvelimen ja MySQL-relaatiotietokannan. Projektin aihe oli luoda palvelu suomenkielisiä tietotekniikkasanoja varten, koska oman kokemukseni mukaan kotimainen termistö on käytännössä kokonaan sivuutettu anglismien hyödyntämisen puolesta. 
        
        Projekti antoi hyvän läpileikkauksen selain- ja palvelinpuolen toiminnasta, sillä minun oli luotava kaikki toiminnallisuus tietokannasta datansiirtoon PHP:llä ja siitä AJAX:in avulla selainpuolelle ja takaisin tietokantaan. Lisäksi rekisteröityminen ja siten tilien henkilökohtaisten sanasyötteiden ongelmien ratkominen oli mukavaa aivojumppaa. 
        
        Muita ominaisuuksia ovat sähköpostiosoitteen vaihtaminen, tilin poistaminen, lempisanojen tallentaminen profiilisivulle ja sieltä poistaminen, lempisanojen lataaminen Excel-tiedostona, sanojen etsiminen tietokannasta ja sanavisa. Tiedonkeruun suoritin PHP:llä web-scrapingiä (internetsivujen siivilöintiä) käyttäen.`,
        
        `Turun kaupungin julkaisemaa avointa dataa yhden sivun sovelluksessa. Vielä kesken, joten moni suunniteltu ominaisuus ei ole läsnä.`
    ];
    const engD = [
        `A store page made following SPA principles. A great project about learning and understanding modern JS frameworks' potentials and their development tenets, like modules in a holistic and individual way, like components, services, auth guards, the RxJS library and JSON Web Tokens.`,

        `A service I made completely by myself from the ground-up. I utilised PHP, JavaScript and SQL with XAMPP as the web server solution stack. XAMPP niftily comes pre-packaged with
        a local Apache server as well as a MySQL relational database. The subject of the project was an information technology term service in Finnish. 

        I chose this, because my experience with people using Finnish IT terms is lackluster; in practical terms the correct translations are always sidelined in favour of anglisms.
        All communication from the database via PHP passed on by AJAX to the client side and then back to MySQL really gave a clear view of the front and back end operations and how they interact with each other.
        
        Functions of the the website include: changing the email, deleting an account, saving favourite words to the profile page and deleting them from there, downloading favourite words as an Excel file, searching for words from the database and word quiz. To gather information I used PHP to web-scrape pages for words and definitions.`,
        
        `City of Turku has released a lot of open data for free use. This page displays the data in a pleasant form. Still in the works, so a great number of functionalities have not been implemented yet.`
    ];
    let links = getLinks();
    let paragraphs = getParagraphs();
    let h2s = getH2();

    if(language === "fi") {
        for(let i = 0; i < links.length; i++) {
            paragraphs[i].innerText = engD[i];
            h2s[i].innerText = h2E[i];
            links[i].innerText = "Github repository";
            document.getElementById("lang").innerText = "SUOMEKSI";
        }
    } else {
        for(let i = 0; i < links.length; i++) {
            paragraphs[i].innerText = finD[i];
            h2s[i].innerText = h2FI[i];
            links[i].innerText = "Github-sivulle";
            document.getElementById("lang").innerText = "IN ENGLISH";

        }
    }
}

document.getElementById("lang").addEventListener('click', () => {
    if(document.getElementById("lang").innerText === "IN ENGLISH") {
        changeLang('fi');
    } else if(document.getElementById("lang").innerText === "SUOMEKSI") {
        changeLang('en');
    }
});