import React, { Component } from 'react';
import PropTypes from 'prop-types';
export default class Close extends Component {

  constructor(props) {
    super(props);
    this.state = {
      recentArray: [
        {
          header:'Close Success!',
          description:'Default lead dashboard in SFDC',
          href: 'https://www.google.com',
          imgSource: 'https://www.cybereason.com/hubfs/Chrome%20Extension/button%20backgrounds/salesforce-logo-cloud.png'
        },
        {
          header:'My Leads and Contacts',
          description:'Lead and Contact list in SFDC',
          href: 'https://na55.salesforce.com/00v?fcf=00Bf1000004Mzip',
          imgSource:'https://www.cybereason.com/hubfs/Chrome%20Extension/button%20backgrounds/salesforce-logo-cloud.png'
        }
      ],
      secondaryArray: [
        {
          header:'Regional Dossiers',
          description:'Google Drive containing updated Dossiers',
          href: 'https://drive.google.com/drive/folders/1PpEOfqpwcVkXiTog8RkVsXBgyGvETDx',
          imgSource:'https://www.cybereason.com/hubfs/Chrome%20Extension/button%20backgrounds/Google-Drive-icon.png'
        },
        {
          header:'Account 360',
          description:'Google Drive containing updated Dossiers',
          href: 'https://drive.google.com/drive/folders/1eHISv9UYgOVHlmnhTF5TFnK_aomnLEPm',
          imgSource:'https://www.cybereason.com/hubfs/Chrome%20Extension/button%20backgrounds/Google-Drive-icon.png'
        }
      ]
    };
  }
    render () {
      return (
        <div className="main-content-inner">
          <div className="content-container recentCampaigns">
            <h2>Recent Items</h2>
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
            <h2>Files and Folders</h2>
              {this.state.secondaryArray.map((content, index) =>
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
        </div>
    );
  }
}
