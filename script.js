// 1. Nuestro JSON (Catálogo de prueba)
const colaboradores = [
    { "nombre": "Guillermo Alejandro Ávila Ávila", "area": "GERENCIA DE OPERACIONES" },
    { "nombre": "SIMÓN JUAN JOSÉ", "area": "PLANTA INTERNA/EXTERNA" },
    { "nombre": "ANGÉLICA MARÍA MEDRANO MAEDA", "area": "RECURSOS HUMANOS" },
    { "nombre": "ELVIS RODOLFO QUIÑONEZ", "area": "PLANTA INTERNA/EXTERNA" },
    { "nombre": "MARIO REYNOSO MEJIA", "area": "SIQUINALA" },
    { "nombre": "María Fernanda Reyes Ochoa", "area": "SIQUINALA" },
    { "nombre": "URBANO ALFREDO MENDIETA", "area": "ZACAPA" },
    { "nombre": "ANGÉLICA BETZABE HERNÁNDEZ VALENZUELA", "area": "QA" },
    { "nombre": "JOSÉ RAÚL NATARENO", "area": "BODEGA" },
    { "nombre": "MARCO TULIO CHIQUITA CHOY", "area": "PLANTA INTERNA/EXTERNA" },
    { "nombre": "ABNER DAVID LOPEZ", "area": "QUETZALTENANGO" },
    { "nombre": "OVIDIO BAC TORRES", "area": "SIQUINALA" },
    { "nombre": "DAISY ROXANA CUYUCH COTZOJAY", "area": "CONTABILIDAD" },
    { "nombre": "WOLFGANG EDGARDO MORALES GONZÁLEZ", "area": "PLANTA INTERNA/EXTERNA" },
    { "nombre": "KEVIN GUILLERMO ÁLVAREZ URIZAR", "area": "INFRACOM" },
    { "nombre": "EDGAR GIOVANNI GARCIA", "area": "TRANSFORMETAL" },
    { "nombre": "IRMA YULISSA PIRIR OROZCO", "area": "MANTENIMIENTO" },
    { "nombre": "WILSON ERNESTO GÓMEZ PEÑA", "area": "ZACAPA" },
    { "nombre": "CARLOS RENÉ QUINTANILLA ISOL", "area": "SUPERVISORES ELECTRICOS CLARO" },
    { "nombre": "SERGIO ARMANDO VÁSQUEZ RODRÍGUEZ", "area": "INGENIERÍAS CLARO" },
    { "nombre": "EDWIN LEONEL CARRANZA CARRERA", "area": "INGENIERÍAS CLARO" },
    { "nombre": "GIAN PAOLO RUIZ CÓRDOA", "area": "INGENIERÍAS CLARO" },
    { "nombre": "JUNIOR ENRIQUE PALACIOS COBON", "area": "PLANTA INTERNA/EXTERNA" },
    { "nombre": "OMAR ABISAI HERNÁNDEZ CUM", "area": "QA" },
    { "nombre": "CARLOS RAMIRO YOC CAÑA", "area": "TRANSFORMETAL" },
    { "nombre": "ÁNGEL MANUEL PEÑA AJCU", "area": "ZACAPA" },
    { "nombre": "JOSÉ ALONSO RIU ARREAGA", "area": "BODEGA" },
    { "nombre": "SONIA JUDITH SÁNCHEZ AGUILAR", "area": "UMI" },
    { "nombre": "DANIEL ALEJANDRO OROZCO GUTIÉRREZ", "area": "QUETZALTENANGO" },
    { "nombre": "GERARDO AZAEL SÁNCHEZ BAUTISTA", "area": "TRANSFORMETAL" },
    { "nombre": "LEONARDO ISMAEL ASPUAC RAXÓN", "area": "TECNOLOGÍA DE LA INFORMACIÓN" },
    { "nombre": "NORA ELIZABET DE PAZ DE GONZÁLEZ", "area": "SIQUINALA" },
    { "nombre": "SHARON MELISA TZUN LÓPEZ", "area": "QUETZALTENANGO" },
    { "nombre": "CORINA ZAMAHI MOLINA", "area": "GERENCIA GENERAL" },
    { "nombre": "ADÁN MAYÉN MEJÍA", "area": "PLANTA INTERNA/EXTERNA" },
    { "nombre": "JOSÉ JONATÁN JUÁREZ CHUB", "area": "INFRACOM" },
    { "nombre": "CARLOS OLIVIO VIN TELLEZ", "area": "INFRACOM" },
    { "nombre": "JIMMY ANTONIO RODRÍGUEZ MISTI", "area": "INFRACOM" },
    { "nombre": "ERICK ENRIQUE MICHEL SUHR LOPEZ", "area": "TRANSFORMETAL" },
    { "nombre": "GUILLERMO LEONEL FUENTES PÉREZ", "area": "INFRACOM" },
    { "nombre": "TIMOTEO DE JESÚS SALDAÑA JIMÉNEZ", "area": "INFRACOM" },
    { "nombre": "SALVADOR ULISES ÁVILA MOLINA", "area": "INFRACOM" },
    { "nombre": "LUIS ALBERTO BARDALES GARCÍA", "area": "ZACAPA" },
    { "nombre": "CARLOS ROBERTO VIVAR ROLDÁN", "area": "ZACAPA" },
    { "nombre": "FELIPE ISRAEL TZAQUITZAL CHUC", "area": "QUETZALTENANGO" },
    { "nombre": "EDGAR ORLANDO BARRENO SOLIS", "area": "QUETZALTENANGO" },
    { "nombre": "ABRAHAM ESTIVEN CAMEY SANDOVAL", "area": "PLANTA INTERNA/EXTERNA" },
    { "nombre": "HÉCTOR FRANCISCO CANEL XAJAP", "area": "TRANSFORMETAL" },
    { "nombre": "ANGIE ILIANI NOJ MARTÍNEZ", "area": "CONTABILIDAD" },
    { "nombre": "BAYRON ALEXANDER JOEL PÉREZ IXCHOP", "area": "BODEGA" },
    { "nombre": "MARÍA GABRIELA MANCILLA MORALES", "area": "GERENCIA GENERAL" },
    { "nombre": "MARLON WILFREDO CHAVAC MELÉNDEZ", "area": "QUETZALTENANGO" },
    { "nombre": "IRVING JOSÉ CHAVAC MELÉNDEZ", "area": "QUETZALTENANGO" },
    { "nombre": "KEILA CARINA OVIEDO GARCIA", "area": "MANTENIMIENTO" },
    { "nombre": "LIGIA PAOLA VÁSQUEZ MARTÍNEZ", "area": "GERENCIA DE OPERACIONES" },
    { "nombre": "JAQUELINNE NAYELI RODRÍGUEZ DEL CID", "area": "INFRACOM" },
    { "nombre": "SCHEEL EUGENIO HERNÁNDEZ MALDONADO", "area": "SUPERVISORES ELECTRICOS CLARO" },
    { "nombre": "OSCAR OVIDIO MATTA OJEDA", "area": "SUPERVISORES ELECTRICOS CLARO" },
    { "nombre": "ROLANDO JAVIER MAEDA TUCUX", "area": "SUPERVISORES ELECTRICOS CLARO" },
    { "nombre": "TRÁNSITO GABRIEL PÉREZ ÁLVAREZ", "area": "SUPERVISORES ELECTRICOS CLARO" },
    { "nombre": "GIOVANNI ARTURO SICAL MAYORGA", "area": "SUPERVISORES ELECTRICOS CLARO" },
    { "nombre": "GUILLERMO ANTONIO CATALÁN CHACÓN", "area": "SUPERVISORES ELECTRICOS CLARO" },
    { "nombre": "ROLANDO MANUEL MELGAR BATRES", "area": "SUPERVISORES ELECTRICOS CLARO" },
    { "nombre": "BLANCA ROSITA SALOJ SALVADOR", "area": "PLANTA INTERNA/EXTERNA" },
    { "nombre": "GLENDA FABIOLA TUQUER", "area": "INFOSEG" },
    { "nombre": "CHARLI JOSUE GARCÍA VELÁSQUEZ", "area": "TRANSFORMETAL" },
    { "nombre": "ARISANDY JOSÉ HERRERA GIRON", "area": "QUETZALTENANGO" },
    { "nombre": "WILLIAMS EMMANUEL GONZÁLEZ PALMA", "area": "TRANSFORMETAL" },
    { "nombre": "MILTON ERNESTO CANO VELASQUEZ", "area": "PLANTA INTERNA/EXTERNA" },
    { "nombre": "ROLANDO ANTONIO SIFONTES SOBERANIS", "area": "INFRACOM" },
    { "nombre": "JOSÉ CARLOS RAMÍREZ", "area": "SUPERVISORES ELECTRICOS CLARO" },
    { "nombre": "MARIO ROBERTO CAMEY ORTIZ", "area": "SIQUINALA" },
    { "nombre": "HÉCTOR ERNESTO RACANAC DE LEÓN", "area": "CONTABILIDAD" },
    { "nombre": "RODRIGO VLADIMIR ÁVILA CASTILLO", "area": "INFOSEG" },
    { "nombre": "JOSÉ LUIS AGUSTÍN MORALES", "area": "INFOSEG" },
    { "nombre": "MARÍA ALEJANDRA SAJCHÉ ATRÁS", "area": "INFOSEG" },
    { "nombre": "JOEL EDUARDO LÓPEZ TURCIOS", "area": "INFRACOM" },
    { "nombre": "CÉSAR ALEJANDRO LÓPEZ LUTIN", "area": "TRANSFORMETAL" },
    { "nombre": "TÍÓFILO ESTUARDO HERNÁNDEZ RODRÍGUEZ", "area": "TRANSFORMETAL" },
    { "nombre": "CLAUDIA ROXANA CABRERA GRAJEDA", "area": "TRANSFORMETAL" },
    { "nombre": "EDGAR ARMANDO CATALÁN ASENCIO", "area": "MANTENIMIENTO" },
    { "nombre": "MARÍA LUISA MOLINA CALDERÓN", "area": "QUETZALTENANGO" },
    { "nombre": "GUSTAVO ADOLFO SANTIAGO GONZÁLEZ", "area": "QUETZALTENANGO" },
    { "nombre": "MARÍA GABRIELA MANCILLA MORALES", "area": "GERENCIA GENERAL" },
    { "nombre": "HÉCTOR ERNESTO RACANAC DE LEÓN", "area": "CONTABILIDAD" },
    { "nombre": "HÉCTOR FRANCISCO CANEL XAJAP", "area": "TRANSFORMETAL" },
    { "nombre": "JOSÉ ALEJANDRO LUX MARTÍN", "area": "TRANSFORMETAL" },
    { "nombre": "LUCÍA ESMERALDA VALENZUELA ÁVILA", "area": "INFRACOM" },
    { "nombre": "LINSAY ESPERANZA YULEYDA ABAC IXCHOP", "area": "CONTABILIDAD" },
    { "nombre": "CARLOS ALBERTO BOCH CULAJAY", "area": "INFRACOM" },
    { "nombre": "ERICK ROBERTO MORALES RAMÍREZ", "area": "SIQUINALA" },
    { "nombre": "JUAN PABLO MAYEN ENRÍQUEZ", "area": "TRANSFORMETAL" },
    { "nombre": "JORGE ALBERTO ROMERO PERNILLO", "area": "MANTENIMIENTO" },
    { "nombre": "CARLOS RAMIRO YOC CAÑA", "area": "GUATERACKS" },
    { "nombre": "ROSA ELIZABETH MARTIN CHÁVEZ", "area": "GUATERACKS" },
    { "nombre": "CLAUDIA ROXANA CABRERA GRAJEDA", "area": "GUATERACKS" },
    { "nombre": "ANDREA AVIGAIL CASTILLO CRUZ", "area": "CONTABILIDAD" },
    { "nombre": "MARÍA ALEJANDRA SAJCHÉ DE VUELTA", "area": "CALIDAD Y PROCESOS" },
    { "nombre": "MARLON IVAN RAMÍREZ", "area": "SUPERVISORES ELECTRICOS CLARO" },
    { "nombre": "JOSÉ CARLOS RAMÍREZ", "area": "SUPERVISORES ELECTRICOS CLARO" },
    { "nombre": "KENNNETH SAMMER CARDOZA MANSILLA", "area": "SUPERVISORES ELECTRICOS CLARO" },
    { "nombre": "ANTONIO ULISES ÁVILA HERNÁNDEZ", "area": "SUPERVISORES ELECTRICOS CLARO" },
    { "nombre": "CARLOS GABRIEL FLORES MURPHY", "area": "INFRACOM" },
    { "nombre": "BERTA MARGARITA DE PAZ FRANCO", "area": "ZACAPA" },
    { "nombre": "ROSA ELIZABETH MARTIN CHÁVEZ", "area": "GERENCIA GENERAL" },
    { "nombre": "EDWIN LEONEL CARRANZA CARRERA", "area": "GERENCIA DE OPERACIONES" },
    { "nombre": "ANDERSON RAUL VELASQUEZ LÓPEZ", "area": "PLANTA INTERNA/EXTERNA" },
    { "nombre": "EDDY FERNANDO PIRIR PIRIR", "area": "CONTABILIDAD" },
    { "nombre": "ROSA ESMERALDA AVILA MOLINA", "area": "RECURSOS HUMANOS" },
    { "nombre": "OBDULIO ANTONIO BARRERA", "area": "PLANTA INTERNA/EXTERNA" },
    { "nombre": "LUIS ALFREDO PERDOMO RIVAS", "area": "ARRENDACAR" },
    { "nombre": "JORGE MARIO CANEL XAJAP", "area": "BODEGA" },
    { "nombre": "BRENDA MARISOL CHICOJAY SAJVIN", "area": "FINANCIERA" },
    { "nombre": "MARIA ISABEL PAZAN", "area": "FINANCIERA" },
    { "nombre": "GIAN PAOLO RUIZ CÓRDOA", "area": "PLANTA INTERNA/EXTERNA" },
    { "nombre": "RICARDO ANTONIO VALENZUELA", "area": "GERENCIA GENERAL" },
    { "nombre": "REYNALDO EFRAIN GONZÁLEZ SILIEZAR", "area": "MANTENIMIENTO" },
    { "nombre": "NERY OSWALDO RODRÍGUEZ LARA", "area": "SIQUINALA" },
    { "nombre": "MARVIN ROEL OVALLE CUC", "area": "TECNOLOGÍA DE LA INFORMACIÓN" },
    { "nombre": "ANA ESTEFANIA NORATO PÉREZ", "area": "GERENCIA DE OPERACIONES" },
    { "nombre": "SERGIO ARMANDO VÁSQUEZ RODRÍGUEZ", "area": "INFRAESTRUCTURA" },
    { "nombre": "JORDY ALEXANDER MIRRAEL MERLOS PACHECO", "area": "TRANSFORMETAL" },
    { "nombre": "LUIS ALFREDO FELIPE SIC", "area": "TECNOLOGÍA DE LA INFORMACIÓN" },
    { "nombre": "JOSÉ GERARDO HERNÁNDEZ VALENZUELA", "area": "SEGURIDAD" },
    { "nombre": "JORGE MARIO JOLOMNÁ", "area": "BODEGA" },
    { "nombre": "SANDRA LETICIA BOC CHITAY", "area": "QA" },
    { "nombre": "ANTONIO MISRRAHIM MEJIA TAHAY", "area": "QUETZALTENANGO" },
    { "nombre": "GERSON RICARDO VALENZUELA AVILA", "area": "BODEGA" }
];

