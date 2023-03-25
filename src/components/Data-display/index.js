import './index.scss'
import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/table'
import * as React from 'react'
import students from '../../assets/students2016.json'

const Data = () => {
    const data = React.useMemo(() => students, [])

    return (
        <div className="container data-page">
            <div className="text-zone">
                <h2>UIUC 2016 On-Campus Computer Science Enrollment data</h2>
                <br/>
                <div className='table-zone'>
                <TableContainer>
                    <Table variant= "striped">
                    <Thead>
                        <Tr>
                        <Th>Department</Th>
                        <Th>Degree</Th>
                        <Th>Major Code</Th>
                        <Th>Major Name</Th>
                        <Th>Conc Code</Th>
                        <Th>Concentration Name</Th>
                        <Th>Freshman</Th>
                        <Th>Sophomore</Th>
                        <Th>Junior</Th>
                        <Th>Senior</Th>
                        <Th>Ndeg Ugrad</Th>
                        <Th>Total Ugrad</Th>
                        <Th>Grad I</Th>
                        <Th>Grad II</Th>
                        <Th>Ndeg Grad</Th>
                        <Th>Total Grad</Th>
                        <Th>Profes Sional</Th>
                        <Th>Total Students</Th>
                        <Th>Academic Program Code</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {data?.map((student) => (
                        <Tr key={student.id}>
                            <Td>{student['Dept']}</Td>
                            <Td>{student['Degr']}</Td>
                            <Td>{student['Major Code']}</Td>
                            <Td>{student['Major Name']}</Td>
                            <Td>{student['Conc Code']}</Td>
                            <Td>{student['Concentration Name (if any)']}</Td>
                            <Td>{student['FRESH MAN']}</Td>
                            <Td>{student['SOPHO MORE']}</Td>
                            <Td>{student.JUNIOR}</Td>
                            <Td>{student.SENIOR}</Td>
                            <Td>{student['NDEG UGRAD']}</Td>
                            <Td>{student['TOTAL UGRAD']}</Td>
                            <Td>{student['GRAD I (master)']}</Td>
                            <Td>{student['GRAD II (doctoral)']}</Td>
                            <Td>{student['NDEG GRAD']}</Td>
                            <Td>{student['TOTAL GRAD']}</Td>
                            <Td>{student['PROFES SIONAL']}</Td>
                            <Td>{student['TOTAL STUDENTS']}</Td>
                            <Td>{student['Academic Program Code']}</Td>
                        </Tr>
                        ))}
                    </Tbody>
                    </Table>
                </TableContainer>
                </div>
          </div>
        </div>
      )
}

export default Data