const calculator = document.querySelector('.calculator');

/*CALCULATOR TOP*/ 
const logo = document.querySelector('.logo');
const theme = document.querySelector('.theme');
const switchThemes = document.querySelector('.toggle-switch');
const numbers = document.querySelectorAll('.number');
const circles = document.querySelectorAll('.circle');


const screen = document.querySelector('#input-screen');
const keypad = document.querySelector('.keypad');
const keys = document.querySelectorAll('.key');
const equal = document.querySelector('.equal');
const op = document.querySelectorAll('.op');

const defaultTheme = ()=>{
    document.querySelector('body').style.backgroundColor="var(--veryDarkDesaturatedBlue1)";
    calculator.style.backgroundColor="var(--veryDarkDesaturatedBlue1)";
    document.querySelector('#input-screen').style.color="var(--white)";

    logo.style.color="var(--white)";
    circles[0].style.opacity="1";
    circles[1].style.opacity="0";
    circles[2].style.opacity="0";
    theme.style.color="var(--white)";
    switchThemes.style.backgroundColor="var(--veryDarkDesaturatedBlue2)";
    numbers.forEach(number=>number.style.color="var(--white)");

    screen.style.backgroundColor="var(--VeryDarkDesaturatedBlue3)";
    keypad.style.backgroundColor="var(--veryDarkDesaturatedBlue2)";

    equal.style.backgroundColor="var(--red)";
    equal.style.borderColor="var(--darkRedKeyShadow)";
    equal.style.color="var(--white)";
    equal.addEventListener('mousedown',()=>{
        equal.style.borderColor="transparent";
    })
    equal.addEventListener('mouseup',()=>{
        equal.style.borderColor="var(--darkRedKeyShadow)";
    })

    keys.forEach(key=>{
        key.style.backgroundColor="var(--orangeKeyBackground)";
        key.style.borderColor="var(--orangeKeyShadow)";
        key.style.color="var(--veryDarkGrayishBlue)";

        key.addEventListener('mousedown',()=>{
            key.style.borderColor="transparent";
        })

        key.addEventListener('mouseup',()=>{
            key.style.borderColor="var(--orangeKeyShadow)";
        })
    })

    op.forEach(btn=>{
        btn.style.backgroundColor="var(--blueKeyBackground)";
        btn.style.borderBottom="4px solid var(--blueKeyShadow)";
        btn.style.color="var(--white)";

        btn.addEventListener('mousedown',()=>{
            btn.style.borderColor="transparent";
        })

        btn.addEventListener('mouseup',()=>{
            btn.style.borderColor="var(--blueKeyShadow)";
        })
    })
}

circles[0].addEventListener('click',()=>{
    defaultTheme();
});

circles[1].addEventListener('click',()=>{
    theme2();
});

circles[2].addEventListener('click',()=>{
    theme3();
});

const theme2 = ()=>{
    document.querySelector('body').style.backgroundColor="var(--mainBackgroundT2)";
    calculator.style.backgroundColor="var(--mainBackgroundT2)";
    document.querySelector('#input-screen').style.color="var(--yellowTextT2)";

    logo.style.color="var(--yellowTextT2)";
    circles[0].style.opacity="0";
    circles[1].style.opacity="1";
    circles[2].style.opacity="0";
    theme.style.color="var(--yellowTextT2)";
    switchThemes.style.backgroundColor="var(--toggle-keypadBackgroundT2)";
    numbers.forEach(number=>number.style.color="var(--yellowTextT2)");

    screen.style.backgroundColor="var(--screenBackgroundT2)";
    keypad.style.backgroundColor="var(--toggle-keypadBackgroundT2)";

    equal.style.backgroundColor="var(--orangeKeyBackgroundT2)";
    equal.style.borderColor="var(--oorangeKeyShadowT2)";
    equal.style.color="var(--white)";

    equal.addEventListener('mousedown',()=>{
        equal.style.borderColor="transparent";
    })

    equal.addEventListener('mouseup',()=>{
        equal.style.borderColor="var(--oorangeKeyShadowT2)";
    })

    keys.forEach(key=>{
        key.style.backgroundColor="var(--yellowKeyBackgroundT2)";
        key.style.borderColor="var(--orangeKeyShadowT2)";
        key.style.color="var(--yellowTextT2)";

        key.addEventListener('mousedown',()=>{
            key.style.borderColor="transparent";
        })

        key.addEventListener('mouseup',()=>{
            key.style.borderColor="var(--orangeKeyShadowT2)";
        })
    })

    op.forEach(btn=>{
        btn.style.backgroundColor="var(--cyanKeybackgroundT2)";
        btn.style.borderBottom="4px solid var(--cyanKeyShadowT2)";
        btn.style.color="var(--white)";

        btn.addEventListener('mousedown',()=>{
            btn.style.borderColor="transparent";
        })

        btn.addEventListener('mouseup',()=>{
            btn.style.borderBottom="4px solid var(--cyanKeyShadowT2)";
        })
    })
}

const theme3 = ()=>{
    document.querySelector('body').style.backgroundColor="var(--mainBackgroundT3)";
    calculator.style.backgroundColor="var(--mainBackgroundT3)";
    document.querySelector('#input-screen').style.color="var(--lightYellowTextT3)";

    logo.style.color="var(--lightYellowTextT3)";
    circles[0].style.opacity="0";
    circles[1].style.opacity="0";
    circles[2].style.opacity="1";
    theme.style.color="var(--lightYellowTextT3)";
    switchThemes.style.backgroundColor="var(--toggle-keypad-screenBackgroundT3)";
    numbers.forEach(number=>number.style.color="var(--lightYellowTextT3)");

    screen.style.backgroundColor="var(--toggle-keypad-screenBackgroundT3)";
    keypad.style.backgroundColor="var(--toggle-keypad-screenBackgroundT3)";

    equal.style.backgroundColor="var(--cyanKey-toggleBackgroundT3)";
    equal.style.borderColor="var(--cyanKeyShadowT3)";
    equal.style.color="var(--veryDarkBlueTextT3)";

    equal.addEventListener('mousedown',()=>{
        equal.style.borderColor="transparent";
    })

    equal.addEventListener('mouseup',()=>{
        equal.style.borderColor="var(--cyanKeyShadowT3)";
    })

    keys.forEach(key=>{
        key.style.backgroundColor="var(--darkVioletKeyBackgroundT3)";
        key.style.borderColor="var(--darkMagentaKeyShadowT3)";
        key.style.color="var(--lightYellowTextT3)";

        key.addEventListener('mousedown',()=>{
            key.style.borderColor="transparent";
        })

        key.addEventListener('mouseup',()=>{
            key.style.borderColor="var(--darkMagentaKeyShadowT3)";
        })
    })

    op.forEach(btn=>{
        btn.style.backgroundColor="var(--violetKeyBackgroundT3)";
        btn.style.borderBottom="4px solid var(--magentaKeyShadowT3)";
        btn.style.color="var(--white)";

        btn.addEventListener('mousedown',()=>{
            btn.style.borderColor="transparent";
        })

        btn.addEventListener('mouseup',()=>{
            btn.style.borderColor="var(--magentaKeyShadowT3)";
        })
    })
}

defaultTheme();