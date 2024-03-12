import styled from "@emotion/styled";
// @ts-ignore
import React from 'react'
// @ts-ignore
import ReactDOM from 'react-dom/client'

// @ts-ignore
const HotPinkContainer1 = styled.div`
    container-type: inline-size;
`;

// @ts-ignore
const StyledHotPink1 = styled.div`
    padding: 8px;
    border: 1px solid #000;
@container (min-width: 100px) and (max-width: 299px) {
    background-color: yellow;
} @container (min-width: 300px) and (max-width: 399px) {
    background-color: hotpink;
} @container (min-width: 400px) {
    background-color: red;
}
`;

// @ts-ignore
const HotPinkContainer2 = styled.div`
    container-type: inline-size;
`;

// @ts-ignore
const StyledHotPink2 = styled.div`
    padding: 8px;
    border: 1px solid #000;
    @container (min-width: 100px) {
        background-color: yellow;
    }
    @container (min-width: 300px) {
        background-color: hotpink;
    }
    @container (min-width: 400px) {
        background-color: red;
    }
`;

// @ts-ignore
const HotPink1 = ({children}) => {
    return (
        <div>
            <HotPinkContainer1>
                <StyledHotPink1>{children}</StyledHotPink1>
            </HotPinkContainer1>
        </div>
    );
};
// @ts-ignore
const HotPink2 = ({children}) => {
    return (
        <HotPinkContainer1>
            <StyledHotPink2>{children}</StyledHotPink2>
        </HotPinkContainer1>
    );
};


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
const changeWidthFn = (() => {
    const root = document.getElementById('root')
    if (root) {
        console.log('changing width...');
        const width = Math.floor(Math.random() * 500);
        root.style.width = `${width}px`;
        console.log(`Width: ${width}px`);
    }
})


root.render(
    <div>
        <button id="changeWidth" onClick={changeWidthFn}>Click me</button>
        <HotPink1>
            kjfashdlfashdölfjasdölkfjasöldkjfaölsdkhfölasdjfölafjdsöl
        </HotPink1>
        <HotPink2>
            kjfashdlfashdölfjasdölkfjasöldkjfaölsdkhfölasdjfölafjdsöl
        </HotPink2>
    </div>
);

