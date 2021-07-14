'use strict';
const chai = require('chai');

chai.use(require('sinon-chai'));
chai.should();

const lib = require('../server/lib');

describe('First Task', () => {

    describe('1) Group Words', () => {
        it('should return correct response', () => {
            let testData = ['AMOR', 'XISELA', 'JAMON', 'ROMA', 'OMAR', 'MORA', 'ESPONJA', 'RAMO', 'JAPONES', 'ARMO', 'MOJAN', 'MARO', 'ORAM', 'MONJA', 'ALEXIS'];
            const result = lib.groupWords(testData);
            result.should.have.all.keys('AMOR', 'AEILSX', 'AJMNO', 'AEJNOPS');
            result['AMOR'].should.to.deep.equal([
                'AMOR', 'ROMA',
                'OMAR', 'MORA',
                'RAMO', 'ARMO',
                'MARO', 'ORAM'
            ]);
            result['AEILSX'].should.to.deep.equal(['XISELA', 'ALEXIS']);
            result['AJMNO'].should.to.deep.equal(['JAMON', 'MOJAN', 'MONJA']);
            result['AEJNOPS'].should.to.deep.equal(['ESPONJA', 'JAPONES']);
        });

    });

    describe('2) reverse the word inside', () => {
        it('should return correct response', () => {
            lib.removeParentheses('foo(bar)').should.to.equal('foorab');
            lib.removeParentheses('(bar)').should.to.equal('rab');
            lib.removeParentheses('foo(bar)blim').should.to.equal('foorabblim');
            lib.removeParentheses('foo(foo(bar))blim').should.to.equal('foobaroofblim');
            lib.removeParentheses('(ab)(cd)(ef)').should.to.equal('badcfe');
        });

    });


})

