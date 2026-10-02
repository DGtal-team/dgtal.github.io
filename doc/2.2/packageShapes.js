var packageShapes =
[
    [ "Shapes, Shapers and Digitizers", "moduleShape.html", [
      [ "Introduction of Concepts", "moduleShape.html#sectmoduleShape1", null ],
      [ "Shapers and Digitizers", "moduleShape.html#sectmoduleShape2", null ],
      [ "Shape Factory", "moduleShape.html#sectmoduleShape3", null ],
      [ "Constructive Solid Geometry tree on Shapes", "moduleShape.html#sectmoduleShape4", null ]
    ] ],
    [ "Mesh Voxelization", "moduleMeshVoxelization.html", [
      [ "Introduction", "moduleMeshVoxelization.html#sectVoxelization1", null ],
      [ "Basic Usage", "moduleMeshVoxelization.html#sectVoxelization2", null ],
      [ "Limitations", "moduleMeshVoxelization.html#sectVoxelization3", null ]
    ] ],
    [ "Manipulating Simple Mesh", "moduleMesh.html", [
      [ "Simple Mesh Class", "moduleMesh.html#sectmoduleMesh1", [
        [ "Mesh Construction", "moduleMesh.html#subsect2moduleMesh", null ],
        [ "Mesh IO", "moduleMesh.html#subsect2moduleMeshIO", null ]
      ] ],
      [ "Generating Basic Mesh", "moduleMesh.html#sectmoduleMesh2", null ],
      [ "Converting to/from TriangulatedSurface and PolygonalSurface", "moduleMesh.html#sectmoduleMesh3", null ]
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
    [ "Surface mesh data structure for representing manifold or non-manifold polygonal surfaces in R3", "moduleSurfaceMesh.html", [
      [ "Creating a surface mesh", "moduleSurfaceMesh.html#SurfMesh_sec1", null ],
      [ "Topological relations within a surface mesh", "moduleSurfaceMesh.html#SurfMesh_sec2", null ],
      [ "A surface mesh is a graph", "moduleSurfaceMesh.html#SurfMesh_sec3", null ],
      [ "Getting manifold, boundary and non-manifold parts", "moduleSurfaceMesh.html#SurfMesh_sec4", null ],
      [ "Geometric positions and normals, and other information associated to cells", "moduleSurfaceMesh.html#SurfMesh_sec5", null ],
      [ "Further geometric services", "moduleSurfaceMesh.html#SurfMesh_sec6", null ],
      [ "Conversion and output to OBJ file format", "moduleSurfaceMesh.html#SurfMesh_sec7", null ],
      [ "Flipping edges", "moduleSurfaceMesh.html#SurfMesh_sec8", null ]
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
    [ "Voxelization from an oriented point cloud", "moduleWinding.html", [
      [ "Basic usage", "moduleWinding.html#sectmoduleWinding1", null ],
      [ "Advanced usages: batched queries and modified area measures", "moduleWinding.html#sectmoduleWinding2", null ]
    ] ],
    [ "Shapes Concepts", "packageShapesConcepts.html", null ]
];