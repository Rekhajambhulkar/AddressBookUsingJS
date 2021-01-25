const assert = require('chai').assert;
const utility = require('./main')
describe('test for firstName', () => {
    it('should return true output',() =>{
        assert.isTrue(utility.contactValidation("Rekha"));
    })
    it('should resturn false output',() =>{
        assert.isFalse(utility.contactValidation("rekha"));
    })
})

describe('test for LastName', () => {
    it('should return true output',() =>{
        assert.isTrue(utility.contactValidation("Jambhulkar"));
    })
    it('should resturn false output',() =>{
        assert.isFalse(utility.contactValidation("jambhulkar"));
    })    
})

describe('test for Address', () => {
    it('should return true output',() =>{
        assert.isTrue(utility.contactValidation("Kothrud"));
    })
    it('should resturn false output',() =>{
        assert.isFalse(utility.contactValidation("kothrud"));
    })    
})

describe('test for City', () => {
    it('should return true output',() =>{
        assert.isTrue(utility.contactValidation("Pune"));
    })
    it('should resturn false output',() =>{
        assert.isFalse(utility.contactValidation("pune"));
    })    
})

describe('test for state', () => {
    it('should return true output',() =>{
        assert.isTrue(utility.contactValidation("Maharashtra"));
    })
    it('should resturn false output',() =>{
        assert.isFalse(utility.contactValidation("ma"));
    })    
})

describe('test for zip', () => {
    it('should return true output',() =>{
        assert.isTrue(utility.zipValidation("411023"));
    })
    it('should resturn false output',() =>{
        assert.isFalse(utility.zipValidation("4110"));
    })    
})

describe('test for PhoneNumber', () => {
    it('should return true output',() =>{
        assert.isTrue(utility.phoneNumValidation("91 9822535467"));
    })
    it('should resturn false output',() =>{
        assert.isFalse(utility.phoneNumValidation("9877675"));
    })    
})

describe('test for EmailId', () => {
    it('should return true output',() =>{
        assert.isTrue(utility.emailValidation("jambhulkarrekha@gmail.com"));
    })
    it('should resturn false output',() =>{
        assert.isFalse(utility.emailValidation("jambhulkargmail.com"));
    })    
})