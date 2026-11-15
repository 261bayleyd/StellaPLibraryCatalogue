let searchType = document.getElementById("searchType").value
let searchText = document.getElementById("searchText").value
let books = await fetchOtherData()
async function fetchOtherData() {
    try { 
    let response
    // if (dev == true){
    response = await fetch('/Stellas_Library_Catalogue.json')    // check if the HTTP status code is 200
    // }
    // else{
    // response = await fetch('/StellaPLibraryCatalogue/Stellas_Library_Catalogue.json')    // check if the HTTP status code is 200
    // }
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
async function searchBooks(searchMethod, search) {
    let result = books.filter(book =>
        String(book[searchMethod] ?? "")
            .toLowerCase()
            .includes(String(search).toLowerCase())
    )
    console.log(result)
    return result
}
function Search(){
            let SearchResult
            row.appendChild(NumberElement)
            row.appendChild(NameElement)
            row.appendChild(OriginElement)
            row.appendChild(DestinationnElement)
            row.appendChild(NextstopElement)
            row.className = "row"
            stops.appendChild(row)
}