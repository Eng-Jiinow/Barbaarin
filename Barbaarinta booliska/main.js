// scrolling

window.addEventListener('scroll', () =>{
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
});

// opne an close
const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
  faq.addEventListener('click', () => {
    faq.classList.toggle('open');
    // change icon

    const icon = faq.querySelector('.faq__icon i');
    if(icon.className === 'uil uil-plus'){
      icon.className = "uil uil-minus";
    }else{
      icon.className = "uil uil-plus";
    }

  })
})

// show/hide nav menu
const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click', () => {
  menu.style.display = "flex";
  closeBtn.style.display = "inline-block";
  menuBtn.style.display = "none";
})
// close Nav menu

const closeNav = () =>{
  menu.style.display = "none";
  closeBtn.style.display = "none";
  menuBtn.style.display = "inline-block";
}
closeBtn.addEventListener('click', closeNav);













// const faqs = document.querySelectorAll('.faq'); // Get all `.faq` elements

// faqs.forEach(faq => {
//   const icon = faq.querySelector('.faq__icon i'); // Get the icon within the `faq` element

//   faq.addEventListener('click', () => {
//     faq.classList.toggle('open'); // Toggle the `open` class on the `faq` element

//     if (icon.classList.contains('uil-plus')) { // Check if the icon contains the `plus` class
//       icon.classList.replace('uil-plus', 'uil-minus'); // Replace `plus` with `minus`
//     } else { // If the icon contains the `minus` class
//       icon.classList.replace('uil-minus', 'uil-plus'); // Replace `minus` with `plus`
//     }
//   });
// });

// const faqs = document.querySelector('.faq');

// faqs.forEach(faq =>{
//     faq.addEventListener('click', () =>{
//         faq.classList.toggle('open');

//         // change icon
//         const icon = faq.querySelector('.faq__icon i');
//         if(icon.className === 'uil uil-plus'){
//             icon.className = "uil uil-minus";
//         }else{
//             icon.className = "uil uil-plus";
//         };

//     });
// });