import Button from '../buttons/button';
import './contact.scss';

function Contact() {

    const textButton = "J'AI UNE QUESTION !"
    const icon = "question"

    return (
        <div className="contact">
            <span>Vous avez une question ?</span>
            <Button text={textButton} icon={icon} />
            {/* Form déroulant on click */}
        </div>
    );
}

export default Contact;