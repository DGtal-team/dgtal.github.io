---
layout: page
title: For Users
---

DGtal is an open-source software (Lesser Gnu Privacy License - LGPL) so you can freely use it and distribute it. See the [documentation][1] for details. However, if you use DGtal in your own project, we would be pleased to be kept in touch. If you want to refer to DGtal in your publications, please use the following bibtex entry:

``` bibtex
@Misc{DGtal,
  title = {DGtal: Digital Geometry tools and algorithms library},
  note = {\url{http://dgtal.org}}
}
```

To use DGtal in your own project, a very nice solution exists with *cmake*. There are two methods we recommend: either installing the library manually or using CPM. 


# Using CPM

[CPM](https://github.com/cpm-cmake/CPM.cmake) is a script that adds dependency management to CMake. It allows to download the dependency and run its cmake script automatically with a few lines of cmake. DGtal is compatible with CPM. First, download `CPM.cmake` file [here](https://github.com/cpm-cmake/CPM.cmake/releases), inside your project directory. Afterward, you can write the following lines in your CMakeLists:

```cmake
PROJECT(Helloworld)

INCLUDE(CPM.cmake) # Or any other path to the file, depending on your folder structure

# Downloads and build DGtal automatically
SET(DGTAL_ENABLE_TARGET_INSTALL OFF) # Necessary for use with CPM
CPMAddPackage(
  URI "gh:DGtal-team/DGtal@2.1"
  OPTIONS
    # Add options to DGtal, here the viewer. More in the [build page](https://www.dgtal.org/doc/stable/moduleBuildDGtal.html)
    "DGTAL_POLYSCOPE_VIEWER ON"
)

ADD_EXECUTABLE(helloworld helloworld)
TARGET_LINK_LIBRARIES(helloworld DGtal::DGtal)
```


## Manual installation

First, download and build DGtal library. This requires a compiler, git and cmake installed. You can follow the instructions [here](https://www.dgtal.org/doc/stable/moduleBuildDGtal.html). Within the build directory, run the command:

```bash
cmake --build . --target install
```

This will build and install the library so that it is available throughout your system (Linux/MacOS). Afterward, in your project CMakeLists, you can add the `find_package` and `target_link_librairies` as:


``` cmake
PROJECT(Helloworld)

### Required in DGtal
CMAKE_MINIMUM_REQUIRED(VERSION 3.11)
FIND_PACKAGE(DGtal REQUIRED)

ADD_EXECUTABLE(helloworld helloworld)
TARGET_LINK_LIBRARIES(helloworld DGtal::DGtal)
```

 [1]: http://dgtal.org/doc/stable/moduleHowToUseDGtal.html
