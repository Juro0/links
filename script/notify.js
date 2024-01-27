
const notification = document.getElementById('notification')

let notification_status = false

let notification_timeout

const notification_hide = () => {
    notification_status = false
    notification.classList.add('vanish')
    setTimeout(()=>{
        notification.classList.remove('vanish')
        notification.classList.add('hide')
    }, 300)
}

const notification_show = () => {
    notification_status = true
    notification.classList.add('appear')
    notification.classList.remove('hide')
    setTimeout(()=>{
        notification.classList.remove('appear')
    }, 300)
}

const notification_active = () => {
    clearTimeout(notification_timeout)
    notification_show()
    notification_timeout = setTimeout(()=>{
        notification_hide()
    }, 1000)
}
