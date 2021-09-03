const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
  {
    name: 'Bijay Pradhan',
    position: 'MSC - Final Year',
    photo: 'img/Bijay.jpeg',
    text:
      'This guy is an amazing frontend developer that delivered the task beautifully, so hire him, you will not be disappointed by the work delivered. He will go the extra mile to make sure that you are happy with your project. I will surely work again with him!'
    },
  
  {
    name: 'Keerthy Kammary',
    position: 'Senior Project Engineer, Wipro',
    photo: 'img/Keerthy.jpeg',
    text:
      'This guy is a young and talented IT professional, proactive and responsible, with a strong work ethic. He is strong in conversions and HTML/CSS and Node technology. He is a quick learner, eager to learn new technologies. He is focused and has the good dynamics to achieve due dates and outstanding results.',
  }

  
]

let idx = 1

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx]

  testimonial.innerHTML = text
  userImage.src = photo
  username.innerHTML = name
  role.innerHTML = position

  idx++

  if (idx > testimonials.length - 1) {
    idx = 0
  }
}

setInterval(updateTestimonial, 10000)