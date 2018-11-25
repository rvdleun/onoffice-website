let code;

function showScreen(id) {
    document.querySelectorAll('.screen').forEach((screen) => {
        screen.style.display = 'none';
    });

    document.querySelector(`#${id}`).style.display = 'block';
}

function submit() {
    code = document.querySelector('input').value;
    checkCode();
}

function checkCode() {
    showScreen('loading');
    axios.get(`${url}${code}`).then((result) => {
        localStorage.setItem('code', code);

        const ip = result.data;
        console.log(`http://${ip}/check-virtual-office-availability`);
        axios.get(`http://${ip}/check-virtual-office-availability`).then(() => {
            window.location.href = `http://${ip}`;
            return;
        }).catch((e) => {
            console.error(e);
            showScreen('error-while-connecting');
        });
    }).catch((e) => {
        console.log('Error', e);
        showScreen('form');
    });
}

const url = 'http://localhost:3000/get?code=';

document.querySelector('input').value = localStorage.getItem('code');
document.querySelector('#submit').addEventListener('click', () => submit());
document.querySelector('#try-again').addEventListener('click', () => checkCode());

showScreen('form');