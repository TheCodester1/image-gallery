"use strict"

window.onload = main 

function main () {
    // loadImages()
    populateAlbumDropdown()
}

function populateAlbumDropdown() {
    const selectElement = document.querySelector("#album-choice")
    selectElement.onchange = loadImages

    for (const album of albums) {
        // Example: <option value="album.folder">album
        
        // 1. Create a new empty element by tag name:
        const option = document.createElement("option")

        // 2. Customize the new baby element 
        option.value = album.folder
        option.innerText = album.name

        // Add to branch on page which is already on page
        selectElement.append(option)
    }
}

function loadImages(album) {
    const parentElement = document.querySelector("main")

    // for each
    for (const path of album.paths) {
        //VISULALIZE THE GOAL(write out full tag) <img src="insert-image-path-here">

        // Create the empty element by tag name:
        const imageElement = document.createElement("img")

        // Customize it (in this case, setting the "src" attribute):
        imageElement.setAttribute("src", path)
        imageElement.classList.add("img-thumbnail", "gallery-img")

        // Add it to an existing branch on the Dom tree:
        parentElement.append(imageElement)

    }

    console.log(parentElement)
    /* for of loop
        for (const currentImagePath of imagePaths) {

            console.log(currentImagePath)
    } */

    /* cthuloop
    for (let index = 0; index < imagePaths.length; index += 1) {
        const currentImagePath = imagePaths[index]

        console.log(currentImagePath)
    } */
}
