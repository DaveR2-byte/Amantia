
const sendEmail = () => {

    var names = document.getElementById('nombreNovios').value;
    var planner = document.getElementById('planner').value;
    var city = document.getElementById('city').value;
    var place = document.getElementById('place').value;
    var email = document.getElementById('email').value;
    var date = document.getElementById('date').value;
    var services = document.getElementById('services').value;
    var findUs = document.getElementById('findUs').value;

    let data = JSON.stringify({
        service_id : 'service_ojg8b7m',
        template_id : 'template_qa13ooa',
        user_id : 'u4dPlczrS451JC0wt'
    })

    fetch('https://api.emailjs.com/api/v1.0/email/send',{
        method : 'POST',
        data : data,
        contentType : 'application/json',
        cors: 'no-cors'
    })
    .then(response => response.json())
    .then(result => console.log(result))
};