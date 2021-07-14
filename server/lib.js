'use strict';


module.exports = {

    /**
     * 1): Group Words
     *  We sort words and compare
     * @param {[string]} input - words.
     * @return {Object}
     */
    groupWords: (input = []) => {
        //@todo Trim words, check data type , ...
        const table = {};
        for (const word of input) {
            const sortedWord = word.toUpperCase().split('').sort().join('');
            if (!table[sortedWord]) {
                table[sortedWord] = [word];
            } else {
                table[sortedWord].push(word);
            }
        }
        return table;
    },

    /**
     * 2): Remove Parentheses and flip inside
     *
     * @param {string} input
     * @return {string}
     */
    removeParentheses: (input = '') => {
        let output = input; // clone
        for (;true;) {
            const rParent = output.indexOf(')');
            if (-1 === rParent) break;
            const lParent = output.substring(0, rParent).lastIndexOf('(');
            const before = output.substring(0, lParent);
            const inside = output.substring(lParent + 1, rParent).split('').reverse().join('');
            const after = output.substring(rParent + 1, output.length);
            output = before + inside + after;
        }
        return output;

    }
}
