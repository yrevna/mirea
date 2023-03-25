function openWindow() {
    const biography = open();
    biography.document.write(`
    <h2>О себе</h2>
    <hr>
    <p>Я, ${document.getElementById('surname').value}
    ${document.getElementById('name').value}
    ${document.getElementById('fathername').value},
    родился в ${document.getElementById('born').value} году
    в городе ${document.getElementById('city').value}.
    </p>
    <p>Больше всего я люблю ${document.getElementById('hobby').value}
    и не люблю ${document.getElementById('hate').value}.
    Было бы замечательно всю жизнь только ${document.getElementById('hobby').value},
    но, к сожалению, приходится иногда и ${document.getElementById('hate').value}.</p>
    <button onclick='window.close()'>Закрыть</button>
    `);
}