var packageBase =
[
    [ "Iterators and ranges", "moduleIteratorsRanges.html", [
      [ "Introduction to iterators", "moduleIteratorsRanges.html#secIteratorRangesIterators", null ],
      [ "Introduction to ranges", "moduleIteratorsRanges.html#secIteratorRangesRanges", [
        [ "Main concepts", "moduleIteratorsRanges.html#subsecIteratorRangesRangesMainConcepts", null ]
      ] ],
      [ "Adapters to iterators", "moduleIteratorsRanges.html#secIteratorRangesAdatpers", [
        [ "Reverse iterator", "moduleIteratorsRanges.html#subsecIteratorRangesAdaptersReverse", null ],
        [ "On-line transformations", "moduleIteratorsRanges.html#subsecIteratorRangesAdaptersAdapters", null ]
      ] ]
    ] ],
    [ "Parameter passing, cloning and referencing", "moduleCloneAndReference.html", [
      [ "Categories of parameter passing", "moduleCloneAndReference.html#moduleCloneAndReference_sec1", [
        [ "Parameter passing in C++", "moduleCloneAndReference.html#moduleCloneAndReference_sec11", null ],
        [ "Alternative definition for parameter passing", "moduleCloneAndReference.html#moduleCloneAndReference_sec12", null ]
      ] ],
      [ "Parameter passing with Clone, Alias and ConstAlias", "moduleCloneAndReference.html#moduleCloneAndReference_sec2", [
        [ "Disambiguating parameter passing", "moduleCloneAndReference.html#moduleCloneAndReference_sec21", null ],
        [ "User passing an argument to a Clone parameter", "moduleCloneAndReference.html#moduleCloneAndReference_sec22", null ],
        [ "User passing an argument to an Alias parameter", "moduleCloneAndReference.html#moduleCloneAndReference_sec23", null ],
        [ "User passing an argument to a ConstAlias parameter", "moduleCloneAndReference.html#moduleCloneAndReference_sec24", null ]
      ] ]
    ] ],
    [ "Set operations on arbitrary containers", "moduleSetFunctions.html", [
      [ "Motivation for a common framework for set operations", "moduleSetFunctions.html#dgtal_setfunctions_sec1", null ],
      [ "Performing set operations", "moduleSetFunctions.html#dgtal_setfunctions_sec2", null ],
      [ "Benchmark for set operations", "moduleSetFunctions.html#dgtal_setfunctions_sec3", null ],
      [ "Set relations", "moduleSetFunctions.html#dgtal_setfunctions_sec4", null ],
      [ "For developpers: a traits class for containers", "moduleSetFunctions.html#dgtal_setfunctions_sec5", null ]
    ] ],
    [ "Using functions, functors and lambdas in DGtal", "moduleFunctors.html", [
      [ "The functors in DGtal", "moduleFunctors.html#functors_of_DGtal", null ],
      [ "The FunctorHolder class", "moduleFunctors.html#functorholder", [
        [ "Introduction and preliminary example", "moduleFunctors.html#functorholder_intro", null ],
        [ "Aim", "moduleFunctors.html#functorholder_aim", null ],
        [ "Why this class ?", "moduleFunctors.html#functorholder_why", null ],
        [ "Which derivative class of FunctorHolder should I use ?", "moduleFunctors.html#functorholder_derivates", null ]
      ] ],
      [ "Holding a callable object", "moduleFunctors.html#holding_an_object", [
        [ "Holding a function", "moduleFunctors.html#holding_a_function", null ],
        [ "Holding a functor", "moduleFunctors.html#holding_a_functor", null ],
        [ "Holding a lambda", "moduleFunctors.html#holding_a_lambda", null ],
        [ "Holding something else", "moduleFunctors.html#holding_something_else", null ],
        [ "Held object lifetime", "moduleFunctors.html#held_object_lifetime", null ],
        [ "Why using the auto keyword ?", "moduleFunctors.html#auto_holdfunctor", null ]
      ] ],
      [ "Calling the held object", "moduleFunctors.html#calling_the_held_object", [
        [ "What about the parameters and return value types ?", "moduleFunctors.html#parameters_return_types", null ],
        [ "What about the callable object arity ?", "moduleFunctors.html#functor_arity", null ]
      ] ],
      [ "Copying and assigning a FunctorHolder", "moduleFunctors.html#copy_and_assignment", null ],
      [ "The type of a FunctorHolder instance", "moduleFunctors.html#type_of_functorholder", [
        [ "Storing a FunctorHolder", "moduleFunctors.html#storing_functorholder", null ],
        [ "Passing a FunctorHolder as a parameter", "moduleFunctors.html#passing_functorholder", null ],
        [ "Returning a FunctorHolder", "moduleFunctors.html#returning_functorholder", null ],
        [ "Creating a helper", "moduleFunctors.html#creating_a_helper", null ]
      ] ],
      [ "Making a C(Unary)Functor model based on FunctorHolder", "moduleFunctors.html#marking_cunaryfunctor", [
        [ "A simple CUnaryFunctor model with additional typedef", "moduleFunctors.html#tutorial_pointfunctorholder", [
          [ "The core skeleton", "moduleFunctors.html#pointfunctorholder_core_skeleton", null ],
          [ "The helper (factory)", "moduleFunctors.html#pointfunctorholder_helper", null ],
          [ "First test", "moduleFunctors.html#pointfunctorholder_usage", null ],
          [ "Auto-deducing the return type of the functor", "moduleFunctors.html#pointfunctorholder_advanced_helper", null ],
          [ "Perfect forwarding in the constructor", "moduleFunctors.html#pointfunctorholder_advanced_constructor", null ],
          [ "Documenting", "moduleFunctors.html#pointfunctorholder_documentation", null ]
        ] ],
        [ "A more complex example with variable functor arity", "moduleFunctors.html#tutorial_functorconstimage", [
          [ "The core skeleton", "moduleFunctors.html#functorconstimage_core_skeleton", null ],
          [ "The helper (factory)", "moduleFunctors.html#functorconstimage_helper", null ],
          [ "The evaluation operator", "moduleFunctors.html#functorconstimage_evaluation", null ],
          [ "Auto-deducing the return type of the functor", "moduleFunctors.html#functorconstimage_advanced_helper", null ]
        ] ]
      ] ]
    ] ],
    [ "Base Concepts", "packageBaseConcepts.html", null ]
];