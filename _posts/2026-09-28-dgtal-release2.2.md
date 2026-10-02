---
layout: post
title: DGtal release 2.2
---


We are happy to announce the release 2.2 of DGtal. This release is a minor update of the c++ and python library with new contributions and improvements to the build system:

* A new parallel version of the Integral Invariant curvature estimator has been added to the library (multihreading support using `OpenMP`). In addition to recent Sparse Voxel Octree (SVO) support, this new version allows to compute differential quantities on large voxel sets in a reasonable time.


Mean curvature | Split domains for parallel curvature computation
--|--
![](../img/bunny_curvature_parallel2.png) | ![](../img/bunny_curvature_parallel.png)  

* We have upgraded the internal viewer to support the latest version of [polyscope](https://polyscope.run) (2.6.1) allowing efficent vizualization of voxel sets (`SparseVolumeGrid`).

![](../img/sparsepoly.png)

* New methods `TangencyComputer::getCotangentPoints` to compute visible points up to some distance, `TangencyComputer::ShortestPaths::clearVisited` to speed-up multiple shortest path computations
* Many bug fixes and improvements have been made to the build system and the documentation, see more details in the [Changelog](https://github.com/DGtal-team/DGtal/blob/master/ChangeLog.md).


## Links

  * [Discord server](https://discord.gg/zTyCYdfA)
  * DGtal 2.2: [http://dgtal.org/download/](http://dgtal.org/download)
  * Complete changelogs:
      * [https://github.com/DGtal-team/DGtal/blob/main/ChangeLog.md](https://github.com/DGtal-team/DGtal/blob/master/ChangeLog.md)
      * [https://github.com/DGtal-team/DGtalTools/blob/master/ChangeLog.md](https://github.com/DGtal-team/DGtalTools/blob/master/ChangeLog.md)
      * [https://github.com/DGtal-team/DGtalTools-contrib/blob/master/ChangeLog.md](https://github.com/DGtal-team/DGtalTools-contrib/blob/master/ChangeLog.md)

  * DGtalTools: [http://dgtal.org/tools/](http://dgtal.org/dgtaltools/)
  * DGtalTools-contrib: [http://dgtal.org/tools/](http://dgtal.org/dgtaltools/)
  * DGtal Documentation: [http://dgtal.org/doc/stable](http://dgtal.org/doc/stable)
  * DGtalTools documentation:  [http://dgtal.org/doc/tools/stable](http://dgtal.org/doc/tools/stable)
  * DGtalTools-contrib: [https://github.com/DGtal-team/DGtalTools-contrib](https://github.com/DGtal-team/DGtalTools-contrib)
