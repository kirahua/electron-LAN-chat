// @flow
import React, { Component } from 'react';

export default class Chatlog extends Component {

  componentDidUpdate() {
    this.refs.chatlog.scrollTop = this.refs.chatlog.scrollHeight;
  }

  render() {
    let nowIp = this.props.nowIp;
    let items = [];
    let arr = JSON.parse(localStorage[nowIp]);
    let tx = localStorage[nowIp + 'tx'];

    arr.forEach((x, y) => {
      if (x.ip) {
        items.push(
          <div className="you">
            <div className="tx">
              <img src={tx} className="img" alt=""/>
            </div>
            <div className="mess">
              {x.message}
            </div>
            <div className="horn"></div>
          </div>
        )
      } else {
        items.push(
          <div className="me">
            <div className="tx">
              <img src={tx} className="img" alt=""/>
            </div>
            <div className="mess">
              {x.message}
            </div>
            <div className="horn"></div>
          </div>
        );
      }
    });

    return (
      <div className="chatlog" ref="chatlog">
        {items}
      </div>
    );
  }
}