// --- 1. VERIFICAR SI YA SE REGISTRÓ ANTES ---
if (localStorage.getItem('registroAsistenciaRRHH')) {
    // Si ya existe la memoria, borramos el formulario y mostramos la advertencia
    document.querySelector('.contenedor').innerHTML = `
        <div style="text-align: center; padding: 20px;">
            <h2 style="color: #d9534f; margin-bottom: 15px;">Registro Previo Detectado</h2>
            <p style="color: #444; font-size: 16px;">
                Ya hemos recibido tu confirmación anteriormente.<br><br>
                Si necesitas modificar tu asistencia, por favor comunícate directamente con <strong>Recursos Humanos</strong>.
            </p>
        </div>
    `;
} else {
    // --- 2. SI NO SE HA REGISTRADO, CARGAMOS TODA LA LÓGICA NORMAL ---
    const inputBuscar = document.getElementById('buscar-nombre');
    const listaSugerencias = document.getElementById('lista-sugerencias');
    const inputArea = document.getElementById('area');
    const botonesDecision = document.querySelectorAll('.btn-decision');
    const inputRespuesta = document.getElementById('respuesta-final');
    const btnEnviar = document.getElementById('btn-enviar');

    inputBuscar.addEventListener('input', function() {
        const texto = this.value.toLowerCase();
        listaSugerencias.innerHTML = ''; 
        
        if (texto.length === 0) {
            listaSugerencias.classList.add('oculto');
            validarFormulario();
            return;
        }

        const filtrados = colaboradores.filter(emp => emp.nombre.toLowerCase().includes(texto));

        if (filtrados.length > 0) {
            listaSugerencias.classList.remove('oculto');
            filtrados.forEach(emp => {
                const li = document.createElement('li');
                li.textContent = emp.nombre;
                li.addEventListener('click', () => seleccionarEmpleado(emp));
                listaSugerencias.appendChild(li);
            });
        } else {
            listaSugerencias.classList.add('oculto');
        }
        validarFormulario();
    });

    document.addEventListener('click', function(e) {
        if (e.target !== inputBuscar && e.target !== listaSugerencias) {
            listaSugerencias.classList.add('oculto');
        }
    });

    function seleccionarEmpleado(empleado) {
        inputBuscar.value = empleado.nombre;
        inputArea.value = empleado.area;
        listaSugerencias.classList.add('oculto');
        validarFormulario();
    }

    inputArea.addEventListener('input', validarFormulario);

    botonesDecision.forEach(boton => {
        boton.addEventListener('click', function() {
            botonesDecision.forEach(b => b.classList.remove('seleccionado'));
            this.classList.add('seleccionado');
            inputRespuesta.value = this.dataset.respuesta;
            validarFormulario();
        });
    });

    function validarFormulario() {
        if (inputBuscar.value.trim() !== '' && inputArea.value.trim() !== '' && inputRespuesta.value !== '') {
            btnEnviar.disabled = false;
        } else {
            btnEnviar.disabled = true;
        }
    }

    document.getElementById('registro-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        btnEnviar.textContent = 'Enviando...';
        btnEnviar.disabled = true;

        const URL_GOOGLE_SHEETS = 'https://script.google.com/macros/s/AKfycbw5_x8OfW0al6Cdu1gNCkc1Y5oqiBVCKjsmvTVlT1s-sssEXsDgRGGp0ZIg1RXuqI4RJw/exec'; 

        const formData = new FormData();
        formData.append('nombre', inputBuscar.value.trim());
        formData.append('area', inputArea.value.trim());
        formData.append('respuesta', inputRespuesta.value);

        fetch(URL_GOOGLE_SHEETS, {
            method: 'POST',
            body: formData
        })
        .then(respuesta => respuesta.json())
        .then(datos => {
            // AQUÍ ESTÁ EL CANDADO: Guardamos en el navegador que ya votó
            localStorage.setItem('registroAsistenciaRRHH', 'true');

            document.querySelector('.contenedor').innerHTML = `
                <div style="text-align: center; padding: 20px;">
                    <h2 style="color: #28a745; margin-bottom: 15px;">¡Registro Exitoso!</h2>
                    <p style="color: #444; font-size: 16px;">
                        Gracias <strong>${inputBuscar.value.trim()}</strong>.<br><br> 
                        RRHH ha registrado tu asistencia desde el área de ${inputArea.value.trim()}.
                    </p>
                </div>
            `;
        })
        .catch(error => {
            alert('Hubo un error de conexión. Por favor intenta de nuevo.');
            btnEnviar.textContent = 'Enviar Respuesta';
            btnEnviar.disabled = false;
        });
    });
}

// --- 9. LÓGICA DE LA VENTANA INFORMATIVA (MODAL) ---
document.addEventListener('DOMContentLoaded', function() {
    const botonEntendido = document.getElementById('btn-entendido');
    const modalInformativo = document.getElementById('modal-informativo');

    // Al hacer clic en "Entendido", cerramos la ventana emergente
    if(botonEntendido && modalInformativo) {
        botonEntendido.addEventListener('click', function() {
            modalInformativo.classList.add('ocultar-modal');
        });
    }
});



