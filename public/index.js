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

handleSideBar();