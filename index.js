
// Lista de continentes y paises
const continentes = {
    'Asia': ['Afganistán','Arabia Saudita','Armenia','Azerbaiján','Bahrein','Bangladesh','Brunei','Bután','Emiratos Arabes Unidos', 'Filipinas','Georgia','India','Indonesia','Irán', 'Iraq' , 'Israel', 'Japón', 'Jordania','Kampuchea', 'Kazakstán', 'Kirguizistán', 'Kuwait', 'Laos', 'Líbano', 'Malasia', 'Maldivas', 'Mongolia', 'Myanmar', 'Nepal', 'Omán', 'Pakistán', 'Palestina', 'Qatar', 'República de Corea', 'R.P.D. de Corea',  'Singapur',  'Sri Lanka',  'Siria',  'Tadjikistán',  'Tailandia',  'Timor Oriental',  'Turkmenistán',  'Türkiye', 'Vietnam', 'Yemen'],
    'África': ['Africa del Sur', 'Angola','Argelia','Benin','Botswana','Burundi','Cabo Verde','Camerún','Comores','Congo(Kinshasa)','Costa de Marfil','Egipto','Eritrea','Etiopía','Gabón','Gambia','Ghana','Guinea-Bissau', 'Guinea Ecuatorial','Jibuti','Kenia','Lesotho','Libia','Liberia','Madagascar','Malí','Mauricio','Mauritania','Marruecos','Mozambique','Namibia','Niger','Nigeria','República de Africa Central','República del Congo','Ruanda','Sao Tomé y Príncipe','Senegal','Seychelles','Sierra Leona','Somalia','Sudán','Tanzania','Togo','Túnez','Uganda','Zambia','Zimbabwe'],
    'Europa': ['Albania','Alemania','Andorra','Austria','Bélgica','Bielorusia','Bosnia y Herzegovina','Bulgaria','Checo','Chipre','Croacia','Dinamarca','Eslovaquia','Eslovenia','España','Estonia','Finlandia','Francia','Gran Bretaña','Grecia','Holanda','Hungría','Italia','Irlanda','Islandia','Letonia','Liechtenstein','Lituania','Luxemburgo','Macedonia','Moldavia','Malta','Mónaco','Noruega','Polonia','Portugal','Rumania','Rusia','San Marino','Serbia y Montenegro','Suecia','Suiza','Ucrania','Uzbekistán'],
    'América': ['Antigua y Barbuda','Bahamas','Barbados','Canadá','Costa Rica','Cuba','Dominica','Granda','Jamaica','Estados Unidos','México','Panamá','República Dominicana','Trinidad y Tobago','Argentina','Bolivia','Brasil','Chile','Colombia','Ecuador','Guyana','Perú','Surinam','Uruguay','Venezuela'],
    'Oceanía': ['Australia','Fiji','Islas de Cook','Kiribati','Micronesie','Nueva Zelanda','Papúa Nueva Guinea','Samoa','Tonga','Vanuatu']
}

// Base de la iteración
let continenteIndex = 0;
let paisIndex = 0;

// Función continente
function continenteItinerante() {
    const continenteKeys = Object.keys(continentes);
    const continente = continenteKeys[continenteIndex];
    continenteIndex = (continenteIndex + 1) % continenteKeys.length;
    return continente;
}

// Función país
function paisItineranteDeContinente(continente) {
    const paises = continentes[continente];
    const pais = paises[paisIndex];
    paisIndex = (paisIndex + 1) % paises.length;
    return pais;
}

// Función que muestra
function mostrarPaisItinerante() {
    const continente = continenteItinerante();
    const pais = paisItineranteDeContinente(continente);
    document.getElementById('Resultado').innerText = `Continente: ${continente}\nPaís: ${pais}`;
}

// Opciones trasldado, costo y animal
const traslados = [
    { medio: 'Bicicleta', animal: 'Gato', costo: 50 },
    { medio: 'Moto', animal: 'Perro', costo: 150 },
    { medio: 'Bus', animal: 'Loro', costo: 200 },
    { medio: 'Avión', animal: 'Tigre', costo: 500 },
    { medio: 'Barco', animal: 'Caballo', costo: 1000 },
    { medio: 'Cohete espacial', animal: 'Elefante', costo: 5000 }
];

// Función tabla
function generarTablaTraslados() {
    const tabla = document.getElementById('tablaTraslados');
    tabla.innerHTML = '';

    traslados.forEach((traslado, index) => {
        const fila = document.createElement('tr');

        // Celdas con información de la tabla
        const medioCell = document.createElement('td');
        medioCell.textContent = traslado.medio;
        fila.appendChild(medioCell);

        const animalCell = document.createElement('td');
        animalCell.textContent = traslado.animal;
        fila.appendChild(animalCell);

        const costoCell = document.createElement('td');
        costoCell.textContent = `$${traslado.costo}`;
        fila.appendChild(costoCell);

        // Botones para escoger traslado, mascota y valor.
        const botonCell = document.createElement('td');
        const botonSeleccion = document.createElement('button');
        botonSeleccion.textContent = 'Seleccionar';
        botonSeleccion.onclick = () => seleccionarTraslado(index);
        botonCell.appendChild(botonSeleccion);
        fila.appendChild(botonCell);

        tabla.appendChild(fila);
    });
}

// Función traslado, mascota y precio.
function seleccionarTraslado(index) {
    const traslado = traslados[index];
    const resultado = document.getElementById('resultado');
    resultado.textContent = `Has seleccionado: ${traslado.medio}, con tu mascota: ${traslado.animal}, por un costo de $${traslado.costo}.`;
}

//Comando tabla
window.onload = generarTablaTraslados;