
function contact() {
  let content = document.getElementById('content');
  let header = document.createElement('h1');
  header.innerText = "Contact Us"
  content.appendChild(header)

  let form = document.createElement('form');
  form.action = "#"
  form.method = "get"
  let name = document.createElement('input');
  name.type = "text"
  name.id = "name"
  name.placeholder = "Name"
  name.classList.add('form-field')
  form.appendChild(name)

  let email = document.createElement('input');
  email.type = "text"
  email.id = "email"
  email.placeholder = "Email"
  email.classList.add('form-field')
  form.appendChild(email)

  let message = document.createElement('textarea');
  message.name = "message"
  message.placeholder = "Your Message :)"
  message.rows = "8"
  message.cols = "60"
  message.classList.add('form-field')
  form.appendChild(message)

  let submit = document.createElement('input');
  submit.type = "submit"
  submit.value = "Send!"
  submit.classList.add('btn', 'contact-btn')  
  form.appendChild(submit)

  content.appendChild(form)
}

export { contact }