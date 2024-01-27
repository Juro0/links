
const goto = url => {
    if(url.startsWith('#')){
        location.href = url
    }
    window.open('https://' + url)
}

const copy = text => {
    notification_active()
    navigator.clipboard.writeText(text)
}

const load_social_json = () => {
    var xhr = new XMLHttpRequest()
    xhr.open('GET', 'json/social.json')

    xhr.onreadystatechange = data => {
        if(xhr.readyState == 4){
            if(xhr.status != 200){
                console.log('Error - XMLHttpRequest status: ' + xhr.status)
                console.log('Error - json file not found')
            }
            generate_all_socials(JSON.parse(data.currentTarget.response))
        }
        console.log('callback - social.json loaded')
    }
    xhr.send()
}

const social_generator = social => {
    const parent = document.querySelector('.socials')

    let div = document.createElement('div')
    div.classList.add('social')

    div.innerHTML = `<i class="uil uil-${social.icon} social-icon"></i>
    <p class="social-name">${social.name}</p>
    <i class="uil uil-angle-right social-angle"></i>`

    div.addEventListener('click', ()=>{
        goto(social.url)
    })

    parent.appendChild(div)
}

const generate_all_socials = social_list => {
    for(let social of social_list.list){
        social_generator(social)
    }
}

load_social_json()
