let aboutlinks = document.getElementsByClassName('about-link');
let abouttabcontents = document.getElementsByClassName('about-tab-content');
function openTabContent(tabName)
{

       for(aboutlink of aboutlinks)
       {
           aboutlink.classList.remove("active-link");

       }
       // This is for Link Content
       for(abouttabcontent of abouttabcontents)
       {
            abouttabcontent.classList.remove("active-content");
       }
       event.currentTarget.classList.add("active-link");
       document.getElementById(tabName).classList.add("active-content");
}

  const scriptURL = 'https://script.google.com/macros/s/AKfycbyVqqujThGjkwv7hFYlfH3WCM027hSSykjLzYpu5i2ysDH7V2GjGFnXY706v3Mo5nzn/exec'
  const form = document.forms['submit-to-google-sheet']

  // form.addEventListener('submit', e => {
  //   e.preventDefault()
  //   fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  //     .then(response => console.log('Success!', response))
  //     .catch(error => console.error('Error!', error.message))
  // })
  form.addEventListener('submit', e => {
    e.preventDefault(); // Prevent the default form submission

    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            alert('Form submitted successfully!');
            form.reset(); // Clear the form fields
        })
        .catch(error => console.error('Error!', error.message));
});

  