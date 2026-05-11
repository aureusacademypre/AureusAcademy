const supabaseUrl = 'https://ajbriylkkfullbcipxii.supabase.co';
const supabaseKey = 'sb_publishable_YPkUzbD2dq0DWbQQG0qvJA_04f5-xOY';

// Inicializar el cliente globalmente
try {
    window.supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);
    console.log('Supabase Client Initialized');
} catch (e) {
    console.error('Error initializing Supabase:', e);
}

// Función para verificar conexión (ayuda a diagnosticar Failed to fetch)
async function testSupabaseConnection() {
    try {
        const { data, error } = await window.supabaseClient.from('perfiles').select('id').limit(1);
        if (error) {
            console.error('Conexión con Supabase fallida:', error);
            return false;
        }
        console.log('Conexión con Supabase exitosa');
        return true;
    } catch (err) {
        console.error('Error de red al conectar con Supabase:', err);
        return false;
    }
}
