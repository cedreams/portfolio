import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export default function About({setOpen}) {

    function handleClick() {
        setOpen(true);
    }

    return (
        <div className="about-content">
            Software <span className="title">developer</span> based in Brussels, Belgium.<br />
            Passionate about web technologies.
            <button onClick={handleClick} className="more-about-me">
                More about me
               <ChevronRightIcon />
            </button>
        </div>
    );
}