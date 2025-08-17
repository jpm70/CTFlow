// Variable para rastrear el progreso del usuario
let currentPhase = 1;

// Alternar la visibilidad de la sección de una fase
function togglePhase(phaseId) {
    const phase = document.getElementById(phaseId);
    const content = phase.querySelector('.phase-content');
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
}

// Marcar una fase como completada
function completePhase(phaseId) {
    const phase = document.getElementById(phaseId);
    const phaseNumber = parseInt(phaseId.replace('phase-', ''));
    
    if (phaseNumber === currentPhase) {
        // Marca la fase actual como completada
        phase.classList.remove('locked');
        phase.classList.add('completed');
        
        // Cambia el ícono de candado a un check
        const statusIcon = phase.querySelector('.status-icon');
        statusIcon.textContent = 'check_circle';
        
        // Desbloquea la siguiente fase
        const nextPhaseId = `phase-${currentPhase + 1}`;
        const nextPhase = document.getElementById(nextPhaseId);
        if (nextPhase) {
            nextPhase.classList.remove('locked');
            nextPhase.querySelector('.status-icon').textContent = 'lock_open';
        }
        
        // Incrementa la fase actual para que el usuario pueda avanzar
        currentPhase++;
        
        alert(`¡Fase ${phaseNumber} completada! 🎉 Ahora puedes pasar a la siguiente.`);
    } else {
        alert('Debes completar las fases en orden. ¡Completa la fase anterior primero!');
    }
}

// Inicializa el estado de las fases al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    // La primera fase siempre está desbloqueada
    const firstPhase = document.getElementById('phase-1');
    firstPhase.classList.remove('locked');
    firstPhase.querySelector('.status-icon').textContent = 'lock_open';
});