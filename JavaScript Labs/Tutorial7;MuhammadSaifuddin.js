const roads = [
    "Alice's House-Bob's House",   "Alice's House-Cabin",
    "Alice's House-Post Office",   "Bob's House-Town Hall",
    "Daria's House-Ernie's House", "Daria's House-Town Hall",
    "Ernie's House-Grete's House", "Grete's House-Farm",
    "Grete's House-Shop",          "Marketplace-Farm",
    "Marketplace-Post Office",     "Marketplace-Shop",
    "Marketplace-Town Hall",       "Shop-Town Hall"
]; // array that contains strings, each string representing a road or edge between two different locations, starting and ending, in MeadowField
//
function buildGraph(edges) {   // the function buildGraph takes an array, consisting of edges or one-way paths, and creates a map object, while splitting "-" from the elements
    let graph = Object.create(null); // the object "graph" is created with no prototype
    function addEdge(from, to) {   // inner function called addEdge takes parameters "from" and "two"
        if (graph[from] == null) { // if nothing is in the "from" parameter, a new array is created with the "to" parameter as an entry
            graph[from] = [to];
        } else {                   // if an entry exists in the "from" parameter, "to" is simply added to it
            graph[from].push(to);
        }
    }
    for (let [from, to] of edges.map(r => r.split("-"))) { // for every element of the array, the elements are split by "-"
        addEdge(from, to); // the element before and element after "-" are assigned to "from" and "to", respectively
        addEdge(to, from); // the element before and element after "-" are assigned to "to" and "from", respectively
    }
    return graph;
}

const roadGraph = buildGraph(roads); // graph database "roadGraph" is created Through global function buildGraph which takes the "roads" array as its parameter
//
class VillageState { // the VillageState class or state is created with constructor function that gives two values, "place" and "parcels", to the object's propeties; place and parcels
    constructor(place, parcels) {
        this.place = place; // this.place is assigned a string
        this.parcels = parcels; // this.parcels is assigned an array of objects
    }

    move(destination) { // the move method takes a location, the "destination", as its parameter and checks if there's a road that goes from the current location to the passed location
        if (!roadGraph[this.place].includes(destination)) { //if there is no road that leads to the passed location from the current location, the old state is returned
            return this;
        } else { // a new state is created with the passed location as the new place
            let parcels = this.parcels.map(p => { // through ".map", the parcels at the current place are moved to new location
                if (p.place != this.place) return p;
                return {place: destination, address: p.address};
            }).filter(p => p.place != p.address); // through ".filter", parcels are delivered to the new place, they are removed from the set of undelivered parcels
            return new VillageState(destination, parcels); // new village state is returned
        }
    }
}
//
let first = new VillageState( // first is a new instance of VillageState class
    "Post Office", // this.place holds the Post Office as its place property
    [{place: "Post Office", address: "Alice's House"}] // this.parcels holds an array containing the Post Office as its starting location and Alice's House as the ending location
);
let next = first.move("Alice's House"); // the move method is applied to the first instance and it moves the parcels from the Post Office and delivers them to Alice's House

console.log(next.place); // prints the "first" instance's place after the move method is applied
// → Alice's House
console.log(next.parcels); // prints the "first" instance's parcel array after the move method is applied
// → []
console.log(first.place); // prints the "first" instance's place before the move method is applied
// → Post Office
//
let object = Object.freeze({value: 5}); // an immutable object has been created through the Object.freeze function
object.value = 10;
console.log(object.value); // the initial value is 5 and that will print, since assigning 10 won't work on a immutable object
// → 5
//
function runRobot(state, robot, memory) { // the higher-order function runRobot takes a class/object as its "state" parameter, a function as its "robot" parameter, and an object property as its "member" parameter
    for (let turn = 0;; turn++) {
        if (state.parcels.length == 0) { // when the object's parcel property, being an array, is the length of 0, the for loop's counter value is printed as the amount of turns
            console.log(Done in ${turn} turns);
            break;
        }
        let action = robot(state, memory); // action variable is assigned the robot function call with state and memory passed as parameters
        state = state.move(action.direction); // a new state is assigned to state by applying the move method, with a direction parameter, to the state passed by the runRobot function
        memory = action.memory; // the robot function state is assigned to the memory passed through runRobot
        console.log(Moved to ${action.direction});
    }
}
//
function randomPick(array) { // the randomPick function assigns a random integer between 0 and the passed array's length to the choice variable
    let choice = Math.floor(Math.random() * array.length);
    return array[choice]; // the array element at the choice position index is returned, so it is random
}

