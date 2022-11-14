function loadUserConfig(){
    let config = JSON.parse(localStorage.getItem('config'));
    if(config == undefined){
        config = {
            darkmode: false,
            fontsize: 16,
        }

        localStorage.setItem('config', JSON.stringify(config));
    }

    // Set config of users for darkmode
    if(config.darkmode) setDarkMode();
    else resetDarkMode();

    // Set config of users for font size
    setText(config.fontsize);
}

function setText(value){
    let html = document.querySelector("html");
    html.style.fontSize = value + "px";
}

function toogleText(value){
    let config = JSON.parse(localStorage.getItem('config'));

    config.fontsize += value;
    console.log(config.fontsize);
    if(config.fontsize > 25 || config.fontsize < 8){
        return;
    }else{
        setText(config.fontsize);
    }

    localStorage.setItem('config', JSON.stringify(config));
}

function setDarkMode(){
    let body = document.querySelector("body");
    body.classList.add('dark');
}

function resetDarkMode(){
    let body = document.querySelector("body");
    body.classList.remove('dark');
}

function toogleDarkMode(){
    let config = JSON.parse(localStorage.getItem('config'));

    if(!config.darkmode){
        setDarkMode();
        config.darkmode = true;
    }else{
        resetDarkMode();
        config.darkmode = false;
    };

    localStorage.setItem('config', JSON.stringify(config));
}


loadUserConfig();