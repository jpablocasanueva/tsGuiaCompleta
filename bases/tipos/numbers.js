"use strict";
(() => {
    let avengers = 10;
    console.log(avengers);
    const villians = 20;
    if (avengers < villians) {
        console.log('Cagamos!!!');
    }
    else {
        console.log('Nos rajamos!!!');
    }
    avengers = 123;
    console.log({ avengers });
})();
