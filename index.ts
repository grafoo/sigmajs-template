import Graph from "graphology";
import Sigma from "sigma";

const container = document.getElementById("app-container") as HTMLElement;

const graph = new Graph();

graph.addNode("foo", { x: 0, y: 10, size: 5, label: "foo", color: "blue" });
graph.addNode("bar", { x: 10, y: 0, size: 3, label: "bar", color: "red" });

graph.addEdge("foo", "bar");

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const renderer = new Sigma(graph, container);
