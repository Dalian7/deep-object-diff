import diff from '../diff';

const saveUpdatedArraysDiff = (lhs, rhs) => diff(lhs, rhs, true);

export default saveUpdatedArraysDiff;
