import {data} from "../assets/data/data.js";
import {addClassElement, getQueryParameter, removeClassElement} from "../utils/helper.js";

export const welcome = () => {
    const welcomeElement = document.querySelector('.welcome');
    const homeElement = document.querySelector('.home');
    const navbarElement = document.querySelector('header nav');

    // Mengambil elemen-elemen di dalam .welcome-content
    const contentElement = welcomeElement.querySelector('.welcome-content');
    const figureElement = contentElement.querySelector('figure');
    const weddingToElement = contentElement.querySelector('p');
    const openWeddingButton = contentElement.querySelector('button');

    // Elemen Audio
    const audioContainer = document.querySelector('.audio');
    const [audioMusic, audioButton] = audioContainer.children;
    const [iconButton] = audioButton.children;

    // Generasi foto couple dan teks
    const generateFigureContent = (bride) => {
        const {L: {name: brideLName}, P: {name: bridePName}} = bride;
        return `
            <img src="${coupleImage}" alt="couple animation">
            <figcaption>
                ${brideLName.split(' ')[0]} & ${bridePName.split(' ')[0]}
            </figcaption>`;
    };

    // Pemasangan nama tamu undangan (?to=NamaTamu)
    const generateParameterContent = () => {
        const nameInput = document.querySelector('#name');
        const params = getQueryParameter('to');

        if (params) {
            weddingToElement.innerHTML = `Kepada Yth Bapak/Ibu/Saudara/i<br><span>${params}</span>`;
            if (nameInput) nameInput.value = params;
        } else {
            weddingToElement.innerHTML = `Kepada Yth Bapak/Ibu/Saudara/i<br><span>You are invited</span>`;
        }
    };

    // Kontrol Musik
    const initialAudio = () => {
        let isPlaying = false;

        audioMusic.innerHTML = `<source src="${data.audio}" type="audio/mp3"/>`;
        audioMusic.load();

        audioButton.addEventListener('click', () => {
            if (!isPlaying) {
                audioMusic.play().catch(e => console.log("Autoplay error:", e));
                addClassElement(audioButton, 'active');
                removeClassElement(iconButton, 'bx-play-circle');
                addClassElement(iconButton, 'bx-pause-circle');
            } else {
                audioMusic.pause();
                removeClassElement(audioButton, 'active');
                removeClassElement(iconButton, 'bx-pause-circle');
                addClassElement(iconButton, 'bx-play-circle');
            }
            isPlaying = !isPlaying;
        });
    };

    // Trigger saat Buka Undangan diklik
    openWeddingButton.addEventListener('click', () => {
        addClassElement(document.body, 'active');
        
        // Memicu animasi keluar (Ornamen slide out lebih dulu, lalu background slide up)
        addClassElement(welcomeElement, 'hide');

        // Menampilkan section berikutnya dan menyalakan musik
        setTimeout(() => {
            addClassElement(homeElement, 'active');
            addClassElement(navbarElement, 'active');
            addClassElement(audioButton, 'show');
            removeClassElement(iconButton, 'bx-play-circle');
            addClassElement(iconButton, 'bx-pause-circle');
            
            audioMusic.play().catch(e => console.log("Autoplay blocked:", e));
        }, 1300);

        setTimeout(() => {
            addClassElement(audioButton, 'active');
        }, 2800);
    });

    // Inisialisasi awal
    const initializeWelcome = () => {
        figureElement.innerHTML = generateFigureContent(data.bride);
        generateParameterContent();

        // Memicu animasi masuk
        setTimeout(() => {
            addClassElement(welcomeElement, 'active');
        }, 100);
    };

    initializeWelcome();
    initialAudio();
};
