const images = document.querySelectorAll('img');

// images.forEach((image) => {
//     const newUrl = image.getAttribute('data-src'); // get the data-src attribute from the image
//     image.src = newUrl;
// });

// above methods works fine but now we only want to show the images when the page is loaded and not when the user scrolls down
// so we need to add a listener to the window object
// window.addEventListener('DOMContentLoaded', () => {
//     images.forEach((image) => {
//         const newUrl = image.getAttribute('data-src'); // get the data-src attribute from the image
//         image.src = newUrl;
//     });
// });

// we can use intersection observer to show the images when the user scrolls down

let imageOptions = {};
// create intersection obeserver object
// const imageObserver = new IntersectionObserver((entries, imageObserver) => {
//     entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//             const newUrl = entry.target.getAttribute('data-src'); // get the data-src attribute from the image
//             entry.target.src = newUrl;
//             imageObserver.unobserve(entry.target);
//         }
//     });
// });

// const observer = new IntersectionObserver((entries, observer) =>{
//     // iterate over the entries
//     entries.forEach((entry) => {
//       
//         const image = entry.target; // get the image
//         console.log(image);
//         // lets swap out images from data-src property
//         const newUrl = image.getAttribute('data-src'); // get the data-src attribute from the image
//         image.src = newUrl;

//     });
// }, imageOptions);

// images.forEach((image) => {
//     observer.observe(image); // observe the image tracking each of the images
// })

//above observer still loading all iamges to the page but now we can use intersection observer to load images when the user scrolls down
// const observer = new IntersectionObserver((entries, observer) =>{
//     // iterate over the entries
//     entries.forEach((entry) => {
//         // if the image is intersecting and has a src attribute
//         if( !entry.isIntersecting) return; // if the image is not intersecting then return from the function and do not do anything
//         const image = entry.target; // get the image
//         console.log(image);
//         // lets swap out images from data-src property
//         const newUrl = image.getAttribute('data-src'); // get the data-src attribute from the image
//         image.src = newUrl;
//         observer.unobserve(image); // unobserve the image so that it does not keep loading images to the page

//     });
// }, imageOptions);

// images.forEach((image) => {
//     observer.observe(image); // observe the image tracking each of the images
// })

// now instead of using data src in html just replace witfh the src attribute

const observer = new IntersectionObserver((entries, observer) =>{
    // iterate over the entries
    entries.forEach((entry) => {
        // if the image is intersecting and has a src attribute
        if( !entry.isIntersecting) return; // if the image is not intersecting then return from the function and do not do anything
        const image = entry.target; // get the image
        // console.log(image);
        // lets swap out images from data-src property
        // const newUrl = image.getAttribute('data-src'); // get the data-src attribute from the image dont need this
        image.src = image.src.replace('&w=10&', '&w=800&'); // replace the src attribute with the new src attribute
        observer.unobserve(image); // unobserve the image so that it does not keep loading images to the page

    });
}, imageOptions);

images.forEach((image) => {
    observer.observe(image); // observe the image tracking each of the images
})