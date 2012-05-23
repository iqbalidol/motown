
# _Motown_: An MVC library for Metro-style apps targeting JS/HTML5/CSS3 #

Motown is designed to help you build Metro-style apps that are maintainable and have great performance, with as
little code as possible. It makes smaller applications easy and larger complex applications possible.

## Goals ##

+ Reduce glue code and boilerplate
+ Optimize performance, memory consumption and loading of pages/scripts/resources
+ Make application architecture implicit in the configuration
+ Promote maintainability, productivity, extensibility and reusability
+ Be user-friendly, intuitive and intelligent

## Features ##

+ Advanced stateful page navigation system with lifecycle hooks and WinJS.Navigation integration
+ Declarative "Refs" and "Actions" to easily hook your UI up to your application's logic and keep it loosely coupled
+ WinRT application lifecycle integration for handling launch/suspend/resume
+ Reduced application configuration in favor of familiar conventions
+ Debug logging facility that is disabled when your app is not running in the debugger
+ Exception logging (w/stacktraces) originating from Promises to help debug async code
+ Helper functions for creating dialogs, parameterized URIs and more
+ Visual Studio project template to get started quickly

## Getting Started ##

The simplest possible Motown application:

      MT.configApp({
        name: 'Hello World',
        namespace: 'HW',
        pages: ['home']
      });

## License ##

Motown is distributed under the LGPL v3 license. Please refer to the included 'LICENSE' file for more information.
