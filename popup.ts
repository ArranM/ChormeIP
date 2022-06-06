const getIpAddress = async () => {
    fetch('https://api.ipify.org/')
        .then(r => r.text())
        .then(result => {
            document.getElementById('app')!.innerText = result as string;
            navigator.clipboard.writeText(result);
        });
};

getIpAddress();