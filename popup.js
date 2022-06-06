"use strict";
const getIpAddress = async () => {
    fetch('https://api.ipify.org/')
        .then(r => r.text())
        .then(result => {
        document.getElementById('app').innerText = result;
        navigator.clipboard.writeText(result);
    });
};
getIpAddress();
