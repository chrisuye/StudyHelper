import React from 'react';
import { Websites } from '../websites';
import './Study.css'

const Study = () => {
    return (
        <div className='outerWeb'>
                {Websites.map((website, index) => {
                    if (website.study === true) {
                        return (
                            <div key={index} className='web'>
                                <a href={website.url}>
                                    <i className={website.image} id={index}/>
                                </a>
                            </div>
                        );
                    } else return null;
                })}
        </div>
    );
}

export default Study;