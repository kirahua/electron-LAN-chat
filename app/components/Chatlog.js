import React, { Component } from 'react';
import utils from '../utils/utils';

export default class Chatlog extends Component {

  componentDidUpdate() {
    this.refs.chatlog.scrollTop = this.refs.chatlog.scrollHeight;
  }

  render() {
    let nowIp = this.props.nowIp;
    let items = [];
    let arr = JSON.parse(localStorage[nowIp]);
    let tx = localStorage[nowIp + 'tx'];
    let metx = localStorage[utils.ip + 'tx'];

    arr.forEach((x, y) => {
      if (x.ip) {
        items.push(
          <div className="you" key={y}>
            <div className="tx">
              <div className={"div" + tx} alt=""/>
            </div>
            <div className="mess">
              {x.message}
            </div>
            <div className="horn"></div>
          </div>
        )
      } else {
        items.push(
          <div className="me" key={y}>
            <div className="tx">
              <div className={"div" + metx} alt=""/>
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
