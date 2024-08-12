const xhr = new XMLHttpRequest()
console.log(xhr.readyState)
xhr.open('GET','https://randomuser.me/api/')
console.log(xhr.readyState)
xhr.onreadystatechange = function(){
    if(xhr.readyState === 4)
    {
        const data = JSON.parse(xhr.response)
        let image = document.querySelector('#profile-images').setAttribute("src",data.results[0].picture.large)
        const firstname = data.results[0].name.first
        const secondname = data.results[0].name.last
        const fullname = firstname + " " + secondname
        document.querySelector('#profile-name').innerText = fullname
    }
}
xhr.send()

