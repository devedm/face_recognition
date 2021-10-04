import React from 'react';
import 'tachyons';
import './FaceRecognition.css';


const FaceRecognition = ({ imageUrl }) => {
    return (
        <div>
            <img class='face-picture' alt='image' src={imageUrl} />
        </div>
    );
}

export default FaceRecognition;