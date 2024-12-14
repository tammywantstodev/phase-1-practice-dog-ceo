document.addEventListener("DOMContentLoaded",()=>{
    function filterBreeds(){
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const dogImageContainer=document.getElementById("dog-image-container");

    fetch(imgUrl)
    .then(response => response.json())
    .then(data => {

       data.message.forEach(dogImage => {
            const image = document.createElement("img");
            image.src = dogImage;
            dogImageContainer.appendChild(image);

        })
    })
    fetch('https://dog.ceo/api/breeds/list/all')
        .then(response => response.json())
        .then(data => {
            const breeds = Object.keys(data.message);

            const letterFilter = document.getElementById("breed-dropdown").value;

            const filteredBreeds = breeds.filter(breed => breed.startsWith(letterFilter));

            const dogBreeds=document.getElementById('dog-breeds')
            dogBreeds.innerHTML = "";
            // Create and append a list item for each filtered breed
            filteredBreeds.forEach(dogBreed => {
                const dogBreedItem = document.createElement('li');
                dogBreedItem.textContent = dogBreed;

                dogBreedItem.onclick = () => {
                    dogBreedItem.style.color = 'blue';
                };


                dogBreeds.appendChild(dogBreedItem);
            });
        });
    }
// Add event listener for when the dropdown selection changes
    document.getElementById("breed-dropdown").addEventListener("change", filterBreeds);

    filterBreeds()


})

