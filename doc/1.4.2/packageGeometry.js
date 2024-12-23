var packageGeometry =
[
    [ "Analysis of one-dimensional discrete structures", "moduleGridCurveAnalysis.html", [
      [ "One-dimensional discrete structures", "moduleGridCurveAnalysis.html#geometryIntro", [
        [ "Iterators/Circulators and Ranges.", "moduleGridCurveAnalysis.html#geometryBasicConcepts", null ],
        [ "GridCurve and FreemanChain.", "moduleGridCurveAnalysis.html#geometryGridCurve", null ]
      ] ],
      [ "Segments and on-line detection of segments.", "moduleGridCurveAnalysis.html#geometrySegments", null ],
      [ "Segments Extraction.", "moduleGridCurveAnalysis.html#geometrySegmentsExtraction", [
        [ "Saturated segmentation.", "moduleGridCurveAnalysis.html#geometryUniqueDecomposition", null ]
      ] ]
    ] ],
    [ "Digital straight lines and segments", "moduleArithDSSReco.html", [
      [ "Digital straight lines", "moduleArithDSSReco.html#moduleArithDSSReco-DSL", [
        [ "Short example", "moduleArithDSSReco.html#moduleArithDSSReco-DSL-Ex", null ],
        [ "Orientation", "moduleArithDSSReco.html#moduleArithDSSReco-DSL-Orientation", null ],
        [ "Data members", "moduleArithDSSReco.html#moduleArithDSSReco-DSL-Members", null ],
        [ "Main features", "moduleArithDSSReco.html#moduleArithDSSReco-DSL-Features", null ],
        [ "Avoiding overflows", "moduleArithDSSReco.html#moduleArithDSSReco-DSL-Overflows", null ],
        [ "To go further", "moduleArithDSSReco.html#moduleArithDSSReco-DSL-Further", null ]
      ] ],
      [ "Digital straight segments", "moduleArithDSSReco.html#moduleArithDSSReco-DSS", [
        [ "Short example", "moduleArithDSSReco.html#moduleArithDSSReco-DSS-Ex", null ],
        [ "Main features", "moduleArithDSSReco.html#moduleArithDSSReco-DSS-Features", null ],
        [ "Different ways of constructing DSSs", "moduleArithDSSReco.html#moduleArithDSSReco-DSS-Ctors", null ]
      ] ],
      [ "Recognition of digital straight segments", "moduleArithDSSReco.html#moduleArithDSSReco-DSSRec", [
        [ "Extension", "moduleArithDSSReco.html#moduleArithDSSReco-DSSRec-Extension", null ],
        [ "Retraction", "moduleArithDSSReco.html#moduleArithDSSReco-DSSRec-Retraction", null ],
        [ "NaiveDSS8Computer and StandardDSS4Computer", "moduleArithDSSReco.html#moduleArithDSSReco-DSSRec-Computers", null ],
        [ "Naive3DDSSComputer", "moduleArithDSSReco.html#moduleArithDSSReco-DSSRec-Computers3D", null ]
      ] ],
      [ "Application of the straight line segment recognition", "moduleArithDSSReco.html#moduleArithDSSReco-DSSRecAppli", [
        [ "Estimation of tangent direction", "moduleArithDSSReco.html#moduleArithDSSReco-DSSRec-Computers3DTangent", null ]
      ] ]
    ] ],
    [ "Fréchet Shortcuts", "moduleFrechetShortcut.html", [
      [ "Overview", "moduleFrechetShortcut.html#FS_sectOverview", [
        [ "Fréchet distance", "moduleFrechetShortcut.html#subsectFrechet", null ],
        [ "Curve simplification problem", "moduleFrechetShortcut.html#subsectCurve", null ]
      ] ],
      [ "Guaranteed algorithm using an approximated distance", "moduleFrechetShortcut.html#FS_sectAlgo", [
        [ "Definitions and overall algorithm", "moduleFrechetShortcut.html#FS_subsectDef", null ],
        [ "Updating the width efficiently", "moduleFrechetShortcut.html#subsectWidth", null ],
        [ "Updating the backpath length efficiently", "moduleFrechetShortcut.html#subsectBackpath", null ],
        [ "Memorizing the directions for which there exists a too long backpath", "moduleFrechetShortcut.html#subsectDirections", null ]
      ] ],
      [ "Quality of the result and complexity analysis", "moduleFrechetShortcut.html#sectQuality", [
        [ "A guaranteed algorithm", "moduleFrechetShortcut.html#subsectGuarantee", null ],
        [ "Complexity", "moduleFrechetShortcut.html#subsectComplexity", null ]
      ] ],
      [ "Implementation in DGtal", "moduleFrechetShortcut.html#FS_sectImplementation", null ]
    ] ],
    [ "Alpha-thick Segment Recognition", "moduleAlphaThickSegmentReco.html", [
      [ "Alpha-thick Segment", "moduleAlphaThickSegmentReco.html#moduleAlphaThickSegmentRecoIntro", null ],
      [ "Alpha-thick Segment Recognition", "moduleAlphaThickSegmentReco.html#moduleAlphaThickSegmentRecoDetails", [
        [ "Type of Input Points", "moduleAlphaThickSegmentReco.html#moduleAlphaThickSegmentRecoDetails-TypeInputContours", null ],
        [ "Recognizing an Alpha-thick Segment", "moduleAlphaThickSegmentReco.html#moduleAlphaThickSegmentRecoDetails-Code", null ],
        [ "AlphaThickSegmentComputer with a point iterator", "moduleAlphaThickSegmentReco.html#moduleAlphaThickSegmentRecoDetails-CodeInitIter", null ],
        [ "Changing the thickness definition", "moduleAlphaThickSegmentReco.html#moduleAlphaThickSegmentRecoDetails-ChangeThicknessDef", null ]
      ] ],
      [ "Example of greedy segmentation into Alpha-thick Segment", "moduleAlphaThickSegmentReco.html#moduleAlphaThickSegmentRecoGreedy", null ],
      [ "Computing AlphaThickSegment tangential cover", "moduleAlphaThickSegmentReco.html#moduleAlphaThickSegmentTgtCover", [
        [ "Tangential cover from saturated segmentation", "moduleAlphaThickSegmentReco.html#moduleAlphaThickSegmentTgtCoverSaturated", null ],
        [ "Tangential cover on a single point", "moduleAlphaThickSegmentReco.html#moduleAlphaThickSegmentTgtCoverSingle", null ]
      ] ]
    ] ],
    [ "Digitization of 3D parametric curves", "moduleParametricCurves.html", [
      [ "3D Parametric Curves", "moduleParametricCurves.html#paramCurves", [
        [ "Digitization - The algorithm", "moduleParametricCurves.html#digitHelix", null ],
        [ "Additional Information", "moduleParametricCurves.html#metData", null ]
      ] ],
      [ "Examples", "moduleParametricCurves.html#digiExample", [
        [ "Implemented Curves", "moduleParametricCurves.html#implCurves", null ]
      ] ],
      [ "Geometric Transformations of 3D Parametric Curves", "moduleParametricCurves.html#transCurves", null ],
      [ "Handling Problems", "moduleParametricCurves.html#handProb", [
        [ "Step values", "moduleParametricCurves.html#stepProblems", null ],
        [ "Connectivity Problems", "moduleParametricCurves.html#connectProblems", null ]
      ] ]
    ] ],
    [ "Plane recognition and plane width computation", "modulePlaneRecognition.html", [
      [ "Planarity as a parallel strip", "modulePlaneRecognition.html#modulePlaneRecognition_sec1", [
        [ "Definition of parallel strip", "modulePlaneRecognition.html#modulePlaneRecognition_sec11", null ],
        [ "Naive digital planes", "modulePlaneRecognition.html#modulePlaneRecognition_sec12", null ],
        [ "Standard digital planes", "modulePlaneRecognition.html#modulePlaneRecognition_sec13", null ]
      ] ],
      [ "Naive digital plane recognition (and naive planes with rational width)", "modulePlaneRecognition.html#modulePlaneRecognition_sec2", [
        [ "Naive plane recognition (known axis) with COBA algorithm", "modulePlaneRecognition.html#modulePlaneRecognition_sec21", null ],
        [ "Naive plane recognition (known axis) with Chord algorithm", "modulePlaneRecognition.html#modulePlaneRecognition_sec22", null ],
        [ "Naive plane recognition (unknown axis) with COBA algorithm", "modulePlaneRecognition.html#modulePlaneRecognition_sec23", null ],
        [ "Naive plane recognition (unknown axis) with Chord algorithm", "modulePlaneRecognition.html#modulePlaneRecognition_sec24", null ],
        [ "Standard plane recognition with COBA algorithm", "modulePlaneRecognition.html#modulePlaneRecognition_sec25", null ],
        [ "Standard plane recognition with Chord algorithm", "modulePlaneRecognition.html#modulePlaneRecognition_sec26", null ]
      ] ],
      [ "Incremental or additive plane recognition", "modulePlaneRecognition.html#modulePlaneRecognition_sec3", [
        [ "Incremental plane recognition", "modulePlaneRecognition.html#modulePlaneRecognition_sec31", null ],
        [ "Additive plane recognition", "modulePlaneRecognition.html#modulePlaneRecognition_sec32", null ]
      ] ],
      [ "Width of a set of points", "modulePlaneRecognition.html#modulePlaneRecognition_sec4", null ],
      [ "Comparative evaluation of COBA and Chord algorithm", "modulePlaneRecognition.html#modulePlaneRecognition_sec5", null ]
    ] ],
    [ "Detailed explanation of COBA plane recognition algorithm", "moduleCOBANaivePlaneRecognition.html", [
      [ "What planes are recognized by the COBA algorithm ?", "moduleCOBANaivePlaneRecognition.html#moduleCOBANaivePlaneRecognition_sec1", null ],
      [ "How to recognize a plane ?", "moduleCOBANaivePlaneRecognition.html#moduleCOBANaivePlaneRecognition_sec2", null ],
      [ "Extracting plane characteristics", "moduleCOBANaivePlaneRecognition.html#moduleCOBANaivePlaneRecognition_sec3", null ],
      [ "Speed and computational complexity of COBA algorithm", "moduleCOBANaivePlaneRecognition.html#moduleCOBANaivePlaneRecognition_sec4", null ],
      [ "Application to greedy segmentation into digital planes", "moduleCOBANaivePlaneRecognition.html#moduleCOBANaivePlaneRecognition_sec5", null ],
      [ "What if you do not know the main axis beforehands ?", "moduleCOBANaivePlaneRecognition.html#moduleCOBANaivePlaneRecognition_sec6", null ]
    ] ],
    [ "Integral invariant curvature estimator 2D/3D", "moduleIntegralInvariant.html", [
      [ "Overview", "moduleIntegralInvariant.html#II_sectOverview", [
        [ "Integral Invariant for curvature computation", "moduleIntegralInvariant.html#subsectIntegralInvariant", null ]
      ] ],
      [ "Algorithm", "moduleIntegralInvariant.html#II_sectAlgo", [
        [ "Overall algorithm", "moduleIntegralInvariant.html#II_subsectDef", [
          [ "Integral Invariant functors", "moduleIntegralInvariant.html#subsubsectFunctors", null ],
          [ "Integral Invariant estimators", "moduleIntegralInvariant.html#subsubsectEstimators", null ]
        ] ]
      ] ],
      [ "Example code", "moduleIntegralInvariant.html#II_sectImplementation", null ],
      [ "Some results", "moduleIntegralInvariant.html#sectResults", null ]
    ] ],
    [ "Local digital surface estimators from surfel functors", "LocalEstimatorsFromSurfel.html", [
      [ "Introduction", "LocalEstimatorsFromSurfel.html#sectLocalEstimatorsFromSurfel1", null ],
      [ "Implementation details", "LocalEstimatorsFromSurfel.html#sectLocalEstimImpDetails", null ],
      [ "Usage Example", "LocalEstimatorsFromSurfel.html#sectLocalEstimatorsFromSurfel2", null ]
    ] ],
    [ "Digital Voronoi Covariance Measure and geometry estimation", "moduleVCM.html", [
      [ "Voronoi Covariance Measure", "moduleVCM.html#moduleVCM_sec1", null ],
      [ "Computing the Voronoi Covariance Measure of a point set", "moduleVCM.html#moduleVCM_sec2", null ],
      [ "Voronoi Covariance Measure of a digital surface", "moduleVCM.html#moduleVCM_sec3", [
        [ "The class VoronoiCovarianceMeasureOnDigitalSurface", "moduleVCM.html#moduleVCM_sec3_1", null ],
        [ "The class VCMDigitalSurfaceLocalEstimator", "moduleVCM.html#moduleVCM_sec3_2", null ]
      ] ]
    ] ],
    [ "Plane-probing based normal estimators", "modulePlaneProbing.html", [
      [ "Introduction to plane-probing algorithms", "modulePlaneProbing.html#sectPlaneProbing1", [
        [ "Tetrahedron-based probing methods", "modulePlaneProbing.html#subsectPlaneProbing11", null ],
        [ "Parallelpiped-based probing methods", "modulePlaneProbing.html#subsectPlaneProbing12", null ],
        [ "Summary of the different variants", "modulePlaneProbing.html#subsectPlaneProbing13", null ]
      ] ],
      [ "Constructing and using a plane-probing estimator", "modulePlaneProbing.html#sectPlaneProbing2", [
        [ "General method", "modulePlaneProbing.html#subsectPlaneProbing21", null ],
        [ "On a digital surface", "modulePlaneProbing.html#subsectPlaneProbing22", null ]
      ] ],
      [ "Further notes", "modulePlaneProbing.html#sectPlaneProbing3", [
        [ "Implementing your own candidate set", "modulePlaneProbing.html#subsectPlaneProbing31", null ]
      ] ]
    ] ],
    [ "Maximal segments and slices of digital surface based normal estimator", "moduleMaximalSegmentSliceEstimation.html", [
      [ "Introduction", "moduleMaximalSegmentSliceEstimation.html#sectMaximalSegmentSliceEstimation1", null ],
      [ "Usage", "moduleMaximalSegmentSliceEstimation.html#sectMaximalSegmentSliceEstimation2", null ],
      [ "Implementation details", "moduleMaximalSegmentSliceEstimation.html#sectMaximalSegmentSliceEstimation3", null ]
    ] ],
    [ "Curvature measures on meshes and digital surfaces", "moduleCurvatureMeasures.html", [
      [ "Introduction to curvature measures", "moduleCurvatureMeasures.html#dgtal_curvature_measures_sec1", null ],
      [ "Computing curvature measures on meshes", "moduleCurvatureMeasures.html#dgtal_curvature_measures_sec2", [
        [ "Normal Cycle curvature measures", "moduleCurvatureMeasures.html#dgtal_curvature_measures_sec21", null ],
        [ "Interpolated Corrected Normal Current curvature measures", "moduleCurvatureMeasures.html#dgtal_curvature_measures_sec22", null ],
        [ "Vertex-interpolated versus face-constant corrected normal current", "moduleCurvatureMeasures.html#dgtal_curvature_measures_sec23", null ],
        [ "More on curvature measures", "moduleCurvatureMeasures.html#dgtal_curvature_measures_sec24", null ],
        [ "ICNC Curvature computation on OBJ surface", "moduleCurvatureMeasures.html#dgtal_curvature_measures_sec25", null ]
      ] ],
      [ "Corrected curvature measures on digital surfaces", "moduleCurvatureMeasures.html#dgtal_curvature_measures_sec3", [
        [ "CCNC and ICNC curvature measures on discretized polynomial surfaces", "moduleCurvatureMeasures.html#dgtal_curvature_measures_sec31", null ],
        [ "ICNC curvature measures on digital boundaries in VOL file", "moduleCurvatureMeasures.html#dgtal_curvature_measures_sec32", null ],
        [ "Comparison between integral invariant and CNC curvature estimates on digital boundaries", "moduleCurvatureMeasures.html#dgtal_curvature_measures_sec33", null ]
      ] ]
    ] ],
    [ "Metric Spaces, Digital Metric Spaces and Related Concepts", "moduleMetrics.html", [
      [ "Introduction", "moduleMetrics.html#metricSecIntro", null ],
      [ "Main concepts", "moduleMetrics.html#subConcepts", null ],
      [ "SeparableMetric Concept", "moduleMetrics.html#subSepMetrics", null ],
      [ "Main models and Computational Costs for Volumetric Analysis", "moduleMetrics.html#CostSec", null ]
    ] ],
    [ "nD Volumetric Analysis using Separable Processes", "moduleVolumetric.html", [
      [ "Introduction", "moduleVolumetric.html#introVol", null ],
      [ "Digital Voronoi Diagram Computation", "moduleVolumetric.html#voronoiSect", null ],
      [ "Complete Discrete Voronoi Map", "moduleVolumetric.html#vorocomplete", null ],
      [ "Distance Transformation", "moduleVolumetric.html#DTsec", null ],
      [ "Digital Power Map and Reverse Distance Transformation", "moduleVolumetric.html#RDTSec", null ],
      [ "Volumetric Analysis on Toric domains", "moduleVolumetric.html#toricVol", null ]
    ] ],
    [ "nD Fast Marching Methods", "moduleFMM.html", [
      [ "Overview", "moduleFMM.html#sectmoduleFMM1", [
        [ "Data structures", "moduleFMM.html#sectmoduleFMM11", null ],
        [ "Computing distances", "moduleFMM.html#sectmoduleFMM13", null ],
        [ "Basic usage", "moduleFMM.html#sectmoduleFMM12", null ],
        [ "Stopping criteria", "moduleFMM.html#sectmoduleFMM14", null ]
      ] ],
      [ "Applications", "moduleFMM.html#sectmoduleFMM3", [
        [ "Signed distance field to an interface", "moduleFMM.html#subsectmoduleFMM31", null ]
      ] ]
    ] ],
    [ "Digital convexity, full convexity and P-convexity", "moduleDigitalConvexity.html", [
      [ "Introduction to full convexity", "moduleDigitalConvexity.html#dgtal_dconvexity_sec1", null ],
      [ "Classes and functions related to digital convexity", "moduleDigitalConvexity.html#dgtal_dconvexity_sec2", [
        [ "Lattice polytopes", "moduleDigitalConvexity.html#dgtal_dconvexity_sec21", null ],
        [ "Building a set of lattice cells from digital points", "moduleDigitalConvexity.html#dgtal_dconvexity_sec22", null ],
        [ "Checking digital convexity", "moduleDigitalConvexity.html#dgtal_dconvexity_sec23", null ],
        [ "Other convexity services, like digital subconvexity (or tangency)", "moduleDigitalConvexity.html#dgtal_dconvexity_sec24", null ],
        [ "Ehrhart polynomial of a lattice polytope", "moduleDigitalConvexity.html#dgtal_dconvexity_sec25", null ]
      ] ],
      [ "P-convexity and convexity measures", "moduleDigitalConvexity.html#dgtal_dconvexity_sec3", null ],
      [ "Best algorithm for checking full convexity", "moduleDigitalConvexity.html#dgtal_dconvexity_sec4", null ],
      [ "Rational polytopes", "moduleDigitalConvexity.html#dgtal_dconvexity_sec5", null ],
      [ "Further notes", "moduleDigitalConvexity.html#dgtal_dconvexity_sec6", null ]
    ] ],
    [ "Applications of full digital convexity", "moduleDigitalConvexityApplications.html", [
      [ "Local convexity analysis", "moduleDigitalConvexityApplications.html#dgtal_dconvexityapp_sec1", null ],
      [ "Tangency and shortest paths", "moduleDigitalConvexityApplications.html#dgtal_dconvexityapp_sec2", [
        [ "Definition of tangency and shortest paths", "moduleDigitalConvexityApplications.html#dgtal_dconvexityapp_sec21", null ],
        [ "Implementation with TangencyComputer class", "moduleDigitalConvexityApplications.html#dgtal_dconvexityapp_sec22", null ],
        [ "Shortest paths to a source", "moduleDigitalConvexityApplications.html#dgtal_dconvexityapp_sec23", null ],
        [ "Shortest path between a source and a target", "moduleDigitalConvexityApplications.html#dgtal_dconvexityapp_sec24", null ],
        [ "Approximated shortest paths to speed-up computation", "moduleDigitalConvexityApplications.html#dgtal_dconvexityapp_sec25", null ]
      ] ]
    ] ],
    [ "Fully convex envelope, relative fully convex envelope and digital polyhedra", "moduleEnvelope.html", [
      [ "Fully convex envelopes", "moduleEnvelope.html#dgtal_envelope_sec1", [
        [ "Envelope of a digital set", "moduleEnvelope.html#dgtal_envelope_sec11", null ],
        [ "Envelope of a digital set relative to another fully convex set", "moduleEnvelope.html#dgtal_envelope_sec12", null ],
        [ "Computing fully convex envelopes", "moduleEnvelope.html#dgtal_envelope_sec13", null ]
      ] ],
      [ "Digital polyhedra", "moduleEnvelope.html#dgtal_envelope_sec2", null ]
    ] ],
    [ "Digital surface regularization by normal vector alignment", "moduleRegularization.html", [
      [ "Introduction", "moduleRegularization.html#moduleReg_sec1", null ],
      [ "Main usages", "moduleRegularization.html#moduleReg_sec2", null ],
      [ "Local control", "moduleRegularization.html#moduleReg_seclocal", null ]
    ] ],
    [ "Digital surface regularization using the Shrouds algorithm", "moduleShrouds.html", [
      [ "Introduction", "moduleShrouds.html#moduleShrouds_sec1", null ],
      [ "Main usage with squared curvature energy", "moduleShrouds.html#moduleShrouds_sec2", null ],
      [ "Shrouds regularization with area and snake energy", "moduleShrouds.html#moduleShrouds_other", null ]
    ] ],
    [ "Implementation of geometric predicates", "moduleGeometricPredicates.html", [
      [ "Introduction", "moduleGeometricPredicates.html#sectmoduleGeometricPredicates0", null ],
      [ "Orientation of three points in the plane", "moduleGeometricPredicates.html#sectmoduleGeometricPredicates1", [
        [ "Basic usage", "moduleGeometricPredicates.html#subsectmoduleGeometricPredicates11", null ],
        [ "List of available functors", "moduleGeometricPredicates.html#subsectmoduleGeometricPredicates12", null ],
        [ "How to avoid overflows ?", "moduleGeometricPredicates.html#subsectmoduleGeometricPredicates13", null ],
        [ "Benchmark", "moduleGeometricPredicates.html#subsectmoduleGeometricPredicates14", null ]
      ] ]
    ] ],
    [ "Convex hull and alpha-shape in the plane", "moduleHull2D.html", [
      [ "Convex hull", "moduleHull2D.html#sectmoduleHull2D1", [
        [ "Andrew's algorithm", "moduleHull2D.html#subsectmoduleHull2D11", null ],
        [ "Graham's algorithm", "moduleHull2D.html#subsectmoduleHull2D12", null ],
        [ "Melkman's algorithm", "moduleHull2D.html#subsectmoduleHull2D13", [
          [ "Constructing a Melkman convex hull from both sides.", "moduleHull2D.html#subsectmoduleHull2D131", null ]
        ] ],
        [ "Convex hull thickness", "moduleHull2D.html#subsectmoduleHull2D14", null ]
      ] ],
      [ "Alpha-shape", "moduleHull2D.html#sectmoduleHull2D2", null ]
    ] ],
    [ "QuickHull algorithm in arbitrary dimension for convex hull and Delaunay cell complex computation", "moduleQuickHull.html", [
      [ "The QuickHull convex hull algorithm", "moduleQuickHull.html#dgtal_quickhull_sec1", null ],
      [ "Computing convex hulls and Delaunay cell complex using QuickHull", "moduleQuickHull.html#dgtal_quickhull_sec2", [
        [ "Convex hull of lattice points", "moduleQuickHull.html#dgtal_quickhull_sec21", null ],
        [ "Convex hull of rational points", "moduleQuickHull.html#dgtal_quickhull_sec22", null ],
        [ "Delaunay cell complex of lattice points (2D example)", "moduleQuickHull.html#dgtal_quickhull_sec23", null ],
        [ "Delaunay cell complex of rational points (2D example)", "moduleQuickHull.html#dgtal_quickhull_sec24", null ],
        [ "Further information stored in QuickHull object", "moduleQuickHull.html#dgtal_quickhull_sec25", null ]
      ] ],
      [ "Using ConvexityHelper for convex hull and Delaunay services", "moduleQuickHull.html#dgtal_quickhull_sec3", [
        [ "Building a lattice polytope (nD)", "moduleQuickHull.html#dgtal_quickhull_sec31", null ],
        [ "Building the boundary of a lattice convex hull as a surface (3D)", "moduleQuickHull.html#dgtal_quickhull_sec32", null ],
        [ "Building the convex hull cell complex of lattice points (nD)", "moduleQuickHull.html#dgtal_quickhull_sec33", null ],
        [ "Building the Delaunay cell complex of lattice points (nD)", "moduleQuickHull.html#dgtal_quickhull_sec34", null ],
        [ "Building a rational polytope (nD)", "moduleQuickHull.html#dgtal_quickhull_sec35", null ],
        [ "Building the boundary of a rational convex hull as a surface (3D)", "moduleQuickHull.html#dgtal_quickhull_sec36", null ],
        [ "Building the convex hull cell complex of real points (nD)", "moduleQuickHull.html#dgtal_quickhull_sec37", null ],
        [ "Building the Delaunay cell complex of real points (nD)", "moduleQuickHull.html#dgtal_quickhull_sec38", null ]
      ] ]
    ] ],
    [ "Geometry Concepts", "packageGeometryConcepts.html", null ]
];