
// Lista de continentes y paises
const continentes = {
    'Asia': ['Afganistán','Arabia Saudita','Armenia','Azerbaiján','Bahrein','Bangladesh','Brunei','Bután','Emiratos Arabes Unidos', 'Filipinas','Georgia','India','Indonesia','Irán', 'Iraq' , 'Israel', 'Japón', 'Jordania','Kampuchea', 'Kazakstán', 'Kirguizistán', 'Kuwait', 'Laos', 'Líbano', 'Malasia', 'Maldivas', 'Mongolia', 'Myanmar', 'Nepal', 'Omán', 'Pakistán', 'Palestina', 'Qatar', 'República de Corea', 'R.P.D. de Corea',  'Singapur',  'Sri Lanka',  'Siria',  'Tadjikistán',  'Tailandia',  'Timor Oriental',  'Turkmenistán',  'Türkiye', 'Vietnam', 'Yemen'],
    'África': ['Africa del Sur', 'Angola','Argelia','Benin','Botswana','Burundi','Cabo Verde','Camerún','Comores','Congo(Kinshasa)','Costa de Marfil','Egipto','Eritrea','Etiopía','Gabón','Gambia','Ghana','Guinea-Bissau', 'Guinea Ecuatorial','Jibuti','Kenia','Lesotho','Libia','Liberia','Madagascar','Malí','Mauricio','Mauritania','Marruecos','Mozambique','Namibia','Niger','Nigeria','República de Africa Central','República del Congo','Ruanda','Sao Tomé y Príncipe','Senegal','Seychelles','Sierra Leona','Somalia','Sudán','Tanzania','Togo','Túnez','Uganda','Zambia','Zimbabwe'],
    'Europa': ['Albania','Alemania','Andorra','Austria','Bélgica','Bielorusia','Bosnia y Herzegovina','Bulgaria','Checo','Chipre','Croacia','Dinamarca','Eslovaquia','Eslovenia','España','Estonia','Finlandia','Francia','Gran Bretaña','Grecia','Holanda','Hungría','Italia','Irlanda','Islandia','Letonia','Liechtenstein','Lituania','Luxemburgo','Macedonia','Moldavia','Malta','Mónaco','Noruega','Polonia','Portugal','Rumania','Rusia','San Marino','Serbia y Montenegro','Suecia','Suiza','Ucrania','Uzbekistán'],
    'América': ['Antigua y Barbuda','Bahamas','Barbados','Canadá','Costa Rica','Cuba','Dominica','Granda','Jamaica','Estados Unidos','México','Panamá','República Dominicana','Trinidad y Tobago','Argentina','Bolivia','Brasil','Chile','Colombia','Ecuador','Guyana','Perú','Surinam','Uruguay','Venezuela'],
    'Oceanía': ['Australia','Fiji','Islas de Cook','Kiribati','Micronesie','Nueva Zelanda','Papúa Nueva Guinea','Samoa','Tonga','Vanuatu']
}

function continenteAzar() {
    const continenteInfo = Object.keys(continentes);
    const randomIndex = Math.floor(Math.random() * continenteInfo.length);
    return continenteInfo[randomIndex];
}

function paisAzarDeContinente(continente) {
    const paises = continentes[continente];
    if (paises && paises.length > 0) {
        const randomIndex = Math.floor(Math.random() * paises.length);
        return paises[randomIndex];
    }
}

function mostrarPaisAzar() {
    const continente = continenteAzar();
    const pais = paisAzarDeContinente(continente);
    document.getElementById('Resultado').innerText = `Continente: ${continente}\nPaís: ${pais}`;
}
