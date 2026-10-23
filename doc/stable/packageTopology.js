var packageTopology =
[
    [ "Digital topology and digital objects", "moduleDigitalTopology.html", [
      [ "Adjacency relations", "moduleDigitalTopology.html#dgtal_topology_sec1_ajdacency", [
        [ "4- and 8- adjacencies in Z2", "moduleDigitalTopology.html#dgtal_topology_sec1_1", null ],
        [ "6-, 18- and 26- adjacencies in Z3", "moduleDigitalTopology.html#dgtal_topology_sec1_2", null ],
        [ "Metric adjacencies in Zn", "moduleDigitalTopology.html#dgtal_topology_sec1_3", null ],
        [ "Concepts CAdjacency et CDomainAdjacency", "moduleDigitalTopology.html#dgtal_topology_sec1_4", null ]
      ] ],
      [ "Digital topology over a digital space", "moduleDigitalTopology.html#dgtal_topology_sec2_digital_topology", null ],
      [ "Digital objects", "moduleDigitalTopology.html#dgtal_topology_sec3_digital_object", [
        [ "Construction of digital objects", "moduleDigitalTopology.html#dgtal_topology_sec3_1", null ],
        [ "Neighborhood of a point in an object", "moduleDigitalTopology.html#dgtal_topology_sec3_2", null ],
        [ "Border of a digital object", "moduleDigitalTopology.html#dgtal_topology_sec3_3", null ],
        [ "Connectedness and connected components", "moduleDigitalTopology.html#dgtal_topology_sec3_4", null ],
        [ "Simple points", "moduleDigitalTopology.html#dgtal_topology_sec3_5", null ]
      ] ],
      [ "Neighborhood configurations, predicates and look up tables.", "moduleDigitalTopology.html#dgtal_topology_sec4", null ]
    ] ],
    [ "Cellular grid space and topology, unoriented and oriented cells, incidence", "moduleCellularTopology.html", [
      [ "Images and digital spaces", "moduleCellularTopology.html#dgtal_ctopo_sec1", [
        [ "Cells in the cubical grid and Khalimsky coordinates", "moduleCellularTopology.html#dgtal_ctopo_sec2", null ],
        [ "Models for cellular grid spaces", "moduleCellularTopology.html#dgtal_ctopo_sec3", null ],
        [ "Creating a cellular grid space", "moduleCellularTopology.html#dgtal_ctopo_sec4", null ]
      ] ],
      [ "Creating (unsigned) cells in a cellular grid space", "moduleCellularTopology.html#dgtal_ctopo_sec5", null ],
      [ "Cells may be unsigned or signed", "moduleCellularTopology.html#dgtal_ctopo_sec6", null ],
      [ "Accessing and modifying cell coordinates.", "moduleCellularTopology.html#dgtal_ctopo_sec7", null ],
      [ "Moving within the cellular grid space", "moduleCellularTopology.html#dgtal_ctopo_sec8", null ],
      [ "Cell topology and directions", "moduleCellularTopology.html#dgtal_ctopo_sec9", null ],
      [ "Cell adjacency and neighborhood", "moduleCellularTopology.html#dgtal_ctopo_sec10", null ],
      [ "Cell incidence", "moduleCellularTopology.html#dgtal_ctopo_sec11", null ],
      [ "Periodic Khalimsky space and per-dimension closure specification.", "moduleCellularTopology.html#dgtal_ctopo_periodicKSpace", null ],
      [ "Unbounded cellular grid space", "moduleCellularTopology.html#dgtal_ctopo_precellulargridspace", null ]
    ] ],
    [ "Digital surfaces", "moduleDigitalSurfaces.html", [
      [ "Introduction to digital surfaces", "moduleDigitalSurfaces.html#dgtal_digsurf_sec1", [
        [ "Possible definitions for digital surfaces", "moduleDigitalSurfaces.html#dgtal_digsurf_sec1_1", null ],
        [ "Digital surface as a set of n-1-cells", "moduleDigitalSurfaces.html#dgtal_digsurf_sec1_2", null ],
        [ "Digital surface as a graph: adding adjacencies between surfels", "moduleDigitalSurfaces.html#dgtal_digsurf_sec1_3", null ]
      ] ],
      [ "Tracking digital surfaces", "moduleDigitalSurfaces.html#dgtal_digsurf_sec2", [
        [ "Constructing digital surfaces by scanning", "moduleDigitalSurfaces.html#dgtal_digsurf_sec2_1", null ],
        [ "Constructing digital surfaces by tracking", "moduleDigitalSurfaces.html#dgtal_digsurf_sec2_2", null ],
        [ "Other constructions by tracking: 2D contours, surface connected components, 2D slices in 3D surface", "moduleDigitalSurfaces.html#dgtal_digsurf_sec2_3", null ]
      ] ],
      [ "High-level classes for digital surfaces", "moduleDigitalSurfaces.html#dgtal_digsurf_sec3", [
        [ "A common architecture for digital surfaces", "moduleDigitalSurfaces.html#dgtal_digsurf_sec3_1", null ],
        [ "Models of digital surface containers", "moduleDigitalSurfaces.html#dgtal_digsurf_sec3_2", null ],
        [ "Relating a digital surface to some container", "moduleDigitalSurfaces.html#dgtal_digsurf_sec3_3", null ],
        [ "A digital surface is a graph, example of breadth-first traversal", "moduleDigitalSurfaces.html#dgtal_digsurf_sec3_4", null ],
        [ "Boundary and frontiers examples of digital surface", "moduleDigitalSurfaces.html#dgtal_digsurf_sec3_5", null ]
      ] ],
      [ "The digital surface graph is a combinatorial manifold", "moduleDigitalSurfaces.html#dgtal_digsurf_sec4", [
        [ "Umbrellas and faces", "moduleDigitalSurfaces.html#dgtal_digsurf_sec4_1", null ],
        [ "Vertices, arcs and faces on a digital surface", "moduleDigitalSurfaces.html#dgtal_digsurf_sec4_2", null ],
        [ "Application to export surface in OFF format", "moduleDigitalSurfaces.html#dgtal_digsurf_sec4_3", null ]
      ] ],
      [ "Precomputed 3D digital surface with IndexedDigitalSurface", "moduleDigitalSurfaces.html#dgtal_digsurf_sec5", [
        [ "Creating an IndexedDigitalSurface", "moduleDigitalSurfaces.html#dgtal_digsurf_sec5_1", null ],
        [ "Guide for using an IndexedDigitalSurface", "moduleDigitalSurfaces.html#dgtal_digsurf_sec5_2", null ],
        [ "When using an IndexedDigitalSurface instead of a DigitalSurface ?", "moduleDigitalSurfaces.html#dgtal_digsurf_sec5_3", null ]
      ] ]
    ] ],
    [ "Helpers for digital surfaces", "moduleDigitalSurfaceHelpers.html", [
      [ "The 2D case: the boundary is a sequence of cells", "moduleDigitalSurfaceHelpers.html#dgtal_helpsurf_sec1", null ],
      [ "Tracking a 3D boundary to build a surface.", "moduleDigitalSurfaceHelpers.html#dgtal_helpsurf_sec2", null ],
      [ "Extracting surface of connected components", "moduleDigitalSurfaceHelpers.html#dgtal_helpsurf_sec3", null ],
      [ "Filling oriented digital contours", "moduleDigitalSurfaceHelpers.html#dgtal_helpsurf_sec4", null ],
      [ "Your challenge", "moduleDigitalSurfaceHelpers.html#dgtal_helpsurf_challenge", [
        [ "Exercise", "moduleDigitalSurfaceHelpers.html#dgtal_helpsurf_challenge_exercice", null ],
        [ "Hints", "moduleDigitalSurfaceHelpers.html#dgtal_helpsurf_challenge_hints", null ],
        [ "Result", "moduleDigitalSurfaceHelpers.html#dgtal_helpsurf_challenge_results", null ]
      ] ]
    ] ],
    [ "Cubical Complex", "moduleCubicalComplex.html", [
      [ "Introduction to cubical complexes", "moduleCubicalComplex.html#dgtal_ccomplex_sec1", null ],
      [ "Displaying a 2D cubical complex", "moduleCubicalComplex.html#dgtal_ccomplex_sec2", null ],
      [ "Incidence within a cubical complex", "moduleCubicalComplex.html#dgtal_ccomplex_sec3", null ],
      [ "Closure, star and link of cells of a complex", "moduleCubicalComplex.html#dgtal_ccomplex_sec4", null ],
      [ "Interior, boundary of a complex", "moduleCubicalComplex.html#dgtal_ccomplex_sec5", null ],
      [ "Set operations on complexes", "moduleCubicalComplex.html#dgtal_ccomplex_sec6", null ],
      [ "Topological operations: closing, opening, collapsing a complex", "moduleCubicalComplex.html#dgtal_ccomplex_sec7", null ],
      [ "Thinning in cubical complexes", "moduleCubicalComplex.html#dgtal_ccomplex_sec8", null ]
    ] ],
    [ "Voxel Complex", "moduleVoxelComplex.html", [
      [ "Introduction to voxel complexes", "moduleVoxelComplex.html#dgtal_vcomplex_sec1", null ],
      [ "Definitions", "moduleVoxelComplex.html#dgtal_vcomplex_sec2", null ],
      [ "Initializing a voxel complex.", "moduleVoxelComplex.html#dgtal_vcomplex_sec3", null ],
      [ "Implementation Details", "moduleVoxelComplex.html#dgtal_vcomplex_sec4", null ],
      [ "Thinning in voxel complexes", "moduleVoxelComplex.html#dgtal_vcomplex_sec5", null ],
      [ "Examples", "moduleVoxelComplex.html#dgtal_vcomplex_sec6", null ]
    ] ],
    [ "Half-edge data structure, triangulated surfaces and polygonal surfaces", "moduleHalfEdgeMesh.html", [
      [ "The half-edge data structure", "moduleHalfEdgeMesh.html#HEM_sec1", [
        [ "Creating a half-edge data structure", "moduleHalfEdgeMesh.html#HEM_sec1_1", null ],
        [ "Elementary operations", "moduleHalfEdgeMesh.html#HEM_sec1_2", null ],
        [ "Details about internal representation", "moduleHalfEdgeMesh.html#HEM_sec1_3", null ],
        [ "Modifying operations: flip, split, merge", "moduleHalfEdgeMesh.html#HEM_sec1_4", null ]
      ] ],
      [ "A triangulated surface data structure", "moduleHalfEdgeMesh.html#HEM_sec2", [
        [ "Building a triangulated surface", "moduleHalfEdgeMesh.html#HEM_sec2_1", null ],
        [ "Main topological operations", "moduleHalfEdgeMesh.html#HEM_sec2_2", null ],
        [ "Boundary of triangulated surface", "moduleHalfEdgeMesh.html#HEM_sec2_3", null ],
        [ "Helpers to convert triangulated surfaces from/to mesh", "moduleHalfEdgeMesh.html#HEM_sec2_4", null ],
        [ "Geometrical operations", "moduleHalfEdgeMesh.html#HEM_sec2_5", null ],
        [ "Associating data to vertices, edges, faces", "moduleHalfEdgeMesh.html#HEM_sec2_6", null ],
        [ "Triangulated surface I/O and visualization", "moduleHalfEdgeMesh.html#HEM_sec2_7", null ],
        [ "Modifying operations: flip, split, merge", "moduleHalfEdgeMesh.html#HEM_sec2_8", null ]
      ] ],
      [ "A polygonal surface data structure", "moduleHalfEdgeMesh.html#HEM_sec3", [
        [ "Building a polygonal surface", "moduleHalfEdgeMesh.html#HEM_sec3_1", null ],
        [ "Main topological operations", "moduleHalfEdgeMesh.html#HEM_sec3_2", null ],
        [ "Boundary of polygonal surface", "moduleHalfEdgeMesh.html#HEM_sec3_3", null ],
        [ "Helpers to convert polygonal surfaces from/to mesh", "moduleHalfEdgeMesh.html#HEM_sec3_4", null ],
        [ "Geometrical operations", "moduleHalfEdgeMesh.html#HEM_sec3_5", null ],
        [ "Associating data to vertices, edges, faces", "moduleHalfEdgeMesh.html#HEM_sec3_6", null ],
        [ "Polygonal surface I/O and visualization", "moduleHalfEdgeMesh.html#HEM_sec3_7", null ]
      ] ]
    ] ],
    [ "Topology Concepts and Models (part I, models of graph)", "packageTopologyConcepts1.html", null ],
    [ "Topology Concepts and Models (part II, digital surfaces, surfel predicates)", "packageTopologyConcepts2.html", null ]
];