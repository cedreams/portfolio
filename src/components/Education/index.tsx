import EducationItem from "./EducationItem"

export default function Education() {
    return (
        <div className="education-content">
            <div>
                <div className="education-title">Education</div>
                <EducationItem 
                    place="High School of Computer Science (ESI)"
                    name="Bachelor's degree in Computer Sciences with distinction"
                    date="2017-2021" />
                <EducationItem
                    place="Athénée Joseph Bracops"
                    name="CESS Sciences"
                    date="2010-2017" />
            </div>
            
        </div>
    );
}