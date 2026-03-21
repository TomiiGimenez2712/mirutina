/* 
=========================================================
  BASE DE DATOS LOCAL Y ESTRUCTURA DE LA RUTINA DEL GYM
=========================================================
*/

const routineData = [
    {
        id: 'dia1',
        shortName: 'Día 1',
        day: "Día 1: Pecho, Bíceps y Hombro",
        focus: "Empuje de pecho con tracción de brazo",
        description: "Combinamos empuje de pecho con tracción de brazo.",
        biseries: [
            {
                name: "Biserie 1",
                desc: "El mejor constructor de pecho superior y bíceps aislado",
                exercises: [
                    { id: "A1", name: "Press Inclinado con Mancuernas (30°)", details: "Mejor que la barra para activar las fibras superiores y permite rango natural.", sets: 3, reps: "8-10 reps" },
                    { id: "A2", name: "Curl Predicador (Máquina o Barra Z)", details: "Estabilidad total para aislar el bíceps sin balanceo.", sets: 3, reps: "12-15 reps" }
                ]
            },
            {
                name: "Biserie 2",
                desc: "Pecho general y Bíceps en estiramiento",
                exercises: [
                    { id: "A1", name: "Press Plano en Máquina Convergente (o Mancuernas)", details: "La máquina te da estabilidad para llegar al fallo seguro.", sets: 3, reps: "10-12 reps" },
                    { id: "A2", name: "Curl con Polea de espaldas", details: "El brazo va detrás del torso. Científicamente esencial para la cabeza larga del bíceps.", sets: 3, reps: "12-15 reps" }
                ]
            },
            {
                name: "Biserie 3",
                desc: "Estímulo de Hombro Lateral y Bombeo de Pecho",
                exercises: [
                    { id: "A1", name: "Elevación Lateral en Polea", details: "A la altura de la muñeca. Tensión constante desde el inicio del movimiento.", sets: 4, reps: "15 reps" },
                    { id: "A2", name: "Cruce de Poleas (Aperturas)", details: "Cruza las manos al final para máxima contracción del pectoral.", sets: 3, reps: "15-20 reps" }
                ]
            }
        ]
    },
    {
        id: 'dia2',
        shortName: 'Día 2',
        day: "Día 2: Piernas (Tren Inferior Completo)",
        focus: "Piernas completas",
        description: "Al concentrar todo el estímulo en un solo día, combinamos los mejores ejercicios compuestos y de aislamiento.",
        biseries: [
            {
                name: "Biserie 1",
                desc: "Cuádriceps pesado y Femorales",
                exercises: [
                    { id: "A1", name: "Prensa 45°", details: "Científicamente superior a la sentadilla libre para hipertrofia porque no requiere equilibrio y el estímulo va 100% al cuádriceps.", sets: 3, reps: "8-10 reps" },
                    { id: "A2", name: "Femorales en máquina", details: "Científicamente superior al tumbado porque estira más el isquiotibial desde la cadera.", sets: 3, reps: "12-15 reps" }
                ]
            },
            {
                name: "Biserie 2",
                desc: "Glúteo y Aislamiento Frontal",
                exercises: [
                    { id: "B1", name: "Hip Thrust en Máquina (o Barra)", details: "El mejor ejercicio de glúteo por electromiografía.", sets: 3, reps: "10-12 reps" },
                    { id: "B2", name: "Extensión de Cuádriceps", details: "El único ejercicio que trabaja el recto femoral en posición corta.", sets: 3, reps: "15 reps al fallo" }
                ]
            },
            {
                name: "Bloque Final",
                desc: "Pantorrillas",
                exercises: [
                    { id: "C1", name: "Elevación de Pantorrilla de Pie", details: "Haz una pausa de 2 segundos abajo estirando y 1 segundo arriba apretando.", sets: 4, reps: "12-15 reps" }
                ]
            }
        ]
    },
    {
        id: 'dia3',
        shortName: 'Día 3',
        day: "Día 3: Espalda, Tríceps y Hombro",
        focus: "Espalda y Tríceps",
        description: "Espalda y Tríceps son antagonistas naturales en muchos movimientos.",
        biseries: [
            {
                name: "Biserie 1",
                desc: "Amplitud Dorsal y Cabeza Larga Tríceps",
                exercises: [
                    { id: "A1", name: "Jalón al Pecho Unilateral (o Dominadas)", details: "Hacerlo a una mano permite mayor recorrido del dorsal.", sets: 3, reps: "10-12 reps" },
                    { id: "A2", name: "Extensión de Tríceps sobre la cabeza", details: "En polea. Obligatorio para crecer el tríceps (cabeza larga).", sets: 3, reps: "12-15 reps" }
                ]
            },
            {
                name: "Biserie 2",
                desc: "Densidad de Espalda y Tríceps Lateral",
                exercises: [
                    { id: "A1", name: "Remo Serrucho en banco inclinado", details: "Al apoyar el pecho eliminamos la inercia.", sets: 3, reps: "10-12 reps" },
                    { id: "A2", name: "Tríceps en Polea con barra (Pushdown)", details: "Manten los codos pegados al cuerpo.", sets: 3, reps: "12-15 reps" }
                ]
            },
            {
                name: "Biserie 3",
                desc: "Hombro Lateral y Estiramiento Dorsal",
                exercises: [
                    { id: "A1", name: "Elevación Lateral en Polea", details: "Cable por detrás de la espalda. Ataca fibras diferentes.", sets: 4, reps: "15-20 reps" },
                    { id: "A2", name: "Pull-Over con Polea (Cuerda)", details: "Aísla el dorsal sin usar los bíceps.", sets: 3, reps: "15 reps" }
                ]
            }
        ]
    },
    {
        id: 'dia4',
        shortName: 'Día 4',
        day: "Día 4: Hombros + Brazos",
        focus: "Estética pura",
        description: "Día de estética pura. Aquí damos el toque final.",
        biseries: [
            {
                name: "Biserie 1",
                desc: "Fuerza de Hombro y Salud Articular",
                exercises: [
                    { id: "A1", name: "Press Militar con Mancuernas (Sentado)", details: "Sentado elimina la trampa con las piernas.", sets: 3, reps: "8-10 reps" },
                    { id: "A2", name: "Face Pull en polea", details: "Fundamental para deltoides posterior y postura.", sets: 3, reps: "15 reps" }
                ]
            },
            {
                name: "Biserie 2",
                desc: "Hombro Lateral 'Y' y Braquial",
                exercises: [
                    { id: "A1", name: "Elevación Lateral 'Y' con Mancuernas", details: "En banco inclinado. Tensión brutal en la parte final.", sets: 4, reps: "12-15 reps" },
                    { id: "A2", name: "Curl Martillo", details: "Para el músculo braquial (anchura del brazo de frente).", sets: 3, reps: "10-12 reps" }
                ]
            },
            {
                name: "Biserie 3",
                desc: "Trapecio y Bombeo final",
                exercises: [
                    { id: "C1", name: "Encogimiento de hombros con mancuernas", details: "Aguanta 3 segundos arriba.", sets: 3, reps: "al fallo" },
                    { id: "C2", name: "Press de Banca con Agarre Estrecho", details: "Codos pegados al cuerpo para reventar tríceps con seguridad.", sets: 3, reps: "al fallo" }
                ]
            }
        ]
    }
];

