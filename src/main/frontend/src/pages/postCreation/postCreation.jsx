import Reac, {useState} from "react";
import "../../css/generic.css"
import "../../css/createPosts.css"
import "../../shared/utils/dropdownButton.js"


function PostCreation() {
    const [title, setTitle] = useState('');
    const [suggestedLevelOfEnglish, setSuggestedLevelOfEnglish] = useState([]);
    const [containment, setContainment] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        console.log({ title, suggestedLevelOfEnglish, containment });
    };

    const handleLevelChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            setSuggestedLevelOfEnglish([...suggestedLevelOfEnglish, value]);
        } else {
            setSuggestedLevelOfEnglish(suggestedLevelOfEnglish.filter(level => level !== value));
        }
    };

    return (
        <div>
            {/* Assuming dropdownMenu is a custom component */}
            <DropdownMenu showProfile={true} showLogin={true} showHome={true} showLogout={true} />

            <div className="background"></div>
            <form id="postForm" onSubmit={handleSubmit}>
                <div className="postDIV">
                    <div className="postBackground"></div>
                    <div className="postCardDIV">
                        <input
                            name="title"
                            className="title"
                            placeholder="Post title"
                            maxLength="65"
                            required
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <button
                            type="button"
                            name="suggestedLevelOfEnglishBUTTON"
                            className="suggestedLevelOfEnglishBUTTON"
                            onClick={displayLevelsButton}
                        >
                            Display levels
                        </button>
                        <div className="levelCheckboxesDIV">
                            {['A0', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'].map((level) => (
                                <label key={level}>
                                    <input
                                        type="checkbox"
                                        id={level}
                                        name="suggestedLevelOfEnglish"
                                        value={level}
                                        checked={suggestedLevelOfEnglish.includes(level)}
                                        onChange={handleLevelChange}
                                    />
                                    {level}
                                </label>
                            ))}
                        </div>
                        <textarea
                            name="containment"
                            id="containment"
                            rows="18"
                            cols="100"
                            maxLength="15000"
                            placeholder="Main text"
                            required
                            value={containment}
                            onChange={(e) => setContainment(e.target.value)}
                        ></textarea>
                        <button type="submit" className="sendDataBUTTON">Push!</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default PostCreation;