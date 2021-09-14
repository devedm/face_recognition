import React from 'react';
import 'tachyons';
import './ImageLinkForm.css';

const ImageLinkForm = () => {
    return (
        <div>
            <p>
                {'This Magic Brain will detect faces in your pictures. Git it a try!'}
            </p>
            <div className='center'>
                <div className=' form pa4 br3 shadow-5 w-70' >
                    <input className='f4 pa2 w-80 ' type='text' />
                    <button className='w-20 grow f4 link ph3 pv2 white bg-light-purple pointer'>Button</button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm;