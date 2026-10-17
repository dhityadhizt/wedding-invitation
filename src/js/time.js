import { data } from "../assets/data/data.js";

export const time = () => {
    const timeContainer = document.querySelector('.time');
    if (!timeContainer) return;

    const [marriageDiv, receptionDiv] = timeContainer.querySelectorAll('div div');

    // Sembunyikan elemen bawaan lama jika ada agar tidak merusak layout
    const mapLink = timeContainer.querySelector('a[role="link"]');
    const addressParagraph = timeContainer.querySelector('a + p');
    if (mapLink) mapLink.style.display = 'none';
    if (addressParagraph) addressParagraph.style.display = 'none';

    // Helper function untuk merender kartu acara lengkap dengan Alamat & Maps
    const createTimeListItem = (title, details) => {
        if (!details) return '';
        
        return `
            <h3>${title}</h3>
            <p>${details.day}, ${details.date} ${details.month} ${details.year} <br> 
            Pukul ${details.hours.start} WIB sd ${details.hours.finish}</p>
            <p style="margin-top: 0.5rem; font-weight: 500;">${details.address || ''}</p>
            ${details.map ? `
                <a href="${details.map}" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 0.4rem; margin-top: 0.8rem; padding: 0.4rem 0.8rem; border: 1px solid #ccc; border-radius: 8px; text-decoration: none; color: inherit;">
                    <i class="bx bxs-map-alt"></i>
                    <span>Petunjuk Lokasi ${title}</span>
                </a>
            ` : ''}
        `;
    };

    if (marriageDiv) {
        marriageDiv.innerHTML = createTimeListItem('Akad dan Resepsi', data.time?.marriage);
    }
    
    if (receptionDiv) {
        receptionDiv.innerHTML = createTimeListItem('Tasyakuran', data.time?.reception);
    }
};
