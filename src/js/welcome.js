import {data} from "../assets/data/data.js";
import {addClassElement, getQueryParameter, removeClassElement} from "../utils/helper.js";

export const welcome = () => {
    const welcomeElement = document.querySelector('.welcome');
    const homeElement = document.querySelector('.home');
    const navbarElement = document.querySelector('header nav');

    const [_, figureElement, weddingToElement, openWeddingButton] = welcomeElement.children;
    const [audioMusic, audioButton] = document.querySelector('.audio').children;
    const [iconButton] = audioButton.children;

    const generateFigureContent = (bride) => {
        const {L: {name: brideLName}, P: {name: bridePName}} = bride;
        return `
            <img src="src/assets/images/couple.jpg" alt="couple image">
            <figcaption>
                ${brideLName.split(' ')[0]} & ${bridePName.split(' ')[0]}
            </figcaption>`;
    };

    const generateParameterContent = () => {
        const name = document.querySelector('#name');
        const params = getQueryParameter('to');

        if (params) {
            weddingToElement.innerHTML = `Kepada Yth Bapak/Ibu/Saudara/i<br><span>${params}</span>`;
            if (name) name.value = params;
        } else {
            weddingToElement.innerHTML = `Kepada Yth Bapak/Ibu/Saudara/i<br><span>You are invited</span>`;
        }
    };

    const initialAudio = () => {
        let isPlaying = false;

        audioMusic.innerHTML = `<source src="${data.audio}" type="audio/mp3"/>`;
        audioMusic.load();

        audioButton.addEventListener('click', () => {
            if (!isPlaying) {
                audioMusic.play().catch(e => console.log("Audio autoplay prevented:", e));
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

    openWeddingButton.addEventListener('click', () => {
        addClassElement(document.body, 'active');
        addClassElement(welcomeElement, 'hide');

        setTimeout(() => {
            addClassElement(homeElement, 'active');
            addClassElement(navbarElement, 'active');
            addClassElement(audioButton, 'show');
            removeClassElement(iconButton, 'bx-play-circle');
            addClassElement(iconButton, 'bx-pause-circle');
            audioMusic.play().catch(e => console.log("Audio autoplay prevented:", e));
        }, 1500);

        setTimeout(() => {
            addClassElement(audioButton, 'active');
        }, 3000);
    });

    const initializeWelcome = () => {
        figureElement.innerHTML = generateFigureContent(data.bride);
        generateParameterContent();

        // Memicu animasi slide down background & decorative
        setTimeout(() => {
            addClassElement(welcomeElement, 'active');
        }, 100);
    };

    initializeWelcome();
    initialAudio();
};