// Variable global que rastrea la pestaña del día que el usuario está viendo
let currentDayIndex = 0;

/* 
=========================================================
  OBTENCIÓN DE DATOS ALMACENADOS EN EL TELÉFONO
=========================================================
*/

// Cargamos el historial y progreso de los ejercicios o determinamos valores por defecto vacíos
let progressData = JSON.parse(localStorage.getItem('rutinaProgress')) || {};

// Cargamos las analíticas o información local de logros (Rachas, Calendario, Récords Personales)
let statsData = JSON.parse(localStorage.getItem('rutinaStats')) || {
    workoutLog: {},     // Fechas de entrenamientos hechos: {"YYYY-MM-DD": true}
    maxWeights: {},     // Máximos históricos de peso levantado para cada ejercicio individual
    lastWeekReset: null // Fecha de la última vez que el sistema se auto-limpió (Lunes pasado)
};

// Punto de entrada cuando se carga la aplicación web por primera vez
document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

function initApp() {
    checkWeeklyReset();        // Validar si debemos borrar los checks marcados de la semana pasada
    renderDaySelector();       // Construir el menú deslizante superior
    renderDay(currentDayIndex);// Pintar el contenido del día inicial correspondiente
    updateStreakUI();          // Calcular e inyectar el número de semanas de constancia del usuario
}

