"use strict";
let wellByn = document.querySelector(`#byn`);
let wellUsd = document.querySelector(`#usd`);
// let changeDollar = document.querySelector(`#textName`);


async function changeCourse1() {
    const result = await fetch(`https://belarusbank.by/api/kurs_cards`);
    const data = await result.json();
    const bynForUsd = data[0].USDCARD_out;
    wellByn.value = bynForUsd;

};
changeCourse1()

async function changeCourse2(amount) {
    const result = await fetch(`https://belarusbank.by/api/kurs_cards`);
    const data = await result.json();
    const bynForUsd = data[0].USDCARD_out;
    if (wellUsd.value == amount) {
        wellByn.value = bynForUsd * amount
    } else {
        wellUsd.value = amount / bynForUsd
    }

    if (wellUsd.value == "" || wellByn.value == "") {
        wellByn.value = "";
        wellUsd.value = ""
    }


};

wellUsd.addEventListener('input', function () {
    changeCourse2(wellUsd.value);
});
wellByn.addEventListener('input', function () {
    changeCourse2(wellByn.value);
});



