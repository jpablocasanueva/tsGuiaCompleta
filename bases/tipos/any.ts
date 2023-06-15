(() => {

    let avenger: any = 123;
    let existe;
    let power;

    avenger = 'Dr Stange';
    console.log( ( avenger as string).charAt(0));

    avenger = 150.7183719791;
    console.log( <number>avenger.toFixed(2) );

})()