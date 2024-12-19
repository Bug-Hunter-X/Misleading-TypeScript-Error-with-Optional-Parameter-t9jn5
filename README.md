# Misleading TypeScript Error with Optional Parameter

This repository demonstrates a confusing TypeScript error that arises when an object with a missing required property is passed to a function containing an optional parameter.  The error message incorrectly suggests the optional parameter is the issue.

## Bug
The `printName` function expects an object with a `name` property (required) and an optional `age` property.  When an empty object `{}` is passed, TypeScript reports that the `name` property is missing, which is correct, however the error is misleading. 

## Solution
The solution involves ensuring that all required properties are present when calling the function, or by refactoring the function to explicitly indicate that the `age` property is optional but the `name` property is required.