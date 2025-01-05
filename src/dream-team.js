const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  let names = [];
  members.forEach(member => {   
    if(typeof member === 'string') {  
      let start = member.trim().toUpperCase()[0];
      names.push(start);
    }
  });
  if(names.length > 0) {  
    return names.sort().join("");
  };  
  return false;
}

module.exports = {
  createDreamTeam
};
