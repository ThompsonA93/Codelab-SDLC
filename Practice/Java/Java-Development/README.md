# Java-Development

This project serves as a focused, hands-on instructional guide and reference for two fundamental areas of software design: the SOLID design principles and the identification of Code Smells.

## SOLID

This section contains clear, well-structured examples demonstrating the proper application of each of the five SOLID principles.

Note that the directories `/antipattern` contain corresponding examples that show implementations violating the given principle.

## Unclean Code

This section demonstrates various Code Smells—surface indications that usually correspond to deeper problems in the system—categorized for easy reference.

- Bloaters: Code that has grown so large it's hard to manage.
- Coupling: Classes that are too intertwined and reliant on each other's internal details.
- Dispensable: Code that is unnecessary and just clutters the project.
- Inflexible: Code that is difficult to change or maintain.

## Build & Analysis

This project uses Maven for dependency management and build automation. It also leverages _Programm Mess Detector_ (PMD) as code quality analysis tool.
The command `mvn site` will generate a report at `target\site\index.html` indicating issues arising in the overall project.


