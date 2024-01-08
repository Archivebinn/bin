import React from 'react'
import styled from 'styled-components/native'

export const ImgContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const GText = styled.Text`
  font-size: ${(props) => props.size}px;
  ${(props) => (props.color ? `color : ${props.color}` : null)}
  ${(props) => (props.bgcolor ? `background-color : ${props.bgcolor}` : null)}
  ${(props) => (props.weight ? `font-weight : ${props.weight}` : null)}
   ${(props) => (props.family ? `font-family : ${props.family}` : null)}
   ${(props) => (props.talign ? `text-align : ${props.talign}` : null)}
   ${(props) => (props.mleft ? `margin-left : ${props.mleft}px` : null)}
   ${(props) => (props.mright ? `margin-right : ${props.mright}px` : null)}
   ${(props) => (props.mtop ? `margin-top : ${props.mtop}px` : null)}
   ${(props) => (props.mbottom ? `margin-bottom : ${props.mbottom}px` : null)}
   ${(props) => (props.padding ? `padding : ${props.padding}px` : null)}
   ${(props) => (props.pleft ? `padding-left : ${props.pleft}px` : null)}
  ${(props) => (props.pright ? `padding-right : ${props.pright}px` : null)} 
  ${(props) => (props.ptop ? `padding-top : ${props.ptop}px` : null)}
   ${(props) => (props.pbottom ? `padding-bottom : ${props.pbottom}px` : null)}
   ${(props) =>
    props.underline ? `text-decoration-line : ${props.underline}` : null}
   ${(props) =>
    props.underline ? `text-decoration-line : ${props.underline}` : null}
   ${(props) => (props.position ? `position : ${props.position}` : null)}  
   ${(props) => (props.top ? `top : ${props.top}px` : null)}  
   ${(props) => (props.left ? `left : ${props.left}px` : null)}  
   ${(props) => (props.right ? `right : ${props.right}px` : null)}  
   ${(props) => (props.bottom ? `bottom : ${props.bottom}px` : null)}  
   ${(props) => (props.zindex ? `z-index : ${props.zindex}` : null)}
   ${(props) => (props.width ? `width : ${props.width}px` : null)}
`;

export const GView = styled.View`
  background-color: ${(props) => props.color || 'defaultColor'};
  elevation: ${(props) => props.elevation || '0'};
  overflow: ${(props) => props.overFlow || 'visible'};
  flex: ${(props) => (props.flex ? `${props.flex}px` : '0')};
  shadowColor: ${(props) => props.shadowcolor || 'transparent'};
  shadowOpacity: ${(props) => props.shadowopacity || '0'};
  shadowRadius: ${(props) => (props.shadowradius ? `${props.shadowradius}px` : '0')};
  padding: ${(props) => (props.padding ? `${props.padding}px` : '0')};
  margin: ${(props) => (props.margin ? `${props.margin}px` : '0')};
  border-radius: ${(props) => (props.borderradius ? `${props.borderradius}px` : '0')};
  border-color: ${(props) => props.bordercolor || 'transparent'};
  border-width: ${(props) => (props.borderwidth ? `${props.borderwidth}px` : '0')};
  width: ${(props) => (props.width ? `${props.width}px` : 'auto')};
  height: ${(props) => (props.height ? `${props.height}px` : 'auto')};
  justify-content: ${(props) => props.justify || 'flex-start'};
  align-items: ${(props) => props.align || 'stretch'};
  align-self: ${(props) => props.alignself || 'auto'};
  margin-left: ${(props) => (props.mleft ? `${props.mleft}px` : '0')};
  margin-right: ${(props) => (props.mright ? `${props.mright}px` : '0')};
  margin-top: ${(props) => (props.mtop ? `${props.mtop}px` : '0')};
  padding-top: ${(props) => (props.ptop ? `${props.ptop}px` : '0')};
  margin-bottom: ${(props) => (props.mbottom ? `${props.mbottom}px` : '0')};
  padding-bottom: ${(props) => (props.pbottom ? `${props.pbottom}px` : '0')};
  flex-direction: ${(props) => props.direction || 'column'};
  flex-wrap: ${(props) => props.wrap || 'nowrap'};
  padding-left: ${(props) => (props.pleft ? `${props.pleft}px` : '0')};
  padding-right: ${(props) => (props.pright ? `${props.pright}px` : '0')};
  position: ${(props) => props.position || 'relative'};
  top: ${(props) => (props.top ? `${props.top}px` : 'auto')};
  left: ${(props) => (props.left ? `${props.left}px` : 'auto')};
  right: ${(props) => (props.right ? `${props.right}px` : 'auto')};
  bottom: ${(props) => (props.bottom ? `${props.bottom}px` : 'auto')};
  z-index: ${(props) => (props.zindex ? `${props.zindex}` : 'auto')};
`;
