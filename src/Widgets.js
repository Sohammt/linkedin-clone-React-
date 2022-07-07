import React from 'react'
import './Widgets.css';
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {

    const newsArticle = ( heading, subtitle ) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>

            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

  return (
    <div className='widgets'>
        <div className="widgets__header">
            <h2>LinkedIn News</h2>
            <InfoIcon />
        </div>

        {newsArticle('Soham is on fire!!', 'Top News - 12554 readers')}
        {newsArticle('CoronaVirus in India', 'CoronaVirus - 2587 readers')}
        {newsArticle('SpiceJets Lands in Pakistan', 'Top News - 8000 readers')}
        {newsArticle('Tesla`s new Smartphone', 'Technology - 25254 readers')}
        {newsArticle('React`s new library is amazing!!', 'Tech & Programming - 1284 readers')}
    </div>
  );
}

export default Widgets