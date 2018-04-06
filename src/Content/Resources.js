import React, { Component } from 'react';
import PropTypes from 'prop-types';
export default class Resources extends Component {

  constructor(props) {
    super(props);

    this.state = {
      recentArray: [
        {
          header:'PPT Template',
          description:'Starter template and slides for presentations',
          href: 'https://cybereason.highspot.com/items/58c03f3ff3d806414afcb0ca#1',
          imgSource: 'https://www.cybereason.com/hubfs/Chrome%20Extension/button%20backgrounds/Google-Drive-icon.png'
        },
        {
          header:'SKO Materials',
          description:'Decks and recordings from SKO 2018',
          href: 'https://drive.google.com/drive/folders/150HOLS8UH7B46aTHJX3ED4PNT7hsCeMh',
          imgSource:'https://www.cybereason.com/hubfs/Chrome%20Extension/button%20backgrounds/Google-Drive-icon.png'
        },
        {
          header:'Case Studies',
          description:'Case studies listings on cybereason.com',
          href: 'https://www.cybereason.com/insights/tag/case-study',
          imgSource:'https://www.cybereason.com/hubfs/Chrome%20Extension/button%20backgrounds/697037-youtube-512.png'
        },
        {
          header:'Cybereason Blog',
          description:'Case studies listings on cybereason.com',
          href: 'https://www.cybereason.com/blog',
          imgSource:'https://www.cybereason.com/hubfs/Email%20Images/email-logo-64.png'
        }
      ],
      secondaryArray: [
        {
          header:'Crowdstrike Battlecard',
          description:'Competitive Selling Information on Crowdstrike',
          href: 'https://cybereason.highspot.com/items/58e28579f3d80658d90c662f',
          imgSource:'https://www.cybereason.com/hubfs/Chrome%20Extension/button%20backgrounds/crowdstrike.png'
        },
        {
          header:'Cylance Battlecard',
          description:'Competitive Selling Information on Crowdstrike',
          href: 'https://cybereason.highspot.com/items/5886591860376b0d3f523d7f',
          imgSource:'https://www.cybereason.com/hubfs/Chrome%20Extension/button%20backgrounds/Cylance_Logo2x-t=1469471792187.png'
        },
        {
          header:'Carbon Black Battlecard',
          description:'Competitive Selling Information on Crowdstrike',
          href: 'https://cybereason.highspot.com/items/5886594f60376b02ce78d455',
          imgSource:'https://www.cybereason.com/hubfs/Chrome%20Extension/button%20backgrounds/Carbon-Black-Tag-RGB-full-color.png'
        }
      ]
    };
  }
    render () {
      var competitiveStyle = {
        marginBottom: '8px',
        maxHeight: '30px'
      }
      return (
        <div className="main-content-inner">
          <div className="content-container recentCampaigns">
            <h2>Files and Folders</h2>
            {this.state.recentArray.map((content, index) =>
              <div className="vertical flip-container"  key={index}>
                <div className="vertical flipper">
                  <a href={content.href} target="_blank" >
                    <div className="contentItem front">
                      <img src={content.imgSource} />
                      <h3>{content.header}</h3>
                      <p>{content.description}</p>
                    </div>
                  </a>
                  <a href={content.href} target="_blank" >
                    <div className="vertical contentItem back">
                      <img src={content.imgSource} />
                    </div>
                  </a>
                </div>
              </div>
            )}
          </div>
          <div className="content-container resources">
            <h2>Competitive Intelligence</h2>
              {this.state.secondaryArray.map((content, index) =>
                <div className="vertical flip-container"  key={index}>
                  <div className="vertical flipper">
                    <a href={content.href} target="_blank" >
                      <div className="contentItem front">
                        <img src={content.imgSource} style={competitiveStyle}/>
                        <h3>{content.header}</h3>
                        <p>{content.description}</p>
                      </div>
                    </a>
                    <a href={content.href} target="_blank" >
                      <div className="vertical contentItem back">
                        <img src={content.imgSource} style={competitiveStyle}/>
                      </div>
                    </a>
                  </div>
                </div>
              )}
          </div>
        </div>
    );
  }
}
