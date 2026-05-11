<?php
// PHP Partial: Course Card
function renderCourseCard($title, $desc, $progress) {
    ?>
    <div class="card-academic animate-fade">
        <div style="width: 40px; height: 40px; background: rgba(86,140,117,0.1); border-radius: 10px; display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem; color: var(--primary-med);">
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
        </div>
        <h3 style="font-size: 1.1rem; font-weight: 700; color: var(--primary-dark); margin-bottom: 0.5rem;"><?php echo $title; ?></h3>
        <p style="font-size: 0.85rem; color: var(--text-gray); margin-bottom: 1.5rem;"><?php echo $desc; ?></p>
        
        <div class="progress-info" style="display: flex; justify-content: space-between; font-size: 0.7rem; font-weight: 800; color: var(--primary-med); text-transform: uppercase;">
            <span>Progreso</span>
            <span><?php echo $progress; ?>%</span>
        </div>
        <div class="progress-bar">
            <div class="progress-fill" style="width: <?php echo $progress; ?>%;"></div>
        </div>
        
        <a href="#" class="btn btn-primary" style="width: 100%; margin-top: 1.5rem; font-size: 0.8rem;">Continuar Lectura</a>
    </div>
    <?php
}
?>
