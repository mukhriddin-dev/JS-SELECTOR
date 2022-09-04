// ===== simply =====///
const card=$(".card"); // selector
card.classList.add('p-4')
card.classList.add('bg-success') // for example add calasses

// ====== dynamic element create =====////

const box=creatElement('div', ".card p-4 m-4 bg-info" , "THIS IS BOX");

card.append(box);

// easy easy -- >>