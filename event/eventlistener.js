document.addEventListener('DOMContentLoaded', () => {
    const myButton = document.querySelector('#myButton');
    const myInput = document.querySelector('#myInput');
    const myElement = document.querySelector('#myElement');
    const myForm = document.querySelector('#myForm');

    if (myButton) {
        myButton.addEventListener('click', () => alert('Button clicked!'));
        myButton.addEventListener('dblclick', () => console.log('Button double-clicked!'));
    }

    if (myInput) {
        myInput.addEventListener('change', () => console.log('Input changed!'));
        myInput.addEventListener('keypress', (e) => console.log(`Key pressed: ${e.key}`));
        myInput.addEventListener('focus', () => console.log('Input field focused!'));
        myInput.addEventListener('blur', () => console.log('Input field lost focus!'));
    }

    if (myElement) {
        myElement.addEventListener('mouseover', () => console.log('Mouse over!'));
    }

    if (myForm) {
        myForm.addEventListener('submit', (e) => {
            e.preventDefault();
            console.log('Form submitted!');
        });
    }

    window.addEventListener('resize', () => console.log('Window resized!'));
});
