
//if there is nothing in local storage, go this
if(!localStorage.getItem('lastVisit')) {
    localStorage.setItem('lastVisit', Date.now())
    

} else{
    let currentdate = Date.now(),
    let lastdate = localStorage.getItem('lastVisit')
    let difference = (currentdate - lastdate) /1000/60/60/24
    console.log(difference);
}