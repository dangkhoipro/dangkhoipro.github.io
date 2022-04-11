function handleSideBar() {
    const closeBtn = document.querySelector('#close');
    const menuBtn = document.querySelector('#menu');
    const sidebar = document.querySelector('#sidebar');

    menuBtn.addEventListener('click', () => {
        sidebar.classList.remove('translate-x-[100%]');
    });

    closeBtn.addEventListener('click', () => {
        sidebar.classList.add('translate-x-[100%]');
    });
}

function handleForm() {
    const form = document.querySelector('#form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const inputs = Array.from(document.querySelectorAll('#form input, #form textarea'));
        const data = inputs.reduce((acc, input) => ({
            ...acc,
            [input.id]: input.value
        }), {});
        sendEmail(data);
    });
}

handleSideBar();