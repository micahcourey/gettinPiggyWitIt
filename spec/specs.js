describe('pigLatin', function() {
  it("add 'ay' at the end of word that starts with vowel", function() {
    expect(pigLatin("and")).to.equal("anday");
  })

  it("move the first letter if the word starts with consonant", function() {
    expect(pigLatin("kill")).to.equal("illkay");
  })

  it("move the first and second letters if the word starts with consonant", function() {
    expect(pigLatin("crazy")).to.equal("azycray");
  })

  it("if the word starts with 'qu' move the q and the u to the end", function() {
      expect(pigLatin("squeal")).to.equal("ealsquay");
  })
})
