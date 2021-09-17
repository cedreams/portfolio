import EducationItemProps from "./EducationItemProps";

const EducationItem = ({place, name, date}: EducationItemProps) => {
    return (
        <>
            {/*<div className="education-path"></div>*/}
            <div className="education-item">
                <div className="education-hole-gradhat">🎓</div>
                <div className="education-item-place">
                    {place}
                </div>
                <div className="education-item-name">
                    {name}
                </div>
                <div className="education-item-date">
                    {date}
                </div>
            </div>
        </>
    );
};

export default EducationItem;