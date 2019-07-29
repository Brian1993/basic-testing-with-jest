const googleSearch = require('./script')

const dbMcok = [
  'dog.com',
  'cat.com',
  'disney.com',
  'dogpictures.com'
]

describe(('googleSearch'), ()=> {
  it('is a test', () => {
    expect().toBe()
    googleSearch('testtest', dbMcok)
  })
  
  it('is searching google', () => {
    expect(googleSearch('testdsfd', dbMcok)).toEqual([])
    expect(googleSearch('dog', dbMcok)).toEqual([ 'dog.com', 'dogpictures.com'])
  })
  
  it('work with undefined and null input', () => {
    expect(googleSearch(undefined, dbMcok)).toEqual([])
    expect(googleSearch(null, dbMcok)).toEqual([])
  })
  
  it('dose not return more than 3 matches', () => {
    expect(googleSearch('.com', dbMcok).length).toEqual(3)
  })
})
