// Code your solution here
function findMatching(drivers, received) {
    
    const result = drivers.filter(passedDriver=> passedDriver.toUpperCase() === received.toUpperCase());  
    if(result){
        return result
    }

}

function fuzzyMatch(drivers, received) {

    const result = drivers.filter(passedDriver=>passedDriver.toLowerCase().indexOf(received.toLowerCase())===0)
    if(result){
        return result
        
    }

}
function matchName(drivers, received) {

    const result = drivers.filter(passedDriver=> passedDriver.name === received);
    if(result){
        return result
    }
    
}
