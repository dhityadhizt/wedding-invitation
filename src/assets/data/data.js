export const data = {
    bride: {
        L: {
            id: 1,
            name: 'Aditya Putera Prakosa',
            child: 'Putra Pertama',
            father: 'Ahdiat U.P.',
            mother: 'Ratna T.W.',
            image: './src/assets/images/cowo.png'
        },
        P: {
            id: 2,
            name: 'Diva Farenta Setia W.',
            child: 'Putri Pertama',
            father: 'Agus',
            mother: 'Gesti',
            image: './src/assets/images/cewe.png'
        },
        couple: './src/assets/images/couple.png'
    },
    time: {
        marriage: {
            year: '2027',
            month: 'Mei',
            date: '30',
            day: 'Minggu',
            hours: {
                start: '08.00',
                finish: 'Selesai'
            },
            address: 'Alamat Lengkap Akad & Resepsi Di Sini', // <-- Alamat Khusus Akad & Resepsi
            map: 'https://maps.app.goo.gl/link-maps-akad' // <-- Link Google Maps
        },
        reception: {
            year: '2027',
            month: 'Juni',
            date: '06',
            day: 'Minggu',
            hours: {
                start: '11.00',
                finish: 'Selesai'
            },
            address: 'Yogyakarta City, Sewonderful', // <-- Alamat Khusus Tasyakuran
            map: 'https://maps.app.goo.gl/j26VbCMfVoD6oGV2A?g_st=ic' // <-- Link Google Maps
        }
    },
    link: {
        calendar: 'https://calendar.app.google/oSVLRMYC79GzuA4f9'
    },
    galeri: [
        { id: 1, image: './src/assets/images/1.png' },
        { id: 2, image: './src/assets/images/2.png' },
        { id: 3, image: './src/assets/images/3.png' },
        { id: 4, image: './src/assets/images/4.png' },
        { id: 5, image: './src/assets/images/5.png' }
    ],
    bank: [
        {
            id: 1,
            name: 'Aditya Putera Prakosa',
            icon: './src/assets/images/seabank.png',
            rekening: '00000000'
        },
        {
            id: 2,
            name: 'Diva Farenta Setia Wardani ',
            icon: './src/assets/images/bri.png',
            rekening: '1111111111'
        }
    ],
    audio: './src/assets/audio/wedding.mp3',
    api: 'https://script.google.com/macros/s/AKfycbyt5L4dWtets2Dwn8ywUjuHNijTa_tuMosdwVRIspTiBQxTYNmuTsJXJW3rPaCmcYD1FA/exec',
    navbar: [
        { id: 1, teks: 'Home', icon: 'bx bxs-home-heart', path: '#home' },
        { id: 2, teks: 'Mempelai', icon: 'bx bxs-group', path: '#bride' },
        { id: 3, teks: 'Tanggal', icon: 'bx bxs-calendar-check', path: '#time' },
        { id: 4, teks: 'Galeri', icon: 'bx bxs-photo-album', path: '#galeri' },
        { id: 5, teks: 'Ucapan', icon: 'bx bxs-message-rounded-dots', path: '#wishas' }
    ]
};


2. Perubahan File Skrip Waktu (src/js/time.js)

Ubah parameter judul yang dikirim ke createTimeListItem menjadi 'Akad dan Resepsi' dan 'Tasyakuran':

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
