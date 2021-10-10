import photo from '../../project.jpg';
import './project.scss';

function Project() {
    return (
        <div className="project">
            <h2>PROJETS</h2>

            <div className="frames-container">

                <div className="frame">
                    <div className="desc-container">
                        <span className="project-title">WithoutDefinedPosition</span>
                        {/* Description glissée vers le bas en hover */}
                        <span className="description">WithoutDefinedPosition est un projet d'engagement citoyen réalisé en groupe, dans le cadre de mes études au CESI Alternance. Notre but est de faciliter la localisation des personnes dans le besoin et pour rendre ainsi l'intervention des associations plus efficace et moins contraignante afin d'accroître le capacité d'aide aux personnes défavorisées de notre ville et ses alentours.</span>
                    </div>
                </div>

                <div className="frame">
                    <div className="desc-container">
                        <span className="project-title">Ressources relationnelles</span>
                        <span className="description">Ressources relationnelles est un projet d'engagement citoyen réalisé en groupe, dans le cadre de mes études au CESI Alternance. L'objectif est de mettre à disposition des ressources et inciter l'échange sur plusieurs thématiques entre tous les citoyens de France.</span>
                    </div>
                </div>

                <div className="frame">
                    <div className="desc-container">
                        <span className="project-title">CV en ligne</span>
                        <span className="description">Ce projet a pour but de m'entraîner et tester différentes façon de faire. C'est mon premier projet en entière autonomie et j'aimerais partager avec vous ses évolutions et la démarche adoptée tout au long du développement.</span>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Project;