function randomRobot(state) { // the randomRobot function takes an object/class as it parameter and returns a random place in the roadGraph database.
    return {direction: randomPick(roadGraph[state.place])};
}
//
VillageState.random = function(parcelCount = 5) { // the function VillageState.random takes a parcel count, default is assigned to 5
    let parcels = [];
    for (let i = 0; i < parcelCount; i++) { // for-loop runs parcelCount times and creates an array of all key objects
        let address = randomPick(Object.keys(roadGraph)); // the address variable generates a location where a parcel is picked up from
        let place;
        do {   // the do-while loop runs while place is the same as address, and ends after place is a different location than address, so there are no parcels sent from the same place they're addressed to
            place = randomPick(Object.keys(roadGraph));
        } while (place == address);
        parcels.push({place, address}); // the locations of place and address are inserted into the parcels array after each loop iteration
    }
    return new VillageState("Post Office", parcels); // new VillageState is generated that starts off at the Post Office and completes a default of 5 random tasks,
    // in which the robot delivers parcels from a staring location to an end location
};
//
runRobot(VillageState.random(), randomRobot);
// → Moved to Marketplace
// → Moved to Town Hall
// → …
// → Done in 63 turns
//
//
const mailRoute = [ // the mailRoute array contains strings of location names in MeadowField, this is also the route the robot can take so it passes all the locations in the village
    "Alice's House", "Cabin", "Alice's House", "Bob's House", //
    "Town Hall", "Daria's House", "Ernie's House",
    "Grete's House", "Shop", "Grete's House", "Farm",
    "Marketplace", "Post Office"
];
//
function routeRobot(state, memory) { // the routeRobot function takes a state and array, respectively, for it "state" and "memory" arguments
    if (memory.length == 0) { // if there is nothing in memory array, then memory is initialized as the mailRoute array
        memory = mailRoute;
    }
    return {direction: memory[0], memory: memory.slice(1)}; // an object is returned with the first route location and the remaining locations as the properties
}                                                           // memory.slice(1) gets rid of the first array element, or route location
//
function findRoute(graph, from, to) { // the findRoute function takes a graph database, a staring location, and an ending location as its three parameters
    let work = [{at: from, route: []}]; // the findRoute function finds many possible routes from the starting and ending, and eventually finds one of the shortest possible routes
    for (let i = 0; i < work.length; i++) { // the work array essentially keeps track of the places that need to be visited next, along with the route that gets there
        let {at, route} = work[i];
        for (let place of graph[at]) {
            if (place == to) return route.concat(place);
            if (!work.some(w => w.at == place)) {
                work.push({at: place, route: route.concat(place)});
            }
        }
    }
}
//
function goalOrientedRobot({place, parcels}, route) { // the goalOrientedRobot function takes an object and array as its parameters
    if (route.length == 0) { // if there is not route array the parcel variable is assigned the first element of the passed object's parcels property, which is the starting location of an expected parcel
        let parcel = parcels[0];
        if (parcel.place != place) { // if the starting locations are the not the same in both parcel.place and place,
            route = findRoute(roadGraph, place, parcel.place); // findRoute is called to find a possible route that starts from the location held in place and ends at the one held by parcel.place
        } else {
            route = findRoute(roadGraph, place, parcel.address); // if they are the same, then findRoute is called to find a possible route
        }                                                        //  that starts from the location held in place and ends at the one held by parcel.address
    }
    return {direction: route[0], memory: route.slice(1)};
}                                                       // an object is returned with the first route location and the remaining locations as the properties
//