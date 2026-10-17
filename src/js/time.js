import { data } from "../assets/data/data.js";

export const time = () => {
    const timeContainer = document.querySelector('.time');
    const [marriageDiv, receptionDiv] = timeContainer.querySelectorAll('div div');

    // Sembunyikan elemen fallback tunggal jika masih ada di HTML
    const singleMapLink = timeContainer.querySelector('a');
    const singleAddressParagraph = timeContainer.querySelector('a + p');
    if (singleMapLink) singleMapLink.style.display = 'none';
    if (singleAddressParagraph) singleAddressParagraph.style.display = 'none';

    // Helper function untuk merender kartu acara lengkap dengan Alamat & Maps
    const createTimeListItem = (title, details) => (
        `<h3>${title}</h3>
         <p>${details.day}, ${details.date} ${details.month} ${details.year} <br> 
         Pukul ${details.hours.start} WIB sd ${details.hours.finish}</p>
         <p style="margin-top: 0.5rem; font-weight: 500;">${details.address}</p>
         <a href="${details.map}" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 0.4rem; margin-top: 0.8rem; padding: 0.4rem 0.8rem; border: 1px solid #ccc; border-radius: 8px; text-decoration: none; color: inherit;">
             <i class="bx bxs-map-alt"></i>
             <span>Petunjuk Lokasi ${title}</span>
         </a>`
    );

    // Mengubah judul acara sesuai permintaan
    marriageDiv.innerHTML = createTimeListItem('Akad dan Resepsi', data.time.marriage);
    receptionDiv.innerHTML = createTimeListItem('Tasyakuran', data.time.reception);
};
