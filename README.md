# Detecting Cycles in Graphs

Kruskal's Algorithm adds edges to the minimum spanning tree, unless they would
add a cycle. In the lectures, we did not talk about how to do this -- you're
going to implement a function to detect cycles in a graph. Start with the
template I provided in `code.js`. You can use any data structures (i.e. any
graph representation) you like. The function should return `true` or `false`,
depending on whether the given graph contains a cycle or not.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the worst-case big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

The worst-case big $\Theta$ for my implementation would be $\Theta(|V| + |E|)$. The reason for this is that my hasCycle function should have a complexity of $|V|$. This is because the loop will iterate over every node within the graph. The helper function focuses on the number of edges in the graph. By getting the sum of all iterations of "neighbors" across all nodes is equal to the number of edges on a graph. So this function has a complexity of $|E|$. After combinging these processes we can assume that the worst-case big $\Theta$ complexity would be $\Theta (|V| + |E|)$.

Referenced geeksforgeeks for Kruskal's Algorithm explination: https://www.geeksforgeeks.org/kruskals-minimum-spanning-tree-algorithm-greedy-algo-2/

Also referenced geeks for geeks DFS: https://www.geeksforgeeks.org/depth-first-search-or-dfs-for-a-graph/

Used lecture slides to get a starting point for this problem and looked at Caden Mcfate's repository for a different approach and part of my test code (specified in test code which are Cadens).

