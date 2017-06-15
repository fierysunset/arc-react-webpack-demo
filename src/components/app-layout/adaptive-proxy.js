var React = require('react');

function getDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (requireAdapted, config) {
    function AdaptiveComponent(props, context) {
        var flags = context.flags;
        var Component = getDefault(requireAdapted(flags));
        return React.createElement(Component, props);
    }

    AdaptiveComponent.contextTypes = {
        flags: React.PropTypes.oneOfType([
            React.PropTypes.array,
            React.PropTypes.object
        ])
    };

    return AdaptiveComponent;
}