/* 
=========================================================
  LÓGICA DEL REINICIO AUTOMÁTICO SEMANAL (GAMIFICACIÓN)
=========================================================
*/

// Esta función revisa si estamos en un lunes de una nueva semana, y si es así,
// despinta todas las casillas pero NO borra los datos de peso.
function checkWeeklyReset() {
    const today = new Date();
    const day = today.getDay(); // 0 Representa Domingo, 1 es Lunes
    
    // Obtener la diferencia en tiempo para retrasar el cálculo artificialmente y calcular cuándo cayó "Lunes"
    const diff = today.getDate() - day + (day === 0 ? -6 : 1); 
    const currentMonday = new Date(today.setDate(diff));
    currentMonday.setHours(0,0,0,0); // Ignoramos tiempos extra; nos importa únicamente el día
    const currentMondayStr = currentMonday.toISOString().split('T')[0];

    // ¡Es una nueva semana! Llevamos los ejercicios a "No completado", borramos insignias de PR nuevo, pero dejamos el peso de la semana
    if (statsData.lastWeekReset !== currentMondayStr) {
        for (let key in progressData) {
            progressData[key].completed = false;
            progressData[key].isNewPR = false; // Quitamos la medalla de PR de la semana anterior
        }
        localStorage.setItem('rutinaProgress', JSON.stringify(progressData));
        statsData.lastWeekReset = currentMondayStr;
        saveStats();
    }
}

// Función auxiliar para forzar un guardado inmediato de las estadísticas
function saveStats() {
    localStorage.setItem('rutinaStats', JSON.stringify(statsData));
}

/* 
=========================================================
  LÓGICA VISUAL (CONSTRUCCIÓN DE INTERFAZ DEL USUARIO)
=========================================================
*/

