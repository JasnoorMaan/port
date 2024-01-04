import React from 'react'
import styled from 'styled-components'

const CursorPointer = styled.div.attrs(props => ({
    style: {
        left: props.x,
        top: props.y,
    }
}))`
    background-color: white;
    position: fixed;
    border-radius: 100%;
    mix-blend-mode: difference;
    width: 64px;
    height: 64px;
    transform: translate(-50%, -50%);
    z-index:100;
`



export default CursorPointer