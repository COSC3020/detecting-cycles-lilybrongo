//"The function should return true or false, depending on whether the given graph contains a cycle or not."

function hasCycle(graph) {
    //creating a new set to keep track of all the nodes visited
    const visitedNodes = new Set();

    //loop through each node within the graph
    for (let i = 0; i < graph.length; i++) {
        //if the node has NOT been visited, 
        //this is the starting point so start checking for cycles here
        if (!visitedNodes.has(i)) {
            //if a cycle is found during the check, return true
            if (helper(graph, i, -1, visitedNodes)) {
                return true;
            }
        }
    }
    //when no cycle found, return false
    return false;
}


function helper(graph, currentNode, parentNode, visitedNodes) {
    //Need to mark the current node as visited by adding it to the set created, visitedNodes
    visitedNodes.add(currentNode);

    //Check each neighbor to the current node
    for (const neighbor of graph[currentNode]) {
        //if te neighbor isn't a parent node, 
        //then I need to check in order to avoid possibly going back to a previous node
        if (neighbor !== parentNode) {
            //if the neighbor has already been visited, we can see a cycle has been detected
            if (visitedNodes.has(neighbor)) {
                return true;
            }
            /*if the neighbor node has not been visited,
            then we need to can recursively check for cycles starting from there
            referecnig the depth-first search that was talked about in lecture video to make sure
            that every connection has been explored without revisiting nodes unnecissarily*/
            if (helper(graph, neighbor, currentNode, visitedNodes)) {
                return true;
            }
        }
    }
    //if all neighbor nodes have been checked and there are no cycles, 
    //then we need to return false
    return false;
}
