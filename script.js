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
    LoadingHi.innerHTML = "Train Not Found"
    throw new Error(`HTTP error, Status: ${response.status}`)
    }
    const data = await response.json() // Parses JSON response body console.log(data) // can return data from here
    console.log(data)
    return data
    } catch (error) {
    LoadingHi.innerHTML = "Train Not Found"
    console.error('Fetch failed:', error) // Handles network errors
    }
 }