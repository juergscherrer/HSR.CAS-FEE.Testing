# Zoo solution

To test the components it's necessary to decouple them first:

1. Create an interface `service`, change the dependency in `zoo.ts`. The AnimalService should implement this interface. This allows us to use test doubles.
2. Singleton Assassination: Replace the singleton (AnimalService) by a dependency injected system. Add the dependency as param of the zoo.

Now You can write tests for the zoo. Create a fake for the animal service to prevent slow tests.

[solution](./zoo.spec.ts)
