function openAdminPanel() {
    document.getElementById('adminPanel').classList.remove('hidden');
}

function closeAdminPanel() {
    document.getElementById('adminPanel').classList.add('hidden');
    document.getElementById('loginForm').classList.remove('hidden');
    document.getElementById('adminDashboard').classList.add('hidden');
}

function loginAdmin() {
    const username = document.getElementById('adminUsername').value;
    const password = document.getElementById('adminPassword').value;
    
    if (username === 'admin' && password === 'congo2025') {
        document.getElementById('loginForm').classList.add('hidden');
        document.getElementById('adminDashboard').classList.remove('hidden');
        loadRegistrations();
    } else {
        alert('Identifiants incorrects');
    }
}

function logoutAdmin() {
    document.getElementById('adminDashboard').classList.add('hidden');
    document.getElementById('loginForm').classList.remove('hidden');
    document.getElementById('adminUsername').value = '';
    document.getElementById('adminPassword').value = '';
}

function loadRegistrations() {
    const registrations = JSON.parse(localStorage.getItem('registrations') || '[]');
    const tableBody = document.getElementById('registrationsTableBody');
    tableBody.innerHTML = '';
    
    if (registrations.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="5" class="py-8 px-4 text-center text-gray-500">
                    Aucune inscription trouvée
                </td>
            </tr>
        `;
        return;
    }
    
    registrations.forEach((reg, index) => {
        const row = document.createElement('tr');
        row.className = 'border-b border-gray-200 hover:bg-gray-50';
        row.innerHTML = `
            <td class="py-3 px-4">${reg.fullName}</td>
            <td class="py-3 px-4">${reg.email}</td>
            <td class="py-3 px-4">${reg.phone}</td>
            <td class="py-3 px-4">
                <div class="flex flex-wrap gap-1">
                    ${reg.events.map(event => `
                        <span class="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                            ${event}
                        </span>
                    `).join('')}
                </div>
            </td>
            <td class="py-3 px-4">
                <button onclick="deleteRegistration(${index})" class="text-red-500 hover:text-red-700">
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

function deleteRegistration(index) {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette inscription ?')) {
        let registrations = JSON.parse(localStorage.getItem('registrations') || '[]');
        registrations.splice(index, 1);
        localStorage.setItem('registrations', JSON.stringify(registrations));
        loadRegistrations();
    }
}

function exportToCSV() {
    const registrations = JSON.parse(localStorage.getItem('registrations') || '[]');
    
    if (registrations.length === 0) {
        alert('Aucune donnée à exporter');
        return;
    }
    
    const headers = ['Nom', 'Email', 'Téléphone', 'Nationalité', 'Profession', 'Organisation', 'Activités', 'Date'];
    const csvContent = [
        headers.join(','),
        ...registrations.map(reg => [
            `"${reg.fullName}"`,
            `"${reg.email}"`,
            `"${reg.phone}"`,
            `"${reg.nationality}"`,
            `"${reg.occupation}"`,
            `"${reg.organization || ''}"`,
            `"${reg.events.join(', ')}"`,
            new Date(reg.timestamp).toLocaleDateString()
        ].join(','))
    ].join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'inscriptions_65e_anniversaire.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

document.getElementById('searchRegistrations')?.addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const rows = document.querySelectorAll('#registrationsTableBody tr');
    
    rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        row.style.display = text.includes(searchTerm) ? '' : 'none';
    });
});

function closeConfirmationModal() {
    document.getElementById('confirmationModal').classList.add('hidden');
    document.getElementById('confirmationModal').classList.remove('flex');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}