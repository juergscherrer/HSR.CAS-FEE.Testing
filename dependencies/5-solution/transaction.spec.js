//-start---------------- CAS FEE Test Infrastructure ------------------------\\
/**
 *  - Set local transaction.js file as SUT.
 *  - All specs from folders
 *    * 4-spec-completion
 *    will run test with local transaction.js file.
 */
process.env.transaction = "../5-solution/transaction";

/**
 * Load previously defined spec files.
 */
const Spec = require("../4-spec-completion/transaction.spec");
//-end------------------ CAS FEE Test Infrastructure ------------------------\\


/**
 * We develop iteratively, in small steps to isolate failures. So we
 * 1. create the spec
 * 2. check if tests are failing
 * 3. implement the feature
 * 4. check if the tests are passing
 * 5. Do the whole iteration for the next SMALL feature
 *
 * So we can implement, test, version & integrate iterative
 * -> reduces errors, improves quality, creates a clean history.
 */
