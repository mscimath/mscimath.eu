import { HashLink } from 'react-router-hash-link';
import './SubjectsMenu.css';
import SubjectsTitle from './SubjectsTitle';

export default function SubjectsMenu(){
    const menuItems = [
        {Physics : [
            {
                "link": "/physics",
                "id": 1,
                "linkTekst": "School Physics"
            },
            {
                "link": "/relativity",
                "id": 2,
                "linkTekst": "Relativity"
            }
        ]}, 
        {Mathematics : [
            {
                "link": "/mathematics",
                "id": 1,
                "linkTekst": "School Mathematics"
            }
        ]}, 
        {CSandP : [
            {
                "link": "/javascript",
                "id": 1,
                "linkTekst": "JavaScript"
            },
            {
                "link": "/python",
                "id": 2,
                "linkTekst": "Python"
            },
            {
                "link": "/cpp",
                "id": 3,
                "linkTekst": "C++"
            },
            {
                "link": "/data_science",
                "id": 4,
                "linkTekst": "Data Science"
            }
        ]}
        
    ]
    const CSandP = menuItems[2].CSandP
    return(
        <>
        <SubjectsTitle/>
            <table className="theory-subjects" id="subjects-table">
                <tbody>
                    {menuItems.map( (menuItem) => {
                        const category = Object.keys(menuItem); //Get the array of categories
                        const subjects = menuItem[category];
                        return (
                        <tr key={category}>
                            <th rowSpan={menuItem.length}>{category}</th>
                            <div className='subjects-container'>
                            {subjects.map((subject, index) => {
                                return (
                                    <td>
                                        <HashLink to={subject.link}>{subject.linkTekst}</HashLink>
                                    </td>
                                )
                            })}
                            </div>
                        </tr>
                        )
                    })}
                    
                </tbody>
            </table>
            <div className="section-footer"></div>
        </>
    )
}