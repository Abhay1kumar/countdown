const countdown = document.querySelector(".count");
let time = 10;

countdown.innerText =time--;
setTimeout(() => {
    countdown.innerText =time--;
    setTimeout(() => {
        countdown.innerText =time--;
        setTimeout(() => {
            countdown.innerText =time--;
            setTimeout(() => {
                countdown.innerText =time--;
                setTimeout(() => {
                    countdown.innerText =time--;
                    setTimeout(() => {
                        countdown.innerText =time--;
                        setTimeout(() => {
                            countdown.innerText =time--;
                            setTimeout(() => {
                                countdown.innerText =time--;
                                setTimeout(() => {
                                    countdown.innerText ="Happy Independence Day";
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);