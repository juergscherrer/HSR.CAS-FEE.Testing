//-start---------------- CAS FEE Test Infrastructure ------------------------\\
/**
 *  - Set local transaction.js file as SUT.
 *  - All specs from folders
 *    * 2-spec
 *    will run test with local transaction.js file.
 */
process.env.transaction = "../3-implementation/transaction";

/**
 * Load previously defined spec files.
 */
const Spec = require("../2-spec/transaction.spec");
//-end------------------ CAS FEE Test Infrastructure ------------------------\\
