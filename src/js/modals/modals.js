export const modal = () => {

function openModal (triggerSelector, modalSelector, closeSelector) {
    const trigger = document.querySelectorAll(triggerSelector),
    modal = document.querySelector(modalSelector),
    close = document.querySelector(closeSelector);

    trigger.forEach(element => {
        element.addEventListener('click', (e) => {
            e.preventDefault()
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        })
    });
    modal.addEventListener('click', (e) => {
if(e.target === modal) {
    modal.style.display = 'none';
    document.body.style.overflow = '';
}
    })
    close.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    })
}

function showModalByTime (modalSelector, time) {
    setTimeout(() => {
        document.querySelector(modalSelector).style.display = 'block';
        document.body.style.overflow = 'hidden';
    }, time)
}


openModal('.popup_engineer_btn','.popup_engineer', '.popup_engineer .popup_close' )
openModal('.phone_link','.popup', '.popup .popup_close' )

showModalByTime('.popup', 60000)

}