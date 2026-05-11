<?php
// PHP Partial: Navbar
function renderNavbar($activePage = 'dashboard') {
    ?>
    <nav class="navbar">
        <div class="caja">
            <div class="navbar-content">
                <a href="index.php" class="navbar-logo">
                    <img src="../img/logo.png" alt="Aureus Logo">
                    <div>
                        <h1 style="font-size: 1.2rem; font-weight: 800; line-height: 1;">AUREUS ACADEMY</h1>
                        <span style="font-size: 0.6rem; color: var(--primary-light); text-transform: uppercase; letter-spacing: 2px;">Gestión Académica</span>
                    </div>
                </a>
                
                <div class="navbar-links">
                    <a href="index.php" class="nav-link <?php echo $activePage == 'dashboard' ? 'active' : ''; ?>">Dashboard</a>
                    <a href="#" class="nav-link">Mis Cursos</a>
                    <a href="admin.php" class="nav-link <?php echo $activePage == 'admin' ? 'active' : ''; ?>">Administración</a>
                    <a href="login.php" class="btn btn-secondary" style="padding: 0.5rem 1.2rem; font-size: 0.8rem;">Cerrar Sesión</a>
                </div>
            </div>
        </div>
    </nav>
    <?php
}
?>
