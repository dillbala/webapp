'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IntroParagraph = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Paragraph = require('./Paragraph.css');

var _Paragraph2 = _interopRequireDefault(_Paragraph);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line
console.log(_Paragraph2.default.length);

var classObj = {
  intro: _Paragraph2.default.intro
};

var mapClassName = function mapClassName(obj, name) {
  var classArray = name.split(' ');
  return classArray.map(function (item) {
    return obj[item];
  });
};

var Paragraph = function Paragraph(_ref) {
  var className = _ref.className,
      children = _ref.children,
      type = _ref.type,
      classes = _ref.classes,
      props = (0, _objectWithoutProperties3.default)(_ref, ['className', 'children', 'type', 'classes']);
  return _react2.default.createElement(
    'p',
    (0, _extends3.default)({
      className: (0, _classnames2.default)(_Paragraph2.default.paragraph, className, classes.paragraph, mapClassName(classObj, type), (0, _defineProperty3.default)({}, classes.intro, type === 'intro'))
    }, props),
    children
  );
};

var IntroParagraph = function IntroParagraph(_ref2) {
  var type = _ref2.type,
      children = _ref2.children,
      className = _ref2.className,
      props = (0, _objectWithoutProperties3.default)(_ref2, ['type', 'children', 'className']);
  return _react2.default.createElement(
    Paragraph,
    (0, _extends3.default)({
      className: className,
      type: 'intro ' + (type || '')
    }, props),
    children
  );
};

exports.IntroParagraph = IntroParagraph;
var ParagraphProps = {
  children: '',
  className: '',
  type: '',
  classes: {
    paragraph: '',
    intro: ''
  }
};

var ParagraphPropTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  type: _propTypes2.default.string,
  classes: _propTypes2.default.instanceOf(Object)
};

var IntroParagraphProps = {
  children: '',
  className: '',
  type: ''
};

var IntroParagraphPropTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  type: _propTypes2.default.string
};

Paragraph.defaultProps = ParagraphProps;
Paragraph.propTypes = ParagraphPropTypes;

IntroParagraph.defaultProps = IntroParagraphProps;
IntroParagraph.propTypes = IntroParagraphPropTypes;

exports.default = Paragraph;