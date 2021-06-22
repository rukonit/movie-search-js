const form = document.querySelector("#searchFrom");
form.addEventListener('submit', (e)=> {
    e.preventDefault();
    console.log("submitted");
    const searchText = form.elements.searchText.value;
    form.elements.searchText.value = '';
    
    console.log(searchText);
    const getData = async () => { 
    console.log("method called");
    const URLparams = new URLSearchParams;
    URLparams.append('q', searchText)

    const res = await fetch('https://api.tvmaze.com/search/shows?'+URLparams);
    const data = await res.json();
    makeImages(data);
    
}

    getData();

})

const makeImages = (shows) => {
    for(let result of shows) {
    const img = document.createElement('img');
    img.src = result.show.image.medium;
    document.body.append(img);
    }
}

console.log("working");
