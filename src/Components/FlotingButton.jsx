import { FloatingButton, Item } from "react-floating-button";
import ButtonImage from "../Assets/ButtonImage.png";

function FloationgButtonFunction() {
    return (
        <div>
            <FloatingButton>
                <Item
                    imgSrc={ButtonImage}

                    onClick={() => {
                        console.log("callback function here");
                    }}
                />
            </FloatingButton>;
        </div>
    )
} 

export default FloationgButtonFunction;
