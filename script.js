let searchType = document.getElementById("searchType").value
let searchText = document.getElementById("searchText").value
let dev
if (currentHost == "localhost" || currentHost == "127.0.0.1"|| currentHost == "curly-sniffle-pjpwgrp4jgr6h7x75.github.dev"){
  dev = true
  console.log("Dev mode enabled")
}
else{
  dev = false
  console.log("Prod mode enabled")
}
let books
pulldata()
async function pulldata() {
    books = await fetchOtherData()
}
async function fetchOtherData() {
    try { 
    let response
    if (dev == true){
    response = await fetch('/Stellas_Library_Catalogue.json')    // check if the HTTP status code is 200
    }
    else{
    response = await fetch('/StellaPLibraryCatalogue/Stellas_Library_Catalogue.json')    // check if the HTTP status code is 200
    }
    if (!response.ok) {
    throw new Error(`HTTP error, Status: ${response.status}`)
    }
    const data = await response.json() // Parses JSON response body console.log(data) // can return data from here
    console.log(data)
    return data
    } catch (error) {
    console.error('Fetch failed:', error) // Handles network errors
    }
 }
function searchBooks(searchMethod, search) {
    let result = books.filter(book =>
        String(book[searchMethod] ?? "")
            .toLowerCase()
            .includes(String(search).toLowerCase())
    )
    console.log(result)
    return result
}
function Search(){
            searchType = document.getElementById("searchType").value
            searchText = document.getElementById("searchText").value
            stops.style.display = 'block'
            let SearchResult = searchBooks(searchType,searchText)
            for (let i = 0; i < SearchResult.length; i++) {
                console.log("Creating row", i)
                let book = SearchResult[i]
                let row = document.createElement("div")
                let TitleElement = document.createElement("span")
                TitleElement.innerHTML = book["Title"]
                let AuthorElement = document.createElement("span")
                AuthorElement.innerHTML = book["Author"]
                let ShelfElement = document.createElement("span")
                ShelfElement.innerHTML = book["Shelf"]
                let SectionElement = document.createElement("span")
                SectionElement.innerHTML = book["Section"]
                let BookIDElement = document.createElement("span")
                BookIDElement.innerHTML = book["Book ID"]
                row.appendChild(TitleElement)
                row.appendChild(AuthorElement)
                row.appendChild(ShelfElement)
                row.appendChild(SectionElement)
                row.appendChild(BookIDElement)
                row.className = "row"
                row.style.display = "grid"
                stops.appendChild(row)
            }
}