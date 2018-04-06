import React, { Component } from 'react';
import PropTypes from 'prop-types';
export default class Campaigns extends Component {

  constructor(props) {
    super(props);
    this.state = {
      recentArray: [
        {
          header:'Making or Breaking the CISO',
          description:'A talk with Sam Curry',
          href: 'https://na55.salesforce.com/701f1000001qjIX',
          imgSource: 'https://www.cybereason.com/hubfs/Chrome%20Extension/button%20backgrounds/salesforce-logo-cloud.png'
        },
        {
          header:'SOC Talk: Ransomware Mythbusting',
          description:'A discussion of common ransomware misconceptions',
          href: 'https://cybereason.my.salesforce.com/701f1000001o7fE',
          imgSource:'https://www.cybereason.com/hubfs/Chrome%20Extension/button%20backgrounds/salesforce-logo-cloud.png'
        },
        {
          header:'CISOs and the Board',
          description:'How CISOs can better interact with the board and other C-levels',
          href: 'https://na55.salesforce.com/701f1000001qiI4',
          imgSource:'https://www.cybereason.com/hubfs/Chrome%20Extension/button%20backgrounds/salesforce-logo-cloud.png'
        }
      ],
      secondaryArray: [
        {
          header:'Campaign Calendar',
          description:'Master Calendar for all upcoming Campaigns',
          href: 'https://drive.google.com/drive/folders/1eHISv9UYgOVHlmnhTF5TFnK_aomnLEPm',
          imgSource:'https://www.cybereason.com/hubfs/Chrome%20Extension/button%20backgrounds/Google-Drive-icon.png'
        },
        {
          header:'DHT Airtable',
          description:'Master calendar for Deep Hunting Tour events',
          href: 'https://drive.google.com/drive/folders/1PpEOfqpwcVkXiTog8RkVsXBgyGvETDx',
          imgSource:'https://www.cybereason.com/hubfs/Chrome%20Extension/button%20backgrounds/Google-Drive-icon.png'
        }
      ]
    };
  }
    render () {
      return (
        <div className="main-content-inner">
          <div className="content-container recentCampaigns">
            <h2>Recent Campaigns</h2>
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
            <h2>Ongoing Campaigns</h2>
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
