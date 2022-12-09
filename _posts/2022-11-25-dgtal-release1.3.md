---
layout: post
title: DGtal release 1.3
---

We are thrilled to announce the [release  1.3 of DGtal](https://github.com/DGtal-team/DGtal/releases/tag/1.3) and its tools. Many new features, edits and bugfixes are listed in the [Changelog](https://github.com/DGtal-team/DGtal/blob/master/ChangeLog.md), and we would like to thank all devs involved in this release. In this short review, we would like to only focus on selected new features.


* **Geometry processing**: many new features for the geometry processing of digital objects and surfaces
  * a new [differential calculus framework](https://dgtal-team.github.io/doc-nightly/modulePolygonalCalculus.html) for polygonal meshes and digital surfaces (scalar field and vector field processing on surfaces)
    <table border="0">
    <tr>
    <td markdown="span"> ![](../img/polydec.png)</td><td markdown="span"> ![](../img/bimba-nsources.png)</td><td markdown="span"> ![](../img/bimba-nvf.png)</td>
    </tr>
    </table>
  * Faster digital convexity tests in the [convexity module](https://dgtal.org/doc/stable/moduleDigitalConvexity.html), and a brand new fully convex digital [envelope module](https://dgtal-team.github.io/doc-nightly/moduleEnvelope.html), allowing a new convexity based definition of digital polyhedra.
    <table border="0">
    <tr>
    <td markdown="span">![](../img/lion-tri-h0_5-sstd-all.jpg) </td><td markdown="span">  ![](../img/spot-h0_005-all.jpg) </td>
    </tr>
    </table>


* **Volumetric analysis**: now the volumetric tools contains a new [VoronoiMapComplete](https://dgtal-team.github.io/doc-nightly/moduleVolumetric.html#vorocomplete) class that outputs the complete restriction to $\mathbb{Z}^d$ of the Voronoi diagram is a set of grid points (i.e. with all co-cyclic sites).

* Many improvements in the build system.

Do not forget to have a look to the [DGtal @ DGMM 2022 tutorials](https://dgtal.org/2022-11-06-dgtal-dgmm/).



**Links:**

  * DGtal 1.3: [http://dgtal.org/download/](http://dgtal.org/download)
  * Complete changelogs:
      * [https://github.com/DGtal-team/DGtal/blob/master/ChangeLog.md](https://github.com/DGtal-team/DGtal/blob/master/ChangeLog.md)
      * [https://github.com/DGtal-team/DGtalTools/blob/master/ChangeLog.md](https://github.com/DGtal-team/DGtalTools/blob/master/ChangeLog.md)
      * [https://github.com/DGtal-team/DGtalTools-contrib/blob/master/ChangeLog.md](https://github.com/DGtal-team/DGtalTools-contrib/blob/master/ChangeLog.md)

  * DGtalTools 1.3 [http://dgtal.org/tools/](http://dgtal.org/tools/)
  * DGtalTools-contrib 1.3: [http://dgtal.org/tools/](http://dgtal.org/tools/)
  * DGtal Documentation: [http://dgtal.org/doc/stable](http://dgtal.org/doc/stable)
  * DGtalTools documentation:  [http://dgtal.org/doc/tools/stable](http://dgtal.org/doc/tools/stable)
  * DGtalTools-contrib: [https://github.com/DGtal-team/DGtalTools-contrib](https://github.com/DGtal-team/DGtalTools-contrib)
