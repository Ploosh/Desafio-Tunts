const {client_email, private_key} = require("./key.json")
const { GoogleSpreadsheet } = require('google-spreadsheet');
const editSpreadsheet = async () => {
    const document = new GoogleSpreadsheet('1BCMGbmE_qGpHVhZYIfjb3L7MSERGYZkbkL0VMqDRu8k')
    document.useServiceAccountAuth({ client_email, private_key })
    await document.loadInfo()
    const sheet = document.sheetsById[0]
    await sheet.loadHeaderRow()
    sheet.headerValues = ['Matricula', 'Aluno', 'Faltas', 'P1', 'P2', 'P3', 'Situação', 'Nota para Aprovação Final']
  
    const rows = await sheet.getRows()
    
    // remove headers from array of studentRows
    const studentRows = rows.splice(2)
  
    // get total number of classes
    const totalClasses = parseInt(String(rows[0]._rawData).split(': ')[1], 10)
  
    //structures the data necessary for analisys
    const rawStudentData = studentRows.map((row) => {
      const rawData = row._rawData
      console.log(rawData);
      return {
        Matricula: parseInt(rawData[0], 10),
        Alumni: rawData[1],
        Absence: parseInt(rawData[2], 10),
        Grade1: parseInt(rawData[3], 10),
        Grade2: parseInt(rawData[4], 10),
        Grade3: parseInt(rawData[5], 10),
        Status: '',
        NeededGradeOnFinal: 0
      }
    })
  
    // calculate grades and set states of students
    const calculatedStudents = rawStudentData.map((student) => {
      if (student.Absence > totalClasses / 4) {
        student.Status = 'Reprovado por Falta'
        return student
      }
      const media = (student.Grade1 + student.Grade2 + student.Grade3) / 3
      if (media < 50) {
        student.Status = 'Reprovado por Nota'
        return student
      }
      if (media >= 70) {
        student.Status = 'Aprovado'
        return student
      }
      const notaAprovacaoFinal = 100 - media
      student.NeededGradeOnFinal = Math.ceil(notaAprovacaoFinal)
      student.Status = 'Exame Final'
      return student
    })
    
    //write and save changes on spreadsheet
    for (const [index, studentRow] of studentRows.entries()) {
      if (parseInt(studentRow.Matricula) === calculatedStudents[index].Matricula) {
        studentRow.Situação = calculatedStudents[index].Status
        studentRow['Nota para Aprovação Final'] = calculatedStudents[index].NeededGradeOnFinal
        await studentRow.save()
        console.log(studentRow)
      }
    }
    console.log(calculatedStudents)
  }
  
  module.exports = {
    editSpreadsheet
  }