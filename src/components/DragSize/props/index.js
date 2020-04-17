import PropsType from "prop-types";

export const propsType = {
  top: PropsType.bool,
  right: PropsType.bool,
  bottom: PropsType.bool,
  left: PropsType.bool,
  topRight: PropsType.bool,
  topLeft: PropsType.bool,
  bottomRight: PropsType.bool,
  bottomLeft: PropsType.bool,
  cornerWidth: PropsType.number,
  cornerHeight: PropsType.number,
};
export const defaultProps = {
  top: true,
  right: true,
  bottom: true,
  left: true,
  topRight: true,
  topLeft: true,
  bottomRight: true,
  bottomLeft: true,
  cornerWidth: 20,
  cornerHeight: 20,
  middleWidth: 10,
  middleHeight: 10,
};
