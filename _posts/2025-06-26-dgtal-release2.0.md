---
layout: post
title: DGtal release 2.0
---


# DGtal release 2.0

We are happy to announce the major release 2.0 of DGtal. This big update makes the library more modern, in both how it's built and the tools it uses. This release also includes new features in both the C++ library and its python binding. Let's take a look at the big changes (see more in the [Changelog](https://github.com/DGtal-team/DGtal/blob/master/ChangeLog.md) section).


## New Polyscope-based viewer
The new version of DGtal (2.0) includes a brand new viewer that is based on [Polyscope](https://polyscope.run/). This modern viewer lets you customise things like colors, transforms, clipping planes and more while you're using it. This is also the perfect time to make the viewer's code simpler and easier to use. A guide is available to help you adapt old codes to the new viewer. In short (for most common uses):
* First, remove any mention to QApplication in the code.
* Change the name of the viewer (e.g. 'Viewer3D' to 'PolyscopeViewer').
* Put the '.show()' method at the end of the file. This will make the user interface (UI) start and appear.
* Delete any CustomColors3D instance. You can set the color directly using the stream API by typing "viewer << color;".
TODO: Vidéo

## DGtal Paraview Plugin
DGtal now has a paraview plugin which is available at [https://github.com/DGtal-team/DGtal-paraview](https://github.com/DGtal-team/DGtal-paraview). For now, this plugins binds most of the Shortcuts to works with any vtk/paraview voxel-based object.
TODO: Video

## Broader Shortcuts:
* Shortcuts are now available for CNC estimators.
* Shortcuts are also available in the Python wrapper.

## Updated Python bindings



## Building the library
* DGtal now uses more modern CMake scripts, which involves creating sublibraries in a top-down structure.
* All DGtal CMake variables now have the prefix "DGTAL_".
* Most dependencies are now available through FetchContent, so the user doesn't need to pre-install them at the correct location or specify any path. This version includes:
  * [Boost](https://www.boost.org/)
  * [Eigen](https://eigen.tuxfamily.org/index.php?title=Main_Page)
  * [Ponca](https://poncateam.github.io/ponca/index.html)
  * [Polyscope](https://polyscope.run/) (see viewer section below)
* Patate was upgraded to [Ponca](https://poncateam.github.io/ponca/index.html)
* GMP is no longer used; instead, Boost Multiprecision is used (with its own backend). Arbitrary precision integers are now always available and don't require any dependencies.
* Qt and libqglviewer is no longer required for the viewer.
* CI and CD are now built on top of actions that can be reused. These actions are used with side repositories.

## Breaking changes
The new minimal standard is now C++20, which replaced the previous standard of C++14. This has a few impacts. Some of the side effects of DGtal that you might notice are:
    * You can no longer convert enums to int.
    * Old std::allocator API is being removed (this was used in MPolynomial).
    * New code might not work with older versions because it uses new libraries and language features.
* Removal of the deprecated namespace. Classes, functions and variables inside this namespace are now longer accessible. This is mostly about convolution on surfaces, which is now replaced with LocalEstimatorFromSurfelFunctorAdapter.
* The Viewer is now based on Polyscope (see the section below for more information). The stream API was kept the same, but most of the modifiers were taken out. See the [Migrating viewer page]()


**Links:**

  * DGtal 2.0: [http://dgtal.org/download/](http://dgtal.org/download)
  * Complete changelogs:
      * [https://github.com/DGtal-team/DGtal/blob/master/ChangeLog.md](https://github.com/DGtal-team/DGtal/blob/master/ChangeLog.md)
      * [https://github.com/DGtal-team/DGtalTools/blob/master/ChangeLog.md](https://github.com/DGtal-team/DGtalTools/blob/master/ChangeLog.md)
      * [https://github.com/DGtal-team/DGtalTools-contrib/blob/master/ChangeLog.md](https://github.com/DGtal-team/DGtalTools-contrib/blob/master/ChangeLog.md)

  * DGtalTools 2.0: [http://dgtal.org/tools/](http://dgtal.org/dgtaltools/)
  * DGtalTools-contrib 2.0: [http://dgtal.org/tools/](http://dgtal.org/dgtaltools/)
  * DGtal Documentation: [http://dgtal.org/doc/stable](http://dgtal.org/doc/stable)
  * DGtalTools documentation:  [http://dgtal.org/doc/tools/stable](http://dgtal.org/doc/tools/stable)
  * DGtalTools-contrib: [https://github.com/DGtal-team/DGtalTools-contrib](https://github.com/DGtal-team/DGtalTools-contrib)
