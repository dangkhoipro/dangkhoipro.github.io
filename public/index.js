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

function sendEmail(data) {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "dangkhoi.tinhoc1@gmail.com",
        Password: "9E0D93DFA276091DCD5AEFA027BC7A78A553",
        To: 'dangkhoi.tinhoc1@gmail.com',
        From: data.email,
        Subject: `${data.name || 'Someone'} contacted me via github page`,
        Body: data.content
    }).then(message => {
        alert(message);
        const form = document.querySelector('#form');
        form.reset();
    });
}

handleSideBar();
handleForm();