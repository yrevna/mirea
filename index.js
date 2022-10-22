const ageElement = document.querySelector("#age");
const bDay = moment("2000-10-02");
const age = moment().diff(bDay, "years");
ageElement.innerHTML = `${age} (${bDay.toDate().toLocaleDateString('ru-RU')})`;
