---
layout: page
title: Download
---
### Releases

* Last stable DGtal release: [DGtal 2.1][2]

### Development version

* Read-only git access (development branch): ```git clone git://github.com/DGtal-team/DGtal.git```
* You can also browse the [source.][3]
* If you want to contribute, please contact us or submit a proposal through a Github Pull-Request.

### Requirements

* C++ compiler with C++20 features
* [cmake][4] to generate the project and compile the library (&gt;=3.20)
* [zlib][13] for compressed Vol files

&nbsp;

### Main optional dependencies

* [polyscope](http://polyscope.run) for the built-in 3d viewer
* [InsightToolkit][9] (ITK) to merge ITK pipelines in DGtal via the image container.
* [doxygen][11] (to generate the source code documentation)
* [CGAL][8] to be able to consider point cloud based differential estimators.
* [Ponca](https://github.com/poncateam/ponca) for point cloud based differential estimators
### How to build the library
See also [ the dedicated page][12] in the DGtal documentation.

* Linux (command line)
* get the code -&gt; DGtal/
* ```mkdir build ; cd build ; cmake .. ; make```
* if you wish, you can "install" the library in your system: ```sudo make install```
* Windows
* use cmake-gui to generate the VS project for instance
* open the DGtal project and compile with Visual Studio (VS14 or above)

[1]: https://github.com/DGtal-team/DGtal/releases
[2]: https://github.com/DGtal-team/DGtal/releases
[3]: https://github.com/DGtal-team/DGtal
[4]: http://www.cmake.org
[5]: http://www.boost.org
[6]: http://gmplib.org/
[7]: http://www.libqglviewer.com/
[8]: http://cgal.org/
[9]: http://www.itk.org/
[11]: http://www.stack.nl/~dimitri/doxygen/
[12]: http://dgtal.org/doc/stable/moduleBuildDGtal.html
[13]: http://zlib.net
