console.log('first file')

const allLi = document.getElementsByTagName('li');
console.log(allLi);

const allTitles = document.getElementsByClassName('section-title');
console.log(allTitles);

const secondSection = document.getElementById('second-section');
console.log(secondSection);
secondSection.style.color ='white';
secondSection.style.backgroundColor = 'tomato';
secondSection.style.fontStyle="italic";
secondSection.style.border="1px solid red";
secondSection.style.borderRadius="15px";


// const sectionDress = document.createElement('section');
// sectionDress.innerHTML = `
// <h1>My Dress section</h1>
// <ul>
//     <li>T-shirt</li>
//     <li>Lungi</li>
//     <li>Sando genji</li>
// </ul>
// `
// mainContainer.appendChild(sectionDress);

// document.querySelectorAll
// document.querySelector