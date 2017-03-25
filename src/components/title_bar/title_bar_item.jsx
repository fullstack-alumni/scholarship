import React from 'react';

const linkClassName = 'link';

export const TitleBarItemTypes = {
  LINK: 'link',
  BUTTON: 'button',
};

const TitleBarItemTypeValues = Object.keys(TitleBarItemTypes).map((key) => TitleBarItemTypes[key]);

export default class TitleBarItem extends React.PureComponent {
  render() {
    let item = null;
    if (this.props.type === TitleBarItemTypes.LINK) {
      item = (
        <a
          href={this.props.href}
          className={linkClassName}
        >
          {this.props.text}
        </a>
      );
    } else if (this.props.type === TitleBarItemTypes.BUTTON) {
      item = (
        <button
          onClick={this.props.onClick}
          className={linkClassName}
        >
          {this.props.text}
        </button>
      );
    }
    return (
      <div className="title-bar__item">
        {item}
      </div>
    );
  }
}

TitleBarItem.propTypes = {
  type: React.PropTypes.oneOf(TitleBarItemTypeValues).isRequired,
  text: React.PropTypes.string.isRequired,
  href: React.PropTypes.string,
  onClick: React.PropTypes.func,
};

// --- Premade title bar items --- //
export const applyItem = <TitleBarItem
  text="Apply"
  type={TitleBarItemTypes.LINK}
  href="/apply"
  key={1}
/>

export const loginItem = <TitleBarItem
  text="Log in"
  type={TitleBarItemTypes.LINK}
  href="/login"
/>