// Construye e inyecta los botones circulares ("Día 1", "Día 2") en el selector superior
function renderDaySelector() {
    const container = document.getElementById('day-selector');
    container.innerHTML = '';

    routineData.forEach((day, index) => {
        const btn = document.createElement('button');
        btn.className = `day-btn ${index === currentDayIndex ? 'active' : ''}`;
        btn.textContent = day.shortName;
        
        // Asignar el comportamiento al tocar cada botón (recarga los modelos y desplaza la vista)
        btn.onclick = () => {
            currentDayIndex = index;
            renderDaySelector();
            renderDay(index);
        };
        container.appendChild(btn);
    });

    // Desliza dinámicamente el scroll de los botones para asegurarse de que el activo esté a la vista
    const activeBtn = container.querySelector('.active');
    if (activeBtn) {
        activeBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
}

// Rellena la región central de la web armando los bloques, series y botones de las rutinas de un día en particular
function renderDay(index) {
    const day = routineData[index];
    const container = document.getElementById('routine-container');

    // Inicializo un bloque inyector de texto HTML que vamos a apilar dinámicamente basado en la rutina requerida
    let html = `
        <div class="day-header">
            <h2 class="day-title">${day.day}</h2>
            <p class="day-desc">${day.description}</p>
        </div>
    `;

    day.biseries.forEach((biserie, bIndex) => {
        html += `
            <div class="biserie-card">
                <div class="biserie-header">
                    <div class="biserie-title">
                        <i class="fa-solid fa-link"></i> ${biserie.name}
                    </div>
                    <div style="font-size:0.9rem; color:var(--text-muted); margin-top:6px;">${biserie.desc}</div>
                </div>
        `;

        biserie.exercises.forEach((ex, exIndex) => {
            // Genero un Identificador Único Universal del ejercicio (Ej: dia1-b0-e1)
            const exId = `${day.id}-b${bIndex}-e${exIndex}`;
            const isCompleted = progressData[exId]?.completed || false;
            const weightVal = progressData[exId]?.weight || '';
            const imgSearchLink = `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(ex.name)}`;
            
            // Mostrar la insignia solo si es un nuevo récord logrado en esta misma semana
            const isPR = progressData[exId]?.isNewPR || false;

            html += `
                <div class="exercise">
                    <div class="ex-name-container">
                        <div class="ex-id">${ex.id}</div>
                        <div>
                            <div class="ex-name">
                                ${ex.name} 
                                <!-- Insignia Condicional de Récord Personal Oculta u Obvia -->
                                <span class="pr-badge" id="pr-${exId}" style="display:${isPR ? 'inline-flex' : 'none'}">
                                    <i class="fa-solid fa-crown"></i> PR
                                </span>
                            </div>
                            ${ex.details ? `<div class="ex-details">${ex.details}</div>` : ''}
                            <a href="${imgSearchLink}" target="_blank" class="img-btn">
                                <i class="fa-solid fa-image"></i> Ver postura
                            </a>
                        </div>
                    </div>
                    
                    <div class="sets-container">
                        <div class="set-row ${isCompleted ? 'completed' : ''}" id="row-${exId}">
                            <div class="set-info">
                                <i class="fa-solid fa-layer-group" style="color:var(--text-muted); margin-right:6px;"></i>
                                <span>${ex.sets} series de ${ex.reps}</span>
                            </div>
                            <div class="set-input-group">
                                <div class="weight-wrapper">
                                    <input type="number" 
                                           class="weight-input" 
                                           placeholder="" 
                                           value="${weightVal}"
                                           onchange="saveWeight('${exId}', this.value)"
                                           onfocus="this.select()"
                                    />
                                    <span class="weight-unit">kg</span>
                                </div>
                                <button class="check-btn" onclick="toggleSet('${exId}')" aria-label="Completar">
                                    <i class="fa-solid fa-check"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });

        html += `</div>`;
    });

    container.innerHTML = html;
    
    // Al instanciar las tarjetas de ejercicios hay que recalcular el porcentaje visual de la barra de progreso
    updateProgressBar();
}

// Analiza los ejercicios del día activo actual, cuenta los completados frente al total, 
// y expande la barra horizontal coloreada para el usuario.
function updateProgressBar() {
    const day = routineData[currentDayIndex];
    let total = 0;
    let done = 0;

    day.biseries.forEach((b, bIndex) => {
        b.exercises.forEach((ex, exIndex) => {
            total++;
            const exId = `${day.id}-b${bIndex}-e${exIndex}`;
            if (progressData[exId]?.completed) done++;
        });
    });

    const pb = document.getElementById('progress-bar');
    if (pb) {
        // Enlazar de 0 hasta 100 previniendo divisiones por 0 anormales
        const percentage = total === 0 ? 0 : (done / total) * 100;
        pb.style.width = percentage + '%';
    }
    
    // Devolvemos los cómputos de vuelta para analizar un futuro lanzamiento de "Confeti final"
    return { done, total };
}

/* 
=========================================================
  INTERACCIONES Y ACTUALIZACIONES DE EVENTOS EN VIVO
=========================================================
*/

// Acción disparada cuando el Cuadro de texto del peso se deselecciona o presiona 'Hecho'
window.saveWeight = function(exId, value) {
    if (!progressData[exId]) progressData[exId] = { completed: false, weight: '' };
    progressData[exId].weight = value;
    localStorage.setItem('rutinaProgress', JSON.stringify(progressData));

    // Lógica inteligente de Récords Personales (PR) - Sistema de premios
    const numVal = parseFloat(value);
    if (!isNaN(numVal) && numVal > 0) {
        const currentMax = statsData.maxWeights[exId] || 0;
        
        // ¡RÉCORD DE PESO LOCAL SUPERADO!
        if (numVal > currentMax) {
            statsData.maxWeights[exId] = numVal;
            saveStats();
            
            // Registrar que en esta semana logramos un PR para mostrar la insignia y que perdure
            progressData[exId].isNewPR = true;
            localStorage.setItem('rutinaProgress', JSON.stringify(progressData));
            
            // Forzar el despliegue del componente gráfico con una animación estallando
            const prBadge = document.getElementById('pr-' + exId);
            if(prBadge) {
                prBadge.style.display = 'inline-flex';
                // Minúscula pirotecnia para premiar un nuevo pico de superación personal
                if(window.confetti) {
                    confetti({ particleCount: 40, spread: 50, origin: { y: 0.6 }, drift: 0 });
                }
            }
        }
    }
}

// Tocar el gran botón interactivo que determina si una serie en cuestión ha finalizado
window.toggleSet = function(exId) {
    if (!progressData[exId]) progressData[exId] = { completed: false, weight: '' };
    
    // Consultar el progreso del usuario exactamente un segundo ANTES de registrar si avanzó o si deshizo el logro
    const { done: prevDone, total } = updateProgressBar();
    
    // Invertir verdadero/falso
    progressData[exId].completed = !progressData[exId].completed;
    localStorage.setItem('rutinaProgress', JSON.stringify(progressData));

    const row = document.getElementById(`row-${exId}`);
    
    if (progressData[exId].completed) {
        row.classList.add('completed');
        
        // Registrar que entrenamos por lo menos "ALGO" para el registro global "Estilo GitHub"
        const localNow = new Date();
        const todayStr = `${localNow.getFullYear()}-${String(localNow.getMonth() + 1).padStart(2, '0')}-${String(localNow.getDate()).padStart(2, '0')}`;
        statsData.workoutLog[todayStr] = true;
        saveStats();
        updateStreakUI();
        
    } else {
        row.classList.remove('completed');
    }

    // Consultar nuevamente a la barra si el estado ACTUALIZADO cumple los requisitos para lanzar confetis del 100%
    const { done: newDone } = updateProgressBar();
    
    // Condición: Haber llegado directamente hacia LA CIMA total permitida de bloques de un día en específico.
    if (newDone === total && prevDone < total) {
        // ¡¡Fiesta espectacular global de fin de sesión!! (Una lluvia explosiva sostenida de confeti neón y verde intenso)
        if (window.confetti) {
            const end = Date.now() + 1.5 * 1000;
            const colors = ['#d8f12a', '#32d74b', '#ffffff'];
            (function frame() {
                confetti({ particleCount: 3, angle: 60, spread: 55, origin: { x: 0 }, colors: colors });
                confetti({ particleCount: 3, angle: 120, spread: 55, origin: { x: 1 }, colors: colors });
                if (Date.now() < end) requestAnimationFrame(frame); // Solicitar frames constantes al sistema
            }());
        }
    }
}

/* 
=========================================================
  ANALÍTICAS HISTÓRICAS: RACHA CONSECUTIVA (STREAKS) 
=========================================================
*/

// Recorrer las firmas de fechas y deducir una estadística puramente motivacional computada
function updateStreakUI() {
    const dates = Object.keys(statsData.workoutLog).sort();
    if(dates.length === 0) {
        document.getElementById('streak-count').textContent = "0";
        return;
    }
    
    // Función auxiliar para obtener la fecha local como "YYYY-MM-DD" seguro de zonas horarias
    const getLocalStr = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    
    const getMondayStr = (dateObj) => {
        const day = dateObj.getDay();
        const d = new Date(dateObj); // Clon
        d.setDate(d.getDate() - day + (day === 0 ? -6 : 1));
        return getLocalStr(d);
    };

    const weeks = new Set();
    dates.forEach(dStr => {
        const parts = dStr.split('-');
        const localD = new Date(parseInt(parts[0], 10), parseInt(parts[1], 10)-1, parseInt(parts[2], 10));
        weeks.add(getMondayStr(localD));
    });
    
    let streak = 0;
    const today = new Date();
    
    let checkDate = new Date(today);
    checkDate.setDate(today.getDate() - today.getDay() + (today.getDay() === 0 ? -6 : 1));
    
    for(let i=0; i<52; i++) {
        const checkStr = getMondayStr(checkDate);
        if(weeks.has(checkStr)) {
            streak++;
        } else {
            // Un perdón solo para LA SEMANA ACTUAL (en caso de que no haya entrenado aún esta semana, pero sí la pasada)
            if(i !== 0) break;
        }
        checkDate.setDate(checkDate.getDate() - 7);
    }
    
    document.getElementById('streak-count').textContent = streak;
}

// Ventana Emergente Táctil Inferior que provee Estadísticas GitHub.
window.openStatsModal = function() {
    document.getElementById('stats-modal').classList.remove('hidden');
    
    const dates = Object.keys(statsData.workoutLog);
    document.getElementById('modal-workouts').textContent = dates.length;
    document.getElementById('modal-streak').textContent = document.getElementById('streak-count').innerText;
    
    // Inyectar en tiempo real los cuadros simulados de 28 días estilo GitHub (Matriz inerte verde/gris oscura).
    const grid = document.getElementById('activity-grid');
    grid.innerHTML = '';
    const today = new Date();
    today.setHours(0,0,0,0);
    
    for(let i=27; i>=0; i--) {
        const d = new Date(today);
        d.setDate(today.getDate() - i);
        // Formateo seguro a hora local
        const dStr = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
        const isCompleted = statsData.workoutLog[dStr];
        
        grid.innerHTML += `<button type="button" class="grid-day ${isCompleted ? 'active' : ''}" onclick="toggleGridDay('${dStr}')" title="${dStr}"></button>`;
    }
}

// Permitir al usuario tocar un cuadrito de la cuadrícula para registrar un entrenamiento retroactivo o borrarlo
window.toggleGridDay = function(dStr) {
    if (statsData.workoutLog[dStr]) {
        delete statsData.workoutLog[dStr];
    } else {
        statsData.workoutLog[dStr] = true;
    }
    saveStats();
    updateStreakUI();
    openStatsModal(); // Refrescar los números de la ventana
}

// Cerrar la ventana inyectando el valor CSS estandar "display:none" por la clase oculta.
window.closeStatsModal = function() {
    document.getElementById('stats-modal').classList.add('hidden');
}

/* 
=========================================================
  NAVEGACIÓN GESTUAL (SWIPE HORIZONTAL) 
=========================================================
*/

let touchStartX = 0;
let touchEndX = 0;
const SWIPE_THRESHOLD = 70; // Distancia mínima en píxeles para considerar que fue un "deslizamiento"

document.addEventListener('touchstart', e => {
    // Evitar registrar swipes si estamos tocando el carrusel de días superior o el modal
    if (e.target.closest('.day-selector') || e.target.closest('.modal-content')) return;
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', e => {
    if (e.target.closest('.day-selector') || e.target.closest('.modal-content')) return;
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeDistance = touchEndX - touchStartX;
    
    // Deslizó hacia la izquierda (Siguiente Día)
    if (swipeDistance < -SWIPE_THRESHOLD) {
        if (currentDayIndex < routineData.length - 1) {
            currentDayIndex++;
            renderDaySelector();
            renderDay(currentDayIndex);
        }
    }
    // Deslizó hacia la derecha (Día Anterior)
    if (swipeDistance > SWIPE_THRESHOLD) {
        if (currentDayIndex > 0) {
            currentDayIndex--;
            renderDaySelector();
            renderDay(currentDayIndex);
        }
    }
}
