import styled from "@emotion/styled";
import React from 'react'
import ReactDOM from 'react-dom/client'

// @ts-ignore
const HotPinkContainer = styled.div`
    container-type: inline-size;
`;

// @ts-ignore
const StyledHotPink = styled.div`
    padding: 8px;
    border: 1px solid #000;
@container (min-width: 100 px) and (max-width: 299 px) {
    background-color: yellow;
} @container (min-width: 300 px) and (max-width: 399 px) {
    background-color: hotpink;
} @container (min-width: 400 px) {
    background-color: yellow;
}
`;

// @ts-ignore
const HotPink = ({children}) => {
    return (
        <HotPinkContainer>
            <StyledHotPink>{children}</StyledHotPink>
        </HotPinkContainer>
    );
};


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <HotPink>
        kjfashdlfashdölfjasdölkfjasöldkjfaölsdkhfölasdjfölafjdsöl
    </HotPink>
);

