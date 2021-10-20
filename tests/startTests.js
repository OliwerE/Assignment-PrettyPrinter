import * as sentenceTests from './sentenceTests.js'
import * as sentencesTests from './sentencesTests.js'

const handlePass = (isPass) => {
  return (isPass ? '\x1b[32m' + 'PASS' + '\x1b[0m' : '\x1b[31m' + 'FAIL' + '\x1b[0m')
}

const runTests = () => {

  console.log('----- Sentence Tests -----')
  console.log('tc1: Returnera mening, Indata: "En mening.", Förväntat: "En mening.": ' + handlePass(sentenceTests.tc1()))
  console.log('tc2: Returnera en fråga, Indata: "En mening?", Förväntat: "En mening?": ' + handlePass(sentenceTests.tc2()))
  console.log('tc3: Returnera ett utrop, Indata: "En mening!", Förväntat: "En mening!": ' + handlePass(sentenceTests.tc3()))
  console.log('tc4: Få end token typ DOT, Indata: "En mening.", Förväntat: "DOT": ' + handlePass(sentenceTests.tc4()))
  console.log('tc5: Få end token typ DOT, Indata: "a? b! c.", Förväntat: "DOT": ' + handlePass(sentenceTests.tc5()))
  console.log('tc6: Få end token typ QUESTION, Indata: "En mening?", Förväntat: "QUESTION": ' + handlePass(sentenceTests.tc6()))
  console.log('tc7: Få end token typ DOT, Indata: "a. b! c?", Förväntat: "QUESTION": ' + handlePass(sentenceTests.tc7()))
  console.log('tc8: Få end token typ EXCLAMATION, Indata: "En mening!", Förväntat: "EXCLAMATION": ' + handlePass(sentenceTests.tc8()))
  console.log('tc9: Få end token typ DOT, Indata: "a. b? c!", Förväntat: "EXCLAMATION": ' + handlePass(sentenceTests.tc9()))
  console.log('tc10: Stega till nästa token, Indata: "En mening.", Input: ">", Förväntat: värde: "mening", typ: "WORD": ' + handlePass(sentenceTests.tc10()))
  console.log('tc11: Stega fram sedan tillbaks token, Indata: "En mening.", Input: "><", Förväntat: värde: "En", typ: "WORD": ' + handlePass(sentenceTests.tc11()))
  console.log('tc12: Stega bakåt till sista token, Indata: "En mening.", Input: "<", Förväntat: värde: ".", typ: "DOT": ' + handlePass(sentenceTests.tc12()))
  console.log('tc13: Stega fram tills första token är aktiv igen, Indata: "En mening.", Input: ">>>", Förväntat: värde: "En", typ: "WORD": ' + handlePass(sentenceTests.tc13()))
  console.log('tc14: Stega bakåt tills första token är aktiv igen, Indata: "En mening.", Input: "<<<", Förväntat: värde: "En", typ: "WORD": ' + handlePass(sentenceTests.tc14()))
  
  console.log('\n----- Sentences Tests -----')
  console.log('tc1: Returnera mening, Indata: "En mening.", Förväntat: "En mening.": ' + handlePass(sentenceTests.tc1()))

  console.log('\n----- Document Tests -----')

  console.log('\n----- Pretty Printer Tests -----')


}
runTests()

/*

sentence:

 returnera mening
 få end token typ
 få aktiv token
 set next - få ny aktiv token
 set prev - få förra token



*/