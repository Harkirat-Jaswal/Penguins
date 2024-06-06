
const navMenu = document.getElementById('navMenu');


navMenu.addEventListener('click', (event) => {

  if (event.target.tagName === 'A') {

    const links = navMenu.getElementsByTagName('a');
    for (let i = 0; i < links.length; i++) {
      links[i].classList.remove('active');
    }


    event.target.classList.add('active');
  }
});



